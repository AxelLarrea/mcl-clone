
const keys = {
    'envio gratis' : 'shipping.free_shipping',
    'envio full' : 'shipping.logistic_type',
}
const filter = (data, query, value) => {
    const key = keys[query];
    const sub_keys = key.split('.');

    return data.filter((item) => {
        for (const key of sub_keys) {
            if (item[key] === undefined) {
                return false;
            }
            item = item[key];
        }
        return item === value;
    });
}

export default filter;
