import React from "react";
import { Container, Logo, LogoutBtn } from "../index";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

function Header() {

    const authStatus = useSelector((state) => state.auth.status)
    const navigate = useNavigate();

    const navItems = [
        {
            name: "Home",
            slug: "/",
            active: true,
        },
        {
            name: "Login",
            slug: "/login",
            active: !authStatus,
        },
        {
            name: "Signup",
            slug: "/signup",
            active: !authStatus,
        },
        {
            name: "All Posts",
            slug: "/all-posts",
            active: authStatus,
        },
        {
            name: "Add Post",
            slug: "/add-post",
            active: authStatus,
        },
    ];

    return (
        <header className='py-3 bg-[#BBBE64] sticky top-0 shadow-2xl z-50'>
            <Container>
                <nav className='flex'>
                <div className='mr-4 flex justify-center items-center'>
                    <Link to='/'>
                    <Logo />

                    </Link>
                </div>
                <ul className='flex flex-wrap ml-auto justify-center items-center'>
                    {navItems.map((item) => 
                    item.active ? (
                    <li key={item.name}>
                        <button
                        onClick={() => navigate(item.slug)}
                        className='inline-bock px-6 py-2 duration-200 hover:bg-[#F2F7F2] rounded-full'
                        >{item.name}</button>
                    </li>
                    ) : null
                    )}
                    {authStatus && (  //if authStatus is true then execute inner code
                    <li>
                        <LogoutBtn />
                    </li>
                    )}
                </ul>
                </nav>
            </Container>
        </header>
    )
}

export default Header;