import { useEffect, useState } from 'react';
import { ArrowUp } from 'lucide-react';
const localTime = () => new Intl.DateTimeFormat('en-GB', { hour: '2-digit', minute: '2-digit', timeZone: 'Europe/Istanbul' }).format(new Date());
export default function Footer() {
  const [time, setTime] = useState(localTime);
  useEffect(() => { const interval = setInterval(() => setTime(localTime()), 60000); return () => clearInterval(interval); }, []);
  return <footer className="site-footer"><div className="container"><div className="footer-top"><a className="wordmark" href="#home" aria-label="Vladyslav Alisov — back to top">va<span>®</span></a><p>A little curiosity.<br /><span className="muted">A lot of intention.</span></p><a href="#home" className="back-to-top mono">BACK TO TOP <span><ArrowUp size={18} /></span></a></div><div className="footer-bottom mono"><span>© {new Date().getFullYear()} VLADYSLAV ALISOV</span><span>ANTALYA, TR <span className="accent">{time}</span></span><span>CRAFTED WITH CARE & CODE.</span></div></div></footer>;
}
