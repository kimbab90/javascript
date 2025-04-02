<template>
<div class="container">
    <div class="row">
        <div class="row">
            <div class="col-3">
                아이디
            </div>
            <div class="col-3">
                {{ employeeInfo.id}}
            </div>
            <div class="col-3">
                이름
            </div>
            <div class="col-3">
                {{ employeeInfo.first_name }}
            </div>
        </div>
        <div class="row">
            <div class="col-3">
                성
            </div>
            <div class="col-3">
                {{ employeeInfo.last_name }}
            </div>
            <div class="col-3">
                이메일
            </div>
            <div class="col-3">
                {{ employeeInfo.email }}
            </div>
        </div>
        <div class="row">
            <div class="col-3">
                성별
            </div>
            <div class="col-3">
                {{ employeeInfo.gender }}
            </div>
            <div class="col-3">
                 IP
            </div>
            <div class="col-3">
                {{ employeeInfo.ip_address }}
            </div>
        </div>
        <div class="row">
            <button class="col btn btn-primary" @click="goToList">목록</button>
            <button class="col btn btn-warning" @click="goToModify">수정</button>
            <button class="col btn btn-danger" @click="removeEmployee">삭제</button>
        </div>
    </div>
</div>
</template>

<script>
    import axios from 'axios';

    export default {
        data() {
            return {
                employeeInfo: {
                    id: null,
                    first_name: null,
                    last_name: null,
                    email: null,
                    gender: null,
                    ip_address: null
                }
            }
        },
        methods: {
            async getEmployeeInfo(id) {
                let res = await axios.get(`/api/emp/${id}`)
                .catch(err => console.log(err));
                let info = res.data;
                this.employeeInfo = info;
            },
            goToList() {
                this.$router.push('/list');
            },
            goToModify() {
                this.$router.push({name: 'update', params: {id: this.employeeInfo.id }});
            },
            async removeEmployee() {
                let res = await axios.delete(`/api/emp/${this.employeeInfo.id}`)
                .catch(err => console.log(err));
                let data = res.data;
                let affectedRows = data.affectedRows;
                if (affectedRows > 0) {
                    alert('삭제 성공');
                    this.$router.push('/list');
                } else {
                    alert('삭제 실패');
                }
            }
        },
        created() {
            const selected = this.$route.query.id;
            this.getEmployeeInfo(selected);
        }
    }
</script>

<style scoped>
</style>