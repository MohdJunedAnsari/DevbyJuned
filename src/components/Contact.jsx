
import React, { useState } from "react";
import emailjs from "@emailjs/browser";

const Contact = () => {
    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        // phoneCode: "IN",
        phone: "",
        message: "",
    });

    const [loading, setLoading] = useState(false);
    const [status, setStatus] = useState("");

    // handle inputs
    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    // submit form (EmailJS)
    const handleSubmit = (e) => {
        e.preventDefault();
        setLoading(true);
        setStatus("");

        const msgData = {
            firstName: formData.firstName,
            lastName: formData.lastName,
            email: formData.email,
            phone: `${formData.phoneCode} ${formData.phone}`,
            message: formData.message,
        };

        emailjs
            .send(
                import.meta.env.VITE_EMAILJS_SERVICE_ID,
                import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
                msgData,
                import.meta.env.VITE_EMAILJS_PUBLIC_KEY
            )
            .then(
                () => {
                    setStatus("Message sent successfully!");
                    setFormData({
                        firstName: "",
                        lastName: "",
                        email: "",
                        // phoneCode: "IN",
                        phone: "",
                        message: "",
                    });
                    setLoading(false);
                },
                (error) => {
                    console.error("EmailJS Error:", error);
                    setStatus("Failed to send message. Please try again.");
                    setLoading(false);
                }
            );
    };

    return (
        <section id="contact" className="w-full py-20 px-[10%] bg-whitesmoke to-white">
            <h2 className="text-center text-5xl font-bold">Contact Us</h2>
            <p className="text-center text-gray-600 mt-3 text-lg">
                Have a question or feedback? We'd love to hear from you.
            </p>
            <div className="w-20 h-[3px] bg-[#6c63ff] mx-auto mb-12 rounded"></div>

            <div className="mt-16 grid grid-cols-1 lg:grid-cols-2 gap-16">
                {/* LEFT SIDE INFO */}
                <div className="space-y-6">
                    <h3 className="text-3xl font-semibold">Get in Touch</h3>
                    <p className="text-gray-600">
                        Fill out the form and we'll get back to you shortly.
                    </p>

                    <div className="space-y-4 text-gray-700">
                        <p>
                            <strong>Address:</strong>{" "}
                            <span className="text-[#6c63ff]">BHOPAL, INDIA</span>
                        </p>
                        <p>
                            <strong>Phone:</strong>{" "}
                            <span className="text-[#6c63ff]">
                                <a href="tel:9039229672">9039229672</a>
                            </span>
                        </p>
                        <p>
                            <strong>Email:</strong>{" "}
                            <span className="text-[#6c63ff]">
                                <a href="mailto:ansarikaynat939@gmail.com">
                                    ansarikaynat939@gmail.com
                                </a>
                            </span>
                        </p>
                    </div>
                </div>

                {/* RIGHT SIDE FORM */}
                <form onSubmit={handleSubmit} className="space-y-6">
                    {/* First + Last Name */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                            <label className="text-gray-700 font-medium">First Name</label>
                            <input
                                type="text"
                                name="firstName"
                                className="w-full mt-1 p-3 border rounded-lg focus:ring-2 focus:ring-[#6c63ff] outline-none"
                                required
                                placeholder="First Name"
                                value={formData.firstName}
                                onChange={handleChange}
                            />
                        </div>

                        <div>
                            <label className="text-gray-700 font-medium">Last Name</label>
                            <input
                                type="text"
                                name="lastName"
                                className="w-full mt-1 p-3 border rounded-lg focus:ring-2 focus:ring-[#6c63ff] outline-none"
                                required
                                placeholder="Last Name"
                                value={formData.lastName}
                                onChange={handleChange}
                            />
                        </div>
                    </div>

                    {/* Email */}
                    <div>
                        <label className="text-gray-700 font-medium">Email</label>
                        <input
                            type="email"
                            name="email"
                            className="w-full mt-1 p-3 border rounded-lg focus:ring-2 focus:ring-[#6c63ff] outline-none"
                            required
                            placeholder="Email Address"
                            value={formData.email}
                            onChange={handleChange}
                        />
                    </div>

                    {/* Phone */}
                    <div>
                        <label className="text-gray-700 font-medium">Phone</label>
                        <div className="flex items-center gap-2 p-3 border rounded-lg focus-within:ring-2 focus-within:ring-[#6c63ff]">
                            <select
                                name="phoneCode"
                                value={formData.phoneCode}
                                onChange={handleChange}
                                className="bg-transparent outline-none"
                            >
                                <option>IN</option>
                                <option>US</option>
                                <option>UK</option>
                                <option>CA</option>
                            </select>

                            <input
                                type="tel"
                                name="phone"
                                value={formData.phone}
                                onChange={handleChange}
                                required
                                className="flex-1 bg-transparent outline-none"
                                placeholder="123-456-7890"
                            />
                        </div>

                    </div>

                    {/* Message */}
                    <div>
                        <label className="text-gray-700 font-medium">Message</label>
                        <textarea
                            rows="5"
                            name="message"
                            className="w-full mt-1 p-3 border rounded-lg focus:ring-2 focus:ring-[#6c63ff] outline-none"
                            required
                            placeholder="Write your message..."
                            value={formData.message}
                            onChange={handleChange}
                        ></textarea>
                    </div>

                    {/* Submit Button */}
                    <button
                        type="submit"
                        disabled={loading}
                        className="w-full bg-[#6c63ff] hover:bg-[#5a54e8] text-white py-4 rounded-lg text-xl font-semibold transition"
                    >
                        {loading ? "Sending..." : "Send Message"}
                    </button>

                    {/* Status */}
                    {status && (
                        <p className="text-center text-lg font-medium mt-3 text-green-600">
                            {status}
                        </p>
                    )}
                </form>
            </div>
        </section>
    );
};

export default Contact;
