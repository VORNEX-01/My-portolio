import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';


export default function Home() {
  return (
    <motion.div 
      className="home"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      <h1 >سلام! من VΩRNEX01 هستم</h1>
      <p>برنامه‌نویس فرانت اند </p>
      <p>تخصص من: React, JavaScript , Tailwindcss, Css , Html </p>
        <Link to="/about"><button className="btn-primary"> درباره من بیشتر بدانید </button></Link>
      
    </motion.div>
  );
}
