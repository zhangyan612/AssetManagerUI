<template id="product">
  <div>
    <h2>{{ product.name }}</h2>
    <b>Description: </b>
    <div>{{ product.description }}</div>
    <b>Price:</b>
    <div>{{ product.price }}<span class="glyphicon glyphicon-euro"></span></div>
    <br/>
    <span class="glyphicon glyphicon-arrow-left" aria-hidden="true"></span>
    <router-link v-bind:to="'/'">Back to product list</router-link>
  </div>
</template>

<script>
export default {
  name: 'product',
  // template: '#product',
  // data: function () {
  //   return {product: findProduct(this.$route.params.product_id)};
  // }
  data: function() {
  	return{
  		products : [
		  {id: 1, name: 'Angular', description: 'Superheroic JavaScript MVW Framework.', price: 100},
		  {id: 2, name: 'Ember', description: 'A framework for creating ambitious web applications.', price: 100},
		  {id: 3, name: 'React', description: 'A JavaScript Library for building user interfaces.', price: 100}
		]
  	}
  }
}
</script>
