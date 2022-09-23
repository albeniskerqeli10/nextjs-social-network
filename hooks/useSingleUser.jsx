import { fetchSingleUser } from "../api/UserApi";
import { useQuery } from "@tanstack/react-query";


export const singleUserKey = "FETCH SINGLE USER";
const useSingleUser = (id) => {

    const { data, isError: error } = useQuery([singleUserKey, id], fetchSingleUser, {
        onSuccess: (data) => {
            /*To be change */
        }
    });

    return { data, error }
};
export default useSingleUser;