<template>
  <div class="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
    <div class="mx-auto max-w-lg text-center">
      <h1 class="text-2xl font-bold sm:text-3xl"> {{ this.id? "Update" : "Add" }} a product</h1>
  
      <p class="mt-4 text-gray-500">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Et libero nulla eaque error neque
        ipsa culpa autem, at itaque nostrum!
      </p>
    </div>
  
    <form action="#" @submit.prevent="this.id?HandleUpdateProduct():HandleAddProduct()" class="mx-auto mb-0 mt-8 max-w-md space-y-4">
      <div>
        <label for="title" class="sr-only">Title</label>
  
        <div class="relative">
          <input
            v-model.lazy.trim="title"
            type="text"
            class="w-full rounded-lg border-gray-200 p-4 text-sm shadow-sm"
            placeholder="Enter title"
          />
        </div>
      </div>
  
      <div>
        <label for="price">Price</label>
  
        <div class="relative">
          <input
            v-model.lazy.trim="price"
            type="number"
            class="w-full rounded-lg border-gray-200 p-4  text-sm shadow-sm"
            placeholder="Enter price"
          />
  
        </div>
      </div>

      <div>
        <label for="qty">Quantity</label>
  
        <div class="relative">
          <input
            v-model.lazy.trim="qty"
            type="number"
            class="w-full rounded-lg border-gray-200 p-4  text-sm shadow-sm"
            placeholder="Enter qty"
          />
  
        </div>
      </div>

  
      <div class="flex items-center justify-between">
        <button
          type="submit"
          class="inline-block rounded-lg bg-blue-500 px-5 py-3 text-sm font-medium text-white"
        >
        {{ this.id? "Update" : "Add" }}
        </button>
      </div>
    </form>
  </div>
</template>

<script>
import ProductsOperations from '../../../public/Mixins/ProductsOperations';

  export default {
    data(){
      return {
        product: {},
        id:'',
        title: '', 
        price: 0,
        qty: 0,
        productId: 50,
      }
    },
    mixins: [ProductsOperations],
    created() {
      this.id = this.$route.params.id;
      if (this.id) {
        this.product = this.GetProductById(this.id).then((res) => {
          this.product = res;
          this.title = res.title;
          this.price = res.price;
          this.qty = res.stock;
        });
      }
    },
    methods: {
      async HandleAddProduct() {
          try {
            await this.AddProduct(this.title, this.price,this.qty);
          } catch (error) {
            console.log(error);
          }
      },
      async HandleUpdateProduct() {
        this.product.title = this.title;
        this.product.stock = this.qty;
        this.product.price = this.price;
          try {
            await this.UpdateProduct(this.product.id, this.product);
          } catch (error) {
            console.log(error);
          }
      }
    }

  }
</script>

<style lang="scss" scoped>

</style>