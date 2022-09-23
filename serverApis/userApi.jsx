/* eslint-disable @typescript-eslint/no-unused-vars */

// import { store } from "..//store";
import { AxiosAPI, client } from "./base";
export const fetchUsers = async () => {
    try {
        const res = await AxiosAPI.get(
            `${process.env.REACT_APP_API_URL}auth/`
        );
        return res;
    } catch (err) {
        return new Promise((resolve, reject) => {
            reject(err);
        });
    }
};

export const fetchFollowers = async ({
    queryKey,
}) => {
    try {
        const [_, id] = queryKey;

        const res = await AxiosAPI.get(
            `${process.env.REACT_APP_API_URL}auth/${id}/followers`
        );
        return res.data;
    } catch (err) { }
};

export const fetchSingleUser = async ({
    queryKey,
}) => {
    const [_, id] = queryKey;
    try {
        const res = await client.get(`/auth/${id}`);
        return res.data;
    } catch (err) {
        return new Promise((resolve, reject) => {
            reject(err);
        });
    }
};

export const followUser = async ({ queryKey }) => {
    const [_, id] = queryKey;
    try {
        const res = await AxiosAPI.get(
            `${process.env.REACT_APP_API_URL}auth/${id}/follow`
        );

        return res.data;
    } catch (err) {
        return new Promise((resolve, reject) => {
            reject(err);
            alert(err);
        });
    }
};

export const unfollowUser = async ({
    queryKey,
}) => {
    const [_, id] = queryKey;
    try {
        const res = await AxiosAPI.get(
            `${process.env.REACT_APP_API_URL}auth/${id}/unfollow`
        );

        return res.data;
    } catch (err) {
        return new Promise((resolve, reject) => {
            reject(err);
            alert(err);
        });
    }
};

export const registerUser = async (data) => {
    return await client.post("/auth", data, {
        headers: {
            "Content-Type": "application/form-data",
        },
    });
};

export const loginUser = async (data) => {
    try {
        const res = await client.post("auth/login", data, {});
        return res.data;
    } catch (err) {
        return err;
    }
};

export const searchUsers = async ({
    queryKey,
}) => {
    const [_, query] = queryKey;

    try {
        const res = await client.get(`/auth/search/${query}`);
        return res;
    } catch (err) {
        return new Promise((resolve, reject) => {
            reject(err);
            console.log(err);
        });
    }
};

export const editUser = async (data) => {
    // const userID = store.getState().user.currentUser._id;
    try {
        const res = await AxiosAPI.put(
            `${process.env.REACT_APP_API_URL}auth/${userID}/edit`,
            data,
            {
                headers: {
                    "Content-Type": "application/form-data",
                },
            }
        );
        return res.data;
    } catch (err) {
        return new Promise((resolve, reject) => {
            reject(err);
        });
    }
};