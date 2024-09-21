
function Contact() {
    return (
        <section className="p-3 min-h-[79vh]">
            <div className="flex flex-col md:flex-row justify-evenly">
                {/* Contact Info */}
                <div className="p-3">
                    <h2 className="text-start text-2xl 2xl:text-3xl font-bold">Contact Us</h2>
                    <hr className="my-4" />
                    <div className="container mx-auto mt-3">
                        <h6 className="flex items-center my-2 2xl:text-lg">
                            <span className="material-symbols-outlined me-2"> phone </span>
                            0480-2760322, 2763771
                        </h6>
                        <h6 className="flex items-center my-2 2xl:text-lg">
                            <span className="material-symbols-outlined me-2"> mail </span>
                            lordsvply@gmail.com
                        </h6>
                        <h6 className="flex items-center my-2 2xl:text-lg">
                            <span className="material-symbols-outlined me-2"> home </span>
                            Lord’s Academy CMI ICSE School Varandarappilly Thrissur, Kerala - 680303
                        </h6>
                    </div>
                    <div className="flex justify-center mt-6">
                        <img className="max-w-[310px]" alt="Contact QR Code" src="images/ContactQR.webp" />
                    </div>
                </div>

                {/* Google Map */}
                <div className="text-center p-3 overflow-scroll">
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3923.9644674180745!2d76.32276717503687!3d10.424394389703817!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba7fbce2585aa49%3A0x24bcbc3074d5f667!2sLORD&#39;S%20ACADEMY%20ICSE%20SCHOOL!5e0!3m2!1sen!2sin!4v1726938509433!5m2!1sen!2sin"
                        width="600"
                        height="450"
                        style={{ border: 0 }}
                        allowFullScreen
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                    ></iframe>
                </div>
            </div>
        </section>

    )
}

export default Contact