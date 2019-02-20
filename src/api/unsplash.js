import axios from 'axios';

//create instance of axios client with a couple of defaulted properties
export default axios.create({
    baseULR: 'https://api.unsplash.com/',
    headers: {
        Authorization: "Client-ID 47edb515c9f5a6cbdfdcabdeaa4e826ddb0fc6ca8132c66f3a2e7c2135c79fce"
    }
});