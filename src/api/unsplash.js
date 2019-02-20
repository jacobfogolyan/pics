import axios from 'axios';

export default axios.create({
    baseURL: "https://api.unsplash.com",
    headers: {
        Authorization: "Client-ID 47edb515c9f5a6cbdfdcabdeaa4e826ddb0fc6ca8132c66f3a2e7c2135c79fce"
    }
});