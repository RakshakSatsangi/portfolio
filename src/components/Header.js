import { useLocation } from 'react-router-dom';

const Header = () => {
    const location = useLocation();
    return (
        <header className='fixed top-0 left-0 w-full bg-gray-800'>
            <div className="flex justify-center items-center font-mono uppercase text-lg font-semibold">
                <a href="/">
                    <div className={`custom-row cursor-pointer px-4 py-2 ${
                        location.pathname === '/' ? 'bg-gray-200 hover:bg-gray-200 text-black text-xl' : 'hover:bg-gray-700 text-white'}`}>
                            Home
                    </div>
                </a>
                <a href="/about">
                    <div className={`custom-row cursor-pointer px-4 py-2 ${
                        location.pathname === '/about' ? 'bg-gray-200 text-black text-xl' : 'hover:bg-gray-700 text-white'}`}>
                            About
                    </div>
                </a>
                <a href="/projects">
                    <div className={`custom-row cursor-pointer  px-4 py-2 ${
                        location.pathname === '/projects' ? 'bg-gray-200 text-black text-xl' : 'hover:bg-gray-700 text-white'}`}>
                            Projects
                    </div>
                </a>
                <a href="/contact">
                    <div className={`custom-row cursor-pointer px-4 py-2 ${
                        location.pathname === '/contact' ? 'bg-gray-200 text-black text-xl' : 'hover:bg-gray-700 text-white'}`}>
                            Contact
                    </div>
                </a>
            </div>
        
        </header>
    );
};

export default Header;
