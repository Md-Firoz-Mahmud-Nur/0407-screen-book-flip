import { motion } from 'framer-motion';

const About = () => {
    return (
        <div className="bg-gradient-to-b from-[#1e3c46] to-pink-100 flex flex-col items-center pt-20 pb-10">
            <motion.h1
                className="text-4xl font-bold mb-8 text-center text-gray-100"
                initial={{ opacity: 0, y: -50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
            >
                About Us
            </motion.h1>
            <motion.div
                className="max-w-4xl w-full bg-white shadow-lg rounded-lg overflow-hidden"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
            >
                <div className="flex flex-col lg:flex-row">
                    <motion.div
                        className="lg:w-1/2 p-8"
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5 }}
                    >
                        <h2 className="text-2xl font-semibold mb-4">Our Mission</h2>
                        <p className="text-gray-700 mb-4">
                            At SereneFit, we are dedicated to providing high-quality therapeutic services that promote relaxation, healing, and overall well-being. Our mission is to help our clients achieve their health goals through personalized treatments tailored to their individual needs.
                        </p>
                        <h2 className="text-2xl font-semibold mb-4">Our Values</h2>
                        <ul className="list-disc list-inside text-gray-700 mb-4">
                            <li>Compassionate Care</li>
                            <li>Professional Expertise</li>
                            <li>Continuous Improvement</li>
                            <li>Client Satisfaction</li>
                        </ul>
                        <h2 className="text-2xl font-semibold mb-4">Meet Our Team</h2>
                        <p className="text-gray-700">
                            Our team of skilled therapists is passionate about helping you achieve your wellness goals. Each therapist brings a unique set of skills and expertise, ensuring that you receive the best possible care.
                        </p>
                    </motion.div>
                    <motion.div
                        className="lg:w-1/2"
                        initial={{ opacity: 0, x: 50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5 }}
                    >
                        <img
                            src="https://lifeskillstherapy.ca/wp-content/uploads/2019/08/LST-Team-photo.jpg"
                            alt="Team"
                            className="w-full h-full object-cover"
                        />
                    </motion.div>
                </div>
            </motion.div>
        </div>
    );
};

export default About;