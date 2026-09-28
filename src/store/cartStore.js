import { create } from "zustand";
import { persist } from "zustand/middleware";

export const useCartStore = create(
    persist(
        (set) => ({
            cart: [],

            addToCart: (truckId) =>
                set((state) => ({
                    cart: [
                        ...state.cart,
                        {
                            id: truckId,
                            quantity: 1,
                        },
                    ],
                })),

            removeFromCart: (truckId) =>
                set((state) => ({
                    cart: state.cart.filter((item) => item.id != truckId),
                })),

            increaseQuantity: (truckId) =>
                set((state) => ({
                    cart: state.cart.map((item) => {
                        if (item.id === truckId) {
                            return {
                                ...item,
                                quantity: item.quantity + 1,
                            };
                        } else {
                            return item;
                        }
                    }),
                })),
        }),
        {
            name: "cart-storage",
        },
    ),
);
