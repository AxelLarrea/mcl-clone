import { create } from "zustand"

export const useFilterStore = create( (set) => ({
    viewFilters: {
        fullShipping: false,
        freeShipping: false,
        lowInterest: false,
        internationalDelivery: false,
    },
    toggleFilter: (filters) => set({ viewFilters: filters }),

    order: undefined,
    setOrder: (order) => set({ order: order }),

    filters: [],
    setFilters: (filter) => set({ filters: filter }),
    removeFilter: (type) => {
        set( (state) => ({ filters : state.filters.filter((f) => f.type !== type) }))
    }
}))