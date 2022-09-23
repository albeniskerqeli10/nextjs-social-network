// import { useSelector } from "react-redux";

import useStore from "../store/store"
export const useAuth = () => {
    // const currentUser = useSelector((state) => state.user.currentUser);
    const currentUser = useStore((state) => state.currentUser);
    return currentUser;
};

