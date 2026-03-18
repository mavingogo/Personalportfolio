import { useState, useEffect, useRef } from 'react';
import { Mail, Phone, MapPin, Github, Linkedin, MessageCircle, Send } from 'lucide-react';
import { Button } from './ui/button';
import { motion } from 'motion/react';

interface FormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  subject?: string;
  message?: string;
}

export function Contact() {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [focusedField, setFocusedField] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setErrors({});

    // Validation
    const newErrors: typeof errors = {};
    
    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    } else if (formData.name.trim().length < 2) {
      newErrors.name = 'Name must be at least 2 characters';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email';
    }

    if (!formData.subject.trim()) {
      newErrors.subject = 'Subject is required';
    } else if (formData.subject.trim().length < 3) {
      newErrors.subject = 'Subject must be at least 3 characters';
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    } else if (formData.message.trim().length < 10) {
      newErrors.message = 'Message must be at least 10 characters';
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setIsSubmitting(true);

    // Create email body
    const subject = encodeURIComponent(formData.subject);
    const body = encodeURIComponent(
      `Name: ${formData.name}\n` +
      `Email: ${formData.email}\n\n` +
      `Message:\n${formData.message}`
    );

    // Open default email client with pre-filled information
    window.location.href = `mailto:mavingogo@gmail.com?subject=${subject}&body=${body}`;

    // Simulate submission delay for UX
    setTimeout(() => {
      setIsSubmitting(false);
      setShowSuccess(true);
      setFormData({ name: '', email: '', subject: '', message: '' });
      
      // Hide success message after 5 seconds
      setTimeout(() => {
        setShowSuccess(false);
      }, 5000);
    }, 1000);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    
    // Clear error for this field when user starts typing
    if (errors[name as keyof FormErrors]) {
      setErrors({ ...errors, [name]: undefined });
    }
  };

  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: 'mavingogo@gmail.com',
      href: 'mailto:mavingogo@gmail.com',
    },
    {
      icon: Phone,
      label: 'Phone',
      value: '+254 746 781 552',
      href: 'tel:+254746781552',
    },
    {
      icon: MapPin,
      label: 'Location',
      value: 'Nairobi, Kenya',
      href: null,
    },
  ];

  const socialLinks = [
    { icon: Github, href: 'https://github.com/mavingogo', label: 'GitHub' },
    { icon: Linkedin, href: 'https://www.linkedin.com/in/mavin-gogo', label: 'LinkedIn' },
    { icon: MessageCircle, href: 'https://wa.me/254781304308', label: 'WhatsApp' },
  ];

  return (
    <section
      id="contact"
      ref={sectionRef}
      className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-950"
    >
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-4">
            <span className="bg-gradient-to-r from-purple-500 to-indigo-500 bg-clip-text text-transparent">
              Get In Touch
            </span>
          </h2>
          <p className="text-slate-400 text-lg sm:text-xl max-w-2xl mx-auto">
            Have a project in mind or want to collaborate? Let's build something amazing together!
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isVisible ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-8"
          >
            <div className="bg-slate-900/50 border border-slate-800/50 rounded-xl p-8">
              <h3 className="text-2xl font-bold text-white mb-6">
                Contact Information
              </h3>
              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 10 }}
                    animate={isVisible ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
                    className="flex items-center gap-4"
                  >
                    <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-purple-500 to-indigo-500 flex items-center justify-center flex-shrink-0">
                      <info.icon size={22} className="text-white" />
                    </div>
                    <div>
                      <p className="text-sm text-slate-400">{info.label}</p>
                      {info.href ? (
                        <a
                          href={info.href}
                          className="text-white hover:text-purple-400 transition-colors"
                        >
                          {info.value}
                        </a>
                      ) : (
                        <p className="text-white">{info.value}</p>
                      )}
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Social Links */}
            <div className="bg-slate-900/50 border border-slate-800/50 rounded-xl p-8">
              <h3 className="text-2xl font-bold text-white mb-6">
                Connect With Me
              </h3>
              <div className="flex gap-4">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={index}
                    initial={{ opacity: 0, scale: 0 }}
                    animate={isVisible ? { opacity: 1, scale: 1 } : {}}
                    transition={{ duration: 0.4, delay: 0.6 + index * 0.1 }}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-14 h-14 rounded-lg bg-slate-800/50 hover:bg-gradient-to-br hover:from-purple-500 hover:to-indigo-500 flex items-center justify-center text-slate-400 hover:text-white transition-all duration-300 hover:scale-110"
                    aria-label={social.label}
                  >
                    <social.icon size={24} />
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isVisible ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-slate-900/50 border border-slate-800/50 rounded-xl p-8"
          >
            {showSuccess && (
              <div className="mb-6 p-4 bg-green-500/10 border border-green-500/50 rounded-lg text-green-400">
                Message sent successfully! I'll get back to you soon.
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Name Field */}
              <div className="relative">
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  onFocus={() => setFocusedField('name')}
                  onBlur={() => setFocusedField(null)}
                  className={`peer w-full bg-slate-800/50 border ${
                    errors.name ? 'border-red-500' : 'border-slate-700'
                  } rounded-lg px-4 pt-6 pb-2 text-white placeholder-transparent focus:outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20 transition-all`}
                  placeholder="Name"
                />
                <label
                  htmlFor="name"
                  className={`absolute left-4 transition-all pointer-events-none ${
                    formData.name || focusedField === 'name'
                      ? 'top-2 text-xs text-purple-400'
                      : 'top-4 text-base text-slate-400'
                  }`}
                >
                  Your Name
                </label>
                {errors.name && (
                  <p className="mt-1 text-sm text-red-400">{errors.name}</p>
                )}
              </div>

              {/* Email Field */}
              <div className="relative">
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  onFocus={() => setFocusedField('email')}
                  onBlur={() => setFocusedField(null)}
                  className={`peer w-full bg-slate-800/50 border ${
                    errors.email ? 'border-red-500' : 'border-slate-700'
                  } rounded-lg px-4 pt-6 pb-2 text-white placeholder-transparent focus:outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20 transition-all`}
                  placeholder="Email"
                />
                <label
                  htmlFor="email"
                  className={`absolute left-4 transition-all pointer-events-none ${
                    formData.email || focusedField === 'email'
                      ? 'top-2 text-xs text-purple-400'
                      : 'top-4 text-base text-slate-400'
                  }`}
                >
                  Your Email
                </label>
                {errors.email && (
                  <p className="mt-1 text-sm text-red-400">{errors.email}</p>
                )}
              </div>

              {/* Subject Field */}
              <div className="relative">
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  onFocus={() => setFocusedField('subject')}
                  onBlur={() => setFocusedField(null)}
                  className={`peer w-full bg-slate-800/50 border ${
                    errors.subject ? 'border-red-500' : 'border-slate-700'
                  } rounded-lg px-4 pt-6 pb-2 text-white placeholder-transparent focus:outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20 transition-all`}
                  placeholder="Subject"
                />
                <label
                  htmlFor="subject"
                  className={`absolute left-4 transition-all pointer-events-none ${
                    formData.subject || focusedField === 'subject'
                      ? 'top-2 text-xs text-purple-400'
                      : 'top-4 text-base text-slate-400'
                  }`}
                >
                  Subject
                </label>
                {errors.subject && (
                  <p className="mt-1 text-sm text-red-400">{errors.subject}</p>
                )}
              </div>

              {/* Message Field */}
              <div className="relative">
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  onFocus={() => setFocusedField('message')}
                  onBlur={() => setFocusedField(null)}
                  rows={5}
                  className={`peer w-full bg-slate-800/50 border ${
                    errors.message ? 'border-red-500' : 'border-slate-700'
                  } rounded-lg px-4 pt-6 pb-2 text-white placeholder-transparent focus:outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20 transition-all resize-none`}
                  placeholder="Message"
                />
                <label
                  htmlFor="message"
                  className={`absolute left-4 transition-all pointer-events-none ${
                    formData.message || focusedField === 'message'
                      ? 'top-2 text-xs text-purple-400'
                      : 'top-4 text-base text-slate-400'
                  }`}
                >
                  Your Message
                </label>
                {errors.message && (
                  <p className="mt-1 text-sm text-red-400">{errors.message}</p>
                )}
              </div>

              {/* Submit Button */}
              <Button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-gradient-to-r from-purple-500 to-indigo-500 hover:from-purple-600 hover:to-indigo-600 text-white py-6 rounded-lg shadow-lg shadow-purple-500/30 transition-all duration-300 hover:shadow-purple-500/50 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? 'Sending...' : 'Send Message'}
                <Send className="ml-2" size={20} />
              </Button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}