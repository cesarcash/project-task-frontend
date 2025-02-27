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
            console.error(`Error en ${method} ${endpoint}: ${error.message}`);
            throw error;
        }

    }

    // async getUser(){
    //     return this._makeRequest('/users/me');
    // }

    async getUserInfo(){
        return this._makeRequest('/users/me');
    }

    async updateUser({name,email,password}){
        return this._makeRequest('/users/me', 'PUT', {name,email,password});
    }

    async getTasks(){
        return this._makeRequest('/tasks');
    }

    async createTask(data){
        return this._makeRequest('/tasks', 'POST', data);
    }

    async updateTaskStatus(id, {status}){
        console.log("🚀 ~ Api ~ updateTaskStatus ~ status:", status)
        console.log("🚀 ~ Api ~ updateTaskStatus ~ id:", id)
        return this._makeRequest(`/tasks/${id}`, 'PATCH', {status});
    }

    async deleteTask(id){
        return this._makeRequest(`/tasks/${id}`, 'DELETE');
    }

    async signin(data){
        return this._makeRequest('/signin', 'POST', data);
    }

    async signup(data){
        return this._makeRequest('/signup', 'POST', data);
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