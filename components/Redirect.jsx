import { useRouter } from "next/router"
import { useEffect } from "react";
import useStore from "../store/store";

const Redirect = () => {
    const router = useRouter();
    const currentUser = useStore(state => state.currentUser);
    useEffect(() => {
        router.push("/");


    }, [router])



}

export default Redirect;