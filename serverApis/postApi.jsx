/* eslint-disable @typescript-eslint/no-unused-vars */
import { AxiosAPI } from "./base";

//  Post Requests for client-side

export async function fetchPosts() {
    try {
        const res = await AxiosAPI.get(
            'https://react-backend-part.herokuapp.com/posts'
        );
        return res.data;
    } catch (err) {
        return err;
    }
}

export async function addPost(data) {
    return await AxiosAPI.post(`${process.env.REACT_APP_API_URL}posts`, data, {
        headers: {
            "Content-Type": "multipart/form-data",
        },
    });
}

export async function deletePost(id) {
    try {
        const res = await AxiosAPI.delete(
            `${process.env.REACT_APP_API_URL}posts/${id}`,
            {}
        );
        return res;
    } catch (err) {
        return new Promise((resolve, reject) => {
            Promise.reject(err);
        });
    }
}

export async function likePost(id) {
    try {
        await AxiosAPI.patch(`${process.env.REACT_APP_API_URL}posts/like`, {
            id: id,
        });
    } catch (err) {
        return Promise.reject(err);
    }
}

export async function unlikePost(id) {
    try {
        await AxiosAPI.patch(`${process.env.REACT_APP_API_URL}posts/unlike`, {
            id: id,
        });
    } catch (err) {
        return Promise.reject(err);
    }
}

export async function addComment(data) {
    try {
        await AxiosAPI.post(`${process.env.REACT_APP_API_URL}comment`, data);
    } catch (err) {
        return new Promise((resolve, reject) => {
            reject(err);
        });
    }
}

export async function fetchComments({
    queryKey,
}) {
    try {
        const [_, id] = queryKey;
        //
        const res = await AxiosAPI.get(
            `${process.env.REACT_APP_API_URL}comment/${id}`
        );
        return res.data;
    } catch (err) {
        return new Promise((resolve, reject) => {
            reject(err);
        });
    }
}
export async function deleteComment(id) {
    try {
        const res = await AxiosAPI.delete(
            `${process.env.REACT_APP_API_URL}comment/${id}/delete`,
            {}
        );
        return res;
    } catch (err) {
        return new Promise((resolve, reject) => {
            Promise.reject(err);
        });
    }
}