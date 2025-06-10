import React from 'react';
import { motion } from 'framer-motion';

export default function About() {
  return (
    <motion.div
      className="about"
      initial={{ opacity: 0, x: -50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8 }}
    >
      <h2>درباره من</h2>
      <div className="about-content">
        <img 
          src="src/img/me.jpg" 
          alt="VΩRNEX-01" 
          className="profile-pic" 
        />
        <div className="about-text">
          <p>من محمدرضا هستم، با لقب VΩRNEX-01، برنامه‌نویس فرانت اند.</p>
          <p>علاقه‌مند به توسعه وب، امنیت سایبری و هوش مصنوعی.</p>
          <p>توی این مسیر، روی تکنولوژی‌های امنیتی ، آپدیت کردن توسعه وب و هوش مصنوعی تمرکز دارم و همیشه به دنبال یادگیری مهارت‌های جدیدم.</p>
          <p>رشته تحصیلیم : کامپیوتر(توسعه وب و بانک اطلاعاتی)</p>
        </div>
      </div>
    </motion.div>
  );
}