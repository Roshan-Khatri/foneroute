"use client";

import { useState, useRef, useEffect, FormEvent } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";
import { Bot, Send, User, X, Loader2 } from "lucide-react";

interface Message {
  sender: "user" | "ai";
  text: string;
}

const AIAssistant = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [inputValue, setInputValue] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(scrollToBottom, [messages]);

  const handleSendMessage = async (e: FormEvent) => {
    e.preventDefault();
    if (!inputValue.trim()) return;

    const userMessage: Message = { sender: "user", text: inputValue };
    setMessages((prev) => [...prev, userMessage]);
    setInputValue("");
    setIsLoading(true);

    try {
      const response = await fetch("/api/ai", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: inputValue }),
      });

      const data = await response.json();

      setMessages((prev) => [
        ...prev,
        {
          sender: "ai",
          text: data.reply || "Sorry, I couldn't get a response.",
        },
      ]);
    } catch (error) {
      setMessages((prev) => [
        ...prev,
        {
          sender: "ai",
          text: "I'm having trouble connecting right now.",
        },
      ]);
    } finally {
      setIsLoading(false);
    }
  };

  const assistantWelcomeMessage: Message = {
    sender: "ai",
    text: "Hello! I'm the FoneRoute AI assistant. How can I help you today?",
  };

  return (
    <>
      {/* ✅ FLOATING BUTTON FIXED */}
      <motion.div
        className="fixed bottom-8 right-8 z-50"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 0.5, type: "spring", stiffness: 400 }}
      >
        <Button
          onClick={() => setIsOpen(true)}
          className="
            rounded-full w-16 h-16
            bg-white text-gray-900 border border-gray-300
            shadow-lg hover:shadow-xl
            hover:scale-110 transition-all duration-200
            dark:bg-zinc-900 dark:text-white dark:border-zinc-700 dark:hover:bg-[#27272a]
          "
        >
          <Bot className="h-8 w-8" />
        </Button>
      </motion.div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="fixed inset-0 bg-black/30 z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <Card className="fixed bottom-8 right-8 w-[90vw] max-w-md h-[70vh] flex flex-col shadow-2xl rounded-2xl overflow-hidden bg-white dark:bg-zinc-900">

              {/* HEADER */}
              <header className="p-4 border-b flex justify-between items-center bg-white dark:bg-zinc-900">
                <div className="flex items-center gap-3">
                  <Bot className="h-6 w-6 text-gray-900 dark:text-white" />
                  <h2 className="font-bold text-lg text-gray-900 dark:text-white">
                    AI Assistant
                  </h2>
                </div>
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => setIsOpen(false)}
                >
                  <X className="h-5 w-5" />
                </Button>
              </header>

              {/* CHAT BODY */}
              <div className="flex-1 p-4 overflow-y-auto bg-gray-50 dark:bg-zinc-800">
                <div className="space-y-4">
                  <MessageBubble message={assistantWelcomeMessage} />
                  {messages.map((msg, i) => (
                    <MessageBubble key={i} message={msg} />
                  ))}

                  {isLoading && (
                    <div className="flex gap-3">
                      <AvatarIcon sender="ai" />
                      <div className="bg-gray-200 dark:bg-zinc-700 px-4 py-2 rounded-lg">
                        <Loader2 className="animate-spin h-5 w-5" />
                      </div>
                    </div>
                  )}

                  <div ref={messagesEndRef} />
                </div>
              </div>

              {/* INPUT */}
              <footer className="p-4 border-t bg-white dark:bg-zinc-900">
                <form
                  onSubmit={handleSendMessage}
                  className="flex gap-3"
                >
                  <Input
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                    placeholder="Ask something..."
                    className="flex-1"
                  />
                  <Button type="submit" disabled={!inputValue.trim()}>
                    <Send className="h-5 w-5" />
                  </Button>
                </form>
              </footer>
            </Card>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

const MessageBubble = ({ message }: { message: Message }) => {
  const isUser = message.sender === "user";

  return (
    <motion.div
      className={`flex gap-3 ${
        isUser ? "justify-end" : "justify-start"
      }`}
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
    >
      {!isUser && <AvatarIcon sender="ai" />}

      <div
        className={`
          max-w-[80%] px-4 py-2 rounded-2xl text-sm
          ${
            isUser
              ? "bg-black text-white"
              : "bg-white text-gray-900 border border-gray-200 dark:bg-zinc-700 dark:text-white"
          }
        `}
      >
        {message.text}
      </div>

      {isUser && <AvatarIcon sender="user" />}
    </motion.div>
  );
};

const AvatarIcon = ({ sender }: { sender: "user" | "ai" }) => {
  return sender === "user" ? (
    <User className="h-8 w-8 p-1.5 rounded-full bg-gray-200 dark:bg-zinc-700" />
  ) : (
    <Bot className="h-8 w-8 p-1.5 rounded-full bg-gray-200 dark:bg-zinc-700" />
  );
};

export default AIAssistant;