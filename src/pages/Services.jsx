import { motion } from 'framer-motion';
import { FaHandsHelping, FaLeaf, FaHotjar, FaBabyCarriage, FaHeadSideCough, FaRunning } from 'react-icons/fa';

// Sample images for the services
const serviceImages = {
    remedial: "https://www.coolaromaspa.com/wp-content/uploads/2018/10/massage-for-men-tilehurst.jpg",
    lymphatic: "https://agtwc.com/wp-content/uploads/2022/03/lymphatic-massage-2.jpg",
    aromatherapy: "https://img.freepik.com/premium-photo/differentsize-smooth-hot-stones-stacked-spa-setting_762026-80140.jpg",
    pregnancy: "https://excelsiorintegrative.com/wp-content/uploads/2024/08/shutterstock_2436370383.jpg",
    indian: "https://www.mersearoadclinic.co.uk/assets/uploaded/images/ea457adccaa9e569cff05de9b4f3b04d_XL.jpg",
    thai: "https://www.coolaromaspa.com/wp-content/uploads/2018/10/massage-for-men-tilehurst.jpg",
    infant: "https://spinalandsportscare.com.au/wp-content/uploads/2018/12/spinalandsports-blog_remedialmassage.jpg", // Reused image for example
    deepTissue: "https://agtwc.com/wp-content/uploads/2022/03/lymphatic-massage-2.jpg", // Reused image for example
    agedCare: "https://img.freepik.com/premium-photo/differentsize-smooth-hot-stones-stacked-spa-setting_762026-80140.jpg", // Reused image for example
    sports: "https://agtwc.com/wp-content/uploads/2022/03/lymphatic-massage-2.jpg", // Reused image for example
    seated: "https://www.mersearoadclinic.co.uk/assets/uploaded/images/ea457adccaa9e569cff05de9b4f3b04d_XL.jpg", // Reused image for example
};

