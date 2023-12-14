import { defineStore } from 'pinia'
import { useToast } from "vue-toastification";

const toast = useToast();

export const useCartStore = defineStore('cart', {
    state: () => ({
        products: [
            {
                id: 1,
                name: 'Apple Iphone 15 pro',
                price: 1500,
                image: 'https://mediazone.ma/uploads/images/products/14627/14627-YXU3SZoo.webp',
            },
            {
                id: 2,
                name: 'Acer Predator Helios 18 - 2023',
                price: 380,
                image: 'https://mediazone.ma/uploads/images/products/14806/14806-Lg9eOIDQ.webp',
            },
            {
                id: 3,
                name: 'Dell XPS 15 9520',
                price: 750,
                image: 'https://mediazone.ma/uploads/images/products/12905/12905-AHB4TbWF.webp',
            },
            {
                id: 4,
                name: '0Console Sony PlayStation 5',
                price: 620,
                image: 'https://mediazone.ma/uploads/images/products/11042/11042-qlwpC7S3.webp',
            }
        ],
        cartItems: [],
    }),
    getters: {
        countCartItems(state) {
            return state.cartItems.length;
        },
        totalPrice(state) {
            return state.cartItems.length ? state.cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0) : 0;
        },
    },
    actions: {
        addToCart(item) {
            let index = this.cartItems.findIndex(product => product.id === item.id);
            if (index !== -1) {
                this.cartItems[index].quantity += 1;
                toast.success("Your item has been updated", {
                    timeout: 2000
                });
            } else {
                item.quantity = 1;
                this.cartItems.push(item);
                toast.success("Your item has been saved", {
                    timeout: 2000
                });
            }
        },
        minusQuantity(item) {
            let index = this.cartItems.findIndex(product => product.id === item.id);
            if (index !== -1) {
                if (this.cartItems[index].quantity > 1) {
                    this.cartItems[index].quantity -= 1;
                    toast.success("Your item has been updated", {
                        timeout: 2000
                    });
                }
            }
        },
        plusQuantity(item) {
            let index = this.cartItems.findIndex(product => product.id === item.id);
            if (index !== -1) {
                this.cartItems[index].quantity += 1;
                toast.success("Your item has been updated", {
                    timeout: 2000
                });
            }
        },
        removeFromCart(item) {
            let index = this.cartItems.findIndex(product => product.id === item.id);
            if (index !== -1) {
                this.cartItems.splice(index, 1);
                toast.success("Your cart has been updated", {
                    timeout: 2000
                });
            }
        },
    },
})