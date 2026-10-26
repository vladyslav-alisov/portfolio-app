import { useEffect, useRef, useState } from 'react';
import { ArrowUpRight, Menu, Pause, Play, X } from 'lucide-react';

const links = [{ label: 'Projects', href: '#work' }, { label: 'Career', href: '#career' }, { label: 'About', href: '#about' }, { label: 'Expertise', href: '#skills' }];

export default function Navigation({ motion, onToggleMotion }: { motion: boolean; onToggleMotion: () => void }) {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const menuToggleRef = useRef<HTMLButtonElement>(null);
  useEffect(() => {
    const scroll = () => setScrolled(window.scrollY > 24);
    scroll();
    window.addEventListener('scroll', scroll, { passive: true });
    return () => window.removeEventListener('scroll', scroll);
  }, []);
  useEffect(() => {
    const close = (event: KeyboardEvent) => {
      if (event.key === 'Escape' && open) {
        setOpen(false);
        menuToggleRef.current?.focus();
      }
    };
    const resize = () => { if (window.innerWidth > 760) setOpen(false); };
    window.addEventListener('keydown', close);
    window.addEventListener('resize', resize);
    return () => { window.removeEventListener('keydown', close); window.removeEventListener('resize', resize); };
  }, [open]);
  return (
    <header className={`site-header ${scrolled || open ? 'is-scrolled' : ''}`}>
      <nav className="container nav" aria-label="Main navigation">
        <a className="wordmark" href="#home" onClick={() => setOpen(false)} aria-label="Vladyslav Alisov — home">va<span>®</span></a>
        <span className="nav-caption">MOBILE & BACKEND.<br />BASED IN ANTALYA.</span>
        <div className="desktop-links">{links.map(link => <a key={link.href} href={link.href}>{link.label}<span className="nav-dot" /></a>)}</div>
        <div className="nav-actions">
          <button className="icon-button motion-toggle" onClick={onToggleMotion} aria-label={motion ? 'Pause animations' : 'Enable animations'} aria-pressed={!motion} title={motion ? 'Pause animations' : 'Enable animations'}>{motion ? <Pause size={15} /> : <Play size={15} />}</button>
          <a className="nav-contact" href="#contact">Let’s talk <ArrowUpRight size={16} /></a>
          <button ref={menuToggleRef} className="icon-button mobile-toggle" aria-label={open ? 'Close navigation' : 'Open navigation'} aria-expanded={open} aria-controls="mobile-navigation" onClick={() => setOpen(!open)}>{open ? <X size={22} /> : <Menu size={22} />}</button>
        </div>
        {open && <div className="mobile-navigation" id="mobile-navigation">
          {[...links, { label: 'Contact', href: '#contact' }].map((link, index) => <a key={link.href} href={link.href} onClick={() => setOpen(false)}><span className="mono">0{index + 1}</span>{link.label}<ArrowUpRight size={25} /></a>)}
          <p className="mono">BASED IN ANTALYA · OPEN TO THE WORLD</p>
        </div>}
      </nav>
    </header>
  );
}
