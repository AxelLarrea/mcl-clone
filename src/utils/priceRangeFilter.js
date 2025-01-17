
export const priceRangeFilter = (data, priceRange) => {

    if (priceRange?.min > 0 && priceRange?.max > 0) {
        return data.filter(item => item.price >= priceRange.min && item.price <= priceRange.max);
    }
    
    if (priceRange?.min > 0) {
        return data.filter(item => item.price >= priceRange.min);
    }

    if (priceRange?.max > 0) {
        return data.filter(item => item.price <= priceRange.max);
    }

    return data;
}