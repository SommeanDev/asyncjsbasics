import querystring from 'node:querystring';

// API source - https://data.gov.in/resource/all-india-pincode-directory
const baseUrl = 'https://api.data.gov.in/resource/6176ee09-3d56-4a3b-8115-21841576b2f6'
const createRequestUrl = (offset, limit) => {
    const parameters = {
        'api-key': '579b464db66ec23bdd000001cdd3946e44ce4aad7209ff7b23ac571b',
        format: 'json',
        limit,
        offset,
    }
    return baseUrl + '?' + querystring.stringify(parameters);
}


const response = await fetch(createRequestUrl(0,10));
const {total, count, limit, offset, records } = await response.json();
console.log('data available');
console.log('total', total);
console.log('count', count);
console.log('limit', limit);
console.log('offset', offset);
console.log('records:\n', records);

const response2 = await fetch(createRequestUrl(11,10000));
const {
    total: total2, 
    count: count2, 
    limit: limit2, 
    offset: offset2, 
    records: records2,
} = await response2.json();
console.log('data2 available');
console.log('total', total2);
console.log('count', count2);
console.log('limit', limit);
console.log('offset', offset2);

console.log('records2:\n', records2);

console.log('script microtask execution complete.');