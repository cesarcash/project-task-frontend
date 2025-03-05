import { API_BACKEND } from './constants';
import { getToken } from './token';
import ApiError from './ApiError';

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
                const errorData = await res.json();
                throw new ApiError(errorData.message || "Ocurrión un error inesperado", res.status);
            }

            return await res.json();

        }catch(error){
            console.log("🚀 ~ Api ~ _makeRequest ~ error:", error)
            throw error;
        }

    }

    async getUserInfo(){
        return this._makeRequest('/users/me');
    }

    async updateUser({name,avatar,password}){
        return this._makeRequest('/users/me', 'PUT', {name,avatar,password});
    }

    async getTasks(){
        return this._makeRequest('/tasks');
    }

    async createTask(data){
        return this._makeRequest('/tasks', 'POST', data);
    }

    async updateTaskStatus(id, {status}){
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