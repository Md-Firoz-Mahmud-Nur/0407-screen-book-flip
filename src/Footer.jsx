import { FaFacebookF, FaInstagram, FaTwitter, FaLinkedinIn } from 'react-icons/fa';

const Footer = () => {
    return (
        <footer className="bg-gray-800 text-white py-8">
            <div className="container mx-auto flex flex-col md:flex-row justify-between items-center px-4">
                <div className="mb-4 md:mb-0">
                    <h2 className="text-lg font-semibold">Connect with Us</h2>
                    <div className="flex space-x-4 mt-2">
                        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                            <FaFacebookF className="hover:text-blue-500 transition-colors" size={24} />
                        </a>
                        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                            <FaInstagram className="hover:text-pink-500 transition-colors" size={24} />
                        </a>
                        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                            <FaTwitter className="hover:text-blue-400 transition-colors" size={24} />
                        </a>
                        <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                            <FaLinkedinIn className="hover:text-blue-600 transition-colors" size={24} />
                        </a>
                    </div>
                </div>
                <div className="text-center">
                    <h2 className="text-lg font-semibold">Contact Us</h2>
                    <p className="mt-2">Email: support@serenefit.com</p>
                    <p>Phone: (123) 456-7890</p>
                </div>
            </div>
            <div className="mt-6 text-center">
                <p className="text-sm">
                    &copy; {new Date().getFullYear()} SereneFit. All Rights Reserved.
                </p>
            </div>
        </footer>
    );
};

export default Footer;