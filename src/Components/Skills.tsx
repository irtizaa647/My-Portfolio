import { useState, useRef, useEffect } from 'react';
import image from '../assets/skills-image.png';

const Skills = () => {
  const skillCategories: { [key: string]: string[] } = {
    Languages: ['HTML', 'CSS', 'JavaScript', 'TypeScript', 'Python', 'Java', 'C Programming'],
    Frameworks: ['React', 'Tailwind CSS', 'Bootstrap'],
    Tools: ['Git & GitHub', 'VS Code', 'Chrome DevTools'],
    Other: ['Data Structures & Algorithms', 'Responsive Design'],
  };

  const categories = Object.keys(skillCategories);
  const [selectedCategory, setSelectedCategory] = useState(categories[0]);

  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.6 }
    );

    if (ref.current) observer.observe(ref.current);

    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="skills"
      ref={ref}
      className={`skills-tab-section ${isVisible ? 'visible' : ''}`}
    >
      <div className="skills-content-wrapper">
        {/* Skills Text Content */}
        <div className="centered-section">
          <h2>Skills</h2>
          <div className="skills-tab-container">
            <div className="tab-menu">
              {categories.map(category => (
                <button
                  key={category}
                  className={`tab-button ${selectedCategory === category ? 'active' : ''}`}
                  onClick={() => setSelectedCategory(category)}
                >
                  {category}
                </button>
              ))}
            </div>
            <div className="tab-content">
              <div className="skills-grid">
                {skillCategories[selectedCategory].map((skill, index) => (
                  <div key={index} className="skill-card">
                    {skill}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Rotating Image */}
        <div className="image-container">
          <img src={image} alt="Skills illustration" className="rotating-image" />
        </div>
      </div>
    </section>
  );
};

export default Skills;
