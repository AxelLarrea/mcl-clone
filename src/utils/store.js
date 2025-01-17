import { create } from "zustand"

export const useFilterStore = create( (set) => ({
    // sort order
    order: undefined,
    setOrder: (order) => set({ order: order }),
    
    // toggle filters
    filters: [],
    setFilters: (filter) => set({ filters: filter }),
    removeFilter: (type) => {
        set( (state) => ({ filters : state.filters.filter((f) => f.type !== type) }))
    },

    // view available toggle filters
    viewFilters: {
        fullShipping: false,
        freeShipping: false,
        lowInterest: false,
        internationalDelivery: false,
    },
    setViewFilter: (filters) => set({ viewFilters: filters }),

    // price range filter
    priceRange: undefined,
    setPriceRange: (price) => set({ priceRange: price })
}))