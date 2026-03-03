import axios from "axios"
import config from "@/config/config"

export async function login({ email, password }) {
    const response = await axios.post(`${config.apiUrl}/api/auth/login`, { email, password });
    return response.data;
}

// Update this function to include 'roles' in the destructuring
export async function signUp({ city, province, name, email, phone, password, roles }) {
    const response = await axios.post(`${config.apiUrl}/api/auth/register`, {
        name,
        email,
        phone,
        password,
        // If roles is passed (like ["MERCHANT"]), use it. Otherwise, default to ["USER"]
        roles: roles || ["USER"], 
        address: {
            city,
            province,
        },
    });
    return response.data;
}