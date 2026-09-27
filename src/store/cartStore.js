import { create } from "zustand";

export const useCartStore = create((set) => ({
    cart: [],

    addToCart: (truckId) =>
        set((state) => ({
            cart: [...state.cart, truckId],
        })),
}));
