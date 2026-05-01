'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiPhone, FiMail, FiMapPin, FiClock, FiPlus, FiMinus, FiArrowRight } from 'react-icons/fi';
import { FaWhatsapp } from 'react-icons/fa';

// --- FAQ DATA ---
const faqs = [
  {
    question: 'Are your properties verified?',
    answer: 'Yes, all listings go through a strict verification process to ensure transparency and security for our clients.'
  },
  {
    question: 'Can I visit the site before investing?',
    answer: 'Absolutely, we arrange dedicated site visits for all serious buyers to ensure complete satisfaction.'
  },
  {
    question: 'Do you offer installment plans?',
    answer: 'Yes, many of our featured projects, like Capital Smart City and Sky Residency, offer flexible payment options.'
  }
];

export default function ContactPage() {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);
  
  // Form State
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    message: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Thank you for reaching out! We will contact you shortly.');
    setFormData({ name: '', phone: '', email: '', message: '' });
  };

  const toggleFaq = (index: number) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  return (
    <main className="min-h-screen bg-background text-foreground pt-24 pb-16">
      
      {/* 1. PAGE HEADER (Hero Lite) — always dark overlay for visual impact */}
      <section className="relative w-full flex items-center justify-center min-h-[40vh] px-6 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-neutral-800 via-black to-black opacity-60" />
        
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="relative z-10 text-center max-w-3xl mx-auto"
        >
          <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight text-white">
            Contact Us
          </h1>
          <p className="text-lg md:text-xl text-gray-400 font-light">
            Get in touch with Sardar Estate for trusted real estate guidance.
          </p>
        </motion.div>
      </section>

      {/* 2. CONTACT INFORMATION SECTION */}
      <section className="max-w-7xl mx-auto px-6 -mt-12 relative z-20 mb-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          
          {/* Phone Card */}
          <motion.div 
            whileHover={{ y: -5 }}
            className="bg-card border border-border rounded-2xl p-8 flex flex-col items-center text-center transition-all duration-300 hover:border-foreground/20 hover:shadow-xl"
          >
            <div className="w-16 h-16 rounded-full bg-card border border-border flex items-center justify-center mb-6">
              <FiPhone size={28} />
            </div>
            <h3 className="text-xl font-bold mb-2">Phone</h3>
            <p className="text-muted font-medium">+92 316 9205409</p>
          </motion.div>

          {/* Email Card */}
          <motion.div 
            whileHover={{ y: -5 }}
            className="bg-card border border-border rounded-2xl p-8 flex flex-col items-center text-center transition-all duration-300 hover:border-foreground/20 hover:shadow-xl"
          >
            <div className="w-16 h-16 rounded-full bg-card border border-border flex items-center justify-center mb-6">
              <FiMail size={28} />
            </div>
            <h3 className="text-xl font-bold mb-2">Email</h3>
            <a href="mailto:info@sardarestate.com" className="text-muted font-medium hover:text-foreground transition-colors">
              info@sardarestate.com
            </a>
          </motion.div>

          {/* Location Card */}
          <motion.div 
            whileHover={{ y: -5 }}
            className="bg-card border border-border rounded-2xl p-8 flex flex-col items-center text-center transition-all duration-300 hover:border-foreground/20 hover:shadow-xl"
          >
            <div className="w-16 h-16 rounded-full bg-card border border-border flex items-center justify-center mb-6">
              <FiMapPin size={28} />
            </div>
            <h3 className="text-xl font-bold mb-2">Office Location</h3>
            <p className="text-muted font-medium mb-1">Abbottabad, Pakistan</p>
            <div className="flex items-center gap-2 text-sm text-muted-foreground mt-2">
              <FiClock size={14} />
              <span>Mon - Sat | 10 AM - 6 PM</span>
            </div>
          </motion.div>

        </div>
      </section>

      {/* 3. MAIN CONTACT SECTION (FORM + MAP) */}
      <section className="max-w-7xl mx-auto px-6 mb-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8">
          
          {/* LEFT: FORM */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-card border border-border rounded-3xl p-8 md:p-10"
          >
            <h2 className="text-3xl font-bold mb-8">Send a Message</h2>
            
            <form onSubmit={handleSubmit} className="flex flex-col gap-6">
              <div className="flex flex-col gap-2">
                <label htmlFor="name" className="text-sm text-muted ml-2">Full Name *</label>
                <input 
                  type="text" id="name" name="name" required
                  value={formData.name} onChange={handleInputChange}
                  className="w-full bg-input border border-input-border text-foreground rounded-xl px-5 py-4 focus:outline-none focus:border-foreground/40 focus:ring-1 focus:ring-foreground/40 transition-all"
                  placeholder="John Doe"
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="flex flex-col gap-2">
                  <label htmlFor="phone" className="text-sm text-muted ml-2">Phone Number *</label>
                  <input 
                    type="tel" id="phone" name="phone" required
                    value={formData.phone} onChange={handleInputChange}
                    className="w-full bg-input border border-input-border text-foreground rounded-xl px-5 py-4 focus:outline-none focus:border-foreground/40 focus:ring-1 focus:ring-foreground/40 transition-all"
                    placeholder="+92 3XX XXXXXXX"
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <label htmlFor="email" className="text-sm text-muted ml-2">Email (Optional)</label>
                  <input 
                    type="email" id="email" name="email"
                    value={formData.email} onChange={handleInputChange}
                    className="w-full bg-input border border-input-border text-foreground rounded-xl px-5 py-4 focus:outline-none focus:border-foreground/40 focus:ring-1 focus:ring-foreground/40 transition-all"
                    placeholder="john@example.com"
                  />
                </div>
              </div>

              <div className="flex flex-col gap-2">
                <label htmlFor="message" className="text-sm text-muted ml-2">Message *</label>
                <textarea 
                  id="message" name="message" rows={4} required
                  value={formData.message} onChange={handleInputChange}
                  className="w-full bg-input border border-input-border text-foreground rounded-xl px-5 py-4 focus:outline-none focus:border-foreground/40 focus:ring-1 focus:ring-foreground/40 transition-all resize-none"
                  placeholder="How can we help you?"
                />
              </div>

              <button 
                type="submit"
                className="w-full mt-4 bg-foreground text-background font-bold text-lg rounded-xl py-4 flex items-center justify-center gap-2 hover:opacity-90 transition-colors group"
              >
                Send Message
                <FiArrowRight className="group-hover:translate-x-1 transition-transform" />
              </button>

              <p className="text-xs text-center text-muted-foreground mt-2">
                Your information is secure and will not be shared with third parties.
              </p>
            </form>
          </motion.div>

          {/* RIGHT: INFO / MAP */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex flex-col gap-6"
          >
            <div className="w-full h-[400px] lg:h-full min-h-[400px] rounded-3xl overflow-hidden border border-border bg-card relative group">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d105634.33129881643!2d73.15814513220455!3d34.16819441113063!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38de3111557ac517%3A0x6e59a435cb49cb23!2sAbbottabad%2C%20Khyber%20Pakhtunkhwa%2C%20Pakistan!5e0!3m2!1sen!2s!4v1700000000000!5m2!1sen!2s" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }}
                allowFullScreen 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                className="opacity-80 group-hover:opacity-100 transition-opacity duration-500"
              />
            </div>
            
            <div className="bg-card border border-border rounded-2xl p-6 flex items-start gap-4">
              <div className="p-3 bg-card border border-border rounded-full shrink-0">
                <FiMapPin size={20} />
              </div>
              <div>
                <h4 className="text-lg font-bold mb-1">Visit Our Office</h4>
                <p className="text-muted text-sm">
                  We welcome you to visit our office for an in-person consultation, property guidance, and to review exclusive investment portfolios over a cup of coffee.
                </p>
              </div>
            </div>
          </motion.div>

        </div>
      </section>

      {/* 4. QUICK CONTACT CTA */}
      <section className="max-w-5xl mx-auto px-6 mb-24">
        <div className="bg-gradient-to-r from-blue-900/20 via-card to-background border border-accent/20 rounded-3xl p-10 text-center relative overflow-hidden">
          <h2 className="text-3xl font-bold mb-8 relative z-10">
            Need Immediate Assistance?
          </h2>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 relative z-10">
            <a 
              href="tel:+923169205409"
              className="w-full sm:w-auto flex items-center justify-center gap-3 px-8 py-4 bg-transparent border border-foreground text-foreground font-bold rounded-full hover:bg-foreground hover:text-background transition-colors"
            >
              <FiPhone size={20} />
              Call Now
            </a>
            
            <a 
              href="https://wa.me/923169205409?text=Hello%20Sardar%20Estate%2C%20I%20would%20like%20to%20know%20more%20about%20your%20real%20estate%20projects."
              target="_blank" rel="noreferrer"
              className="w-full sm:w-auto flex items-center justify-center gap-3 px-8 py-4 bg-[#25D366] text-white font-bold rounded-full hover:bg-[#20b858] transition-colors shadow-[0_0_20px_rgba(37,211,102,0.3)] hover:shadow-[0_0_30px_rgba(37,211,102,0.5)]"
            >
              <FaWhatsapp size={22} />
              WhatsApp Us
            </a>
          </div>
        </div>
      </section>

      {/* 5. FAQ SECTION */}
      <section className="max-w-3xl mx-auto px-6 mb-24">
        <h2 className="text-3xl font-bold text-center mb-10">Frequently Asked Questions</h2>
        
        <div className="flex flex-col gap-4">
          {faqs.map((faq, index) => (
            <div 
              key={index} 
              className="border border-border bg-card rounded-2xl overflow-hidden transition-all duration-300 hover:border-foreground/20"
            >
              <button 
                onClick={() => toggleFaq(index)}
                className="w-full px-6 py-5 flex items-center justify-between text-left focus:outline-none"
              >
                <span className="text-lg font-medium">{faq.question}</span>
                <span className="text-muted-foreground shrink-0 ml-4">
                  {openFaqIndex === index ? <FiMinus size={20} /> : <FiPlus size={20} />}
                </span>
              </button>
              
              <AnimatePresence>
                {openFaqIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="px-6 pb-6 text-muted">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </section>

      {/* 6. FINAL TRUST SECTION */}
      <section className="w-full flex justify-center pb-8 border-t border-border pt-16 mt-8">
        <div className="max-w-2xl px-6 text-center">
          <p className="text-muted-foreground font-light leading-relaxed">
            Sardar Estate is committed to providing reliable and transparent real estate solutions. 
            <span className="block mt-2 font-medium text-muted">Your trust is our highest priority.</span>
          </p>
        </div>
      </section>
      
    </main>
  );
}
