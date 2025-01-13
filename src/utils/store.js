import { create } from "zustand"

export const useFilterStore = create( (set) => ({
    filters: [],
    setFilters: (filter) => set({ filters: filter }),
    removeFilter: (filter) => {set({ filters: filter })}
}))