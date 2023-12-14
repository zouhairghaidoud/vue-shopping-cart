<template>
    <div class="col-md-6 col-lg-3 mb-2">
        <div class="card h-100">
            <img :src="product.image" :alt="product.name" class="card-img-top">
            <div class="card-body">
                <h3 class="card-title">{{ product.name }}</h3>
                <p class="badge bg-danger">
                    {{ product.price }}$
                </p>
                <p class="card-text">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae, cumque.
                </p>
                <button @click="data.addToCart(product)" class="btn btn-primary">
                    <i class="bi bi-cart-check"></i>
                    Add to cart
                </button>
            </div>
        </div>
    </div>
</template>

<script setup>
import { useCartStore } from '../stores/useCartStore'
const data = useCartStore();

const props = defineProps({
    product: {
        type: Object,
        required: true,
    }
});
</script>

<style></style>