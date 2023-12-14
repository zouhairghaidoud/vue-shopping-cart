<template>
    <div class="card my-4 rounded">
        <div class="card-body">
            <h3 class="card-title">Cart</h3>
            <div class=" table-responsive">
                <table class="table">
                    <thead>
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">Image</th>
                            <th scope="col">Name</th>
                            <th scope="col">Price</th>
                            <th scope="col">Quantity</th>
                            <th scope="col">Subtotal</th>
                            <th scope="col">Remove</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="item in data.cartItems" :key="item.id">
                            <td>
                                {{ item.id }}
                            </td>
                            <td>
                                <img :src="item.image" :alt="item.name" width="60px">
                            </td>
                            <td>
                                {{ item.name }}
                            </td>
                            <td>
                                {{ item.price }}$
                            </td>
                            <td>
                                <div class="d-flex align-items-center">
                                    <!-- v-if="item.quantity > 1" -->
                                    <button @click="data.minusQuantity(item)" class="btn btn-warning">
                                        -
                                    </button>
                                    <div class="px-4">
                                        {{ item.quantity }}
                                    </div>
                                    <button @click="data.plusQuantity(item)" class="btn btn-warning">
                                        +
                                    </button>
                                </div>
                            </td>
                            <td>
                                {{ item.quantity * item.price }}$
                            </td>
                            <td>
                                <button @click="data.removeFromCart(item)" class="btn btn-danger btn-sm">
                                    <i class="bi bi-x-lg"></i>
                                </button>
                            </td>
                        </tr>
                    </tbody>
                </table>

                <h3>Total: {{ data.totalPrice }}$</h3>
                <h3>

                </h3>
            </div>
        </div>
    </div>
</template>

<script setup>
import { useCartStore } from '../stores/useCartStore'
const data = useCartStore();
</script>

<style></style>