function About() {
    const skills = [
        {
            image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
            category: "Frontend",
            items: ["ReactJS", "Redux & Redux Toolkit", "JavaScript", "HTML / CSS / Bootstrap"]
        },
        {
            image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
            category: "Backend",
            items: ["Node.js", "Express.js"]
        },
        {
            image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
            category: "Database",
            items: ["MongoDB"]
        },
        {
            image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg",
            category: "Programming Languages",
            items: ["C", "C++"]
        },
        {
            image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original-wordmark.svg",
            category: "Cloud & Deployment",
            items: ["AWS"]
        },

    ]
    return (
        <div className="container py-5" id="About">
            <h2 className="fw-bold mb-4 text-primary">About Me</h2>

            <div className="mb-5 p-4 shadow-sm rounded bg-light">
                <h4 className="fw-semibold">Career Objective</h4>
                <p className="mt-3">
                    Enthusiastic Full Stack Developer with strong skills in ReactJS, JavaScript, and the MERN stack.
                    I enjoy building clean, efficient, and user-friendly web applications. With experience in developing
                    dynamic projects like document generators and e-commerce interfaces, I focus on problem-solving,
                    performance, and continuous learning.
                </p>
            </div>

            <div className="mb-5 p-4 shadow-sm rounded bg-light">
                <h4 className="fw-semibold mb-3">Skills</h4>
                <div className="d-flex flex-wrap justify-content-evenly align-items-center">

                    {skills.map((skill,index) => {
                        return (
                            <div className="col-md-2" data-aos="fade-up" key={index}>
                                <div className="p-4 shadow rounded-4 skill-card bg-white text-center d-flex flex-column justify-content-center align-items-center">
                                    <img
                                        src={skill.image}
                                        className="skill-img mb-3"
                                        alt={skill.category}
                                    />
                                    <h5 className="fw-bold text-secondary">{skill.category}</h5>
                                    <ul className="mt-3 list-unstyled">
                                        {skill.items.map((item,index) => <li key={index}>{item}</li>)}
                                    </ul>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>

        </div>
    );
}

export default About;