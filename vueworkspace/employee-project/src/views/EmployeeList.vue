<template>
<table class="table table-hover text-center">
    <caption>Total : {{ count }}</caption>
    <thead>
        <tr>
            <th>순번</th>
            <th>아이디</th>
            <th>이름</th>
            <th>성</th>
            <th>이메일</th>
            <th>성별</th>
            <th>IP주소</th>
        </tr>
    </thead>
    <tbody>
        <template v-if="count > 0">
            <tr v-for="(employee, index) in employeeList" v-bind:key="employee.id" @click="goToInfo(employee.id)">
                <td>{{ index + 1 }}</td>
                <td>{{ employee.id }}</td>
                <td>{{ employee.first_name}}</td>
                <td>{{ employee.last_name }}</td>
                <td>{{ employee.email }}</td>
                <td>{{ employee.gender }}</td>
                <td>{{ employee.ip_address }}</td>
            </tr>
        </template>
        <tr v-else>
            <td colspan="7">표시할 내용이 없음</td>
        </tr>
    </tbody>
</table>


</template>
<script>
    import axios from 'axios';

    export default {
        data() {
           return {
            employeeList: [],
           }
        },
        methods: {
            async getEmployeeList() {
                let res = await axios.get('/api/emp')
                .catch(err => console.log(err));
                let data = res.data;
                this.employeeList = data;
            },
            goToInfo(id) {
                this.$router.push({name: "info", query: {id: id}})
            }
        },
        computed: {
            count() {
                return this.employeeList.length;
            }
        },
        created() {
            this.getEmployeeList();
        },
    }
</script>

<style scoped>
</style>