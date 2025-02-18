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

    getUser(){
        return this._makeRequest('/users/me');
    }

    updateUser({name,email,password}){
        return this._makeRequest('/users/me', 'PATCH', {name,email,password});
    }

    getTasks(){
        return this._makeRequest('/tasks');
    }

    createTask(data){
        return this._makeRequest('/tasks', 'POST', data);
    }

    updateTask(id, data){
        return this._makeRequest(`/tasks/${id}`, 'PUT', data);
    }

    deleteTask(id){
        return this._makeRequest(`/tasks/${id}`, 'DELETE');
    }

}

const api = new Api({
    headers: {
        'Content-Type': 'application/json'
    },
    url: API_BACKEND
});

export default api;