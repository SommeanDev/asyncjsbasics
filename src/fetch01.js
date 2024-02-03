import querystring from 'node:querystring';

// API source - https://data.gov.in/resource/all-india-pincode-directory
const baseUrl = 'https://api.data.gov.in/resource/6176ee09-3d56-4a3b-8115-21841576b2f6'
const parameters = {
    'api-key': '579b464db66ec23bdd000001cdd3946e44ce4aad7209ff7b23ac571b',
    format: 'json',
}
const url = baseUrl + '?' + querystring.stringify(parameters);

console.log(url);

const responsePromise = fetch(url);
const dataPromise = responsePromise.then((response) => {
    return response.json();
});
dataPromise.then((data) => {
    console.log('data available');
    console.log(data);
});

console.log('script microtask execution complete.');