"use client";

import { useState } from "react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { User, MailIcon, ArrowRightIcon, MessageSquare, CheckCircle2 } from "lucide-react";

interface FormProps {
  className?: string;
}

const Form = ({ className }: FormProps) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;
    // Directing to mailto fallback or custom handling
    const mailtoUrl = `mailto:rizky.noor.ichwanudin@gmail.com?subject=Portfolio%20Inquiry%20from%20${encodeURIComponent(
      formData.name
    )}&body=${encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
    )}`;
    window.location.href = mailtoUrl;
    setSubmitted(true);
  };

  return (
    <section id="contact-form" className={className}>
      <form onSubmit={handleSubmit} className="flex flex-col gap-y-4">
        {submitted ? (
          <div className="p-6 rounded-xl border border-primary/40 bg-primary/10 flex items-center gap-3 text-foreground">
            <CheckCircle2 size={24} className="text-primary shrink-0" />
            <p className="text-sm">
              Thank you! Your email client has been prepared with your message.
            </p>
          </div>
        ) : null}

        <div className="space-y-1">
          <label htmlFor="contact-name" className="text-xs font-semibold text-muted-foreground">
            Your Name
          </label>
          <div className="relative flex items-center">
            <Input
              type="text"
              id="contact-name"
              placeholder="e.g. John Doe"
              required
              value={formData.name}
              onChange={(e) =>
                setFormData((prev) => ({ ...prev, name: e.target.value }))
              }
            />
            <User className="absolute right-4 text-muted-foreground pointer-events-none" size={20} />
          </div>
        </div>

        <div className="space-y-1">
          <label htmlFor="contact-email" className="text-xs font-semibold text-muted-foreground">
            Your Email
          </label>
          <div className="relative flex items-center">
            <Input
              type="email"
              id="contact-email"
              placeholder="e.g. john@example.com"
              required
              value={formData.email}
              onChange={(e) =>
                setFormData((prev) => ({ ...prev, email: e.target.value }))
              }
            />
            <MailIcon className="absolute right-4 text-muted-foreground pointer-events-none" size={20} />
          </div>
        </div>

        <div className="space-y-1">
          <label htmlFor="contact-message" className="text-xs font-semibold text-muted-foreground">
            Message
          </label>
          <div className="relative flex items-start">
            <Textarea
              id="contact-message"
              placeholder="Tell me about your project, goals, or timeline..."
              rows={5}
              required
              value={formData.message}
              onChange={(e) =>
                setFormData((prev) => ({ ...prev, message: e.target.value }))
              }
            />
            <MessageSquare className="absolute top-3.5 right-4 text-muted-foreground pointer-events-none" size={20} />
          </div>
        </div>

        <Button type="submit" className="flex items-center gap-x-2 max-w-[170px] mt-2">
          Let&apos;s Talk
          <ArrowRightIcon size={18} />
        </Button>
      </form>
    </section>
  );
};

Form.displayName = "Form";

export default Form;
