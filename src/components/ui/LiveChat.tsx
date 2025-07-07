import React, { useState } from 'react';
import { MessageSquare, X } from 'lucide-react';

const LiveChat: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [message, setMessage] = useState('');
  const [chatMessages, setChatMessages] = useState<{ text: string; isUser: boolean }[]>([
    { text: 'Hi there! How can I help you with SAB integration?', isUser: false },
  ]);

  const toggleChat = () => {
    setIsOpen(!isOpen);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!message.trim()) return;
    
    // Add user message
    const newMessage = { text: message, isUser: true };
    setChatMessages([...chatMessages, newMessage]);
    setMessage('');
    
    // Simulate response after a delay
    setTimeout(() => {
      setChatMessages(prev => [
        ...prev, 
        { 
          text: "Thanks for reaching out! Our team will get back to you shortly. For immediate assistance, please call our support line.", 
          isUser: false 
        }
      ]);
    }, 1000);
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {isOpen ? (
        <div className="bg-white rounded-lg shadow-xl w-80 sm:w-96 flex flex-col overflow-hidden transition-all duration-300 max-h-[500px]">
          <div className="bg-blue-700 text-white p-4 flex justify-between items-center">
            <h3 className="font-semibold">Live Support</h3>
            <button 
              onClick={toggleChat}
              className="text-white hover:text-gray-200 transition-colors"
              aria-label="Close chat"
            >
              <X size={20} />
            </button>
          </div>
          
          <div className="flex-1 p-4 overflow-y-auto max-h-80 flex flex-col space-y-3">
            {chatMessages.map((msg, index) => (
              <div 
                key={index} 
                className={`p-3 rounded-lg max-w-[80%] ${
                  msg.isUser 
                    ? 'bg-blue-100 ml-auto' 
                    : 'bg-gray-100 mr-auto'
                }`}
              >
                {msg.text}
              </div>
            ))}
          </div>
          
          <form onSubmit={handleSubmit} className="border-t border-gray-200 p-4">
            <div className="flex space-x-2">
              <input
                type="text"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className="flex-1 border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Type your message..."
              />
              <button 
                type="submit"
                className="bg-blue-700 text-white px-4 py-2 rounded-md hover:bg-blue-800 transition-colors"
              >
                Send
              </button>
            </div>
          </form>
        </div>
      ) : (
        <button
          onClick={toggleChat}
          className="bg-blue-700 text-white p-4 rounded-full shadow-lg hover:bg-blue-800 transition-colors flex items-center justify-center"
          aria-label="Open chat"
        >
          <MessageSquare size={24} />
        </button>
      )}
    </div>
  );
};

export default LiveChat;