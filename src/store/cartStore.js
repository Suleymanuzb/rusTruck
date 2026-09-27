import { create } from "zustand";
import { persist } from "zustand/middleware";

export const useCartStore = create(
    persist(
        (set) => ({
            cart: [],

            addToCart: (truckId) =>
                set((state) => ({
                    cart: [...state.cart, truckId],
                })),

            removeFromCart: (truckId) =>
                set((state) => ({
                    cart: state.cart.filter((id) => id != truckId),
                })),
        }),
        {
            name: "cart-storage",
        },
    ),
);
