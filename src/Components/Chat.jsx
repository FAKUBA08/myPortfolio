import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Send, MessageCircle } from 'lucide-react';
import { io } from 'socket.io-client';
import { publicRequest } from '../Shared/RequestApi';
import Styles from '../Styles/Chat.module.css';

function Chat({ isOpen, onClose }) {
  const [messages, setMessages] = useState([]);
  const [inputMessage, setInputMessage] = useState('');
  const [socket, setSocket] = useState(null);
  const [isConnected, setIsConnected] = useState(false);
  const messagesEndRef = useRef(null);
  const [userId] = useState(() => {
  const stored = localStorage.getItem('userId');
  if (stored) return stored;

  const newId = `user-${Date.now().toString(36)}`;
  localStorage.setItem('userId', newId);
  return newId;
});

  useEffect(() => {
    if (isOpen) {
const newSocket = io(
  import.meta.env.MODE === 'development'
    ? 'ws://localhost:3000'
    : 'wss://your-backend.onrender.com',
  {
    transports: ['websocket'],
    withCredentials: true, 
        query: { userId }
  }
);
      setSocket(newSocket);

      newSocket.on('connect', () => {
        setIsConnected(true);
        console.log('✅ Connected to server');
        newSocket.emit('admin-online');
      });

      newSocket.on('disconnect', () => {
        setIsConnected(false);
        console.log('❌ Disconnected from server');
      });

      newSocket.on('message', (data) => {
        const newMessage = {
          id: Date.now().toString(),
          text: data.text,
          sender: data.sender === 'user' ? 'other' : 'user',
          timestamp: new Date(data.timestamp)
        };
        setMessages((prev) => [...prev, newMessage]);
      });

      return () => {
        newSocket.close();
      };
    }
  }, [isOpen]);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  const handleSendMessage = async (e) => {
    e.preventDefault();
    if (inputMessage.trim() && socket && isConnected) {
      const newMessage = {
        id: Date.now().toString(),
        text: inputMessage,
        sender: 'user',
        timestamp: new Date()
      };

      // 1. Show message in UI
      setMessages((prev) => [...prev, newMessage]);

      // 2. Emit via socket
      socket.emit('message', {
        text: inputMessage,
        sender: 'user',
        timestamp: new Date().toISOString()
      });

      // 3. Send to backend API
      try {
        await publicRequest.post('/chat', {
          text: inputMessage,
          sender: 'user',
          timestamp: new Date().toISOString()
        });
        console.log("✅ Message sent to backend API");
      } catch (error) {
        console.error("❌ Failed to send to API:", error.message);
      }

      setInputMessage('');
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className={Styles.chatOverlay}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
        >
          <motion.div
            className={Styles.chatWindow}
            initial={{ scale: 0.8, y: 50 }}
            animate={{ scale: 1, y: 0 }}
            exit={{ scale: 0.8, y: 50 }}
            transition={{ duration: 0.3 }}
          >
            <div className={Styles.chatHeader}>
              <div className={Styles.headerInfo}>
                <MessageCircle size={20} />
                <span>Chat with Faruq</span>
                <div className={`${Styles.status} ${isConnected ? Styles.connected : Styles.disconnected}`}>
                  {isConnected ? 'Online' : 'Connecting...'}
                </div>
              </div>
              <button onClick={onClose} className={Styles.closeButton}>
                <X size={20} />
              </button>
            </div>

            <div className={Styles.chatMessages}>
              {messages.length === 0 ? (
                <div className={Styles.emptyState}>
                  <MessageCircle size={48} />
                  <p>Start a conversation!</p>
                </div>
              ) : (
                messages.map((message) => (
                  <motion.div
                    key={message.id}
                    className={`${Styles.message} ${
                      message.sender === 'user' ? Styles.userMessage : Styles.otherMessage
                    }`}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className={Styles.messageText}>{message.text}</div>
                    <div className={Styles.messageTime}>
                      {message.timestamp.toLocaleTimeString([], {
                        hour: '2-digit',
                        minute: '2-digit'
                      })}
                    </div>
                  </motion.div>
                ))
              )}
              <div ref={messagesEndRef} />
            </div>

            <form onSubmit={handleSendMessage} className={Styles.chatInputForm}>
              <input
                type="text"
                value={inputMessage}
                onChange={(e) => setInputMessage(e.target.value)}
                placeholder="Type your message..."
                className={Styles.chatInput}
                disabled={!isConnected}
              />
              <button
                type="submit"
                className={Styles.sendButton}
                disabled={!inputMessage.trim() || !isConnected}
              >
                <Send size={18} />
              </button>
            </form>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export default Chat;
