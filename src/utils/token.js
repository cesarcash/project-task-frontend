const TOKEN_JWT = 'jwt';

export const setToken = (token) => localStorage.setItem(TOKEN_JWT, token);
export const getToken = () => localStorage.getItem(TOKEN_JWT);
export const removeToken = () => localStorage.removeItem(TOKEN_JWT);