import React, { useState } from 'react';
import Layout from '../components/Layout.jsx';

const bossCards = [
    {
        id: 'boss-tung-anh',
        name: 'Boss Tùng Anh',
        mainRole: 'BOSS NHÓM',
        subRole: 'Hỗ trợ nhóm VIP kéo chuẩn taget',
        avatar: '/images/boss-ta.png',
        gradient: 'from-[#4b52c5] via-[#28337a] to-[#0b133d]',
        button: '/images/btn-boss-gr.png'
    },
    {
        id: 'boss-hoang-tung',
        name: 'Boss Tổng Hoàng Tùng',
        mainRole: 'BOSS KÉO 1-1',
        subRole: 'Hỗ trợ 1-1 bảo hiểm vốn',
        avatar: '/images/bost-ht.png',
        gradient: 'from-[#f5c045] via-[#f0a51a] to-[#c87105]',
        button: '/images/btn-boss-tong.png'
    },
    {
        id: 'tro-ly-kieu-linh',
        name: 'Trợ lý tổng - Kiều Linh',
        mainRole: 'TRỢ LÝ',
        subRole: 'Hỗ trợ tận tình tận tâm',
        avatar: '/images/kieu-trang.png',
        gradient: 'from-[#51b8ff] via-[#307ae0] to-[#122b78]',
        button: '/images/btn-boss-gr.png'
    }
];

const infoSections = [
    {
        id: 'info-01',
        title: 'Hoàng Tùng',
        subtitle: 'Hành trình vực dậy nhà đầu tư',
        label: 'Hoàng Tùng BCR - Chuyên kéo 1-1',
        cardImage: '/images/contact-main-tele.png',
        paragraphs: [
            'Là người tạo dựng lên hệ thống Vip uy tín - Hỗ trợ được rất nhièu người thua tha - xa bờ trong bộ môn BCR',
            'Với những list kéo 1-1 siêu phẩm vốn bé lên vốn lớn là 1 trong những người boss tận tâm uy tín hàng đầu',
            'Chưa kể đến những ca live BHV vô cùng ngoạn mục và đầy rẫy sự bất ngờ',
            "HOÀNG TÙNG BCR",
            "UY TÍN - AN TOÀN VÀ HIỆU QUẢ"
        ],
        bullets: [],
        image: '/images/contact-main-tele.png',
        reverse: false
    },
    {
        id: 'info-02',
        title: 'TÙNG ANH',
        subtitle: 'Kết nối hội viên và đội ngũ Boss',
        label: 'BOSS TÙNG ANH HỖ TRỢ NHÓM TAGET',
        cardImage: '/images/contact-main-tele.png',
        paragraphs: [
            'Là 1 trong những Boss kéo nhóm Uy tín - Taget nhất trong làng BCR',
            'Từng Anh đã khẳng định được vị thế với rất nhiều ca kéo nâng vốn',
            'Lợi nhuận của nhóm được chứng minh qua rất nhiều tháng',
            'Với sự Kỹ luật - Taget của mình',
            'Từng Anh luôn luôn là cái tên được Boss tổng hoàng từng tin tưởng Tuyệt đối',
        ],
        bullets: [],
        image: '/images/boss-ta-1.png',
        reverse: true
    },
    {
        id: 'info-03',
        title: 'KIỀU LINH',
        subtitle: 'Sân chơi quy tụ hàng nghìn nhà đầu tư',
        label: 'TRỢ LÝ KIỀU TRINH',
        cardImage: '/images/contact-main-tele.png',
        paragraphs: [
            'Hỗ trợ tận tâm - Nhiệt tình luôn luôn giải đáp thắc mắc và hỗ trợ mọi người 24/7',
        ],
        bullets: [],
        image: '/images/tl-kieu-trinh.png',
        reverse: false
    }
];

