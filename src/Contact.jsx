import React, { useState } from 'react';
import { motion } from 'framer-motion';

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = e => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = e => {
    e.preventDefault();
    // اینجا می‌تونی به backend یا ایمیل وصلش کنی (الان صرفاً شبیه‌سازی)
    setSubmitted(true);
    setFormData({ name: '', email: 'mrvornexlinux@gmail.com', message: '' });
  };

  return (
    <motion.div
      className="contact"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      <h2>تماس با من</h2>
      {submitted && <div className="success-msg">پیام شما با موفقیت ارسال شد! ممنونم 😊</div>}
      <form onSubmit={handleSubmit} className="contact-form">
        <input
          type="text"
          name="name"
          placeholder="نام شما"
          value={formData.name}
          onChange={handleChange}
          required
        />
        <input
          type="email"
          name="email"
          placeholder="ایمیل شما"
          value={formData.email}
          onChange={handleChange}
          required
        />
        <textarea
          name="message"
          placeholder="پیام شما"
          value={formData.message}
          onChange={handleChange}
          required
          rows="5"
        ></textarea>
        <button type="submit" className="btn-primary">ارسال پیام</button>
      </form>
      <div className="contact-info">
        <h3>راه‌های ارتباطی</h3>
        <p>تلگرام: <a href="https://t.me/mr__vornex01" target="_blank" rel="noreferrer">@MR_VORNEX01</a></p>
        <p>اینستاگرام: <a href="https://instagram.com/vornex_01" target="_blank" rel="noreferrer">@vornex_01</a></p>
        <p>ایمیل: mrvornexlinux@gmail.com</p>
      </div>
    </motion.div>
  );
}