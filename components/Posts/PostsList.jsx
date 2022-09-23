import { fetchPosts } from "../../serverApis/postApi"
import SuspenseWrapper from "../UI/SuspenseWrapper";
import { lazy, useState } from "react";
import { useQuery } from "@tanstack/react-query";

const PostsList = ({ children }) => {
    // const [posts, setPosts] = useState([]);
    // // @ts-ignore
    // // const prefetchPosts = async () => {
    // //   await queryClient.prefetchQuery("posts", fetchPosts);
    // // };

    // // useEffect(() => {
    // //   const prefetchData = async () => {
    // //     const data: PostsListProps["data"] = await queryClient.fetchQuery(
    // //       ["posts"],
    // //       fetchPosts
    // //     );
    // //     if (data) {
    // //       setPosts(data?.slice(0, 20));
    // //     }
    // //   };
    // //   prefetchData();
    // // }, []);
    // useQuery(["posts"], fetchPosts, {
    //     onSuccess: (data) => {
    //         setPosts(data);
    //     },
    //     onError: (err) => {
    //         setPosts((posts) => posts);
    //     },
    // });

    return (
        <div className="flex items-center justify-center flex-wrap w-full flex-col ">
            {/* <SuspenseWrapper> */}
            {children}
            {/* </SuspenseWrapper> */}
        </div>
    );
};

export default PostsList;