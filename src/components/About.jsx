import './About.css'; 
import profileImg from '../assets/Noor-Ahmad-Profile.jpeg';



const About = () => {
    return (
        <div>
            <h2>Noor Ahmad</h2>
            <img src={profileImg} alt="Noor Ahmad" style={{ width: '500px', height: 'auto', borderRadius: '12px' }} />
            <h3>About me</h3>
            <p>Short paragraph about who you are...</p>
            <a href="/resume.pdf" download>Download My Resume (PDF)</a>
        </div>
    );
}

export default About;