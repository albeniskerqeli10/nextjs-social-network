import Search from "../../components/Search/Search";
import { useAuth } from "../../hooks/useAuth";
import useStore from "../../store/store";
import { AiOutlineSearch } from "@react-icons/all-files/ai/AiOutlineSearch";
import { BiMessageSquareDetail } from "@react-icons/all-files/bi/BiMessageSquareDetail";
import Avatar from "../UI/Avatar"
import { startTransition, useState } from "react";
import Link from "next/link";

const Navbar = () => {
    /* const dispatch = useDispatch(); */
    const currentUser = useAuth();
    const logoutUser = useStore(state => state.logoutUser);
    const isAuthorized = currentUser?.accessToken;

    const [toggleDropdown, setToggleDropdown] = useState(false);
    function handleLogout() {
        logoutUser();
        localStorage.removeItem("userDetails");
        startTransition(() => {
            setToggleDropdown(!toggleDropdown);
        });
    }

    function toggleDropdownHandler() {
        setToggleDropdown(!toggleDropdown);
    }


    return (
        <header className="w-full  lg:sticky  top-0 z-40 shadow-box min-h-[40px]   bg-white flex flex-row flex-wrap items-center justify-center ">
            <div className=" container md:mx-auto flex flex-row items-center lg:justify-between justify-center   flex-wrap  px-3  gap-5 ">
                <div className="md:w-80 w-auto py-4 flex flex-row items-center justify-center flex-nowrap ">

                    <Link href="/"
                    >
                        <a className="mx-2 text-lg text-deepBlue hover:text-slate-900 font-bold ">Social Network</a>

                    </Link>

                </div>
                {isAuthorized !== null && (
                    <div className="w-auto  gap-2  mx-2 sm:flex hidden items-center border rounded-lg  justify-center bg-light-primary flex-nowrap border-1 border-slate-50 flex-row shadow-box min-h-[40px] ">
                        <i className="mx-2 flex items-center justify-center">
                            <AiOutlineSearch className="text-primary font-bold" />
                        </i>
                        <Search />
                    </div>
                )}
                <div className="md:w-80 w-auto  flex flex-row items-center gap-3 justify-center text-md sm:flex-wrap flex-nowrap px-3 my-2">
                    <>
                        {Object.keys(currentUser).length === 0 ? (
                            <>
                                <Link

                                    href="/login"
                                >
                                    <a className="bg-deepBlue m-2 py-2 px-3 text-white font-inter hover:bg-gray-900 focus:ring-deepBlue text-sm focus:ring-opacity-50">Sign In</a>
                                </Link>
                                <Link

                                    href="/register"
                                >
                                    <a className="bg-gray-900 border-2 border-gray-900 m-2 py-[6px] text-md  px-3 text-white font-inter hover:bg-gray-800 hover:border-gray-900 hover:text-white focus:ring-purple-600 focus:ring-opacity-50">Register</a>
                                </Link>
                            </>
                        ) : (
                            <>
                                <li className="list-none p-2 bg-light-primary rounded-full shadow-box    mx-1 ">
                                    <Link href="/messages">
                                        <BiMessageSquareDetail size="1.5em " color="#232324" />
                                    </Link>
                                </li>

                                <div className="relative inline-block text-left">
                                    <div>
                                        <Avatar
                                            onClick={toggleDropdownHandler}
                                            alt="User Avatar"
                                            src={currentUser.avatar}
                                        />
                                        {/* <a className="cursor-pointer" onClick={toggleDropdownHandler}>User</a> */}
                                    </div >
                                    {toggleDropdown && (
                                        <div
                                            className="origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-box flex items-center justify-start flex-wrap mx-2 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none"
                                            role="menu"
                                            aria-orientation="vertical"
                                            aria-labelledby="menu-button"
                                            tabIndex={-1}
                                        >
                                            <div className="py-2 flex flex-col" role="none">
                                                <Link
                                                    className="text-gray-700 block px-4 py-2 text-sm"
                                                    onClick={toggleDropdownHandler}
                                                    href="/profile"
                                                >
                                                    <a className="text-gray-700 block px-4 py-2 text-sm"
                                                    >Profile</a>
                                                </Link>

                                                <Link
                                                    className="text-gray-700 block px-4 py-2 text-sm"

                                                    href="/"
                                                >
                                                    <a onClick={handleLogout} className="text-gray-700 block px-4 py-2 text-sm"> Logout</a>
                                                </Link>
                                            </div>
                                        </div>
                                    )}
                                </div >
                            </>
                        )}
                    </>
                </div >
            </div >
        </header >
    );
};

export default Navbar;