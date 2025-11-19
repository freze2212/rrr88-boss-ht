import React from 'react';
import Layout from '../components/Layout.jsx';

const Community = () => {
    return (
        <Layout>
            <div className="space-y-10">
                <div className="w-full max-w-6xl mx-auto space-y-8 pb-12 px-4">
                    {/* Title */}
                    <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#fefe01] uppercase tracking-wide text-center mt-8">
                        ĐỌC VỊ NHÀ CÁI
                    </h1>

                    {/* Image doc-vi-nha-cai */}
                    <div className="w-full">
                        <img
                            src="/images/doc-vi-nha-cai.png"
                            alt="Đọc vị nhà cái"
                            className="w-full h-auto"
                        />
                    </div>

                    {/* Card with star, text and button */}
                    <div className="w-full max-w-3xl mx-auto rounded-[28px] p-[3px] bg-gradient-to-br from-[#1b274a] via-[#0b1a43] to-[#050c1d]">
                        <div className="rounded-[25px] bg-gradient-to-br from-[#0e1a3c] via-[#070d21] to-[#030712] p-4 sm:p-6 flex flex-col items-center gap-4 border border-[#15bffd]">
                            <div className="flex justify-center">
                                <img
                                    src="/images/big-star.png"
                                    alt="Star"
                                    className="w-24 sm:w-32 h-auto"
                                />
                            </div>
                            <div className="text-center space-y-3">
                                <p className="text-base sm:text-xl font-bold text-white uppercase tracking-wide">
                                    CỘNG ĐỒNG CHIA SẺ CÔNG THỨC CHƠI BCR VỚI NHỮNG LÃO LÀNG KINH NGHIỆM LÂU NĂM
                                </p>
                            </div>
                            <a
                                href="https://t.me/hethonghoangtungvip"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-full max-w-xs"
                            >
                                <button
                                    className="w-full bg-[#00baff] text-white font-bold uppercase text-lg sm:text-[26px] leading-[38px] px-6 py-2 my-2 rounded-[27px] shadow-none border-none outline-none transition-opacity hover:opacity-90"
                                    style={{
                                        background: 'linear-gradient(180deg, #00baff 0%, #13c5f9 45%, #00aeef 100%)',
                                        boxShadow: '0px 2px 4px rgba(13,70,142,0.15) inset, 0px -3px 10px 0px #0891b2 inset',
                                        border: '2px solid #15bffd',
                                        textShadow: '0 1.5px 0 rgba(0,0,0,0.13)'
                                    }}
                                >
                                    THAM GIA NGAY
                                </button>
                            </a>
                        </div>
                    </div>

                    {/* Image khung-gio-len-ca */}
                    <div className="w-full">
                        <img
                            src="/images/khung-gio-len-ca.png"
                            alt="Khung giờ lên ca"
                            className="w-full h-auto md:mt-[-3rem]"
                        />
                    </div>

                    {/* Text BẢNG CHIA VỐN VIP */}
                    <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#fefe01] uppercase tracking-wide text-center">
                        BẢNG CHIA VỐN VIP
                    </h2>

                    {/* Image com-gao-ba-mien */}
                    <div className="w-full">
                        <img
                            src="/images/com-gao-ba-mien.png"
                            alt="Cơm gạo ba miền"
                            className="w-full h-auto"
                        />
                    </div>

                    {/* Text gói lợi nhuận nhóm thường */}
                    <h3 className="text-2xl sm:text-3xl font-extrabold text-[#fefe01] uppercase tracking-wide text-center">
                        GÓI LỢI NHUẬN NHÓM THƯỜNG
                    </h3>

                    {/* Image thu-nhap-deu-dan */}
                    <div className="w-full">
                        <img
                            src="/images/thu-nhap-deu-dan.png"
                            alt="Thu nhập đều đặn"
                            className="w-full h-auto"
                        />
                    </div>


                    {/* Button */}
                    <div className="flex justify-center">
                        <a
                            href="https://t.me/hethonghoangtungvip"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-full max-w-[350px] mx-auto flex justify-center"
                        >
                            <button
                                className="w-full flex justify-center items-center
                                           h-[44px] bg-gradient-to-r from-[#00baff] to-[#13c5f9]
                                           rounded-full shadow-lg border border-[#26b7e7]
                                           text-white text-base sm:text-xl font-bold uppercase tracking-wide
                                           transition hover:opacity-90"
                                style={{
                                    boxShadow: '0px 8px 24px 0px #0971b3 inset, 0px 2px 18px 0px #51daff33',
                                    letterSpacing: '0.5px'
                                }}
                            >
                                NHẮN TIN ĐĂNG KÝ THAM GIA
                            </button>
                        </a>
                    </div>
                </div>

                {/* VIP image + text */}
                <div className="w-full max-w-md mx-auto text-center space-y-4 px-4">
                    <img
                        src="/images/vip.png"
                        alt="Hoàng Tùng VIP"
                        className="mx-auto w-full max-w-[337px] h-auto"
                    />
                    <img
                        src="/images/he-thong-ht-vip.png"
                        alt="Hệ thống HT VIP"
                        className="mx-auto w-full max-w-[490px] h-auto"
                    />
                </div>

                {/* Div 2 cột: Text bên trái, ảnh sexy-girl bên phải */}
                <div className="w-full max-w-6xl mx-auto px-4 pb-12">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                        {/* Div bên trái: Text */}
                        <div className="w-full rounded-[28px] p-[3px] bg-gradient-to-br from-[#1b274a] via-[#0b1a43] to-[#050c1d]">
                            <div className="rounded-[25px] bg-gradient-to-br from-[#0e1a3c] via-[#070d21] to-[#030712] p-6 sm:p-8 md:p-10 flex flex-col gap-6 border border-[#15bffd]">
                                {/* Heading 1 */}
                                <div className="space-y-3">
                                    <h3 className="text-xl md:text-2xl font-bold text-[#15bffd] uppercase tracking-wide">
                                        CỘNG ĐỒNG HOÀNG TÙNG CÓ GÌ?
                                    </h3>
                                    <ul className="space-y-2 text-white text-sm md:text-base leading-relaxed">
                                        <li className="flex items-start gap-2">
                                            <span className="mt-1 h-1.5 w-1.5 rounded-full bg-[#00d4ff]" />
                                            <span>Chia sẻ kiến thức đầu tư, tài chính và marketing thực chiến.</span>
                                        </li>
                                        <li className="flex items-start gap-2">
                                            <span className="mt-1 h-1.5 w-1.5 rounded-full bg-[#00d4ff]" />
                                            <span>Nhận lệnh miễn phí mỗi ngày cho thành viên mới.</span>
                                        </li>
                                        <li className="flex items-start gap-2">
                                            <span className="mt-1 h-1.5 w-1.5 rounded-full bg-[#00d4ff]" />
                                            <span>Cập nhật xu hướng – cách vận hành doanh nghiệp hiệu quả.</span>
                                        </li>
                                    </ul>
                                </div>

                                {/* Heading 2 */}
                                <div className="space-y-3">
                                    <h3 className="text-xl md:text-2xl font-bold text-[#15bffd] uppercase tracking-wide">
                                        GROUP DÀNH CHO AI?
                                    </h3>
                                    <ul className="space-y-2 text-white text-sm md:text-base leading-relaxed">
                                        <li className="flex items-start gap-2">
                                            <span className="mt-1 h-1.5 w-1.5 rounded-full bg-[#00d4ff]" />
                                            <span>Những người muốn phát triển tư duy CEO, học cách kiếm tiền – quản lý – đầu tư thông minh.</span>
                                        </li>
                                        <li className="flex items-start gap-2">
                                            <span className="mt-1 h-1.5 w-1.5 rounded-full bg-[#00d4ff]" />
                                            <span>Doanh nhân, người làm kinh doanh, nhà đầu tư, người khởi nghiệp.</span>
                                        </li>
                                    </ul>
                                </div>

                                {/* Heading 3 */}
                                <div className="space-y-3">
                                    <h3 className="text-xl md:text-2xl font-bold text-[#15bffd] uppercase tracking-wide">
                                        ANH EM ĐƯỢC GÌ?
                                    </h3>
                                    <ul className="space-y-2 text-white text-sm md:text-base leading-relaxed">
                                        <li className="flex items-start gap-2">
                                            <span className="mt-1 h-1.5 w-1.5 rounded-full bg-[#00d4ff]" />
                                            <span>Nhận chiến lược – cơ hội đầu tư sớm mỗi ngày.</span>
                                        </li>
                                        <li className="flex items-start gap-2">
                                            <span className="mt-1 h-1.5 w-1.5 rounded-full bg-[#00d4ff]" />
                                            <span>Tham gia workshop, đào tạo, và group nội bộ.</span>
                                        </li>
                                        <li className="flex items-start gap-2">
                                            <span className="mt-1 h-1.5 w-1.5 rounded-full bg-[#00d4ff]" />
                                            <span>Học hỏi trực tiếp từ CEO Hoàng Tùng và đội ngũ chuyên gia.</span>
                                        </li>
                                    </ul>
                                </div>

                                {/* Button */}
                                <a
                                    href="https://t.me/hethonghoangtungvip"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <div className="flex justify-center">
                                        <button className="w-full max-w-xs px-8 py-4 bg-gradient-to-r from-[#00baff] to-[#0088cc] text-white font-bold text-base sm:text-lg uppercase rounded-lg hover:opacity-90 transition-opacity shadow-lg mt-4">
                                            THAM GIA CỘNG ĐỒNG NGAY
                                        </button>
                                    </div>
                                </a>
                            </div>
                        </div>

                        {/* Div bên phải: Ảnh sexy-girl */}
                        <div className="w-full">
                            <img
                                src="/images/sexy-girl.png"
                                alt="Sexy Girl"
                                className="w-full h-auto"
                            />
                        </div>
                    </div>
                </div>

                {/* 2 Cards: Cooperate và Share */}
                <div className="w-full max-w-4xl mx-auto px-4 pb-12">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {/* Card 1: Cooperate */}
                        <div className="w-full rounded-[28px] p-[3px] bg-gradient-to-br from-[#1b274a] via-[#0b1a43] to-[#050c1d]">
                            <div className="rounded-[25px] bg-gradient-to-br from-[#0e1a3c] via-[#070d21] to-[#030712] p-6 sm:p-8 flex flex-col items-center gap-6 border border-[#15bffd]">
                                <div className="flex justify-center">
                                    <img
                                        src="/images/cooperate.png"
                                        alt="Cooperate"
                                        className="w-20 sm:w-24 h-auto"
                                    />
                                </div>
                                <h3 className="text-xl md:text-2xl font-bold text-[#15bffd] uppercase tracking-wide text-center">
                                    TRỢ LÝ THAM GIA MIỄN PHÍ CỘNG ĐỒNG KIỀU LINH
                                </h3>
                                <p className="text-white text-sm md:text-base text-center leading-relaxed">
                                    ĐĂNG KÝ TRỞ THÀNH 1 PHẦN CỦA HỆ THỐNG <span className="text-[#f6d463] font-bold">HOÀNG TÙNG VIP</span>
                                </p>
                            </div>
                        </div>

                        {/* Card 2: Share */}
                        <div className="w-full rounded-[28px] p-[3px] bg-gradient-to-br from-[#1b274a] via-[#0b1a43] to-[#050c1d]">
                            <div className="rounded-[25px] bg-gradient-to-br from-[#0e1a3c] via-[#070d21] to-[#030712] p-6 sm:p-8 flex flex-col items-center gap-6 border border-[#15bffd]">
                                <div className="flex justify-center">
                                    <img
                                        src="/images/share.png"
                                        alt="Share"
                                        className="w-20 sm:w-24 h-auto"
                                    />
                                </div>
                                <h3 className="text-xl md:text-2xl font-bold text-[#15bffd] uppercase tracking-wide text-center">
                                    CHIA SẺ KINH NGHIỆM THỰC CHIẾN
                                </h3>
                                <p className="text-white text-sm md:text-base text-center leading-relaxed">
                                    NHẬN KIẾN THỨC, CHIẾN LƯỢC ĐẦU TƯ VÀ KINH DOANH CỦA CÁC CHUYÊN GIA
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    );
};

export default Community;


