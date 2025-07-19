import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Send, MessageCircle, ExternalLink } from 'lucide-react';
import styles from '../Styles/Chat.module.css';
import { useNavigate } from 'react-router-dom';

function Chat({ isOpen, onClose, onContactRedirect }) {
  const [messages, setMessages] = useState([]);
  const [inputMessage, setInputMessage] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef(null);
  const navigate = useNavigate();

 const aiResponses = {
    greeting: [
      "Hello! I'm here to help you learn about our web development services. What would you like to know?",
      "Hi there! I can tell you about our expertise in building websites and web applications. How can I assist you?",
      "Welcome! I'm ready to answer your questions about our development services. What interests you?"
    ],
    services: [
      "We specialize in building modern websites and web applications using cutting-edge technologies like React, Next.js, TypeScript, and Node.js. We create everything from simple landing pages to complex web applications.",
      "Our services include custom website development, web application development, e-commerce solutions, API development, and database design. We focus on creating fast, responsive, and user-friendly digital experiences.",
      "We offer full-stack development services including frontend development with React/Next.js, backend development with Node.js, database design, and deployment solutions."
    ],
    technologies: [
      "We work with modern technologies including React, Next.js, TypeScript, Node.js, MongoDB, Tailwind CSS, and various cloud platforms like AWS and Vercel.",
      "Our tech stack includes frontend frameworks like React and Next.js, backend technologies like Node.js and Express, databases like MongoDB, and modern tools like TypeScript and Tailwind CSS.",
      "We use industry-leading technologies: React for dynamic UIs, Next.js for performance, TypeScript for reliability, Node.js for backend, and modern deployment platforms for scalability."
    ],
    experience: [
      "We have years of experience building web solutions for various industries including e-commerce, healthcare, finance, and education. Each project is tailored to meet specific business requirements.",
      "Our portfolio includes diverse projects from startup MVPs to enterprise applications. We've helped businesses of all sizes establish their digital presence and grow online.",
      "We've successfully delivered numerous web projects, ranging from corporate websites to complex web applications with thousands of users."
    ],
    process: [
      "Our development process starts with understanding your requirements, followed by design and planning, development, testing, and deployment. We maintain clear communication throughout the project.",
      "We follow an agile development approach with regular updates and feedback sessions. The process includes discovery, wireframing, design, development, testing, and launch.",
      "We believe in collaborative development. After initial consultation, we create prototypes, develop iteratively with your feedback, and ensure everything meets your expectations before launch."
    ],
    pricing: [
      "Project pricing depends on complexity, features, and timeline. We offer competitive rates and work within various budgets. Let's discuss your specific needs to provide an accurate quote.",
      "We provide transparent pricing based on project scope. Costs vary depending on functionality, design complexity, and development time. We're happy to discuss budget-friendly options.",
      "Our pricing is project-based and depends on your requirements. We offer flexible payment options and can work with different budget ranges."
    ],
    contact: [
      "I'd love to discuss your project in detail! Let me redirect you to our contact page where you can share your requirements and get a personalized quote.",
      "That sounds like an exciting project! Our contact page has all the information you need to get started. Let me take you there.",
      "Perfect! It would be great to learn more about your specific needs. I'll redirect you to our contact page where you can tell us about your project."
    ]
  };

  const keywordMatcher = {
    websiteProject: /\b(website|web app|application|build|create|develop|project|need|want)\b/i,
    services: /\b(services|what do you do|capabilities|offer|specialize)\b/i,
    technologies: /\b(technology|tech stack|tools|frameworks|languages|react|next|node)\b/i,
    experience: /\b(experience|portfolio|examples|projects|work|clients)\b/i,
    process: /\b(process|how|workflow|methodology|approach|timeline)\b/i,
    pricing: /\b(price|cost|budget|quote|estimate|fee|rate)\b/i,
    greeting: /\b(hello|hi|hey|good morning|good afternoon|good evening)\b/i
  };

  const getRandomResponse = (responses) => responses[Math.floor(Math.random() * responses.length)];

  const detectIntent = (message) => {
    const lowerMessage = message.toLowerCase();
    if (keywordMatcher.websiteProject.test(lowerMessage)) return 'contact';
    if (keywordMatcher.services.test(lowerMessage)) return 'services';
    if (keywordMatcher.technologies.test(lowerMessage)) return 'technologies';
    if (keywordMatcher.experience.test(lowerMessage)) return 'experience';
    if (keywordMatcher.process.test(lowerMessage)) return 'process';
    if (keywordMatcher.pricing.test(lowerMessage)) return 'pricing';
    if (keywordMatcher.greeting.test(lowerMessage)) return 'greeting';
    return 'services';
  };

  const generateAiResponse = (userMessage) => {
    const intent = detectIntent(userMessage);
    const isContactIntent = intent === 'contact';

    const responseText = isContactIntent
      ? getRandomResponse(aiResponses.contact)
      : getRandomResponse(aiResponses[intent] || aiResponses.services);

    return {
      id: Date.now().toString() + '-ai',
      text: responseText,
      sender: 'ai',
      timestamp: new Date(),
      isContactRedirect: isContactIntent
    };
  };

  const simulateTyping = () =>
    new Promise((resolve) => {
      setIsTyping(true);
      const typingDuration = Math.random() * 1500 + 500;
      setTimeout(() => {
        setIsTyping(false);
        resolve();
      }, typingDuration);
    });

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, isTyping]);

  useEffect(() => {
    if (isOpen && messages.length === 0) {
      const welcomeMessage = {
        id: 'welcome',
        text: "Hello! I'm your AI assistant. I can help answer questions about our web development services. If you're looking to build a website or web application, just let me know and I'll connect you with our team!",
        sender: 'ai',
        timestamp: new Date()
      };
      setMessages([welcomeMessage]);
    }
  }, [isOpen]);

  const handleSendMessage = async (e) => {
    e.preventDefault();
    if (!inputMessage.trim()) return;

    const userMessage = {
      id: Date.now().toString(),
      text: inputMessage,
      sender: 'user',
      timestamp: new Date()
    };

    setMessages((prev) => [...prev, userMessage]);
    setInputMessage('');

    await simulateTyping();

    const aiResponse = generateAiResponse(inputMessage);
    setMessages((prev) => [...prev, aiResponse]);

    if (aiResponse.isContactRedirect && onContactRedirect) {
      setTimeout(() => {
        onContactRedirect();
        onClose();
      }, 2000);
    }
  };

  const handleContactRedirect = () => {
    if (onContactRedirect) {
      onContactRedirect();
      onClose();
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className={styles.chatOverlay}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
        >
          <motion.div
            className={styles.chatWindow}
            initial={{ scale: 0.8, y: 50 }}
            animate={{ scale: 1, y: 0 }}
            exit={{ scale: 0.8, y: 50 }}
            transition={{ duration: 0.3 }}
          >
            {/* Header */}
            <div className={styles.chatHeader}>
              <div className={styles.headerInfo}>
                <div style={{ padding: '0.5rem', background: 'rgba(102, 126, 234, 0.1)', borderRadius: '0.75rem' }}>
                  <MessageCircle size={20} color="white" />
                </div>
                <div>
                  <h3>AI Assistant</h3>
                  <span className={`${styles.status} ${styles.connected}`}>Online</span>
                </div>
              </div>
              <button className={styles.closeButton} onClick={onClose} aria-label="Close chat">
                <X size={20} color="white" />
              </button>
            </div>

            {/* Messages */}
            <div className={styles.chatMessages}>
              {messages.length === 0 && (
                <div className={styles.emptyState}>
                  <p>No messages yet. Say hi!</p>
                </div>
              )}
              {messages.map((message) => {
                const isUser = message.sender === 'user';
                return (
                  <motion.div
                    key={message.id}
                    className={`${styles.message} ${isUser ? styles.userMessage : styles.otherMessage}`}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className={styles.messageText}>
                      <p>{message.text}</p>
                      {message.isContactRedirect && (
                        <button
                          className={styles.sendButton1}
                           onClick={()=>navigate('/contact')}
                          type="button"
                        >
                          Go to Contact Page <ExternalLink size={18} />
                        </button>
                      )}
                      <div className={styles.messageTime}>
                        {message.timestamp.toLocaleTimeString([], {
                          hour: '2-digit',
                          minute: '2-digit'
                        })}
                      </div>
                    </div>
                  </motion.div>
                );
              })}

              {isTyping && (
                <motion.div
                  className={styles.otherMessage}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                >
                  <div className={styles.messageText} style={{ display: 'flex', gap: '0.25rem' }}>
                    <div className={`${styles.typingDot} ${styles.bounce}`} />
                    <div className={`${styles.typingDot} ${styles.bounce}`} style={{ animationDelay: '0.1s' }} />
                    <div className={`${styles.typingDot} ${styles.bounce}`} style={{ animationDelay: '0.2s' }} />
                  </div>
                </motion.div>
              )}

              <div ref={messagesEndRef} />
            </div>

            {/* Input */}
            <form onSubmit={handleSendMessage} className={styles.chatInputForm}>
              <input
                type="text"
                value={inputMessage}
                onChange={(e) => setInputMessage(e.target.value)}
                placeholder="Ask me anything about our services..."
                className={styles.chatInput}
              />
              <button
                type="submit"
                disabled={!inputMessage.trim()}
                className={styles.sendButton}
                aria-label="Send message"
              >
                <Send size={20} color="white" />
              </button>
            </form>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export default Chat;
