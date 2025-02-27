import { API_URL } from "./constants";

class Api {

    constructor({ url, headers }){
        this._url = url;
        this._headers = headers;
    }

    async __makeRequest(endpoint, method = 'GET', body = null){

        try{

            const options = {
                method,
                headers: {...this._headers}
            }

            if(body){
                options.body = JSON.stringify(body);
            }

            const res = await fetch(`${this._url}${endpoint}`,options);
            if(!res.ok) throw new Error(`Server error: ${res.status}`);
            return await res.json();

        }catch(err){
            console.error(`API error ${err}`);
            throw err;
        }

    }

    async getQuotes(num){
        return this.__makeRequest(`quotes/random?limit=${num}`);
    }

    async getQuote(){
        return this.__makeRequest('quotes/random?limit=1')
    }

}

const api = new Api({ 
    url: API_URL,
    headers: {'Content-Type': 'application/json'}
});

export default api;