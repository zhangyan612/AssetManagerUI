<template>
  <div class="animated fadeIn">
    My Dashboard
  </div>



</template>





<script>
import addproduct from './Products/add-product'
// import productdelete from './Products/product-delete'
// import productedit from './Product/product-edit'
// import productlist from './Product/product-list'
// import product from './Product/product'

export default {
  name: 'dashboard',
  components: {
    addproduct
  }
}
</script>


<!-- 
<script>
var products = [
  {id: 1, name: 'Angular', description: 'Superheroic JavaScript MVW Framework.', price: 100},
  {id: 2, name: 'Ember', description: 'A framework for creating ambitious web applications.', price: 100},
  {id: 3, name: 'React', description: 'A JavaScript Library for building user interfaces.', price: 100}
];

function findProduct (productId) {
  return products[findProductKey(productId)];
};

function findProductKey (productId) {
  for (var key = 0; key < products.length; key++) {
    if (products[key].id == productId) {
      return key;
    }
  }
};

var Product = Vue.extend({
  template: '#product',
  data: function () {
    return {product: findProduct(this.$route.params.product_id)};
  }
});

</script>
 -->