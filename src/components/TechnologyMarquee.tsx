import { useLayoutEffect, useRef, useState } from 'react';
import { Asterisk } from 'lucide-react';

const technologies = ['Flutter', 'Dart', 'React Native', 'TypeScript', 'Node.js', 'Bluetooth LE'];

export default function TechnologyMarquee() {
  const containerRef = useRef<HTMLDivElement>(null);
  const sequenceRef = useRef<HTMLDivElement>(null);
  const [repetitions, setRepetitions] = useState(1);

  useLayoutEffect(() => {
    const container = containerRef.current;
    const sequence = sequenceRef.current;
    if (!container || !sequence) return;

    const updateRepetitions = () => {
      const sequenceWidth = sequence.getBoundingClientRect().width;
      if (sequenceWidth > 0) {
        setRepetitions(Math.max(1, Math.ceil(container.clientWidth / sequenceWidth)));
      }
    };

    // Each of the two identical halves must fill the viewport on its own.
    // Watching the sequence also handles responsive spacing and font loading.
    const observer = new ResizeObserver(updateRepetitions);
    observer.observe(container);
    observer.observe(sequence);
    updateRepetitions();
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={containerRef} className="technology-marquee" aria-label={technologies.join(', ')}>
      <div className="marquee-track" aria-hidden="true" style={{ animationDuration: `${repetitions * 35}s` }}>
        {[0, 1].map(copy => (
          <div className="marquee-set" key={copy}>
            {Array.from({ length: repetitions }, (_, repetition) => (
              <div
                className="marquee-sequence"
                ref={copy === 0 && repetition === 0 ? sequenceRef : undefined}
                key={repetition}
              >
                {technologies.map(technology => <span key={technology}>{technology}<Asterisk size={20} /></span>)}
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
