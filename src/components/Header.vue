<template>
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
        <router-link class="navbar-brand" to="/">Vue shopping cart</router-link>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav mr-auto">
                <li class="nav-item active">
                    <router-link class="nav-link" to="/">
                        <i class="bi bi-house"></i> Home
                    </router-link>
                </li>
                <li class="nav-item active">
                    <router-link class="nav-link" to="/cart">
                        <i class="bi bi-cart-check"></i>
                        Cart ({{ data.countCartItems }})
                    </router-link>
                </li>
            </ul>
        </div>
    </nav>
</template>²

<script setup>
import { useCartStore } from '../stores/useCartStore'
const data = useCartStore();
</script>

<style scoped></style>