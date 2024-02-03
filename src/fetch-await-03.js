import querystring from 'node:querystring';

// API source - https://data.gov.in/resource/all-india-pincode-directory
const baseUrl = 'https://api.data.gov.in/resource/6176ee09-3d56-4a3b-8115-21841576b2f6'
const createRequestUrl = (offset) => {
    const parameters = {
        'api-key': '579b464db66ec23bdd000001cdd3946e44ce4aad7209ff7b23ac571b',
        format: 'json',
        limit: 10,
        offset,
    }
    return baseUrl + '?' + querystring.stringify(parameters);
}


const fetchData = async (offset2) => {
    const response = await fetch(createRequestUrl(offset2));
    const {total, count, limit, offset, records } = await response.json();
    console.log('data available');
    console.log('total', total);
    console.log('count', count);
    console.log('limit', limit);
    console.log('offset', offset);
    return records;
};

const iterationCount = 4;
const promisesArray = [];
for (let index = 0; index < iterationCount; index++) {
    const promise = fetchData(index * 10 + 1 );
    promisesArray.push(promise);
}

const dataArray = await Promise.all(promisesArray);
console.log('data count:', dataArray.length);
console.log(dataArray);
console.log('script microtask execution complete.');