const successItems = [
    {
        id: 'success-1',
        title: 'Lộ trình VIP độc quyền',
        image: '/images/manh-hoang.png',
        description: 'Anh Hoàng chia sẻ rất rõ ràng, từ cách chia lệnh cách đánh của nhóm rất target rõ ràng người mới như anh cảm thấy rất an toàn và kiếm được lợi nhuận ổn định khi tham gia nhóm Hệ thống Hoàng Tùng.'
    },
    {
        id: 'success-2',
        title: 'Quản lý vốn chặt chẽ',
        image: '/images/khang-lam-nguyen.png',
        description: 'Hoàng Tùng tạo cho tôi 1 cảm giác rất an toàn về mọi mặc , kể cả ca kéo 1-1 hoặc lên nhóm live đều rất uy tín , hy vọng anh sẽ giúp được thật nhiều người khó khăn, cảm ơn anh.'
    },
    {
        id: 'success-3',
        title: 'Hỗ trợ 1-1 24/7',
        image: '/images/kieu-trang.png',
        description: 'Mình tham gia nhóm anh Tùng cũng được 2 tháng thôi nhưng hiện tại đã trả được hơn 50% số nợ vừa có kinh nghiệm vừa biết quản lý vốn'
    }
];

const showcaseImages = ['/images/800k.png', '/images/peach.png', '/images/garden.png'];

const summaryCards = [
    {
        id: 'summary-1',
        title: '* RR88 hiện tại trực thuộc Liên Minh Quốc Tế KJC *',
        description: 'Khi thương hiệu ae vang danh trên đấu trường quốc tế Trong một bước tiến chiến lược đầy tính đột phá, RR88 – nay trực thuộc Liên Minh Quốc Tế KJC – đã chính thức ghi dấu ấn mạnh mẽ tại sân chơi bóng đá hàng đầu châu Âu.Tại trận “siêu kinh điển” Juventus vs AC Milan vừa qua, thương hiệu đã xuất hiện giữa hàng triệu ánh nhìn tại Serie A – mở ra chương sử mới trong hành trình toàn cầu hóa thương hiệu.',
        image: '/images/juve-kjc.png'
    },
    {
        id: 'summary-2',
        title: 'THÔNG BÁO CHÍNH THỨC - TELEGRAM CHÍNH CHỦ CỦA CEO HOÀNG TÙNG ',
        description: '📣 CẢNH BÁO GIẢ MẠO – CẬP NHẬT TELEGRAM MỚI NHẤT Anh em lưu ý! Kênh Telegram cũ của hoàng tùng hiện tại đã bị đóng băng, và từ hôm nay chỉ sử dụng duy nhất Telegram chính chủ mới dưới đây 👇 📩 Username: @hoangtungtin 📌 THÔNG TIN CHÍNH CHỦ ĐƯỢC XÁC NHẬN Toàn bộ thông tin, bài đăng và nhóm hỗ trợ đều xuất phát từ Telegram Tất cả những tài khoản khác có số điện thoại hoặc username thêm/bớt ký tự, số, chữ cái đều là GIẢ MẠO. Anh em tuyệt đối không chuyển tiền – không cung cấp thông tin cá nhân cho bất kỳ tài khoản nào khác ngoài số điện thoại chính chủ trên. ❓VÌ SAO PHẢI CHUYỂN VỀ TELEGRAM CHÍNH CHỦ? 👉 Để bảo mật thông tin, tránh bị giả mạo, được nâng cấp xác thực 2 lớp, đảm bảo an toàn tuyệt đối.📍Thông tin chuẩn xác: Mọi thông báo, kéo, kèo chính thức đều được gửi từ tài khoản chính chủ. Tương tác nhanh: Nhóm hỗ trợ hoạt động 24/7, cập nhật tín hiệu kéo chuẩn xác từng giờ.',
        image: '/images/main-tele-ht.png'
    },
    {
        id: 'summary-3',
        title: 'THÔNG BÁO CHÍNH THỨC - TELEGRAM CHÍNH CHỦ CỦA CEO HOÀNG TÙNG ',
        description: '📣 CẢNH BÁO GIẢ MẠO – CẬP NHẬT TELEGRAM MỚI NHẤT Anh em lưu ý! Kênh Telegram cũ của hoàng tùng hiện tại đã bị đóng băng, và từ hôm nay chỉ sử dụng duy nhất Telegram chính chủ mới dưới đây 👇 📩 Username: @hoangtungtin 📌 THÔNG TIN CHÍNH CHỦ ĐƯỢC XÁC NHẬN Toàn bộ thông tin, bài đăng và nhóm hỗ trợ đều xuất phát từ Telegram Tất cả những tài khoản khác có số điện thoại hoặc username thêm/bớt ký tự, số, chữ cái đều là GIẢ MẠO. Anh em tuyệt đối không chuyển tiền – không cung cấp thông tin cá nhân cho bất kỳ tài khoản nào khác ngoài số điện thoại chính chủ trên. ❓VÌ SAO PHẢI CHUYỂN VỀ TELEGRAM CHÍNH CHỦ? 👉 Để bảo mật thông tin, tránh bị giả mạo, được nâng cấp xác thực 2 lớp, đảm bảo an toàn tuyệt đối.📍Thông tin chuẩn xác: Mọi thông báo, kéo, kèo chính thức đều được gửi từ tài khoản chính chủ. Tương tác nhanh: Nhóm hỗ trợ hoạt động 24/7, cập nhật tín hiệu kéo chuẩn xác từng giờ.',
        image: '/images/main-tele-ht.png'
    },
];
const contactItems = [
    { id: 'contact-tele', label: 'Telegram', value: 'Nhấn vào đây', icon: '/images/tele-icon.png', link: '#' },
    { id: 'contact-fb', label: 'Facebook chính chủ', value: 'Nhấn vào đây', icon: '/images/fb-icon.png', link: '#' },
    { id: 'contact-link-page', label: 'Link page chính chủ', value: 'Nhấn vào đây', icon: '/images/world.png', link: '#' },
    { id: 'contact-support', label: 'Tư vấn gỡ nợ', value: 'Nhấn vào đây', icon: '/images/telephone.png', link: '#' },
    { id: 'contact-hotline', label: 'Hotline', value: '0797 595 555', icon: '/images/hotline.png', link: 'tel:0797595555' }
];

