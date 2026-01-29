import React, { useState } from 'react';
import { MessageSquare, Mail, MapPin, Phone, Facebook, Instagram, Globe, Youtube } from 'lucide-react';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        title: '',
        message: ''
    });

    const whatsappNumbers = ["+2349123335309", "+2347031517609"];

    const handleWhatsAppRedirect = (e) => {
        e.preventDefault();
        const fullMessage = `*New Inquiry*%0A*Name:* ${formData.name}%0A*Email:* ${formData.email}%0A*Subject:* ${formData.title}%0A*Message:* ${formData.message}`;
        const url = `https://wa.me/${whatsappNumbers[0]}?text=${fullMessage}`;
        window.open(url, '_blank');
    };

    return (
        <div className="py-20 bg-background">
            <div className="max-w-7xl mx-auto px-4">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
                    
                    {/* Information Side */}
                    <div>
                        <h1 className="text-5xl font-bold text-secondary mb-8">Reach Out <span className="text-primary">to Us</span></h1>
                        <p className="text-muted text-lg mb-12">
                            Whether you're a fan, an aspiring contestant, or a potential partner, we’d love to hear from you.
                        </p>

                        <div className="space-y-8 mb-12">
                            <div className="flex items-start space-x-5">
                                <div className="bg-primary/10 p-3 rounded-xl text-primary"><MapPin /></div>
                                <div>
                                    <h4 className="font-bold text-secondary">Office Address</h4>
                                    <p className="text-muted">Plot C3 Rumuogba Artillery, PH/Aba Expressway, Port Harcourt.</p>
                                </div>
                            </div>
                            <div className="flex items-start space-x-5">
                                <div className="bg-primary/10 p-3 rounded-xl text-primary"><Phone /></div>
                                <div>
                                    <h4 className="font-bold text-secondary">Phone Lines</h4>
                                    <p className="text-muted">{whatsappNumbers[0]}</p>
                                    <p className="text-muted">+2347031517609</p>
                                </div>
                            </div>
                            <div className="flex items-start space-x-5">
                                <div className="bg-primary/10 p-3 rounded-xl text-primary"><Mail /></div>
                                <div>
                                    <h4 className="font-bold text-secondary">Email Address</h4>
                                    <p className="text-muted">info@theculinaryjourney9ja.org.ng</p>
                                </div>
                            </div>
                        </div>

                        {/* Social Handles */}
                        <div>
                            <h4 className="font-bold text-secondary mb-4 uppercase tracking-widest text-sm">Follow the Journey</h4>
                            <div className="flex space-x-4">
                                <a href="https://www.facebook.com/share/17Tf4bxoTf/" target="_blank" rel="noopener noreferrer" className="w-12 h-12 bg-secondary text-primary rounded-full flex items-center justify-center hover:bg-primary hover:text-secondary transition shadow-lg"><Facebook /></a>
                                <a href="https://www.instagram.com/theculinaryjourney9ja?igsh=dHp3cjBkN2Y1D2l4" target="_blank" rel="noopener noreferrer" className="w-12 h-12 bg-secondary text-primary rounded-full flex items-center justify-center hover:bg-primary hover:text-secondary transition shadow-lg"><Instagram /></a>
				{/* <a href="https://www.facebook.com/share/17Tf4bxoTf/" target="_blank" rel="noopener noreferrer" className="w-12 h-12 bg-secondary text-primary rounded-full flex items-center justify-center hover:bg-primary hover:text-secondary transition shadow-lg"><Youtube /></a> */}
                                <a href="https://www.theculinaryjourney9ja.org.ng" target="_blank" rel="noopener noreferrer" className="w-12 h-12 bg-secondary text-primary rounded-full flex items-center justify-center hover:bg-primary hover:text-secondary transition shadow-lg"><Globe /></a>
                            </div>
                        </div>
                    </div>

                    {/* WhatsApp Form Side */}
                    <div className="bg-white p-10 md:p-14 rounded-[3rem] shadow-2xl border border-gray-50">
                        <div className="mb-8">
                            <h2 className="text-3xl font-bold text-secondary mb-2">Send a Message</h2>
                            <p className="text-muted">This form will open WhatsApp on your device.</p>
                        </div>
                        <form onSubmit={handleWhatsAppRedirect} className="space-y-6">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div>
                                    <label className="block text-sm font-bold text-secondary mb-2 uppercase tracking-tight">Full Name</label>
                                    <input 
                                        type="text" required className="w-full px-4 py-4 rounded-xl border border-gray-200 focus:ring-2 focus:ring-primary outline-none"
                                        onChange={(e) => setFormData({...formData, name: e.target.value})}
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-bold text-secondary mb-2 uppercase tracking-tight">Email Address</label>
                                    <input 
                                        type="email" required className="w-full px-4 py-4 rounded-xl border border-gray-200 focus:ring-2 focus:ring-primary outline-none"
                                        onChange={(e) => setFormData({...formData, email: e.target.value})}
                                    />
                                </div>
                            </div>
                            <div>
                                <label className="block text-sm font-bold text-secondary mb-2 uppercase tracking-tight">Subject / Title</label>
                                <input 
                                    type="text" required className="w-full px-4 py-4 rounded-xl border border-gray-200 focus:ring-2 focus:ring-primary outline-none"
                                    placeholder="e.g. Partnership Inquiry"
                                    onChange={(e) => setFormData({...formData, title: e.target.value})}
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-bold text-secondary mb-2 uppercase tracking-tight">Your Message</label>
                                <textarea 
                                    required rows="4" className="w-full px-4 py-4 rounded-xl border border-gray-200 focus:ring-2 focus:ring-primary outline-none resize-none"
                                    onChange={(e) => setFormData({...formData, message: e.target.value})}
                                />
                            </div>
                            <button 
                                type="submit" 
                                className="w-full bg-accent text-white py-5 rounded-2xl font-bold text-lg hover:bg-green-900 transition flex items-center justify-center space-x-3 shadow-xl shadow-accent/20"
                            >
                                <MessageSquare />
                                <span>Send to WhatsApp</span>
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;