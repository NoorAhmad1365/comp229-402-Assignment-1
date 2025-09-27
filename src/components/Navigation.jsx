import { Link } from 'react-router-dom';
import './Nav.css';

export default function Navigation() {
    return (
        <div className="top-header">
            <h1>My Portfolio</h1>
            <nav>
                <Link to="/">Home</Link>  {""}
                <Link to="/about">About</Link>  {""}
                <Link to="/projects">Projects</Link>  {""}
                <Link to="/education">Education</Link>  {""}
                <Link to="/services">Services</Link>  {""}
                <Link to="/contact">Contact</Link>  {""}    
            </nav>
        </div>
    )
}


