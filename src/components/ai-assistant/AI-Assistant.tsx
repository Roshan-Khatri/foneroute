
import { useState, useRef, useEffect, FormEvent } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card } from '@/components/ui/card';
import { Bot, Send, User, X, Loader2 } from 'lucide-react';

interface Message {
    sender: 'user' | 'ai';
    text: string;
}

export const AIAssistant = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [messages, setMessages] = useState<Message[]>([]);
    const [inputValue, setInputValue] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const messagesEndRef = useRef<HTMLDivElement>(null);

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    };

    useEffect(scrollToBottom, [messages]);

    const handleSendMessage = async (e: FormEvent) => {
        e.preventDefault();
        if (!inputValue.trim()) return;

        const userMessage: Message = { sender: 'user', text: inputValue };
        setMessages(prev => [...prev, userMessage]);
        setInputValue('');
        setIsLoading(true);

        try {
            const response = await fetch('/api/ai', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ message: inputValue }),
            });

            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }

            const data = await response.json();

            const aiMessage: Message = { 
                sender: 'ai', 
                text: data.reply || "Sorry, I couldn't get a response."
            };
            
            setMessages(prev => [...prev, aiMessage]);

        } catch (error) {
            console.error("Error fetching AI response:", error);
            const errorMessage: Message = { 
                sender: 'ai', 
                text: "I'm having trouble connecting right now. Please try again later."
            };
            setMessages(prev => [...prev, errorMessage]);
        } finally {
            setIsLoading(false);
        }
    };

    const assistantWelcomeMessage: Message = {
        sender: 'ai',
        text: "Hello! I'm the FoneRoute AI assistant. How can I help you today? You can ask me about our services, features, or pricing.",
    };

    return (
        <>
            <motion.div 
                className="fixed bottom-8 right-8 z-50"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.5, type: "spring", stiffness: 400, damping: 20 }}
            >
                <Button onClick={() => setIsOpen(true)} className="rounded-full w-16 h-16 shadow-lg bg-primary hover:bg-primary/90">
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
                        <Card className="fixed bottom-8 right-8 w-[90vw] max-w-md h-[70vh] flex flex-col shadow-2xl rounded-2xl overflow-hidden">
                            <header className="p-4 bg-background border-b flex justify-between items-center">
                                <div className="flex items-center gap-3">
                                    <Bot className="h-6 w-6 text-primary" />
                                    <h2 className="font-bold text-lg">FoneRoute AI Assistant</h2>
                                </div>
                                <Button variant="ghost" size="icon" onClick={() => setIsOpen(false)}><X className="h-5 w-5" /></Button>
                            </header>

                            <div className="flex-1 p-4 overflow-y-auto bg-secondary/30">
                                <div className="space-y-4">
                                    <MessageBubble message={assistantWelcomeMessage} />
                                    {messages.map((msg, i) => <MessageBubble key={i} message={msg} />)}
                                    {isLoading && (
                                        <div className="flex justify-start items-center gap-3">
                                            <AvatarIcon sender="ai" />
                                            <motion.div 
                                                className="bg-muted rounded-lg px-4 py-2 flex items-center"
                                                initial={{ opacity: 0, y: 10 }}
                                                animate={{ opacity: 1, y: 0 }}
                                            >
                                                <Loader2 className="h-5 w-5 animate-spin text-primary" />
                                            </motion.div>
                                        </div>
                                    )}
                                    <div ref={messagesEndRef} />
                                </div>
                            </div>

                            <footer className="p-4 bg-background border-t">
                                <form onSubmit={handleSendMessage} className="flex items-center gap-3">
                                    <Input 
                                        type="text" 
                                        placeholder="Ask about our features..." 
                                        className="flex-1"
                                        value={inputValue}
                                        onChange={e => setInputValue(e.target.value)}
                                        disabled={isLoading}
                                    />
                                    <Button type="submit" size="icon" disabled={isLoading || !inputValue.trim()}>
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
    const isUser = message.sender === 'user';
    return (
        <motion.div
            className={`flex items-start gap-3 ${isUser ? 'justify-end' : 'justify-start'}`}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
        >
            {!isUser && <AvatarIcon sender="ai" />}
            <div className={`max-w-[80%] rounded-2xl px-4 py-2 text-sm md:text-base ${isUser ? 'bg-primary text-primary-foreground rounded-br-none' : 'bg-background text-foreground rounded-bl-none border'}`}>
                {message.text}
            </div>
            {isUser && <AvatarIcon sender="user" />}
        </motion.div>
    );
};

const AvatarIcon = ({ sender }: { sender: 'user' | 'ai' }) => {
    const iconClass = "h-8 w-8 p-1.5 rounded-full bg-background border";
    if (sender === 'user') {
        return <User className={iconClass} />;
    }
    return <Bot className={iconClass + " text-primary"} />;
};
