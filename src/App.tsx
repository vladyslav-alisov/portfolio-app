import { useEffect, useState } from 'react';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Skills from './components/Skills';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  const [motion, setMotion] = useState(() => {
    try {
      const preference = localStorage.getItem('portfolio-motion');
      if (preference) return preference === 'on';
    } catch { /* Storage is optional. */ }
    return !window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  });

  useEffect(() => {
    document.documentElement.dataset.motion = motion ? 'on' : 'off';
    try { localStorage.setItem('portfolio-motion', motion ? 'on' : 'off'); } catch { /* Optional preference. */ }
  }, [motion]);

  useEffect(() => {
    const preference = window.matchMedia('(prefers-reduced-motion: reduce)');
    const update = () => setMotion(!preference.matches);
    preference.addEventListener('change', update);
    return () => preference.removeEventListener('change', update);
  }, []);

  useEffect(() => {
    const targets = document.querySelectorAll('[data-reveal]');
    if (!motion || !('IntersectionObserver' in window)) {
      targets.forEach(target => target.classList.add('is-visible'));
      return;
    }
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.08 });
    targets.forEach(target => observer.observe(target));
    return () => observer.disconnect();
  }, [motion]);

  return (
    <>
      <a className="skip-link" href="#main">Skip to content</a>
      <Navigation motion={motion} onToggleMotion={() => setMotion(value => !value)} />
      <main id="main">
        <Hero motion={motion} />
        <Experience />
        <About />
        <Skills />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
export default App;
