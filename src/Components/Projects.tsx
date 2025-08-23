import { useEffect, useRef, useState } from 'react';

const projects = [
  {
    title: "Calculator App",
    description: "A simple calculator supporting basic arithmetic and keyboard input.",
    link: "https://github.com/irtizaa647/Calculator.git",
  },
  {
   title: "Currency Converter",
    description: "Converts currencies using real-time exchange rates fetched from a public API.",
    link: "https://github.com/irtizaa647/Currency-Converter.git", 
  },
  {
    title: "Tic-Tac-Toe Game",
    description: "Two-player game built with JavaScript and styled with CSS.",
    link: "https://github.com/irtizaa647/Tic-Tac-Toe.git",
  },
  {
      title: "Pixel Sketchpad",
    description: "A 16x16 interactive grid to draw by hovering, using DOM and Flexbox.",
    link: "https://github.com/irtizaa647/Etch-a-Sketch.git",
  },
  {
    title:"Stopwatch",
    description: "A stopwatch with start, stop, and reset functionalities.",
    link: "https://github.com/irtizaa647/Stopwatch.git",
  },
  {
    title: "My Portfolio",
    description: "A personal portfolio website showcasing my projects and skills.",
    link:"https://github.com/irtizaa647/My-Portfolio.git",
  }
];

const Projects = () => {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.3 });

    if (ref.current) observer.observe(ref.current);

    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="projects"
      ref={ref}
      className={`projects-section ${isVisible ? 'visible' : ''}`}
    >
      <div className='centered-section'>
      <h2>Projects</h2>
      <div className="projects-grid">
        {projects.map((project, index) => (
          <div className="project-card" key={index}>
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            {project.link !== "" && (
              <a href={project.link} target="_blank" rel="noopener noreferrer">
                View Project
              </a>
            )}
          </div>
        ))}
      </div>
      </div>
    </section>
  );
};

export default Projects;
