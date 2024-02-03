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
    const { records } = await response.json();
    return records;
};

const iterationCount = 4;
const promisesArray = [];
for (let index = 0; index < iterationCount; index++) {
    const promise = fetchData(index * 10 + 1 );
    promisesArray.push(promise);
}

const dataArray = await Promise.all(promisesArray);

// array map feature
dataArray.forEach((item, index) => {
    console.log('iteration:', index);
    console.log('length:', item.length);
});

const resultArray = dataArray.map((item) => {
    return item.map((record) => {
        return {
            officename: record.officename,
            pincode: record.pincode,
        };
    });
});
console.log(resultArray);
