import React, { useState, useEffect, useRef } from 'react';
import { ChatMessage } from '../types';
import { MessageSquare, X, Send, User } from 'lucide-react';

export const ChatWidget: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      id: '1',
      sender: 'admin',
      text: 'Selamat datang di Layanan Bantuan Pelanggan resmi PT Gerbang Masa Depan (Ousevoid). Ada yang dapat kami bantu mengenai produk, garansi, atau pelacakan pesanan Anda?',
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    }
  ]);
  const [inputText, setInputText] = useState('');
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    if (isOpen) scrollToBottom();
  }, [messages, isOpen]);

  const handleSendMessage = (e?: React.FormEvent) => {
    if (e) e.preventDefault();
    if (!inputText.trim()) return;

    const userMsgText = inputText.trim();
    setInputText('');

    const newMsg: ChatMessage = {
      id: Date.now().toString(),
      sender: 'user',
      text: userMsgText,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    };

    setMessages((prev) => [...prev, newMsg]);

    // Simulated Agent AI response
    setTimeout(() => {
      let replyText = 'Terima kasih atas pesan Anda. Customer Support Marsya siap membantu. Silakan infokan nomor invoice atau pertanyaan lengkap Anda.';
      const lower = userMsgText.toLowerCase();

      if (lower.includes('garansi')) {
        replyText = 'Seluruh produk Ousevoid memiliki Garansi Resmi Produsen selama 3 Bulan untuk cacat pabrik.';
      } else if (lower.includes('lacak') || lower.includes('resi') || lower.includes('posisi')) {
        replyText = 'Anda dapat melacak status posisi logistik paket melalui menu "Pelacakan Pesanan" dengan memasukkan No. Invoice Anda.';
      } else if (lower.includes('ongkir') || lower.includes('kirim') || lower.includes('sameday')) {
        replyText = 'Untuk Jabodetabek tersedia layanan Gamoon e-Package Sameday Priority dengan durasi maksimal 8 jam!';
      }

      setMessages((prev) => [
        ...prev,
        {
          id: (Date.now() + 1).toString(),
          sender: 'admin',
          text: replyText,
          timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
        }
      ]);
    }, 1000);
  };

  return (
    <>
      {/* Floating Chat Trigger Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-6 right-6 z-40 w-14 h-14 bg-neutral-900 text-white rounded-full shadow-2xl flex items-center justify-center hover:scale-105 active:scale-95 transition-all group"
        aria-label="Customer Support Chat"
      >
        <MessageSquare className="w-6 h-6 group-hover:rotate-12 transition-transform" />
        <span className="absolute -top-1 -right-1 w-3.5 h-3.5 bg-emerald-500 rounded-full border-2 border-white animate-pulse" />
      </button>

      {/* Chat Window */}
      {isOpen && (
        <div className="fixed bottom-24 right-4 sm:right-6 z-40 w-[calc(100vw-32px)] sm:w-[360px] h-[480px] bg-white rounded-3xl shadow-2xl border border-neutral-200/80 flex flex-col overflow-hidden animate-scale-in">
          {/* Header */}
          <div className="p-4 bg-neutral-900 text-white flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="relative">
                <img
                  src="https://i.ibb.co.com/TDzbDzqw/file-000000009a788208b767f7ea331a78c5.png"
                  alt="Marsya"
                  className="w-9 h-9 rounded-full object-cover border border-white/20"
                />
                <span className="absolute bottom-0 right-0 w-2.5 h-2.5 bg-emerald-400 rounded-full border border-neutral-900" />
              </div>
              <div>
                <div className="text-xs font-extrabold text-white leading-tight">
                  Marsya (Support Agent)
                </div>
                <div className="text-[10px] text-emerald-400 font-semibold">
                  Online • PT Gerbang Masa Depan
                </div>
              </div>
            </div>

            <button
              onClick={() => setIsOpen(false)}
              className="p-1.5 rounded-full text-neutral-400 hover:text-white hover:bg-neutral-800 transition-colors"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          {/* Messages Container */}
          <div className="flex-1 overflow-y-auto p-4 bg-neutral-50/50 space-y-3 text-xs">
            {messages.map((msg) => {
              const isAdmin = msg.sender === 'admin';
              return (
                <div
                  key={msg.id}
                  className={`flex flex-col ${isAdmin ? 'items-start' : 'items-end'}`}
                >
                  <div
                    className={`max-w-[82%] px-3.5 py-2.5 rounded-2xl leading-relaxed font-medium shadow-2xs ${
                      isAdmin
                        ? 'bg-neutral-900 text-white rounded-tl-xs'
                        : 'bg-neutral-200 text-neutral-900 rounded-tr-xs'
                    }`}
                  >
                    {msg.text}
                  </div>
                  <span className="text-[9px] font-semibold text-neutral-400 mt-1 px-1">
                    {msg.timestamp}
                  </span>
                </div>
              );
            })}
            <div ref={messagesEndRef} />
          </div>

          {/* Input Area */}
          <form onSubmit={handleSendMessage} className="p-3 bg-white border-t border-neutral-100 flex gap-2">
            <input
              type="text"
              placeholder="Ketik pesan Anda..."
              value={inputText}
              onChange={(e) => setInputText(e.target.value)}
              className="flex-1 px-4 py-2.5 rounded-2xl border border-neutral-200 bg-neutral-50 text-xs font-medium focus:bg-white focus:border-neutral-900 focus:outline-hidden transition-all"
            />
            <button
              type="submit"
              className="p-2.5 rounded-2xl bg-neutral-900 text-white hover:bg-neutral-800 transition-colors shadow-xs active:scale-95"
            >
              <Send className="w-4 h-4" />
            </button>
          </form>
        </div>
      )}
    </>
  );
};