const services = [
    {
        title: "Remedial Massage",
        description: "Designed to alleviate specific muscular issues. Beneficial for chronic pain or recovering from injuries.",
        prices: [
            { duration: "60 Mins", cost: "£80" },
            { duration: "90 Mins", cost: "£110" },
            { duration: "120 Mins", cost: "£150" },
        ],
        image: serviceImages.remedial,
        bgColor: "bg-indigo-200",
        icon: <FaHandsHelping className="text-xl inline-block mr-2" />
    },
    {
        title: "Lymphatic Drainage",
        description: "A gentle technique that boosts the immune system by promoting lymphatic flow. Ideal for reducing swelling.",
        prices: [
            { duration: "60 Mins", cost: "£80" },
            { duration: "90 Mins", cost: "£110" },
            { duration: "120 Mins", cost: "£150" },
        ],
        image: serviceImages.lymphatic,
        bgColor: "bg-blue-200",
        icon: <FaLeaf className="text-xl inline-block mr-2" />
    },
    {
        title: "Aromatherapy Hot Stones",
        description: "Combines aromatherapy with hot stones to relieve tension and enhance relaxation.",
        prices: [
            { duration: "60 Mins", cost: "£80" },
            { duration: "90 Mins", cost: "£110" },
            { duration: "120 Mins", cost: "£150" },
        ],
        image: serviceImages.aromatherapy,
        bgColor: "bg-green-200",
        icon: <FaHotjar className="text-xl inline-block mr-2" />
    },
    {
        title: "Pregnancy Massage",
        description: "Alleviates discomfort associated with pregnancy, promoting relaxation and well-being for expectant mothers.",
        prices: [
            { duration: "60 Mins", cost: "£80" },
            { duration: "90 Mins", cost: "£110" },
            { duration: "120 Mins", cost: "£150" },
        ],
        image: serviceImages.pregnancy,
        bgColor: "bg-yellow-200",
        icon: <FaBabyCarriage className="text-xl inline-block mr-2" />
    },
    {
        title: "Indian Head Massage",
        description: "Focuses on head, neck, and shoulders to relieve tension, headaches, and stress.",
        prices: [
            { duration: "60 Mins", cost: "£80" },
            { duration: "90 Mins", cost: "£110" },
            { duration: "120 Mins", cost: "£150" },
        ],
        image: serviceImages.indian,
        bgColor: "bg-pink-200",
        icon: <FaHeadSideCough className="text-xl inline-block mr-2" />
    },
    {
        title: "Thai Massage",
        description: "Incorporates yoga-like stretching to improve flexibility and relieve tension.",
        prices: [
            { duration: "60 Mins", cost: "£80" },
            { duration: "90 Mins", cost: "£110" },
            { duration: "120 Mins", cost: "£150" },
        ],
        image: serviceImages.thai,
        bgColor: "bg-red-200",
        icon: <FaRunning className="text-xl inline-block mr-2" />
    },
    {
        title: "Infant/Baby Massage",
        description: "Gentle techniques designed for infants, promoting bonding and relaxation.",
        prices: [
            { duration: "60 Mins", cost: "£80" },
            { duration: "90 Mins", cost: "£110" },
            { duration: "120 Mins", cost: "£150" },
        ],
        image: serviceImages.infant,
        bgColor: "bg-purple-200",
        icon: <FaBabyCarriage className="text-xl inline-block mr-2" />
    },
    {
        title: "Deep Tissue Massage",
        description: "Focuses on deeper layers of muscle tissue, effective for chronic pain and stiffness.",
        prices: [
            { duration: "60 Mins", cost: "£80" },
            { duration: "90 Mins", cost: "£110" },
            { duration: "120 Mins", cost: "£150" },
        ],
        image: serviceImages.deepTissue,
        bgColor: "bg-teal-200",
        icon: <FaHandsHelping className="text-xl inline-block mr-2" />
    },
    {
        title: "Aged Care/Palliative Care/Grief Massage",
        description: "Gentle techniques tailored for elderly clients or those in palliative care.",
        prices: [
            { duration: "60 Mins", cost: "£80" },
            { duration: "90 Mins", cost: "£110" },
            { duration: "120 Mins", cost: "£150" },
        ],
        image: serviceImages.agedCare,
        bgColor: "bg-orange-200",
        icon: <FaHandsHelping className="text-xl inline-block mr-2" />
    },
    {
        title: "Sports Massage",
        description: "Designed for athletes, focusing on preventing and treating sports injuries.",
        prices: [
            { duration: "60 Mins", cost: "£80" },
            { duration: "90 Mins", cost: "£110" },
            { duration: "120 Mins", cost: "£150" },
        ],
        image: serviceImages.sports,
        bgColor: "bg-lime-200",
        icon: <FaHandsHelping className="text-xl inline-block mr-2" />
    },
    {
        title: "Seated Massage",
        description: "Quick and effective, performed while seated and focuses on the upper body.",
        prices: [
            { duration: "60 Mins", cost: "£80" },
            { duration: "90 Mins", cost: "£110" },
            { duration: "120 Mins", cost: "£150" },
        ],
        image: serviceImages.seated,
        bgColor: "bg-gray-200",
        icon: <FaHandsHelping className="text-xl inline-block mr-2" />
    },
];

const Services = () => {
    return (
        <div className="min-h-screen flex flex-col items-center bg-gradient-to-b from-[#238f89] to-gray-100 pt-24 pb-10">
            <h1 className="text-4xl font-bold mb-8 text-center text-stone-300">Our Services</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full p-6">
                {services.map((service, index) => (
                    <motion.div
                        key={index}
                        className={`text-gray-700 p-6 rounded-lg shadow-lg transition-transform duration-500 ${service.bgColor} border border-gray-300`}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 20 }}
                        transition={{ duration: 0.5, delay: index * 0.1 }} // Staggered animations
                    >
                        <img src={service.image} alt={service.title} className="w-full h-32 object-cover rounded-t-lg mb-4" />
                        <h2 className="text-xl font-semibold mb-2">{service.title}</h2>
                        <p className="mb-2">{service.icon}{service.description}</p>
                        <h3 className="font-bold">Pricing:</h3>
                        <ul className="list-disc pl-5">
                            {service.prices.map((price, idx) => (
                                <li key={idx} className="flex">
                                    <span className="font-semibold">{price.duration}: </span>
                                    <span className="ml-1">{price.cost}</span>
                                </li>
                            ))}
                        </ul>
                    </motion.div>
                ))}
            </div>
        </div>
    );
};

export default Services;