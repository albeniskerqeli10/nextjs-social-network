import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import useStore from '../store/store';
const AuthGuard = ({ children }) => {
    const router = useRouter()
    const currentUser = useStore(state => state.currentUser);
    const token = typeof window !== 'undefined' && localStorage.getItem("userDetails");
    useEffect(() => {
        if (token === null) {
            console.log(Object.keys(currentUser).length, 'Log');
            router.push("/login");
        }

    }, [router])

    return (
        children

    )
}


export default AuthGuard;