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
  const messagesEndRef = useRef(null);

  // Auto-scroll to bottom
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const handleSend = () => {
    const text = input.trim();
    if (!text) return;

    setMessages([...messages, { type: "user", text }]);
    setInput("");

    setTimeout(() => {
      setMessages((prev) => [
        ...prev,
        { type: "bot", text: `I am currently processing your request: "${text}".` },
      ]);
    }, 1000);
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
      <div style={{ display: "flex", width: "100%", justifyContent: isUser ? "flex-end" : "flex-start" }}>
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
        flex: 1, // Allow container to grow naturally
        minHeight: "calc(100vh - 64px)", // Fill remaining screen height with some padding
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
          Create dashboards and applications just by chatting with AI
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
          placeholder="Ask OriBot to create a dashboard..."
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
        justifyContent: "center", // Vertically center container
        backgroundColor: "#0F172A",
        padding: "32px 16px", // optional spacing for small screens
      }}
    >
      <ChatbotInterface />
    </main>
  );
}
