import { Link } from 'react-router-dom';
import './Home.css';

const Home = () => {
    return (
       
        <div className="hero">
            <h2>Welcome to My Portfolio</h2>
            <p>
                Hello and welcome to my portfolio! My name is Kenny, and I am a recent high school graduate with 
                a deep passion for computers, technology, and the growing world of artificial intelligence. At just
                20 years old, I am eager to challenge myself, continue learning, and develop the skills necessary 
                make an impact in this exciting field. I am currently pursuing a diploma in Artificial Intelligence
                and Software Engineering at Centennial College, where I am gaining both theoretical knowledge and hands-on
                experience. This program is helping me build a strong foundation in computer science while also allowing me
                to explore emerging areas in AI, software engineering, and modern development practices. Right now,
                my main focus is on learning and improving my technical abilities. Through my coursework, I am not only strengthening
                my understanding of web development, but also enhancing my skills in tools like Visual Studio Code, 
                project structuring, and software design principles. Each project and assignment pushes me to think 
                critically, apply problem-solving strategies, and develop a mindset for continuous growth. 
                My ultimate goal is to break into the world of technology and contribute to innovations that make a real difference.
                Whether it’s creating intelligent systems, designing efficient software solutions, or working on impactful AI 
                projects, I want to be at the forefront of technological progress. This portfolio represents the beginning of that
                journey a space where I can showcase my skills, projects, and the progress I’ve made along the way.
                Thank you for taking the time to visit my portfolio, and I look forward to sharing my work as I continue to grow
                in this ever-evolving field.
            </p>


            <Link to="/about">
                <button>Learn More About Me</button>
            </Link>
        </div>
        

    );
}

export default Home;