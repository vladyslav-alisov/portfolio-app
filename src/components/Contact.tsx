import { useEffect, useRef, useState } from 'react';
import { ArrowUpRight, Check, Copy } from 'lucide-react';
import ResumeLink from './ResumeLink';

const email = 'vladyslav.alisov@gmail.com';
export default function Contact() {
  const [copied, setCopied] = useState(false);
  const [feedback, setFeedback] = useState('');
  const timeoutRef = useRef<ReturnType<typeof setTimeout>>();
  useEffect(() => () => clearTimeout(timeoutRef.current), []);
  async function copyEmail() {
    try {
      await navigator.clipboard.writeText(email);
      setCopied(true); setFeedback('Email address copied.');
      clearTimeout(timeoutRef.current);
      timeoutRef.current = setTimeout(() => { setCopied(false); setFeedback(''); }, 3000);
    } catch {
      setFeedback('Copy is unavailable. You can select the email address above or open your email app.');
    }
  }
  return <section id="contact" className="contact-section"><div className="container">
    <div className="contact-top" data-reveal><p className="eyebrow"><span className="section-number">05 /</span> GOOD THINGS START WITH A CONVERSATION</p><span className="contact-availability mono"><i className="status-dot" /> OPEN TO OPPORTUNITIES</span></div>
    <div className="contact-heading" data-reveal><h2>Have something<br /><span className="serif">in mind?</span></h2><a className="contact-arrow" href={`mailto:${email}`} aria-label="Email Vladyslav to start a conversation"><ArrowUpRight strokeWidth={1} /></a></div>
    <div className="contact-bottom" data-reveal><p>A challenging project. A bold idea. A simple hello.<br /><span>Let’s see what we can build together.</span></p><div className="email-row"><a href={`mailto:${email}`}>{email}</a><button className="copy-button" onClick={copyEmail} aria-label={copied ? 'Email address copied' : 'Copy email address'} title="Copy email address">{copied ? <Check size={17} /> : <Copy size={17} />}</button></div></div>
    <div className="contact-links" data-reveal><a href="https://www.linkedin.com/in/vladyslav-alisov-a82769153" target="_blank" rel="noopener noreferrer">LinkedIn <ArrowUpRight size={16} /></a><a href="https://github.com/vladyslav-alisov" target="_blank" rel="noopener noreferrer">GitHub <ArrowUpRight size={16} /></a><a href="tel:+905318338411">+90 531 833 8411 <ArrowUpRight size={16} /></a><ResumeLink className="contact-cv-link" /></div>
    <p className="contact-feedback" role="status" aria-live="polite">{feedback}</p>
  </div></section>;
}
