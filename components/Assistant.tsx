'use client';

import React, { useState, useRef, useEffect } from 'react';
import { Send, User, Bot, Loader2, RefreshCw } from 'lucide-react';
import ReactMarkdown from 'react-markdown';
import { ai, SYSTEM_INSTRUCTION } from '@/lib/gemini';
import { motion, AnimatePresence } from 'motion/react';

interface Message {
  role: 'user' | 'assistant';
  content: string;
}

export function Assistant() {
  const [messages, setMessages] = useState<Message[]>([
    {
      role: 'assistant',
      content: 'Hi! I am your CivicGuide Assistant. How can I help you today? You can ask about voter registration, important deadlines, or how the election process works.',
    },
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages]);

  const handleSend = async () => {
    if (!input.trim() || isLoading) return;

    const userMessage = input.trim();
    setInput('');
    setMessages((prev) => [...prev, { role: 'user', content: userMessage }]);
    setIsLoading(true);

    try {
      const response = await ai.models.generateContent({
        model: 'gemini-3-flash-preview',
        contents: [
          ...messages.map(m => ({ role: m.role === 'assistant' ? 'model' : 'user', parts: [{ text: m.content }] })),
          { role: 'user', parts: [{ text: userMessage }] }
        ] as any,
        config: {
          systemInstruction: SYSTEM_INSTRUCTION,
        },
      });

      const aiResponse = response.text || "I'm sorry, I couldn't process that request.";
      setMessages((prev) => [...prev, { role: 'assistant', content: aiResponse }]);
    } catch (error) {
      console.error('Gemini API Error:', error);
      setMessages((prev) => [
        ...prev,
        { role: 'assistant', content: 'Connection error. Please check your environment variables or try again later.' },
      ]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div id="assistant" className="flex flex-col h-[700px] w-full max-w-4xl mx-auto bg-[#F9F8F6] border-2 border-[#1A1A1A] overflow-hidden shadow-2xl">
      <div className="bg-[#1A1A1A] p-8 text-white flex items-center justify-between">
        <div className="flex flex-col">
          <span className="text-[10px] font-black tracking-[0.4em] uppercase text-gray-400 mb-1">Inquiry Terminal 0.1</span>
          <h2 className="text-3xl font-serif font-black italic">The Navigator</h2>
        </div>
        <button 
          onClick={() => setMessages([{ role: 'assistant', content: 'Hi! I am your CivicGuide Assistant. How can I help you today?' }])}
          className="p-3 border border-white/20 hover:bg-white hover:text-[#1A1A1A] transition-all"
        >
          <RefreshCw className="w-5 h-5" />
        </button>
      </div>

      <div ref={scrollRef} className="flex-1 overflow-y-auto p-8 space-y-8 bg-white/50 backdrop-blur-sm">
        <AnimatePresence>
          {messages.map((message, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className={`flex ${message.role === 'user' ? 'justify-end' : 'justify-start'}`}
            >
              <div
                className={`max-w-[80%] p-6 ${
                  message.role === 'user'
                    ? 'bg-[#1A1A1A] text-white'
                    : 'bg-[#F9F8F6] text-[#1A1A1A] border-l-4 border-[#D22B2B]'
                }`}
              >
                <div className="flex items-center gap-2 mb-3 opacity-50 text-[10px] font-black uppercase tracking-widest">
                  {message.role === 'user' ? (
                    <>Citizen <User className="w-3 h-3" /></>
                  ) : (
                    <><Bot className="w-3 h-3" /> Navigator</>
                  )}
                </div>
                <div className="markdown-body text-base leading-relaxed font-serif italic">
                  <ReactMarkdown>{message.content}</ReactMarkdown>
                </div>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
        {isLoading && (
          <div className="flex justify-start">
            <div className="bg-[#F9F8F6] p-6 border border-[#1A1A1A] flex items-center gap-2 text-[#1A1A1A]">
              <Loader2 className="w-4 h-4 animate-spin" />
              <span className="text-[10px] font-black uppercase tracking-widest italic">Analyzing Documentation...</span>
            </div>
          </div>
        )}
      </div>

      <div className="p-8 bg-white border-t-2 border-[#1A1A1A]">
        <div className="relative flex items-center">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => e.key === 'Enter' && handleSend()}
            placeholder="What is your query?"
            className="w-full py-5 px-0 bg-transparent border-b-2 border-gray-200 focus:outline-none focus:border-[#D22B2B] text-xl font-serif italic transition-all placeholder:text-gray-300"
          />
          <button
            onClick={handleSend}
            disabled={isLoading}
            className="absolute right-0 flex items-center gap-2 text-[12px] font-black uppercase tracking-widest text-[#1A1A1A] hover:text-[#D22B2B] transition-colors disabled:opacity-30"
          >
            Submit <Send className="w-4 h-4" />
          </button>
        </div>
        <p className="mt-4 text-[9px] text-gray-400 text-center uppercase tracking-[0.3em] font-black">
          System Notice: Powered by Gemini Neural Models • Cross-referenced with Federal Datasets
        </p>
      </div>
    </div>
  );
}
