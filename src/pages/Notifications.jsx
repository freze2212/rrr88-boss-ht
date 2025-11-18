import React from 'react';
import Layout from '../components/Layout.jsx';

const Notifications = () => {
    return (
        <Layout>
            <section className="py-12 text-white space-y-4">
                <h1 className="text-4xl font-bold mb-4">Thông báo</h1>
                <p className="text-slate-200 max-w-2xl">
                    Các thông báo mới nhất từ Hoàng Tùng VIP sẽ hiển thị tại đây. Vui lòng quay lại sau để xem cập nhật.
                </p>
            </section>
        </Layout>
    );
};

export default Notifications;


