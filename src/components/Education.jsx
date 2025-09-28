
// Education.jsx
// This component displays Noor Ahmad's education history and qualifications.
// Author: Noor Ahmad

const Education = () => {
    return (
        <div>
            {/* Main heading for education section */}
            <h2>Education & Qualifications</h2>

            {/* Web Development Diploma details */}
            <div className="education-item">
                <h3>Web Development Diploma</h3>
                <p><strong>Centennial College</strong> | 2023-2024</p>
                <p>Currently pursuing...</p>
            </div>

            {/* High School Diploma details */}
            <div className="education-item">
                <h3>High School Diploma</h3>
                <p><strong>Your High School</strong> | 2019-2023</p>
            </div>

            {/* Add more qualifications as needed */}
        </div>
    );
}

export default Education;