
const keys = {
    'envio gratis' : 'shipping.free_shipping',
    'envio full' : 'shipping.logistic_type',
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
            return item === filter.value;
        });
    })
    
    if (filtered.length > 1) {
        return filtered[0].filter( item => filtered[1].includes(item))
    }
    
    return filtered[0] ? filtered[0] : filtered
    
   
}

export default filter;
