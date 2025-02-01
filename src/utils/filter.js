import { priceRangeFilter } from "./priceRangeFilter";

const keys = {
    'envio gratis' : 'shipping.free_shipping',
    'envio full' : 'shipping.logistic_type',
    'bajo interes' : 'installments.rate',
    'internacional' : 'address.state_id'
}

const filter = (data, query, priceRange) => {

    if (query.length < 1) return priceRangeFilter(data, priceRange);
    
    const filtered = query.map( (filter) => {
        const key = keys[filter.type];
        const sub_keys = key.split('.');
    
        return data.filter((item) => {
            for (const key of sub_keys) {
                if (item[key] === undefined) {
                    return false;
                }
                item = item[key];
            }
            
            if (filter.type === 'bajo interes') return item < filter.value;
            if (filter.type === 'internacional') return item.includes(filter.value)
            return item === filter.value;
        });
    })
    
    if (filtered.length > 1) {
        return priceRangeFilter(filtered.reduce((acc, curr) => {
            return acc.filter(item => curr.includes(item));
        }, filtered[0]), priceRange)
    }
    
    return filtered[0] ? priceRangeFilter(filtered[0], priceRange) : priceRangeFilter(filtered, priceRange);
}

export default filter;
