import { BiTrash } from "@react-icons/all-files/bi/BiTrash";
import { useMutation, useQuery } from "@tanstack/react-query";
import { deleteComment, fetchComments } from "../../serverApis/postApi";
// import { queryClient } from "../../";
import Avatar from "../UI/Avatar";
import { singleCommentKey } from "./AddComment";
import { useAuth } from "../../hooks/useAuth";
import { useState } from "react";
import { Link } from "next/link";
import { useRouter } from "next/router";
function Comment({ id }) {
    const navigate = useNavigate();
    const [comments, setComments] = useState([]);
    useQuery([singleCommentKey, id], fetchComments, {
        onSuccess: (data) => {
            setComments(data?.slice(0, 10));
        },
    });
    const currentUser = useAuth();

    const deleteCommentMutation = useMutation(deleteComment, {
        onSuccess: () => {
            queryClient.invalidateQueries([singleCommentKey]);
        },
    });
    const navigateToUserPage = (userId) => {
        navigate(currentUser._id === userId ? "/profile" : `/user/${userId}`);
    };
    return (
        <div className="w-full flex flex-row items-center justify-center flex-wrap">
            {comments?.map((comment) => (
                <div
                    key={comment._id}
                    className="w-full py-1 flex items-center justify-start flex-row gap-2 rounded-lg flex-wrap  "
                >
                    <Avatar
                        src={comment.avatar}
                        onClick={() => navigateToUserPage(comment.user)}
                        alt="user avatar"
                    />
                    <div className="flex flex-row items-center justify-center gap-1 flex-wrap">
                        <Link
                            className="font-bold"
                            to={
                                comment.user === currentUser._id
                                    ? `profile`
                                    : `user/${comment.user}`
                            }
                        >
                            {comment.username}
                        </Link>
                    </div>
                    <h4>{comment.content}</h4>
                    {comment.user === currentUser._id ? (
                        <i className="p-1 cursor-pointer ">
                            {" "}
                            <BiTrash
                                onClick={() => deleteCommentMutation.mutate(comment._id)}
                                color="#DC2626
"
                                className="hover:text-red-400"
                                size="1.2em"
                            />
                        </i>
                    ) : (
                        ""
                    )}
                </div>
            ))}
        </div>
    );
}

export default Comment;