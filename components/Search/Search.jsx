import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
// import { useDispatch } from "react-redux";
import { searchUsers } from "../../serverApis/userApi"
// import { updateUsersList } from "../../redux/slices/userSlice";
import SearchField from "./SearchField";
import { useRouter } from "next/router";

const Search = () => {
    const [query, setQuery] = useState("");
    // const dispatch = useDispatch();
    const router = useRouter();
    const singleQueryKey = "SINGLE USER KEY";

    const { refetch } = useQuery([singleQueryKey, query], searchUsers, {
        enabled: false,
        onSuccess: ({ data }) => {
            // dispatch(updateUsersList(data));
        },
        onError: ({ err }) => { },
    });
    const handleChange = (e) => {
        setQuery(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (query !== "") {
            refetch();
            navigate(`/search/${query}`);
        } else {
            router.push("/");
        }
    };
    return (
        <form onSubmit={handleSubmit}>
            <SearchField value={query} onChange={handleChange} />
        </form>
    );
};

export default Search;