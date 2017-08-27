<template id="product-delete">
  <div>
    <h2>Delete product {{ product.name }}</h2>
    <form v-on:submit="deleteProduct">
      <p>The action cannot be undone.</p>
      <button type="submit" class="btn btn-danger">Delete</button>
      <router-link class="btn btn-default" v-bind:to="'/'">Cancel</router-link>
    </form>
  </div>
</template>


<script type="text/javascript">
// var ProductDelete = Vue.extend({
//   template: '#product-delete',
export default {
  name: 'product-delete',
  data: function () {
    return {product: findProduct(this.$route.params.product_id)};
  },
  methods: {
    deleteProduct: function () {
      products.splice(findProductKey(this.$route.params.product_id), 1);
      router.push('/');
    }
  }
};
//);

</script>