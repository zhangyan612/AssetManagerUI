<template>
  <div class="animated fadeIn">
    <b-card>
      <div class="row">
        <div class="col-sm-5">
          <h4 class="card-title mb-0">My Portfolio</h4>
        </div><!--/.col-->
        <div class="col-sm-7 hidden-sm-down">
          <b-button type="button" variant="primary" class="float-right"><i class="icon-cloud-download"></i></b-button>
          <b-button-toolbar class="float-right" aria-label="Toolbar with button groups">
            <b-button-group class="mr-3" aria-label="First group">
              <b-button variant="outline-secondary">Day</b-button>
              <b-button variant="outline-secondary" :active="true">Month</b-button>
              <b-button variant="outline-secondary">Year</b-button>
            </b-button-group>
          </b-button-toolbar>
        </div><!--/.col-->
      </div><!--/.row-->
      <div class="row">
      	<legend style="margin-bottom:20px;"></legend>
	      <div class="col-sm-6 col-lg-4">
	      	<div class="small text-muted">Accounts</div>
	        <hr class="mt-2">
	        <ul class="icons-list">
	          <li>
	            <i class="icon-screen-desktop bg-primary"></i>
	            <div class="desc">
	              <div class="title">iMac 4k</div>
	              <small>Lorem ipsum dolor sit amet</small>
	            </div>
	            <div class="value">
	              <div class="small text-muted">Sold this week</div>
	              <strong>1.924</strong>
	            </div>
	            <div class="actions">
	              <button type="button" class="btn btn-link text-muted"><i class="icon-settings"></i></button>
	            </div>
	          </li>
	          <li>
	            <i class="icon-screen-smartphone bg-info"></i>
	            <div class="desc">
	              <div class="title">Samsung Galaxy Edge</div>
	              <small>Lorem ipsum dolor sit amet</small>
	            </div>
	            <div class="value">
	              <div class="small text-muted">Sold this week</div>
	              <strong>1.224</strong>
	            </div>
	            <div class="actions">
	              <button type="button" class="btn btn-link text-muted"><i class="icon-settings"></i></button>
	            </div>
	          </li>
	          <li>
	            <i class="icon-screen-smartphone bg-warning"></i>
	            <div class="desc">
	              <div class="title">iPhone 6S</div>
	              <small>Lorem ipsum dolor sit amet</small>
	            </div>
	            <div class="value">
	              <div class="small text-muted">Sold this week</div>
	              <strong>1.163</strong>
	            </div>
	            <div class="actions">
	              <button type="button" class="btn btn-link text-muted"><i class="icon-settings"></i></button>
	            </div>
	          </li>
	          <li>
	            <i class="icon-user bg-danger"></i>
	            <div class="desc">
	              <div class="title">Premium accounts</div>
	              <small>Lorem ipsum dolor sit amet</small>
	            </div>
	            <div class="value">
	              <div class="small text-muted">Sold this week</div>
	              <strong>928</strong>
	            </div>
	            <div class="actions">
	              <button type="button" class="btn btn-link text-muted"><i class="icon-settings"></i></button>
	            </div>
	          </li>
	          <li>
	            <i class="icon-social-spotify bg-success"></i>
	            <div class="desc">
	              <div class="title">Spotify Subscriptions</div>
	              <small>Lorem ipsum dolor sit amet</small>
	            </div>
	            <div class="value">
	              <div class="small text-muted">Sold this week</div>
	              <strong>893</strong>
	            </div>
	            <div class="actions">
	              <button type="button" class="btn btn-link text-muted"><i class="icon-settings"></i></button>
	            </div>
	          </li>
	          <li>
	            <i class="icon-cloud-download bg-danger"></i>
	            <div class="desc">
	              <div class="title">Ebook</div>
	              <small>Lorem ipsum dolor sit amet</small>
	            </div>
	            <div class="value">
	              <div class="small text-muted">Downloads</div>
	              <strong>121.924</strong>
	            </div>
	            <div class="actions">
	              <button type="button" class="btn btn-link text-muted"><i class="icon-settings"></i></button>
	            </div>
	          </li>
	          <li>
	            <i class="icon-camera bg-warning"></i>
	            <div class="desc">
	              <div class="title">Photos</div>
	              <small>Lorem ipsum dolor sit amet</small>
	            </div>
	            <div class="value">
	              <div class="small text-muted">Uploaded</div>
	              <strong>12.125</strong>
	            </div>
	            <div class="actions">
	              <button type="button" class="btn btn-link text-muted"><i class="icon-settings"></i></button>
	            </div>
	          </li>
	          <li class="divider text-center">
	            <button type="button" class="btn btn-sm btn-link text-muted"><i class="icon-options"></i></button>
	          </li>
	        </ul>
	      </div><!--/.col-->
	      <div class="col-sm-6 col-lg-8">
	      	<main-chart class="chart-wrapper" style="height:300px;margin-top:20px;" height="300"></main-chart>
	      </div>
	  </div>
      <div slot="footer">
        <ul>
          <li>
            <div class="text-muted">Total Return</div>
            <strong>29.703 Users (40%)</strong>
            <b-progress class="progress-xs mt-2" :precision="1" variant="success" :value="40"></b-progress>
          </li>
          <li class="hidden-sm-down">
            <div class="text-muted">Max Drawdown</div>
            <strong>24.093 Users (20%)</strong>
            <b-progress class="progress-xs mt-2" :precision="1" variant="info" :value="20"></b-progress>
          </li>
          <li>
            <div class="text-muted">Alpha</div>
            <strong>78.706 Views (60%)</strong>
            <b-progress class="progress-xs mt-2" :precision="1" variant="warning" :value="60"></b-progress>
          </li>
          <li class="hidden-sm-down">
            <div class="text-muted">Beta</div>
            <strong>22.123 Users (80%)</strong>
            <b-progress class="progress-xs mt-2" :precision="1" variant="danger" :value="80"></b-progress>
          </li>
          <li class="hidden-sm-down">
            <div class="text-muted">Sharp Ratio</div>
            <strong>40.15%</strong>
            <b-progress class="progress-xs mt-2" :precision="1" :value="40"></b-progress>
          </li>
        </ul>
      </div>
    </b-card>
  </div>
