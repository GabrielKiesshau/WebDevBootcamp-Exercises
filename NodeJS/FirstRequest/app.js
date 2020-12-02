const axios = require('axios');

axios.get('https://jsonplaceholder.typicode.com/users/1')
    .then(res => console.log(res.data.name))
    .catch(err => console.log(err));
