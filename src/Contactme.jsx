
function Contact() {

    return (
        <div className="container py-5" id="Contact" data-aos="fade-up">
            <h2 className="fw-bold mb-3 text-primary">Let's Connect and Collaborate</h2>
            <h6 className="mb-4 text-secondary">
                Contact me at <b>udaydommeti8@gmail.com</b> or drop your details below — I’ll get back to you.
            </h6>

            <div className="contact-card shadow-sm rounded-4 p-4">
                <form className="contact-form" action="https://formspree.io/f/xgvgydlg" method="POST">
                    <div className="mb-3">
                        <label className="form-label">Name</label>
                        <input type="text" name="name" className="form-control contact-input" required/>
                    </div>

                    <div className="mb-3">
                        <label className="form-label">Email Address</label>
                        <input type="email" name="email" className="form-control contact-input" required/>
                    </div>

                    <div className="mb-3">
                        <label className="form-label">Your Message</label>
                        <textarea
                            name="message"
                            rows="4"
                            className="form-control contact-textarea"
                            required
                        ></textarea>
                    </div>
                    <button className="btn btn-primary rounded-pill px-4">Send Message</button>
                </form>
            </div>
        </div>
    );
}

export default Contact;
