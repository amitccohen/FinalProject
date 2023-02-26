import apiClient from "./ClientApi"

const register = async (userJson: any) => {
    return apiClient.post("auth/register", userJson)
} 

const login = async (userJson: any) => {
    return apiClient.post("auth/login", userJson)
}

const logout = async (userJson: any) => {
    return apiClient.post("auth/logout", userJson)
}


export default {
    register,
    login,
    logout,
}