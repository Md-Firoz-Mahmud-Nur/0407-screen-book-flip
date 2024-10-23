import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { FaHandsHelping, FaUserFriends } from 'react-icons/fa';
import { BiSpa } from 'react-icons/bi';
import { MdOutlineThumbUp } from 'react-icons/md';
import { Link } from 'react-router-dom';
import Testimonials from './Testimonials';

const backgrounds = [
    'https://miro.medium.com/v2/resize:fit:1400/0*My6bRIKC4qyAM3IV.jpeg',
    'https://us1-photo.nextdoor.com/post_photos/70/d5/70d508c7de2a93c2e78e80c3a746da4a.jpg',
    'https://mothersnaturalvibes.com/cdn/shop/files/Hot-Stone-title-Pic-1080x675.jpg?v=1685923585&width=1445',
];


const sectionVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
};

const Home = () => {
    const [currentBg, setCurrentBg] = useState(0);

    useEffect(() => {
        const bgInterval = setInterval(() => {
            setCurrentBg((prev) => (prev === backgrounds.length - 1 ? 0 : prev + 1));
        }, 5000); // Change background every 5 seconds

        return () => clearInterval(bgInterval);
    }, []);


    return (
        <div className='bg-gradient-to-b from-[#216880] to-pink-300'>
            {/* Hero Section */}
            <div
                className="relative min-h-screen flex flex-col items-center justify-center pt-24 pb-10"
                style={{
                    backgroundImage: `url(${backgrounds[currentBg]})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    transition: 'background-image 2s ease-in-out',
                }}
            >
                {/* Overlay */}
                <div className="absolute inset-0 bg-black opacity-40"></div>

                {/* Main Hero Section */}
                <motion.div
                    initial={{ opacity: 0, y: -50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1 }}
                    className="relative z-10 text-center p-10 bg-white bg-opacity-70 shadow-lg rounded-lg backdrop-blur w-4/5 md:w-3/5 lg:w-2/5"
                >
                    <motion.h1
                        className="text-4xl md:text-5xl font-extrabold text-gray-600"
                        initial={{ scale: 0.9 }}
                        animate={{ scale: 1 }}
                        transition={{ duration: 0.8, ease: 'easeInOut' }}
                    >
                        Welcome to SereneFit
                    </motion.h1>

                    <p className="text-xl mt-4 text-white">Relax, rejuvenate, and empower yourself.</p>

                    <div className="flex justify-center mt-6 space-x-8">
                        <motion.div
                            whileHover={{ scale: 1.2 }}
                            transition={{ type: 'spring', stiffness: 300 }}
                            className="p-4 bg-indigo-600 rounded-full text-white hover:bg-indigo-700"
                        >
                            <FaHandsHelping size={40} />
                        </motion.div>
                        <motion.div
                            whileHover={{ scale: 1.2 }}
                            transition={{ type: 'spring', stiffness: 300 }}
                            className="p-4 bg-pink-500 rounded-full text-white hover:bg-pink-600"
                        >
                            <BiSpa size={40} />
                        </motion.div>
                    </div>

                    <Link to="/services">
                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="mt-8 px-8 py-3 bg-gradient-to-r from-indigo-500 to-purple-500 text-white text-xl font-bold rounded-lg shadow-lg hover:shadow-2xl transition-transform"
                        >
                            Discover Our Services
                        </motion.button>
                    </Link>
                </motion.div>
            </div>

            <div className='flex flex-col items-center justify-center'>
                {/* Our Services Section */}
                <motion.section
                    variants={sectionVariants}
                    initial="hidden"
                    whileInView="visible"
                    transition={{ duration: 0.5 }}
                    className="mt-20 w-4/5 text-center z-10"
                >
                    <h2 className="text-4xl font-bold text-white mb-6">Our Services</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        <motion.div
                            whileHover={{ scale: 1.05 }}
                            className="bg-white p-6 rounded-lg shadow-lg"
                        >
                            <FaHandsHelping className="text-indigo-600 text-6xl mb-4" />
                            <h3 className="text-xl font-semibold">Massage Therapy</h3>
                            <p className="mt-2 text-gray-600">
                                Relieve stress and tension with our expert massage therapy services.
                            </p>
                        </motion.div>
                        <motion.div
                            whileHover={{ scale: 1.05 }}
                            className="bg-white p-6 rounded-lg shadow-lg"
                        >
                            <BiSpa className="text-pink-600 text-6xl mb-4" />
                            <h3 className="text-xl font-semibold">Spa Treatments</h3>
                            <p className="mt-2 text-gray-600">
                                Indulge in luxurious treatments for ultimate relaxation.
                            </p>
                        </motion.div>
                        <motion.div
                            whileHover={{ scale: 1.05 }}
                            className="bg-white p-6 rounded-lg shadow-lg"
                        >
                            <FaUserFriends className="text-green-600 text-6xl mb-4" />
                            <h3 className="text-xl font-semibold">Personal Training</h3>
                            <p className="mt-2 text-gray-600">
                                Achieve your fitness goals with personalized workout plans.
                            </p>
                        </motion.div>
                    </div>
                </motion.section>

                {/* Why Choose Us Section */}
                <motion.section
                    variants={sectionVariants}
                    initial="hidden"
                    whileInView="visible"
                    transition={{ duration: 0.5 }}
                    className="mt-20 w-4/5 text-center z-10"
                >
                    <h2 className="text-4xl font-bold text-white mb-6">Why Choose Us?</h2>
                    <p className="text-xl text-white">
                        Our dedication to your health and well-being sets us apart. We believe in
                        offering the best holistic wellness experience to all our clients.
                    </p>
                    <motion.div className="flex justify-center mt-6 space-x-8">
                        <motion.div
                            whileHover={{ scale: 1.05 }}
                            className="p-4 bg-blue-600 rounded-full text-white"
                        >
                            <MdOutlineThumbUp size={40} />
                        </motion.div>
                    </motion.div>
                </motion.section>

                <div className='mt-20 z-10'>
                    {/* Clients Testimonials */}
                <Testimonials />
                </div>

            </div>
        </div>
    );
};

export default Home;