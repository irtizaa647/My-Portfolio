import { useEffect, useRef, useState } from 'react';
import image from '../assets/hello-image.gif';

const About = () => {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
useEffect(() => {
  if (!ref.current) return;

  const observer = new IntersectionObserver(
    ([entry]) => {
      if (entry.isIntersecting) {
        setIsVisible(true);
        observer.disconnect(); // disconnect entirely after first trigger
      }
    },
    { threshold: 0.4 }
  );

  observer.observe(ref.current);

  return () => observer.disconnect();
}, []);


  return (
    <section
      id="about"
      ref={ref}
      className={`about-section ${isVisible ? 'visible' : ''}`}
    >
      <div className="centered-section">
        <h2>About Me</h2>
        <p>
          Hi, I’m <strong>Irtiza Syed</strong> — a BTech student with a passion for front-end development.
          I’m currently exploring <strong>React</strong>, <strong>TypeScript</strong>, and building beautiful, responsive websites.
        </p>
        <p>I enjoy creating things that live on the internet, and I’m learning by building.</p>
        <p>My goal is to grow as a developer, work on real-world projects, and contribute to meaningful web experiences.</p>
      </div>
       <div className="about-animation">
        
        <img src= {image} alt=""  />
      </div>
    </section>
    
  );
};

export default About;