</template>





<script>
import addproduct from './Products/add-product'
// import productdelete from './Products/product-delete'
// import productedit from './Products/product-edit'
import productlist from './Products/product-list'
// import product from './Products/product'
import MainChart from './dashboard/MainChart'

export default {
  name: 'dashboard',
  components: {
    addproduct,
    productlist,
    MainChart
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

var List = Vue.extend({
  template: '#product-list',
  data: function () {
    return {products: products, searchKey: ''};
  },
  computed: {
    filteredProducts: function () {
      return this.products.filter(function (product) {
        return this.searchKey=='' || product.name.indexOf(this.searchKey) !== -1;
      },this);
    }
  }
});

var Product = Vue.extend({
  template: '#product',
  data: function () {
    return {product: findProduct(this.$route.params.product_id)};
  }
});

var ProductEdit = Vue.extend({
  template: '#product-edit',
  data: function () {
    return {product: findProduct(this.$route.params.product_id)};
  },
  methods: {
    updateProduct: function () {
      var product = this.product;
      products[findProductKey(product.id)] = {
        id: product.id,
        name: product.name,
        description: product.description,
        price: product.price
      };
      router.push('/');
    }
  }
});

var ProductDelete = Vue.extend({
  template: '#product-delete',
  data: function () {
    return {product: findProduct(this.$route.params.product_id)};
  },
  methods: {
    deleteProduct: function () {
      products.splice(findProductKey(this.$route.params.product_id), 1);
      router.push('/');
    }
  }
});

var AddProduct = Vue.extend({
  template: '#add-product',
  data: function () {
    return {product: {name: '', description: '', price: ''}}
  },
  methods: {
    createProduct: function() {
      var product = this.product;
      products.push({
        id: Math.random().toString().split('.')[1],
        name: product.name,
        description: product.description,
        price: product.price
      });
      router.push('/');
    }
  }
});
</script>
 -->