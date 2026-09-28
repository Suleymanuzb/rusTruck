import { create } from "zustand";
import { persist } from "zustand/middleware";

export const useFavouriteStore = create(
    persist(
        (set, get) => ({
            favourites: [],

            addToFavourites: (truckId) => {
                const { favourites } = get();
                const isExist = favourites.some(
                    (item) => item.id === truckId.id,
                );

                if (isExist) {
                    set({
                        favourites: favourites.filter(
                            (item) => item.id !== truckId.id,
                        ),
                    });
                } else {
                    set({
                        favourites: [...favourites, truckId],
                    });
                }
            },

            isFavourites: (e) => {
                return get().favourites.some((item) => item.id === e);
            },
        }),
        {
            name: "favourites-storage",
        },
    ),
);
