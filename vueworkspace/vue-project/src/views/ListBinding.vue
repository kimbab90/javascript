<template>
  <div>
    <button v-on:click="addData">+</button>
    <input type="number" v-model.lazy="no">
    <table>
      <thead>
        <tr>
          <th>제품명</th>
          <th>가격</th>
          <th>카테고리</th>
          <th>배송비</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(product, index) in products" v-bind:key="product.product_no">
          <td>
            {{ product.product_no }}
          </td>
          <td>
            {{ product.product_name }}
          </td>
          <td>
            {{ product.price }}
          </td>
          <td>
            {{ product.category }}
          </td>
          <td>
            {{ product.delivery_price }}
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
  let data = [{
      product_no: 1000,
      product_name: '키보드',
      price: 25000,
      category: '노트북/태블릿',
      delivery_price: 5000,
    },
    {
      product_no: 2000,
      product_name: '마우스',
      price: 12000,
      category: '노트북/태블릿',
      delivery_price: 3000,
    },
    {
      product_no: 3000,
      product_name: '스피커',
      price: 30000,
      category: '노트북/태블릿',
      delivery_price: 2000,
    },
    {
      product_no: 4000,
      product_name: '마우스패드',
      price: 5000,
      category: '노트북/태블릿',
      delivery_price: 1000,
    },
  ];
  export default {
    data() {
      return {
        products: data,
        no: 0,
      }
    },
    methods: {
      addData(event) {
          let obj = {
            product_no: this.products.length * 1000,
            product_name: '헤드셋',
            price: 130000,
            category: '노트북/태블릿',
            delivery_price: 1000,
          };

          this.products.push({
            product_no: this.products.length * 1000,
            product_name: '헤드셋',
            price: 130000,
            category: '노트북/태블릿',
            delivery_price: 1000,
          })

          // this.products[this.products.length] = obj;
        }
    },
    watch: {
      no() {
        this.products.splice(this.no, 1);
      }
    }
  };
</script>

<style scoped></style>