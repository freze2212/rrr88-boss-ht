import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const navLinks = [
    { path: '/', label: 'Giới thiệu' },
    { path: '/community', label: 'Cộng đồng' },
    { path: '/contact', label: 'Liên hệ' },
    { path: '/notifications', label: 'Thông báo' }
];

const footerColumns = [
    {
        title: 'Hoàng Tùng',
        links: ['Giới thiệu', 'Dịch vụ', 'Cộng đồng', 'Liên hệ']
    },
    {
        title: 'Dịch vụ',
        links: ['Công thức', 'Chiến lược quản lý vốn', 'Sự kiện']
    }
];

const Header = () => {
    const location = useLocation();

    const isActive = (path) => {
        if (path === '/') {
            return location.pathname === '/';
        }
        return location.pathname.startsWith(path);
    };

    return (
        <header className="relative flex justify-around items-center px-6 py-0 bg-[#1a2149] shadow-md overflow-visible">
            <div>
                <img src="/images/logo-ht.png" alt="Logo" className="h-24 w-full" />
            </div>
            <nav className="flex gap-6 text-[20px]">
                {navLinks.map((link) => (
                    <Link
                        key={link.path}
                        to={link.path}
                        className={`pb-1 font-semibold transition-colors border-b-[3px] ${
                            isActive(link.path)
                                ? 'text-[#00aeef] border-[#00aeef]'
                                : 'text-white border-transparent hover:text-[#00aeef] hover:border-[#00aeef]'
                        }`}
                    >
                        {link.label}
                    </Link>
                ))}
            </nav>
            <div className="flex items-center gap-4">
                <img src="/images/fb-icon.png" alt="FB" className="h-10 w-auto cursor-pointer hover:opacity-80 transition-opacity" />
                <img src="/images/tele-icon.png" alt="Tele" className="h-10 w-auto cursor-pointer hover:opacity-80 transition-opacity mr-2" />
                <img src="/images/btn-regis.png" alt="Đăng ký" className="h-12 w-auto cursor-pointer hover:opacity-80 transition-opacity" />
            </div>
            <div className="absolute -bottom-1 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#00aeef] to-transparent blur-sm opacity-80" />
        </header>
    );
};

const Footer = () => {
    return (
        <footer className="w-10/12 mx-auto mt-12 border-t border-white/10 pt-10 pb-12">
            <div className="flex flex-col md:flex-row gap-8 items-center">
                <div className="md:w-[45%] flex justify-center items-center">
                    <img src="/images/logo-ht.png" alt="Logo" className="h-[212px] w-auto" />
                </div>
                <div className="md:w-[55%] grid grid-cols-1 sm:grid-cols-2 gap-8">
                    {footerColumns.map((column) => (
                        <div key={column.title} className="text-left space-y-3">
                            <p className="text-[#f6d463] text-2xl font-bold uppercase tracking-wide">{column.title}</p>
                            <ul className="space-y-2 text-xl font-semibold text-slate-200">
                                {column.links.map((link) => (
                                    <li key={link} className="hover:text-[#00baff] cursor-pointer transition">
                                        {link}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </div>
            <div className="flex justify-center mt-8">
                <img src="/images/text-ft.png" alt="Footer Text" className="w-auto h-auto" />
            </div>
        </footer>
    );
};

const Layout = ({ children }) => {
    return (
        <div className="min-h-screen bg-[#080b2a] text-white">
            <Header />
            <main className="w-10/12 mx-auto px-6 space-y-6 pb-12">{children}</main>
            <Footer />
        </div>
    );
};

export default Layout;


