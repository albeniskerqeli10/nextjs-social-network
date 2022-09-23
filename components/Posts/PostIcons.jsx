import { likePost, unlikePost } from "../../serverApis/postApi";
import { useAuth } from "../../hooks/useAuth";

import { AiFillHeart } from "@react-icons/all-files/ai/AiFillHeart";
import { AiOutlineHeart } from "@react-icons/all-files/ai/AiOutlineHeart";
import { FiMessageSquare } from "@react-icons/all-files/fi/FiMessageSquare";
import { useMutation } from "@tanstack/react-query";
// import { queryClient } from "../../";


const PostIcons = ({
    likes,

    id,
    commentIconClick,
}) => {
    const currentUser = useAuth();

    const likeMutation = useMutation({
        mutationFn: likePost,
        onSuccess: () => {
            // queryClient.invalidateQueries(["posts"]);
        },
    });

    const unlikeMutation = useMutation({
        mutationFn: unlikePost,
        onSuccess: () => {
            queryClient.invalidateQueries(["posts"]);
        },
    });

    return (
        <div className="w-full  mx-1 py-4 flex text-center flex-row items-center justify-between">
            <div className="w-auto flex mx-2 flex-row items-center gap-2 justify-center">
                <i className="cursor-pointer">
                    {likes?.find((like) => like === currentUser._id) ? (
                        <AiFillHeart
                            onClick={() => unlikeMutation.mutate(id)}
                            className=" text-[#ED4956] w-7 h-7"
                        />
                    ) : (
                        <AiOutlineHeart
                            onClick={() => likeMutation.mutate(id)}
                            className=" text-gray-700 w-7 h-7  transition duration-500 ease-in-out transform  hover:scale-100 "
                        />
                    )}
                </i>

                <i className="cursor-pointer">
                    <FiMessageSquare
                        onClick={commentIconClick}
                        className="  w-7 text-gray-700 h-7  transition duration-500 ease-in-out transform  hover:scale-100"
                    />
                </i>
            </div>
            <div></div>
        </div>
    );
};

export default PostIcons;