import { API_BACKEND } from './constants';
import { getToken } from './token';

class Api {

    constructor({headers, url}){
        this._headers = headers;
        this._url = url;
    }

    async _makeRequest(endpoint, method = 'GET', body = null){

        const options = {
            method,
            headers: { ...this._headers }
        };

        if(body){
            options.body = JSON.stringify(body);
        }

        const token = getToken();
        if(token){
            options.headers['Authorization'] = `Bearer ${token}`;
        }

        try {

            const res = await fetch(`${this._url}${endpoint}`, options);
            if(!res.ok){
                const error = new Error(`Error: ${res.status}: ${res.statusText || 'Ocurrió un error'}`);
                error.statusCode = res.status;
                throw error;
            }

            return await res.json();

        }catch(error){
            console.error(`Error en signup: ${error.message}`);
            throw error;
        }

    }

    async getUser(){
        return await this._makeRequest('/users/me');
    }

    async updateUser({name,email,password}){
        return await this._makeRequest('/users/me', 'PATCH', {name,email,password});
    }

    async getTasks(){
        return await this._makeRequest('/tasks');
    }

    async createTask(data){
        return await this._makeRequest('/tasks', 'POST', data);
    }

    async updateTask(id, data){
        return await this._makeRequest(`/tasks/${id}`, 'PUT', data);
    }

    async deleteTask(id){
        return await this._makeRequest(`/tasks/${id}`, 'DELETE');
    }

    async signin(data){
        return await this._makeRequest('/signin', 'POST', data);
    }

    async signup(data){
        return await this._makeRequest('/signup', 'POST', data);
    }

}

const api = new Api({
    headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
    },
    url: API_BACKEND
});

export default api;