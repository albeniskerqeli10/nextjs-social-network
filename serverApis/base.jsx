// import { logoutUser } from "../redux/slices/userSlice";
import useStore from "../store/store"
import axios from "axios";
export const client = axios.create({
    baseURL: "https://react-backend-part.herokuapp.com/",
    headers: {
        "Access-Control-Allow-Origin": "*",
        "Content-Type": "application/json",
    },
});

export const AxiosAPI = axios.create({
    headers: {
        "Access-Control-Allow-Origin": "*",
        "Content-Type": "application/json",
        mode: "cors",
    },
});

AxiosAPI.interceptors.request.use(
    (config) => {

        const user = JSON.parse(localStorage.getItem("userDetails"));
        console.log({ user });
        config.headers = {
            Authorization: `Bearer ${user.accessToken}`,
        };
        return config;
    },
    (error) => {
        console.log(useStore.getState().currentUser);
    }
);

AxiosAPI.interceptors.response.use(
    (response) => response,
    async (error) => {
        if (error?.response?.status === 401) {
            useStore.getState().logoutUser({});
        }
    }
);

// const refreshToken = async () => {
//   try {
//     const token =  store.getState().user.currentUser.refreshToken;

//     const {data}:any =  await client.post("/auth/refresh", { token: token });
//     return data
//   } catch (err) {
//   }
// };