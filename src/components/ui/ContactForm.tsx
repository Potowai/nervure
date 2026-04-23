"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Send, CheckCircle2, Loader2, DollarSign } from "lucide-react";

export function ContactForm({ dict }: { dict: any }) {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [budget, setBudget] = useState<string>("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("loading");

    // Mock submission delay
    await new Promise((resolve) => setTimeout(resolve, 2000));

    // For demonstration, always success
    setStatus("success");
    
    // Reset after some time
    setTimeout(() => {
      (e.target as HTMLFormElement).reset();
      setBudget("");
      setStatus("idle");
    }, 5000);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <AnimatePresence mode="wait">
        {status === "success" ? (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="flex flex-col items-center justify-center py-12 text-center space-y-4"
          >
            <CheckCircle2 className="w-16 h-16 text-accent" />
            <h3 className="text-2xl font-display">{dict.success}</h3>
          </motion.div>
        ) : (
          <motion.div
            key="form-fields"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="space-y-6"
          >
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-xs tracking-widest uppercase opacity-60 ml-1">{dict.name}</label>
                <input
                  required
                  type="text"
                  name="name"
                  placeholder="John Doe"
                  className="w-full bg-fg/5 border border-fg/20 hover:border-fg/40 rounded-xl px-4 py-4 focus:border-accent focus:ring-1 focus:ring-accent outline-none transition-all placeholder:fg/20"
                />
              </div>
              <div className="space-y-2">
                <label className="text-xs tracking-widest uppercase opacity-60 ml-1">{dict.email}</label>
                <input
                  required
                  type="email"
                  name="email"
                  placeholder="john@example.com"
                  className="w-full bg-fg/5 border border-fg/20 hover:border-fg/40 rounded-xl px-4 py-4 focus:border-accent focus:ring-1 focus:ring-accent outline-none transition-all placeholder:fg/20"
                />
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-xs tracking-widest uppercase opacity-60 ml-1">{dict.subject}</label>
              <select
                required
                name="subject"
                className="w-full bg-fg/5 border border-fg/20 hover:border-fg/40 rounded-xl px-4 py-4 focus:border-accent focus:ring-1 focus:ring-accent outline-none transition-all appearance-none"
              >
                {dict.subjects.map((s: any) => (
                  <option key={s.value} value={s.value} className="bg-bg text-fg">
                    {s.label}
                  </option>
                ))}
              </select>
            </div>

            <div className="space-y-3">
              <label className="text-xs tracking-widest uppercase opacity-60 ml-1 flex items-center gap-1.5">
                <DollarSign className="w-3.5 h-3.5" /> {dict.budgetLabel}
              </label>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                {dict.budgetOptions.map((b: any) => (
                  <button
                    key={b.value}
                    type="button"
                    onClick={() => setBudget(b.value)}
                    className={`py-3 px-4 rounded-xl text-sm border transition-all ${
                      budget === b.value
                        ? "bg-accent/10 border-accent text-accent"
                        : "bg-fg/5 border-fg/20 hover:border-fg/40 text-fg-muted"
                    }`}
                  >
                    {b.label}
                  </button>
                ))}
              </div>
              {/* Hidden input to submit the budget value with the form */}
              <input type="hidden" name="budget" value={budget} />
            </div>

            <div className="space-y-2">
              <label className="text-xs tracking-widest uppercase opacity-60 ml-1">{dict.message}</label>
              <textarea
                required
                name="message"
                rows={5}
                placeholder={dict.placeholderMessage}
                className="w-full bg-fg/5 border border-fg/20 hover:border-fg/40 rounded-xl px-4 py-4 focus:border-accent focus:ring-1 focus:ring-accent outline-none transition-all placeholder:fg/20 resize-none"
              />
            </div>

            <button
              disabled={status === "loading" || !budget}
              type="submit"
              className="w-full bg-accent text-bg font-medium py-5 rounded-xl flex items-center justify-center gap-3 hover:bg-accent/90 transition-all disabled:opacity-50"
            >
              {status === "loading" ? (
                <Loader2 className="w-5 h-5 animate-spin" />
              ) : (
                <>
                  <Send className="w-5 h-5" />
                  <span>{dict.submit}</span>
                </>
              )}
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </form>
  );
}
