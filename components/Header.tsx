import { useRouter } from "next/router";
import { useEffect, useRef, useState } from "react";

const MobileNav: React.FC<{ cateList }> = ({ cateList }) => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const menuRef = useRef(null);
    const router = useRouter()
    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const handleClickOutside = (event) => {
        if (menuRef.current && !menuRef.current.contains(event.target)) {
            setIsMenuOpen(false);
        }
    };

    useEffect(() => {
        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);
    const to = (item) => {
        router.push(`/cate/${item.id}`)
    }
    return (
        <div className="flex ml-auto mr-4 topNav-mobile">
            <button
                className="p-2 rounded-md bg-gray-100 text-gray-800"
                onClick={toggleMenu}
            >
                Menu
            </button>

            {isMenuOpen && (
                <div className="fixed inset-y-0 right-0 w-full bg-gray-900 bg-opacity-75" >
                    <div ref={menuRef}
                        className="fixed inset-y-0 right-0 w-2/3 bg-slate-50 "
                    >
                        <div className="flex flex-col items-center h-screen">
                            {/* Menu content goes here */}
                            <ul className="text-red w-full text-center" >
                                {
                                    cateList.map((item, index) => {
                                        return (<li className="py-2 w-full transition ease-in-out delay-150 hover:bg-pink-100" key={index} onClick={() => to(item)}> {item.name} </li>)
                                    }
                                    )
                                }
                            </ul>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

const Header: React.FC<{ categories: any }> = ({ categories }) => {
    const router = useRouter()

    const to = (item) => {
        router.push(`/cate/${item.id}`)
    }

    const toHome = (e) => {
        e.preventDefault()
        router.push('/')
    }

    return <div className="h-16  flex items-center  w-full bg-primary">
        {/* logo */}
        <div className="ml-4 ">
            <div className="text-4xl text-white	cursor-pointer" onClick={toHome}> MWBLOG </div>
        </div>

        {/* menu 电脑端 */}
        <div className="flex topNav-pc">
            {
                categories.map((item, index) => {
                    return (<div className="text-xl text-white	ml-4 cursor-pointer" key={index} onClick={() => to(item)}> {item.name} </div>)
                })
            }

        </div>
        { /* menu 手机端 */}
        <div className="flex ml-auto mr-4 topNav-mobie">
            <MobileNav cateList={categories} />
        </div>

    </div>
}

export default Header;