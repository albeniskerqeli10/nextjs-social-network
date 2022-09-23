import { addComment } from "../../serverApis/postApi";
import { useAuth } from "../../hooks/useAuth";
import Avatar from "../UI/Avatar";
import { useForm } from "react-hook-form";
import { useMutation } from "@tanstack/react-query";
import { useRouter } from "next/router";
// import { queryClient } from "../../";

export const singleCommentKey = "SINGLE COMMENT KEY";



const AddComment = ({ id, handleCommentState }) => {
  const { register, handleSubmit, reset } = useForm();
  const navigate = useRouter();
  const currentUser = useAuth();

  const commentMutation = useMutation(addComment, {
    onSuccess: (data) => {
      // queryClient.invalidateQueries([singleCommentKey]);
    },
    onError: (err) => { },
  });

  const handleComment = (data) => {
    const commentData = {
      id: id,
      content: data.content,
    };
    if (data.content === "") {
      alert("Type something to add a comment");
    } else {
      commentMutation.mutate(commentData);
      handleCommentState();
      reset();
    }
  };

  return (
    <div className="w-full   flex text-center my-4  flex-row gap-1 items-center justify-start">
      <Avatar
        src={currentUser.avatar}
        onClick={() => navigate(`/profile`)}
        alt="User avatar"
      />

      <form
        className="w-auto  flex-1 flex items-start justify-start"
        onSubmit={handleSubmit(handleComment)}
      >
        <input
          {...register("content")}
          className="w-full max-w-[80%] flex-1 md:w-full py-2  bg-light-primary text-gray-900 placeholder-gray-900 border border-gray-300  focus:shadow-outline rounded-lg shadow-box "
          placeholder="   Write a comment"
        />
      </form>
    </div>
  );
};
export default AddComment;