import React, { useState } from 'react';
import { motion } from 'framer-motion';
import "./App.css"

export default function Testimonials() {
  const [comments, setComments] = useState([
    { id: 1, name: 'علی', text: 'کار با vornex عالی بود، خیلی حرفه‌ای و دقیق!' },
    { id: 2, name: 'سمیرا', text: 'تو کارش خیلی حرفه ایه ' },
    { id: 3, name: 'فاطمه ', text: 'عالی و کاربلد مثل همیشه😊❤' },
  ]);
  const [form, setForm] = useState({ name: '', text: '' });

  const handleChange = e => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = e => {
    e.preventDefault();
    if(form.name && form.text) {
      setComments([...comments, { id: Date.now(), name: form.name, text: form.text }]);
      setForm({ name: '', text: '' });
    }
  };

  return (
    <motion.div
      className="testimonials"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      <h2>نظرات کاربران</h2>
      <ul className="comments-list">
        {comments.map(comment => (
          <li key={comment.id} className="comment-item">
            <strong>{comment.name}:</strong> {comment.text}
          </li>
        ))}
      </ul>
      <form onSubmit={handleSubmit} className="testimonial-form">
        <input
          type="text"
          name="name"
          placeholder="نام شما"
          value={form.name}
          onChange={handleChange}
          required
        />
        <textarea
          name="text"
          placeholder="نظر شما"
          value={form.text}
          onChange={handleChange}
          required
          rows="4"
        ></textarea>
        <button type="submit" className="btn-primary">ثبت نظر</button>
      </form>
    </motion.div>
  );
}