import React from 'react';
import Layout from '../components/Layout.jsx';

const contactItems = [
    {
        id: 'contact-tele',
        label: 'Telegram',
        value: 'Nhấn vào đây',
        icon: '/images/tele-icon.png',
        link: 'https://t.me/HOANGTUNGTIN',
        external: true
    },
    {
        id: 'contact-fb',
        label: 'Facebook chính chủ',
        value: 'Nhấn vào đây',
        icon: '/images/fb-icon.png',
        link: 'https://zmrtu.vip8rr88.com',
        external: true
    },
    {
        id: 'contact-link-page',
        label: 'Link page chính chủ',
        value: 'Nhấn vào đây',
        icon: '/images/world.png',
        link: 'https://zmrtu.vip8rr88.com',
        external: true
    },
    {
        id: 'contact-support',
        label: 'Tư vấn gỡ nợ',
        value: 'Nhấn vào đây',
        icon: '/images/telephone.png',
        link: 'tel:0797595555',
        external: false
    },
    {
        id: 'contact-hotline',
        label: 'Hotline',
        value: '0797 595 555',
        icon: '/images/hotline.png',
        link: 'tel:0797595555',
        external: false
    }
];

const Contact = () => {
    return (
        <Layout>
            <div className="w-full max-w-6xl mx-auto px-4 mt-12 pb-0">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                    {/* Div 1: Ảnh ht-ip17 */}
                    <div className="w-full">
                        <img
                            src="/images/ht-ip17.png"
                            alt="HT IP17"
                            className="w-full h-auto"
                        />
                    </div>

                    {/* Div 2: Thông tin liên hệ */}
                    <div className="w-full">
                        <div className= "space-y-5">
                            <div className="">
                                <div className="flex justify-center">
                                    <img src="/images/arrow-big-btn.png" alt="Liên hệ" className="w-full max-w-l h-auto" />
                                </div>
                                <p className="text-3xl md:text-[40px] font-extrabold text-center uppercase text-white tracking-wide -mt-10 md:-mt-20 md:mb-8">
                                    THÔNG TIN LIÊN HỆ
                                </p>
                                <div className="space-y-3 w-[80%] mx-auto border border-blue-400 rounded-xl p-4 sm:p-6">
                                    {contactItems.map((item) => (
                                        <a
                                            key={item.id}
                                            href={item.link}
                                            target={item.external ? '_blank' : undefined}
                                            rel={item.external ? 'noopener noreferrer' : undefined}
                                            className="flex flex-wrap items-center justify-between gap-3 rounded-full bg-[#0d1535] px-4 sm:px-5 py-3 border border-[#1b2f7f]/60 shadow-inner shadow-black/30 hover:bg-[#12204b] transition"
                                        >
                                            <div className="flex items-center gap-3">
                                                <span className="flex items-center justify-center">
                                                    <img src={item.icon} alt={item.label} className="w-10 sm:w-12 h-auto" />
                                                </span>
                                                <span className="text-xs sm:text-sm font-semibold uppercase text-slate-200">
                                                    {item.label}
                                                </span>
                                            </div>
                                            <span className="text-xs sm:text-sm font-bold uppercase text-[#4cd6ff]">{item.value}</span>
                                        </a>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    );
};

export default Contact;

