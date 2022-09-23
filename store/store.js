import create from "zustand";
import {persist} from "zustand/middleware"

 const useStore = create((set) => ({
    currentUser:{},
    addUser: (userData) => set({currentUser:userData}),
    logoutUser:()=> set({currentUser:{}})

}))

export default useStore;
