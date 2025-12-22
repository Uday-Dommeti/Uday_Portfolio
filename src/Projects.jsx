function Projects() {
    const projects = [
        // {
        //     title: "Getgroo (eCommerce)",
        //     image: "/assets/Getgroo-Image.png",
        //     description:
        //         "A responsive e-commerce application frontend developed using JavaScript, ReactJS, and Redux Toolkit for robust state management of complex cart operations.",
        //     technologies: [
        //         "ReactJS",
        //         "Redux",
        //         "Redux Toolkit",
        //         "JavaScript",
        //         "HTML",
        //         "CSS",
        //         "Bootstrap"
        //     ],
        //     liveLink: "Nothing for now"
        // },
        {
            title: "Getgroo (props)",
            image: "/assets/Getgroo(Props).png",
            description:
                "A responsive e-commerce application frontend developed using JavaScript, ReactJS, and prop drilling for robust state management of complex cart operations.",
            technologies: [
                "ReactJS",
                "JavaScript",
                "HTML",
                "CSS",
                "Bootstrap"
            ],
            liveLink: "https://getgroo-props.vercel.app/"
        },
        {
            title: "Movie Database",
            image: "/assets/Movie Database.png",
            description:
                "A fully functional Movie Database Application utilizing JavaScript and the ReactJS framework.Consists of a robust and efficient Movie Search Feature to allow users to quickly filter and find content.",
            technologies: [
                "ReactJS",
                "JavaScript",
                "HTML",
                "CSS",
                "Bootstrap"
            ],
            liveLink: "https://movie-db-app-zeta.vercel.app/"
        },
    ];

    return (
        <div className="container py-5" id="Projects">
            <h2 className="fw-bold mb-4 text-primary" data-aos="fade-up">Projects</h2>

            <div className="row g-4">
                {projects.map((project, idx) => (
                    <div className="col-md-6 col-lg-4" key={idx} data-aos="fade-up">
                        <div className="project-card shadow-sm rounded-4">
                            
                            <img src={project.image} alt={project.title} className="project-img rounded-top"/>

                            <div className="p-4">
                                <h4 className="fw-bold text-secondary">{project.title}</h4>
                                <p className="mt-2">{project.description}</p>
                                <div className="tech-list mt-3">
                                    {project.technologies.map((tech, t) => (
                                        <span className="tech-badge" key={t}>
                                            {tech}
                                        </span>
                                    ))}
                                </div>

                                <div className="mt-4 d-flex justify-content-center">
                                    <button className="btn btn-primary rounded-pill px-4" disabled={project.liveLink === "Nothing for now"}>
                                        {project.liveLink === "Nothing for now"
                                            ? "Coming soon"
                                            : <a href={project.liveLink} className="text-decoration-none text-white" target="blank">Live Demo</a> }
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Projects;
