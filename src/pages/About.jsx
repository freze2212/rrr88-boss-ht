import React from 'react';
import Layout from '../components/Layout.jsx';

const About = () => {
    return (
        <Layout>
            <section className="py-12 text-white">
                <h1 className="text-4xl font-bold mb-4">Giới thiệu</h1>
                <p className="text-slate-200 max-w-2xl">
                    Nội dung giới thiệu sẽ được cập nhật sau. Đây là khu vực để bạn mô tả tổng quan về hệ thống Hoàng Tùng VIP.
                </p>
            </section>
        </Layout>
    );
};

export default About;

