import React, { use, useState } from 'react';
import { HiMenuAlt3, HiX } from "react-icons/hi";
import logo from '../../../assets/logo.png'
import { Link, NavLink } from 'react-router';
import { AuthContext } from '../../../provider/AuthProvider';
import userLogo from '../../../assets/user.png'

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [open, setOpen] = useState(false);
    const { user, logOut } = use(AuthContext);

    const toggleMenu = () => setIsOpen(!isOpen);
    const handleFalse = () => setIsOpen(false);

    const profileClicker = () => {
        setOpen(!open)
    }

    return (
        <nav className="w-full bg-white py-3 px-6 md:px-10 relative">
            <div className="flex items-center justify-between">
                <div>
                    <Link className='cursor-pointer'>
                        <img
                            src={logo}
                            alt="Gensure Logo"
                            className="w-[150px]"
                        />
                    </Link>
                </div>
                <ul className="header-menu hidden lg:flex items-center space-x-8 text-sm font-medium text-gray-700">
                    <li onClick={() => setOpen(false)}><NavLink className="cursor-pointer hover:text-primary hover:border-2 hover:border-primary border-2 border-base-100 px-2 py-1 rounded-full transition-all duration-300" to="/" >Home</NavLink></li>
                    <li onClick={() => setOpen(false)}><NavLink className="cursor-pointer hover:text-primary hover:border-2 hover:border-primary border-2 border-base-100 px-2 py-1 rounded-full transition-all duration-300" to="/add-transaction">Add Transaction</NavLink></li>
                    <li onClick={() => setOpen(false)}><NavLink className="cursor-pointer hover:text-primary hover:border-2 hover:border-primary border-2 border-base-100 px-2 py-1 rounded-full transition-all duration-300" to="/my-transaction">My Transactions</NavLink></li>
                    <li onClick={() => setOpen(false)}><NavLink className="cursor-pointer hover:text-primary hover:border-2 hover:border-primary border-2 border-base-100 px-2 py-1 rounded-full transition-all duration-300" to="/report">Reports</NavLink></li>
                </ul>
                <div className="hidden lg:flex items-center space-x-4">
                    {
                        user ? (
                            <>
                                <img onClick={profileClicker} title={user?.displayName} className='w-12 h-12 cursor-pointer object-fill rounded-full border-2 border-primary p-[2px]' src={user.photoURL ? user.photoURL : userLogo} alt="Profile Picture" />
                                {open && (
                                    <div className="absolute right-16 top-14 w-48 bg-white border border-accent rounded shadow-lg z-50 p-1">
                                        <div>
                                            <p className="px-4 py-2 text-sm text-gray-700">{user.displayName}</p>
                                        <p className="px-4 py-2 text-sm text-gray-700">{user.email}</p>
                                        </div>
                                        <Link to="/my-profile" onClick={() => setOpen(false)} className="block w-full text-left px-4 py-2 hover:bg-gray-100">My Profile</Link>
                                        <button className='bg-orange-500 w-full cursor-pointer text-white text-sm px-5 py-2 rounded-full hover:bg-primary transition' onClick={logOut}>
                                            Log out
                                        </button>
                                    </div>
                                )}

                            </>
                        ) : (
                            <>
                                <Link to="/login" className="bg-[#0d1b2a] cursor-pointer text-white text-sm px-5 py-2 rounded-full hover:opacity-90 transition">
                                    Log In
                                </Link>
                                <Link to="/signup" className="bg-orange-500 cursor-pointer text-white text-sm px-5 py-2 rounded-full hover:bg-primary transition">
                                    Sign Up
                                </Link>
                            </>
                        )
                    }
                </div>
                <div className="lg:hidden flex items-center">
                    <button
                        onClick={toggleMenu}
                        className="text-gray-700 focus:outline-none"
                    >
                        {isOpen ? <HiX size={26} /> : <HiMenuAlt3 size={26} />}
                    </button>
                    {
                        user &&
                        <img title={user?.displayName} className='w-12 h-12 ml-4 cursor-pointer object-fill rounded-full border-2 border-secondary p-1' src={user.photoURL ? user.photoURL : userLogo} alt="" />
                    }
                </div>
            </div>
            {isOpen && (
                <div className="p-4 mt-4 w-full bg-base-100 lg:hidden flex flex-col space-y-3 text-gray-700 font-medium absolute z-50 top-12 left-0">
                    <ul className="header-menu flex flex-col space-y-3">
                        <li><NavLink className="cursor-pointer hover:text-primary hover:border-2 hover:border-primary border-2 border-base-100 px-2 py-1 rounded-full transition-all duration-300" to="/" onClick={toggleMenu} >Home</NavLink></li>
                        <li><NavLink className="cursor-pointer hover:text-primary hover:border-2 hover:border-primary border-2 border-base-100 px-2 py-1 rounded-full transition-all duration-300" to="/add-transaction" onClick={toggleMenu}>Add Transaction</NavLink></li>
                        <li><NavLink className="cursor-pointer hover:text-primary hover:border-2 hover:border-primary border-2 border-base-100 px-2 py-1 rounded-full transition-all duration-300" to="/my-transaction" onClick={toggleMenu}>My Transactions</NavLink></li>
                        <li><NavLink className="cursor-pointer hover:text-primary hover:border-2 hover:border-primary border-2 border-base-100 px-2 py-1 rounded-full transition-all duration-300" to="/report" onClick={toggleMenu}>Reports</NavLink></li>
                    </ul>
                    <div className="flex flex-col space-y-2 pt-3">
                        {
                            user ? (<>
                                <button className='bg-orange-500 w-full text-white text-sm px-5 py-2 rounded-full hover:bg-primary transition' onClick={logOut}>
                                    Log out
                                </button>
                            </>) : (<>
                                <Link to="/login" className="bg-[#0d1b2a] text-center text-white text-sm py-2 rounded-full hover:opacity-90 transition" onClick={toggleMenu}>
                                    Log In
                                </Link>
                                <Link to="/signup" className="bg-orange-500 text-center text-white text-sm py-2 rounded-full hover:bg-orange-600 transition" onClick={toggleMenu}>
                                    Sign Up
                                </Link>
                            </>)
                        }
                    </div>
                </div>
            )}
        </nav>
    );
};

export default Navbar;