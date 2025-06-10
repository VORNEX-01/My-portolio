import React , { useState } from "react";
import { FaTelegramPlane, FaInstagram, FaLinkedin } from "react-icons/fa";
import { motion } from 'framer-motion';

const Socials = () => {
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
    <div className="p-6 text-white">
      <h2 className="text-3xl font-bold mb-6">شبکه‌های اجتماعی 📱</h2>
      <ul className="space-y-4">
        <li className="flex items-center gap-3">
          <FaTelegramPlane className="text-blue-400 text-2xl" />
          <a href="https://t.me/MR_VORNEX01" target="_blank" rel="noopener noreferrer">تلگرام من</a>
        </li>
        <li className="flex items-center gap-3">
          <FaInstagram className="text-pink-400 text-2xl" />
          <a href="https://instagram.com/vornex01" target="_blank" rel="noopener noreferrer">اینستاگرام من</a>
        </li>
        <li className="flex items-center gap-3">
          <FaLinkedin className="text-blue-600 text-2xl" />
          <a href="" target="_blank" rel="noopener noreferrer">لینکدین من</a>
        </li>
        <li>
          <p>ایمیل: mrvornexlinux@gmail.com</p>
        </li>
      </ul>
      <div>
        <motion.div
              className="contact"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2> پیام به من</h2>
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
            </motion.div>
      </div>
    </div>
  );
};



export default Socials;