const Projects = () => {
    return (
        <div>
            <h2>My Projects</h2>
            
            <div className="project">
                <h3>Project 1 Title</h3>
                <img src="/project1.jpg" alt="Project 1" width="300" />
                <p><strong>My Role:</strong> Describe your role</p>
                <p><strong>Outcome:</strong> Describe the outcome</p>
            </div>

            <div className="project">
                <h3>Project 2 Title</h3>
                <img src="/project2.jpg" alt="Project 2" width="300" />
                <p><strong>My Role:</strong> Describe your role</p>
                <p><strong>Outcome:</strong> Describe the outcome</p>
            </div>

            <div className="project">
                <h3>Project 3 Title</h3>
                <img src="/project3.jpg" alt="Project 3" width="300" />
                <p><strong>My Role:</strong> Describe your role</p>
                <p><strong>Outcome:</strong> Describe the outcome</p>
            </div>
        </div>
    );
}

export default Projects;