
const keys = {
    'envio gratis' : 'shipping.free_shipping',
    'envio full' : 'shipping.logistic_type',
    'bajo interes' : 'installments.rate',
}

const filter = (data, query) => {

    if (query.length < 1) return data;
    
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
            return item === filter.value;
        });
    })

    
    
    if (filtered.length > 1) {
        return filtered.reduce((acc, curr) => {
            return acc.filter(item => curr.includes(item));
        }, filtered[0]);
    }
    
    
    return filtered[0] ? filtered[0] : filtered;
}

export default filter;
