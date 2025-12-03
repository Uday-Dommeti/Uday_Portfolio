function Home() {
    return (
        <div
            className="container py-5 d-flex justify-content-evenly align-items-center flex-wrap shadow m-2 rounded-4"
            id="Home"
            data-aos="fade-up"
        >
            <div className="home-text" data-aos="fade-right">
                <h2 className="fw-bold text-primary mb-3">Hello, I'm Uday</h2>
                <h4 className="text-secondary mb-3">MERN Full Stack Developer</h4>
            </div>

            <div className="home-image mt-4 mt-md-0" data-aos="fade-left">
                <img
                    src="/assets/Uday-PortFolio-Pic.jpg"
                    alt="Uday"
                    className="rounded-4 shadow-lg home-profile-img"
                    draggable="false"
                />
            </div>
        </div>
    );
}

export default Home;