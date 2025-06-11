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
      <h1>vornex-01</h1>
      <div className="about-content">
        <img 
          src="src/img/me.jpg" 
          alt="VΩRNEX-01" 
          className="profile-pic w-full h-auto" 
        />
        <div className="about-text">
          <p>فعلا به عنوان برنامه نویس فرانت اند فریلنسری میکنم. </p>
          <p>علاقه‌مند به توسعه وب، امنیت سایبری و هوش مصنوعی.</p>
          <p>توی این مسیر، روی تکنولوژی‌های امنیتی ، آپدیت کردن توسعه وب و هوش مصنوعی تمرکز دارم و همیشه به دنبال یادگیری مهارت‌های جدیدم.</p>
          <p>رشته تحصیلی : کامپیوتر(توسعه وب و بانک اطلاعاتی)</p>
          <p>رشته ورزشی : کشتی</p>
        </div>
      </div>
    </motion.div>
  );
}