const Home = () => {
    const [summaryPage, setSummaryPage] = useState(1);
    const totalSummaryPages = 10;

    const placeholderCards = summaryCards.map((card, index) => ({
        ...card,
        id: `${card.id}-placeholder-${index}`,
        title: 'Chưa có thông tin',
        description: `Dữ liệu trang ${summaryPage} đang được cập nhật. Vui lòng quay lại sau.`,
        image: ''
    }));

    const displayedSummaryCards = summaryPage === 1 ? summaryCards : placeholderCards;

    const handlePrevPage = () => {
        setSummaryPage((prev) => Math.max(1, prev - 1));
    };

    const handleNextPage = () => {
        setSummaryPage((prev) => Math.min(totalSummaryPages, prev + 1));
    };

    const handlePageSelect = (page) => {
        setSummaryPage(page);
    };

    return (
        <Layout>
                <div className="w-full">
                    <img
                        src="/images/banner-ht.png"
                        alt="Banner"
                        className="w-full h-auto mt-[-1rem] mb-[-3rem]"
                    />
                </div>

                <div className="w-full">
                    <div className="flex justify-center">
                        <img
                            src="/images/btn-link-regis.png"
                            alt="Link đăng ký"
                            className="block w-auto h-auto max-w-[425px]"
                        />
                    </div>

                    <div className="flex justify-center">
                        <img
                            src="/images/contact-boss.png"
                            alt="Liên hệ Boss"
                            className="block w-auto h-auto max-w-[385px] mb-[4rem]"
                        />
                    </div>
                </div>

                <div className="w-full mt-6 flex justify-center relative">
                    <img
                        src="/images/border-imgs.png"
                        alt="Border highlight"
                        className="absolute -top-6 w-auto max-w-[380px] pointer-events-none"
                    />
                    <div className="w-full max-w-[640px] h-[1120px] rounded-2xl border-[10px] border-[#00baff] overflow-hidden shadow-lg bg-black mt-3.5">
                        <iframe
                            src="https://player.vimeo.com/video/1137998604?autoplay=1&loop=1&muted=1&background=0"
                            className="w-full h-full"
                            frameBorder="0"
                            allow="autoplay; fullscreen; picture-in-picture"
                            allowFullScreen
                            title="Hoàng Tùng Intro"
                        />
                    </div>
                </div>
                <div className="flex justify-center">
                    <img
                        src="/images/baccarat.png"
                        alt="Baccarat"
                        className="block w-auto h-auto max-w-[360px]"
                    />
                </div>
                <section className="w-full">
                    <div className="grid gap-8 md:grid-cols-3">
                        {bossCards.map((boss) => (
                            <div key={boss.id} className="relative pb-12">
                                <div className={` w-[483px] h-[650px] rounded-[28px] p-[3px] bg-gradient-to-b ${boss.gradient}` }>
                                    <div className="bg-[#050a25] rounded-[25px] flex flex-col items-center text-center px-6 pt-8 pb-12 gap-4 h-full">
                                        <p className="text-3xl font-semibold text-[#ffff00] uppercase tracking-wide">
                                            {boss.name}
                                        </p>
                                        <div className="w-[335px] h-[335px] rounded-full border-4 border-[#fbd46d] overflow-hidden">
                                          <img
                                              src={
                                                  boss.id === 'tro-ly-kieu-linh'
                                                      ? '/images/tro-ly-tong.png'
                                                      : boss.avatar
                                              }
                                              alt={boss.name}
                                              className="w-full h-full object-cover"
                                          />
                                        </div>
                                        <div className="flex justify-center">
                                            <img
                                                src={
                                                    boss.id === 'boss-hoang-tung'
                                                        ? '/images/5-star.png'
                                                        : boss.id === 'tro-ly-kieu-linh'
                                                        ? '/images/4-star.png'
                                                        : '/images/3-star.png'
                                                }
                                                alt="Đánh giá"
                                                className="w-auto h-[60px]"
                                            />
                                        </div>
                                        <p className="text-[#ffff00] text-3xl font-bold uppercase">{boss.mainRole}</p>
                                        <p className="text-white text-[24.78px] font-semibold leading-relaxed">{boss.subRole}</p>
                                    </div>
                                    <div
                                        className={`absolute left-1/2 -translate-x-1/2 ${
                                            boss.id === 'boss-hoang-tung' ? 'bottom-[23px]' : 'bottom-[23px]'
                                        }`}
                                    >
                                        <img
                                            src={boss.button}
                                            alt="Liên hệ"
                                            className="w-[296px] h-auto drop-shadow-[0_8px_16px_rgba(0,0,0,0.5)]"
                                        />
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>
                <section className="w-9/12 mx-auto space-y-8">
                    {infoSections.map((section) => (
                        <div
                            key={section.id}
                            className={`flex flex-col gap-6 md:gap-10 md:flex-row ${
                                section.reverse ? 'md:flex-row-reverse' : ''
                            }`}
                        >
                            <div className="md:w-1/2 flex justify-center">
                                <img
                                    src={section.id === 'info-01' ? '/images/ht-bcr.png' : section.image}
                                    alt={section.title}
                                    className="w-full max-w-[520px]"
                                />
                            </div>
                            <div className="md:w-1/2 flex items-center justify-center">
                                <div className="bg-gradient-to-br from-[#0e1a3c] via-[#070d21] to-[#030712] rounded-[28px] p-[3px] w-full max-w-[520px]">
                                    <div className="rounded-[25px] bg-gradient-to-br from-[#1b274a] via-[#202a54] to-[#233e6e] p-6 md:p-8 !pt-0 flex flex-col gap-4 border border-[#15bffd]">
                                        <div className="relative flex justify-center">
                                            <div className="absolute top-[-2.5rem] w-auto max-w-[380px] pointer-events-none">
                                                <img
                                                    src="/images/border-imgs.png"
                                                    alt="Border highlight"
                                                    className="w-full h-auto"
                                                />
                                                <div className="absolute inset-0 flex items-center justify-center">
                                                    <span className="text-[#383838] text-l font-bold drop-shadow-md">
                                                        {section.label?.toUpperCase() || 'HOÀNG TÙNG BCR - CHUYÊN KÉO 1-1'}
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                        <h3 className="text-3xl font-extrabold text-[#15bffd] uppercase flex justify-center">{section.title}</h3>
                                        <div className="space-y-3 text-slate-200 text-sm leading-relaxed">
                                            {section.paragraphs.map((text, idx) => (
                                                <p key={idx}>{text}</p>
                                            ))}
                                        </div>
                                        <ul className="space-y-2 text-[#7dd3fc] text-sm">
                                            {section.bullets.map((item, idx) => (
                                                <li key={idx} className="flex items-start gap-2">
                                                    <span className="mt-1 h-1.5 w-1.5 rounded-full bg-[#00d4ff]" />
                                                    <span>{item}</span>
                                                </li>
                                            ))}
                                        </ul>
                                            {section.cardImage && (
                                                <div className="flex justify-center">
                                                    <img
                                                        src={section.cardImage}
                                                        alt={section.title}
                                                        className="w-full max-w-sm rounded-2xl"
                                                    />
                                                </div>
                                            )}
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </section>
                <div className="w-8/12 mx-auto rounded-[28px] bg-gradient-to-br from-[#1c3d86] via-[#0b1a43] to-[#050c1d] p-[2px]">
                    <div className="rounded-[26px] bg-[#040a1c] px-8 py-6 text-center space-y-3">
                        <p className="text-xl font-extrabold text-white tracking-wide uppercase">
                            Tư vấn gỡ nợ quản lý tài chính
                        </p>
                        <span className="inline-block px-6 py-2 rounded-full bg-gradient-to-r from-[#3bc2ff] to-[#0a7de6] text-white text-sm font-semibold uppercase tracking-wider">
                            Trợ lý Kiều Linh
                        </span>
                        <p className="text-slate-200 text-sm leading-relaxed">
                            Nơi cho bạn những giải pháp, đưa ra đường hướng giúp bạn trả bớt nợ, giúp mình quản lý tài chính tốt, và là người đồng hành cùng bạn, hỗ trợ bạn mọi lúc trong ground
                        </p>
                    </div>
                </div>
                <div className="w-full flex justify-center">
                    <div className="relative inline-flex flex-col items-center">
                        <div className="absolute -top-2 left-0 right-0 h-6 border-t-2 border-x-2 border-[#f6d463] rounded-t-full" />
                        <div className="text-[#ffdc7a] font-bold text-[22px] ">
                            Hoàng Tùng hệ thống VIP
                        </div>
                    </div>
                </div>
                <div className="grid gap-6 md:grid-cols-3">
                    {showcaseImages.map((src, index) => (
                        <div key={index} className="overflow-hidden rounded-[28px]">
                            <img
                                src={src}
                                alt={`Showcase ${index + 1}`}
                                className="w-full h-full object-cover"
                            />
                        </div>
                    ))}
                </div>
                <div className="w-4/12 mx-auto text-center space-y-4">
                    <img
                        src="/images/vip.png"
                        alt="Hoàng Tùng VIP"
                        className="mx-auto w-[337px] max-w-4xl h-auto"
                    />
                    <p className="text-2xl font-extrabold uppercase text-[#f6d463] tracking-wide">
                        Quyền lợi VIP Hoàng Tùng
                    </p>
                </div>
                <div className="w-6/12 mx-auto rounded-[30px] bg-gradient-to-br from-[#f6d463] via-[#f0b143] to-[#d58222] p-[2px]">
                    <div className="rounded-[28px] bg-[#0a0f2c] p-6 space-y-4">
                        {[
                            'Hỗ trợ trực tiếp bởi admin cao thủ - giải đáp thắc mắc',
                            'Thường xuyên tổ chức mini game - event sự kiện dành riêng cho VIP cộng đồng vững mạnh - chia sẻ kinh nghiệm - hỗ trợ 24/07'
                        ].map((item, idx) => (
                            <div
                                key={idx}
                                className="flex items-start gap-3 rounded-[20px] bg-[#111a43] px-4 py-3 border border-[#1f3589]/50"
                            >
                                <img src="/images/star-icon.png" alt="Star Icon" className="w-5 h-auto" />
                                <p className="text-sm text-slate-100 leading-relaxed">{item}</p>
                            </div>
                        ))}
                    </div>
                </div>
                <div className="grid gap-8 md:grid-cols-3">
                    {successItems.map((item) => (
                        <div key={item.id} className="rounded-[28px] p-[3px] bg-gradient-to-b from-[#1b3596] via-[#0b1c4d] to-[#04091c]">
                            <div className="h-full rounded-[25px] bg-[#050b20] px-6 py-8 flex flex-col items-center text-center gap-4">
                                <img src="/images/five-star.png" alt="Five stars" className="w-auto h-[57px]" />
                                <p className="text-sm text-slate-200 leading-relaxed">{item.description}</p>
                                <div className="w-full">
                                    <img src={item.image} alt={item.title} className="w-[155px] mx-auto h-full object-cover" />
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
                <section className="w-8/12 mx-auto grid gap-8 items-center">
                    <div className="rounded-[28px]  p-[3px] space-y-5">
                        <div className="rounded-[25px]px-8 py-6 space-y-4">
                            <div className="flex justify-center">
                                <img src="/images/arrow-big-btn.png" alt="Liên hệ" className="w-full h-auto" />
                            </div>
                            <p className="text-[50px] font-extrabold text-center uppercase text-white tracking-wide !mt-[-10rem]">
                                THÔNG TIN LIÊN HỆ
                            </p>
                            <div className="space-y-3 max-w-[80%] mx-auto border border-blue-400 rounded-xl p-6">
                                {contactItems.map((item) => (
                                    <a
                                        key={item.id}
                                        href={item.link}
                                        className="flex items-center justify-between rounded-full bg-[#0d1535] px-5 py-3 border border-[#1b2f7f]/60 shadow-inner shadow-black/30 hover:bg-[#12204b] transition"
                                    >
                                        <div className="flex items-center gap-3">
                                            <span className=" flex items-center justify-center">
                                                <img src={item.icon} alt={item.label} className="w-12 h-auto" />
                                            </span>
                                            <span className="text-sm font-semibold uppercase text-slate-200">
                                                {item.label}
                                            </span>
                                        </div>
                                        <span className="text-sm font-bold uppercase text-[#4cd6ff]">{item.value}</span>
                                    </a>
                                ))}
                            </div>
                        </div>
                    </div>
                </section>
                <section className="w-full">
                    <div className="grid gap-6 md:grid-cols-3">
                        {displayedSummaryCards.map((card) => (
                            <div
                                key={card.id}
                                className=""
                            >
                                <div className="rounded-[25px]h-full flex flex-col gap-4 text-center items-center">
                                    <div className="w-full overflow-hidden">
                                        {card.image ? (
                                            <img src={card.image} alt={card.title} className="w-full h-full object-cover" />
                                        ) : (
                                            <div className="w-full h-32 flex items-center justify-center text-xs uppercase tracking-wide text-slate-400">
                                                Đang cập nhật
                                            </div>
                                        )}
                                    </div>
                                    <p className="text-lg font-bold text-white uppercase tracking-wide">{card.title}</p>
                                    <p className="text-sm text-slate-200 leading-relaxed line-clamp-3 overflow-hidden">
                                        {card.description}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>
                <div className="w-full flex justify-center">
                    <nav className="flex items-center gap-3 text-white text-sm font-semibold">
                        <button
                            onClick={handlePrevPage}
                            disabled={summaryPage === 1}
                            className={`w-8 h-8 flex items-center justify-center rounded-full ${
                                summaryPage === 1 ? 'text-slate-500 cursor-not-allowed' : 'text-slate-300 hover:text-white'
                            }`}
                        >
                            &lt;
                        </button>
                        {[1, 2, 3, 4, 5].map((page) => (
                            <button
                                key={page}
                                onClick={() => handlePageSelect(page)}
                                className={`w-8 h-8 rounded-lg flex items-center justify-center ${
                                    summaryPage === page
                                        ? 'bg-[#00baff] text-[#041229]'
                                        : 'text-white hover:text-[#00baff] transition'
                                }`}
                            >
                                {page}
                            </button>
                        ))}
                        <span className="px-2 text-slate-400">...</span>
                        <button
                            onClick={() => handlePageSelect(totalSummaryPages)}
                            className={`w-8 h-8 flex items-center justify-center ${
                                summaryPage === totalSummaryPages
                                    ? 'bg-[#00baff] text-[#041229]'
                                    : 'text-white hover:text-[#00baff]'
                            }`}
                        >
                            {totalSummaryPages}
                        </button>
                        <button
                            onClick={handleNextPage}
                            disabled={summaryPage === totalSummaryPages}
                            className={`w-8 h-8 flex items-center justify-center rounded-full ${
                                summaryPage === totalSummaryPages
                                    ? 'text-slate-500 cursor-not-allowed'
                                    : 'text-slate-300 hover:text-white'
                            }`}
                        >
                            &gt;
                        </button>
                    </nav>
                </div>
        </Layout>
    );
};

export default Home;

