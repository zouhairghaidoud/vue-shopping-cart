import { defineStore } from 'pinia'


export const useCartStore = defineStore('cart', {
    state: () => ({
        products: [
            {
                id: 1,
                name: 'Apple Iphone 15 pro',
                price: 4000,
                image: 'https://mediazone.ma/uploads/images/products/14627/14627-YXU3SZoo.webp',
            },
            {
                id: 2,
                name: 'Acer Predator Helios 18 - 2023',
                price: 5000,
                image: 'https://mediazone.ma/uploads/images/products/14806/14806-Lg9eOIDQ.webp',
            },
            {
                id: 3,
                name: 'Dell XPS 15 9520',
                price: 6000,
                image: 'https://mediazone.ma/uploads/images/products/12905/12905-AHB4TbWF.webp',
            },
            {
                id: 4,
                name: 'Console Sony PlayStation 5',
                price: 7000,
                image: 'https://mediazone.ma/uploads/images/products/11042/11042-qlwpC7S3.webp',
            }
        ],
    }),
    getters: {

    },
    actions: {

    },
})