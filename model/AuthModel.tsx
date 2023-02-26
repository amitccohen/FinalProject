import AuthApi from "../api/AuthApi";
import apiClient from "../api/ClientApi";

export type User = {
    email: String,
    password: String,
}

export type Token = {
    refreshtoken: string,
}

type UserInfo = {
    accessToken: string;
    refreshToken: string;
    id: string;
};

const register = async (user: User) => {
    const data = {
        email: user.email,
        password: user.password,
    }
    try {
        const res = await AuthApi.register(data)
        console.log('success signup authmodel')
    } catch (err) {
        console.log("register failed: " + err)
    }
}

const login = async (user: User): Promise<string | UserInfo | any> => {
    const d = {
      email: user.email,
      password: user.password,
    };
    try {
      const res = await AuthApi.login(d);
      const data: UserInfo | any = res.data;
      if (typeof data.id === 'undefined') {
        console.log('data err');
        return data.id as string;
      } else {
        const { accessToken, id, refreshToken } = data;
        const userRes = [accessToken, id, refreshToken];
        console.log('good data');
        return userRes;
      }
    } catch (err) {
      console.log('login failed:', err);
      throw err;
    }
  };

  const logout = async (token: Token) => {
    const data = {
        token: token.refreshtoken
    }
    try {
        const res = await AuthApi.logout(data)
        console.log('success logout authmodel')
    } catch (err) {
        console.log("logout failed: " + err)
    }
}

export default {register, login, logout}