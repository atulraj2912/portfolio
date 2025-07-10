"use client";
import { motion } from "framer-motion";
import { useState } from "react";

const quickActions = [
  { 
    id: "resume", 
    name: "Download Resume", 
    icon: "📄", 
    action: () => window.open("/resume.pdf", "_blank"),
    color: "from-green-500 to-emerald-600"
  },
  { 
    id: "github", 
    name: "GitHub Profile", 
    icon: "💻", 
    action: () => window.open("https://github.com", "_blank"),
    color: "from-gray-600 to-gray-700"
  },
  { 
    id: "linkedin", 
    name: "LinkedIn Profile", 
    icon: "💼", 
    action: () => window.open("https://linkedin.com", "_blank"),
    color: "from-blue-600 to-blue-700"
  },
];

export function QuickActions() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="fixed bottom-6 right-6 z-40">
      <div className="relative">
        {/* Quick Action Items */}
        {isOpen && (
          <div className="absolute bottom-16 right-0 flex flex-col space-y-3">
            {quickActions.map((action, index) => (
              <motion.button
                key={action.id}
                initial={{ opacity: 0, scale: 0.5, x: 20 }}
                animate={{ opacity: 1, scale: 1, x: 0 }}
                exit={{ opacity: 0, scale: 0.5, x: 20 }}
                transition={{ delay: index * 0.1 }}
                onClick={action.action}
                className={`group relative flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-r ${action.color} text-white shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-110`}
              >
                <span className="text-lg">{action.icon}</span>
                
                {/* Tooltip */}
                <div className="absolute right-full mr-3 px-3 py-1 bg-black/80 text-white text-sm rounded opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap">
                  {action.name}
                </div>
              </motion.button>
            ))}
          </div>
        )}

        {/* Toggle Button */}
        <motion.button
          onClick={() => setIsOpen(!isOpen)}
          className={`flex items-center justify-center w-14 h-14 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 text-white shadow-lg hover:shadow-xl transition-all duration-300 ${
            isOpen ? "rotate-45" : ""
          }`}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
        >
          <span className="text-2xl">+</span>
        </motion.button>
      </div>
    </div>
  );
}
