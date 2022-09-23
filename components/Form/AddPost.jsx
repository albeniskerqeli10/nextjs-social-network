import { addPost } from "../../api/PostApi";
import { FiImage } from "@react-icons/all-files/fi/FiImage";
import Button from "../../shared/Button";
import Compressor from "compressorjs";
// @ts-ignore
import { useState, startTransition } from "react";
import { useForm } from "react-hook-form";
import { useMutation } from "@tanstack/react-query";
import { queryClient } from "../../";


function AddPost() {
    const { register, reset, handleSubmit } = useForm();
    const [customErr, setCustomErr] = useState("");

    const { mutate } = useMutation(addPost);

    const [fileName, setFileName] = useState < Blob | File | string > ("");
    const [selectedImg, setSelectedImg] = useState < string > ("");
    function onChangeFile(e) {
        const target = e.target;
        const file = target.files[0];
        if (file?.type.match("image.*")) {
            new Compressor(file, {
                convertSize: 100,
                quality: 0.6,
                success: (compressedResult) => {
                    setFileName(compressedResult);
                },
            });

            const reader = new FileReader();
            reader.onload = function (e) {
                setSelectedImg(e?.target?.result);
            };
            reader.readAsDataURL(file);

            startTransition(() => {
                setCustomErr("");
            });
        } else {
            setCustomErr("File should be only image and not other file types");
        }
    }

    function submitPost(data) {
        // handle the click event
        const formData = new FormData();
        if (data.textarea === "") {
            setCustomErr("Write some text or  upload an image  to create a post");
        } else {
            formData.append("text", data.textarea);
            formData.append("image", fileName);
            mutate(formData, {
                onSuccess: () => {
                    queryClient.invalidateQueries(["posts"]);
                },
            });

            startTransition(() => {
                setSelectedImg("");

                setFileName("");
                reset();
            });
        }
    }
    return (
        <div className="w-full min-h-[100px] flex flex-col items-center justify-center  flex-wrap  bg-white rounded-lg border gap-2 border-[#F5F7F9] shadow-md   ">
            <div className="w-full  flex-wrap flex text-center  gap-1 flex-row items-center lg:justify-between ">
                {/* <div className="flex w-auto  items-center justify-center flex-wrap flex-row">
          <Avatar alt="User avatar" radius="sm" src={currentUser.avatar} />
        </div> */}
                <div className="flex md:w-auto w-full flex-1  items-center justify-between  flex-wrap flex-row">
                    <input
                        {...register("textarea")}
                        className="flex w-[200px] md:w-32   break-all text-ellipsis md:mx-1 mx-2 items-center   md:flex-1  flex-initial font-bold py-3  my-2  px-1  resize-none self-center  "
                        placeholder="Write Something"
                    />
                    <label
                        className="bg-zinc-900  my-1 p-3 text-white font-inter hover:bg-primary cursor-pointer focus:ring-primary gap-2 focus:ring-opacity-50 flex flex-row flex-wrap items-center justify-center  mx-1  rounded-lg  md:flex-initial"
                        htmlFor="upload"
                    >
                        <h4>Photo</h4>
                        <FiImage />
                    </label>
                </div>
                <input
                    type="file"
                    name="upload"
                    id="upload"
                    title=" "
                    onChange={onChangeFile}
                    accept="image/x-png,image/gif,image/jpeg"
                    hidden
                />
            </div>
            <div className="w-full flex flex-col flex-wrap items-center justify-center">
                {selectedImg ? (
                    <img decoding="async" src={selectedImg} alt="Selected Media" />
                ) : (
                    ""
                )}
            </div>
            {customErr && <h1 className="text-sm text-gray-700">{customErr}</h1>}
            <div className="flex w-full bg-deepBlue flex-row items-center justify-center flex-wrap">
                <Button
                    type="button"
                    onClick={handleSubmit(submitPost)}
                    bgColor="transparent"
                    margin="1"
                    title="Post it"
                    size="fluid"
                    textColor="white"
                    rounded="sm"
                    hover="purple-700"
                />
            </div>
        </div>
    );
}

export default AddPost;