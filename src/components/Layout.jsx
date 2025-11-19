import React, { useEffect, useState } from 'react';
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
    const [menuOpen, setMenuOpen] = useState(false);

    useEffect(() => {
        setMenuOpen(false);
    }, [location.pathname]);

    const isActive = (path) => {
        if (path === '/') {
            return location.pathname === '/';
        }
        return location.pathname.startsWith(path);
    };

    return (
        <header className="relative bg-[#1a2149] shadow-md overflow-visible px-4 sm:px-6">
            <div className="flex flex-wrap items-center justify-between gap-4 py-4 md:py-0 max-w-[1200px] mx-auto">
                <div className="flex items-center justify-between w-full md:w-auto">
                    <img src="/images/logo-ht.png" alt="Logo" className="h-16 sm:h-20 md:h-24 w-auto" />
                    <button
                        type="button"
                        className="md:hidden text-white p-2 rounded-lg border border-white/20"
                        aria-label="Mở menu"
                        aria-expanded={menuOpen}
                        onClick={() => setMenuOpen((prev) => !prev)}
                    >
                        <span className="block w-6 h-0.5 bg-white mb-1" />
                        <span className="block w-6 h-0.5 bg-white mb-1" />
                        <span className="block w-6 h-0.5 bg-white" />
                    </button>
                </div>
                <nav className="hidden md:flex gap-6 text-base lg:text-[20px]">
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
                <div className="hidden md:flex items-center gap-4">
                    <img src="/images/fb-icon.png" alt="FB" className="h-10 w-auto cursor-pointer hover:opacity-80 transition-opacity" />
                    <img src="/images/tele-icon.png" alt="Tele" className="h-10 w-auto cursor-pointer hover:opacity-80 transition-opacity" />
                    <img src="/images/btn-regis.png" alt="Đăng ký" className="h-12 w-auto cursor-pointer hover:opacity-80 transition-opacity" />
                </div>
                <div className="absolute -bottom-1 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#00aeef] to-transparent blur-sm opacity-80" />
            </div>
            <div
                className={`md:hidden transition-all duration-300 overflow-hidden ${
                    menuOpen ? 'max-h-[400px] mt-2' : 'max-h-0'
                }`}
            >
                <div className="flex flex-col gap-4 pb-4 border-t border-white/10 pt-4">
                    {navLinks.map((link) => (
                        <Link
                            key={link.path}
                            to={link.path}
                            className={`font-semibold text-base px-2 ${
                                isActive(link.path) ? 'text-[#00aeef]' : 'text-white'
                            }`}
                        >
                            {link.label}
                        </Link>
                    ))}
                    <div className="flex items-center justify-start gap-4 pt-2">
                        <img src="/images/fb-icon.png" alt="FB" className="h-9 w-auto" />
                        <img src="/images/tele-icon.png" alt="Tele" className="h-9 w-auto" />
                        <img src="/images/btn-regis.png" alt="Đăng ký" className="h-10 w-auto" />
                    </div>
                </div>
            </div>
        </header>
    );
};

const Footer = () => {
    return (
        <footer className="w-full max-w-[1200px] mx-auto mt-12 px-4 border-t border-white/10 pt-10 pb-12">
            <div className="flex flex-col md:flex-row gap-8 items-center md:items-start">
                <div className="w-full md:w-[45%] flex justify-center md:justify-start">
                    <img src="/images/logo-ht.png" alt="Logo" className="h-28 sm:h-40 md:h-[212px] w-auto" />
                </div>
                <div className="w-full md:w-[55%] grid grid-cols-1 sm:grid-cols-2 gap-8">
                    {footerColumns.map((column) => (
                        <div key={column.title} className="text-center md:text-left space-y-3">
                            <p className="text-[#f6d463] text-xl sm:text-2xl font-bold uppercase tracking-wide">{column.title}</p>
                            <ul className="space-y-2 text-base sm:text-xl font-semibold text-slate-200">
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
    const [showScrollTop, setShowScrollTop] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setShowScrollTop(window.scrollY > 300);
        };

        window.addEventListener('scroll', handleScroll);
        handleScroll();

        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const handleScrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <div className="min-h-screen bg-[#080b2a] text-white">
            <Header />
            <main className="w-full max-w-[1200px] mx-auto px-4 sm:px-6 space-y-6 pb-12">{children}</main>
            <Footer />

            <div
                className={`fixed bottom-6 right-6 z-50 transition-all duration-300 ${
                    showScrollTop ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4 pointer-events-none'
                }`}
            >
                <button
                    onClick={handleScrollToTop}
                    className="flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-br from-[#00baff] to-[#0088cc] text-white shadow-[0_10px_25px_rgba(0,0,0,0.35)] border border-white/10 hover:scale-105 transition-transform"
                    aria-label="Lên đầu trang"
                >
                    <span className="text-4xl leading-none animate-bounce">↑</span>
                </button>
            </div>
        </div>
    );
};

export default Layout;


