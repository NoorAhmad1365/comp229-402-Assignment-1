import { useNavigate } from 'react-router-dom';

const Contact = () => {
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        // Form handling logic will go here
        alert('Message sent! Redirecting to home page...');
        navigate('/'); // Redirect to home page
    };

    return (
        <div>
            <h2>Contact Me</h2>
            
            <div className="contact-info">
                <p><strong>Email:</strong> your.email@example.com</p>
                <p><strong>Phone:</strong> (123) 456-7890</p>
                <p><strong>Location:</strong> Toronto, ON</p>
            </div>

            <form onSubmit={handleSubmit}>
                <div>
                    <input type="text" placeholder="First Name" required />
                </div>
                <div>
                    <input type="text" placeholder="Last Name" required />
                </div>
                <div>
                    <input type="tel" placeholder="Contact Number" required />
                </div>
                <div>
                    <input type="email" placeholder="Email Address" required />
                </div>
                <div>
                    <textarea placeholder="Your Message" rows="5" required></textarea>
                </div>
                <button type="submit">Send Message</button>
            </form>
        </div>
    );
}

export default Contact;