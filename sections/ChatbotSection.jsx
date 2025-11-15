"use client";

import React, { useState, useEffect, useRef } from "react";

// Chatbot Interface
const ChatbotInterface = () => {
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState([
    {
      type: "bot",
      text: "Welcome! I’m OriBot, your autonomous execution agent. How can I help you today?",
    },
  ]);
  const [typing, setTyping] = useState(false);
  const messagesEndRef = useRef(null);

  // Auto-scroll
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, typing]);

  const handleSend = () => {
    const text = input.trim();
    if (!text) return;

    setMessages([...messages, { type: "user", text }]);
    setInput("");
    setTyping(true);

    // Simulate bot response with typing animation
    setTimeout(() => {
      setMessages((prev) => [
        ...prev,
        { type: "bot", text: `I am currently processing your request: "${text}".` },
      ]);
      setTyping(false);
    }, 1200);
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  const ChatMessage = ({ msg }) => {
    const isUser = msg.type === "user";
    return (
      <div
        style={{
          display: "flex",
          width: "100%",
          justifyContent: isUser ? "flex-end" : "flex-start",
          opacity: 0,
          animation: "fadeIn 0.5s forwards",
        }}
      >
        <div
          style={{
            maxWidth: "80%",
            padding: "12px 16px",
            borderRadius: "24px",
            wordBreak: "break-word",
            whiteSpace: "pre-wrap",
            boxShadow: "0 8px 16px rgba(0,0,0,0.2)",
            fontSize: "1rem",
            background: isUser
              ? "linear-gradient(90deg, #EC4899, #06B6D4, #7C3AED)"
              : "rgba(55, 65, 81, 0.8)",
            color: isUser ? "#FFFFFF" : "#F3F4F6",
            borderTopLeftRadius: isUser ? "24px" : "8px",
            borderTopRightRadius: "24px",
            borderBottomLeftRadius: "24px",
            borderBottomRightRadius: "24px",
            alignSelf: isUser ? "flex-end" : "flex-start",
          }}
        >
          {msg.text}
        </div>
      </div>
    );
  };

  return (
    <div
      style={{
        width: "100%",
        maxWidth: "900px",
        margin: "0 auto",
        borderRadius: "40px",
        padding: "32px",
        display: "flex",
        flexDirection: "column",
        flex: 1,
        minHeight: "calc(100vh - 64px)",
        backgroundColor: "#111827",
        border: "1px solid rgba(107, 114, 128, 0.5)",
        boxShadow: "0 0 50px rgba(0,0,0,0.5)",
      }}
    >
      {/* Header */}
      <div style={{ textAlign: "center", marginBottom: "24px" }}>
        <h2
          style={{
            fontSize: "2rem",
            fontWeight: 800,
            marginBottom: "4px",
            background: "linear-gradient(90deg, #EC4899, #06B6D4, #7C3AED)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}
        >
          Chat with OriBot
        </h2>
        <p style={{ color: "#D1D5DB", fontSize: "0.875rem" }}>
          Your ideas, engineered instantly.
        </p>
      </div>

      {/* Chat Body */}
      <div
        style={{
          flex: 1,
          backgroundColor: "#1F2937",
          borderRadius: "24px",
          padding: "16px",
          overflowY: "auto",
          display: "flex",
          flexDirection: "column",
          gap: "12px",
          border: "1px solid rgba(107,114,128,0.5)",
          boxShadow: "inset 0 0 10px rgba(0,0,0,0.3)",
        }}
      >
        {messages.map((msg, idx) => (
          <ChatMessage key={idx} msg={msg} />
        ))}

        {/* Typing indicator */}
        {typing && (
          <div style={{ display: "flex", justifyContent: "flex-start", padding: "0 8px" }}>
            <div
              style={{
                width: "40px",
                height: "24px",
                background: "rgba(55,65,81,0.8)",
                borderRadius: "16px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                gap: "4px",
              }}
            >
              <span className="dot" />
              <span className="dot" />
              <span className="dot" />
            </div>
          </div>
        )}

        <div ref={messagesEndRef} />
      </div>

      {/* Input Box */}
      <div style={{ marginTop: "16px", display: "flex", gap: "12px", alignItems: "center" }}>
        <button
          style={{
            display: "flex",
            alignItems: "center",
            gap: "8px",
            color: "#9CA3AF",
            padding: "12px",
            borderRadius: "9999px",
            backgroundColor: "#1F2937",
            border: "none",
            cursor: "pointer",
          }}
        >
          📎
          <span style={{ fontSize: "0.875rem", fontWeight: 500 }}>Attach</span>
        </button>

        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={handleKeyDown}
          placeholder="Ask your queries..."
          style={{
            flex: 1,
            height: "56px",
            padding: "0 16px",
            borderRadius: "9999px",
            border: "1px solid rgba(96,165,250,0.5)",
            backgroundColor: "transparent",
            color: "#FFFFFF",
            fontSize: "1rem",
            outline: "none",
            animation: "pulsePlaceholder 2s infinite",
          }}
        />

        <button
          onClick={handleSend}
          disabled={!input.trim()}
          style={{
            width: "56px",
            height: "56px",
            borderRadius: "9999px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            cursor: input.trim() ? "pointer" : "not-allowed",
            background: input.trim()
              ? "linear-gradient(135deg, #EC4899, #06B6D4, #7C3AED)"
              : "#374151",
            color: input.trim() ? "#FFFFFF" : "#9CA3AF",
            boxShadow: input.trim() ? "0 4px 20px rgba(236,72,153,0.3)" : "none",
            transition: "all 0.2s",
          }}
        >
          ➤
        </button>
      </div>

      {/* Animations */}
      <style>
        {`
          @keyframes fadeIn {
            to { opacity: 1; }
          }
          @keyframes pulsePlaceholder {
            0%, 100% { opacity: 1; }
            50% { opacity: 0.4; }
          }
          .dot {
            width: 6px;
            height: 6px;
            background: #F3F4F6;
            border-radius: 50%;
            animation: blink 1.4s infinite both;
          }
          .dot:nth-child(2) { animation-delay: 0.2s; }
          .dot:nth-child(3) { animation-delay: 0.4s; }

          @keyframes blink {
            0%, 80%, 100% { opacity: 0; }
            40% { opacity: 1; }
          }
        `}
      </style>
    </div>
  );
};

// Main App
export default function App() {
  return (
    <main
      style={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#0F172A",
        padding: "32px 16px",
      }}
    >
      <ChatbotInterface />
    </main>
  );
}
