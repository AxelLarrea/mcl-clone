import { create } from "zustand"

export const useFilterStore = create( (set) => ({
    // previous query
    prevQuery: '',
    setPrevQuery: (query) => set({ prevQuery: query }),

    
    // page number
    page: 1,
    setPage: (page) => set({ page: page }),


    // page range
    pageRange: [0, 10],
    setPageRange: (range) => set({ pageRange: range }),


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