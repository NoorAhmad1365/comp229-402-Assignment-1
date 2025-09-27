const Services = () => {
    return (
        <div>
            <h2>Services I Offer</h2>
            
            <div className="service">
                <img src="/web-dev-icon.jpg" alt="Web Development" width="100" />
                <h3>Web Development (Learning)</h3>
                <p>Custom websites and web applications</p>
            </div>

            <div className="service">
                <img src="/programming-icon.jpg" alt="Programming" width="100" />
                <h3>Programming</h3>
                <p>Software development and coding solutions (C#, Python, Java (Learning))</p>
            </div>

            <div className="service">
                <img src="/srs-icon.jpg" alt="SRS Documents" width="100" />
                <h3>SRS Document Preparation</h3>
                <p>Software Requirements Specification (SRS) documents</p>
            </div>
        </div>
    );
}

export default Services;