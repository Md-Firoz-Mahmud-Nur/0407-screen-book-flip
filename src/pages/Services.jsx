// import { useRef } from 'react';
// import { motion } from 'framer-motion';
// import HTMLFlipBook from 'react-pageflip';
// import { FaHandsHelping, FaLeaf, FaHotjar, FaBabyCarriage, FaHeadSideCough, FaRunning } from 'react-icons/fa';

// // Sample images for the services
// const serviceImages = {
//     remedial: "https://www.coolaromaspa.com/wp-content/uploads/2018/10/massage-for-men-tilehurst.jpg",
//     lymphatic: "https://agtwc.com/wp-content/uploads/2022/03/lymphatic-massage-2.jpg",
//     aromatherapy: "https://img.freepik.com/premium-photo/differentsize-smooth-hot-stones-stacked-spa-setting_762026-80140.jpg",
//     pregnancy: "https://excelsiorintegrative.com/wp-content/uploads/2024/08/shutterstock_2436370383.jpg",
//     indian: "https://www.mersearoadclinic.co.uk/assets/uploaded/images/ea457adccaa9e569cff05de9b4f3b04d_XL.jpg",
//     thai: "https://www.coolaromaspa.com/wp-content/uploads/2018/10/massage-for-men-tilehurst.jpg",
//     infant: "https://spinalandsportscare.com.au/wp-content/uploads/2018/12/spinalandsports-blog_remedialmassage.jpg",
//     deepTissue: "https://agtwc.com/wp-content/uploads/2022/03/lymphatic-massage-2.jpg",
//     agedCare: "https://img.freepik.com/premium-photo/differentsize-smooth-hot-stones-stacked-spa-setting_762026-80140.jpg",
//     sports: "https://agtwc.com/wp-content/uploads/2022/03/lymphatic-massage-2.jpg",
//     seated: "https://www.mersearoadclinic.co.uk/assets/uploaded/images/ea457adccaa9e569cff05de9b4f3b04d_XL.jpg",
// };

// // Services array
// const services = [
//     {
//         title: "Remedial Massage",
//         description: "Designed to alleviate specific muscular issues. Beneficial for chronic pain or recovering from injuries.",
//         prices: [
//             { duration: "60 Mins", cost: "£80" },
//             { duration: "90 Mins", cost: "£110" },
//             { duration: "120 Mins", cost: "£150" },
//         ],
//         image: serviceImages.remedial,
//         bgColor: "bg-indigo-200",
//         icon: <FaHandsHelping className="text-xl inline-block mr-2" />
//     },
//     {
//         title: "Lymphatic Drainage",
//         description: "A gentle technique that boosts the immune system by promoting lymphatic flow. Ideal for reducing swelling.",
//         prices: [
//             { duration: "60 Mins", cost: "£80" },
//             { duration: "90 Mins", cost: "£110" },
//             { duration: "120 Mins", cost: "£150" },
//         ],
//         image: serviceImages.lymphatic,
//         bgColor: "bg-blue-200",
//         icon: <FaLeaf className="text-xl inline-block mr-2" />
//     },
//     {
//         title: "Aromatherapy Hot Stones",
//         description: "Combines aromatherapy with hot stones to relieve tension and enhance relaxation.",
//         prices: [
//             { duration: "60 Mins", cost: "£80" },
//             { duration: "90 Mins", cost: "£110" },
//             { duration: "120 Mins", cost: "£150" },
//         ],
//         image: serviceImages.aromatherapy,
//         bgColor: "bg-green-200",
//         icon: <FaHotjar className="text-xl inline-block mr-2" />
//     },
//     {
//         title: "Pregnancy Massage",
//         description: "Alleviates discomfort associated with pregnancy, promoting relaxation and well-being for expectant mothers.",
//         prices: [
//             { duration: "60 Mins", cost: "£80" },
//             { duration: "90 Mins", cost: "£110" },
//             { duration: "120 Mins", cost: "£150" },
//         ],
//         image: serviceImages.pregnancy,
//         bgColor: "bg-yellow-200",
//         icon: <FaBabyCarriage className="text-xl inline-block mr-2" />
//     },
//     {
//         title: "Indian Head Massage",
//         description: "Focuses on head, neck, and shoulders to relieve tension, headaches, and stress.",
//         prices: [
//             { duration: "60 Mins", cost: "£80" },
//             { duration: "90 Mins", cost: "£110" },
//             { duration: "120 Mins", cost: "£150" },
//         ],
//         image: serviceImages.indian,
//         bgColor: "bg-pink-200",
//         icon: <FaHeadSideCough className="text-xl inline-block mr-2" />
//     },
//     {
//         title: "Thai Massage",
//         description: "Incorporates yoga-like stretching to improve flexibility and relieve tension.",
//         prices: [
//             { duration: "60 Mins", cost: "£80" },
//             { duration: "90 Mins", cost: "£110" },
//             { duration: "120 Mins", cost: "£150" },
//         ],
//         image: serviceImages.thai,
//         bgColor: "bg-red-200",
//         icon: <FaRunning className="text-xl inline-block mr-2" />
//     },
//     {
//         title: "Infant/Baby Massage",
//         description: "Gentle techniques designed for infants, promoting bonding and relaxation.",
//         prices: [
//             { duration: "60 Mins", cost: "£80" },
//             { duration: "90 Mins", cost: "£110" },
//             { duration: "120 Mins", cost: "£150" },
//         ],
//         image: serviceImages.infant,
//         bgColor: "bg-purple-200",
//         icon: <FaBabyCarriage className="text-xl inline-block mr-2" />
//     },
//     {
//         title: "Deep Tissue Massage",
//         description: "Focuses on deeper layers of muscle tissue, effective for chronic pain and stiffness.",
//         prices: [
//             { duration: "60 Mins", cost: "£80" },
//             { duration: "90 Mins", cost: "£110" },
//             { duration: "120 Mins", cost: "£150" },
//         ],
//         image: serviceImages.deepTissue,
//         bgColor: "bg-teal-200",
//         icon: <FaHandsHelping className="text-xl inline-block mr-2" />
//     },
//     {
//         title: "Aged Care/Palliative Care/Grief Massage",
//         description: "Gentle techniques tailored for elderly clients or those in palliative care.",
//         prices: [
//             { duration: "60 Mins", cost: "£80" },
//             { duration: "90 Mins", cost: "£110" },
//             { duration: "120 Mins", cost: "£150" },
//         ],
//         image: serviceImages.agedCare,
//         bgColor: "bg-orange-200",
//         icon: <FaHandsHelping className="text-xl inline-block mr-2" />
//     },
//     {
//         title: "Sports Massage",
//         description: "Designed for athletes, focusing on preventing and treating sports injuries.",
//         prices: [
//             { duration: "60 Mins", cost: "£80" },
//             { duration: "90 Mins", cost: "£110" },
//             { duration: "120 Mins", cost: "£150" },
//         ],
//         image: serviceImages.sports,
//         bgColor: "bg-lime-200",
//         icon: <FaHandsHelping className="text-xl inline-block mr-2" />
//     },
//     {
//         title: "Seated Massage",
//         description: "Quick and effective, performed while seated and focuses on the upper body.",
//         prices: [
//             { duration: "60 Mins", cost: "£80" },
//             { duration: "90 Mins", cost: "£110" },
//             { duration: "120 Mins", cost: "£150" },
//         ],
//         image: serviceImages.seated,
//         bgColor: "bg-gray-200",
//         icon: <FaHandsHelping className="text-xl inline-block mr-2" />
//     },
// ];

// const Services = () => {
//     const bookRefReal = useRef(null); // Reference to the flipbook

//     return (
//         <div className="flex flex-col items-center bg-gradient-to-b from-[#16414e] to-gray-300 pt-24 pb-10">
//             {/* Book Cover */}
//             <HTMLFlipBook
//                 ref={bookRefReal}
//                 width={400}
//                 height={500}
//                 minWidth={200}
//                 maxWidth={1024}
//                 minHeight={400}
//                 maxHeight={1536}
//                 maxShadowOpacity={0.5}
//                 className="book shadow-xl"
//                 flippingTime={1000}
//                 useMouseEvents
//                 startPage={0}
//                 swipeDistance={50}
//                 showCover
//                 renderOnlyPageLengthChange
//             >
//                 {/* Cover Page */}
//                 <div className="page h-full bg-gradient-to-br from-purple-500 to-purple-700 text-white p-8 flex justify-center items-center">
//                     <h1 className="text-4xl font-bold">Massage Therapy <br /> Services</h1>
//                 </div>

//                 {/* Service Pages */}
//                 {services.map((service, index) => (
//                     <div key={index} className={`page p-8 ${service.bgColor} rounded-lg shadow-lg flex flex-col items-center`}>
//                         <motion.h2 className="text-3xl font-bold mb-4" whileHover={{ scale: 1.05 }}>{service.icon}{service.title}</motion.h2>
//                         <p className="mb-4 text-center">{service.description}</p>
//                         <ul className="mb-4">
//                             {service.prices.map((price, idx) => (
//                                 <li key={idx} className="text-lg text-center">
//                                     {price.duration}: {price.cost}
//                                 </li>
//                             ))}
//                         </ul>
//                         <motion.img
//                             src={service.image}
//                             alt={service.title}
//                             className="rounded-lg object-cover h-48 w-full shadow-md"
//                             whileHover={{ scale: 1.1 }}
//                         />
//                     </div>
//                 ))}

//                 {/* Ending Page */}
//                 <div className="page bg-gradient-to-br from-gray-700 to-gray-900 text-white p-8 flex justify-center items-center">
//                     <h2 className="text-3xl font-bold">Thank You for Exploring!</h2>
//                 </div>
//             </HTMLFlipBook>
//         </div>
//     );
// };

// export default Services;

import { div } from "framer-motion/client";
import {
  FaHandsHelping,
  FaLeaf,
  FaHotjar,
  FaBabyCarriage,
  FaHeadSideCough,
  FaRunning,
} from "react-icons/fa";

// Sample services data
const serviceImages = {
  remedial:
    "https://www.coolaromaspa.com/wp-content/uploads/2018/10/massage-for-men-tilehurst.jpg",
  lymphatic:
    "https://agtwc.com/wp-content/uploads/2022/03/lymphatic-massage-2.jpg",
  aromatherapy:
    "https://img.freepik.com/premium-photo/differentsize-smooth-hot-stones-stacked-spa-setting_762026-80140.jpg",
  pregnancy:
    "https://excelsiorintegrative.com/wp-content/uploads/2024/08/shutterstock_2436370383.jpg",
  indian:
    "https://www.mersearoadclinic.co.uk/assets/uploaded/images/ea457adccaa9e569cff05de9b4f3b04d_XL.jpg",
  thai: "https://www.coolaromaspa.com/wp-content/uploads/2018/10/massage-for-men-tilehurst.jpg",
  infant:
    "https://spinalandsportscare.com.au/wp-content/uploads/2018/12/spinalandsports-blog_remedialmassage.jpg",
  deepTissue:
    "https://agtwc.com/wp-content/uploads/2022/03/lymphatic-massage-2.jpg",
  agedCare:
    "https://img.freepik.com/premium-photo/differentsize-smooth-hot-stones-stacked-spa-setting_762026-80140.jpg",
  sports:
    "https://agtwc.com/wp-content/uploads/2022/03/lymphatic-massage-2.jpg",
  seated:
    "https://www.mersearoadclinic.co.uk/assets/uploaded/images/ea457adccaa9e569cff05de9b4f3b04d_XL.jpg",
};

// Services array
const services = [
  {
    title: "Remedial Massage",
    description:
      "Designed to alleviate specific muscular issues. Beneficial for chronic pain or recovering from injuries.",
    prices: [
      { duration: "60 Mins", cost: "£80" },
      { duration: "90 Mins", cost: "£110" },
      { duration: "120 Mins", cost: "£150" },
    ],
    image: serviceImages.remedial,
    bgColor: "bg-indigo-200",
    icon: <FaHandsHelping className="text-xl inline-block mr-2" />,
  },
  {
    title: "Lymphatic Drainage",
    description:
      "A gentle technique that boosts the immune system by promoting lymphatic flow. Ideal for reducing swelling.",
    prices: [
      { duration: "60 Mins", cost: "£80" },
      { duration: "90 Mins", cost: "£110" },
      { duration: "120 Mins", cost: "£150" },
    ],
    image: serviceImages.lymphatic,
    bgColor: "bg-blue-200",
    icon: <FaLeaf className="text-xl inline-block mr-2" />,
  },
  {
    title: "Aromatherapy Hot Stones",
    description:
      "Combines aromatherapy with hot stones to relieve tension and enhance relaxation.",
    prices: [
      { duration: "60 Mins", cost: "£80" },
      { duration: "90 Mins", cost: "£110" },
      { duration: "120 Mins", cost: "£150" },
    ],
    image: serviceImages.aromatherapy,
    bgColor: "bg-green-200",
    icon: <FaHotjar className="text-xl inline-block mr-2" />,
  },
  {
    title: "Pregnancy Massage",
    description:
      "Alleviates discomfort associated with pregnancy, promoting relaxation and well-being for expectant mothers.",
    prices: [
      { duration: "60 Mins", cost: "£80" },
      { duration: "90 Mins", cost: "£110" },
      { duration: "120 Mins", cost: "£150" },
    ],
    image: serviceImages.pregnancy,
    bgColor: "bg-yellow-200",
    icon: <FaBabyCarriage className="text-xl inline-block mr-2" />,
  },
  {
    title: "Indian Head Massage",
    description:
      "Focuses on head, neck, and shoulders to relieve tension, headaches, and stress.",
    prices: [
      { duration: "60 Mins", cost: "£80" },
      { duration: "90 Mins", cost: "£110" },
      { duration: "120 Mins", cost: "£150" },
    ],
    image: serviceImages.indian,
    bgColor: "bg-pink-200",
    icon: <FaHeadSideCough className="text-xl inline-block mr-2" />,
  },
  {
    title: "Thai Massage",
    description:
      "Incorporates yoga-like stretching to improve flexibility and relieve tension.",
    prices: [
      { duration: "60 Mins", cost: "£80" },
      { duration: "90 Mins", cost: "£110" },
      { duration: "120 Mins", cost: "£150" },
    ],
    image: serviceImages.thai,
    bgColor: "bg-red-200",
    icon: <FaRunning className="text-xl inline-block mr-2" />,
  },
  {
    title: "Infant/Baby Massage",
    description:
      "Gentle techniques designed for infants, promoting bonding and relaxation.",
    prices: [
      { duration: "60 Mins", cost: "£80" },
      { duration: "90 Mins", cost: "£110" },
      { duration: "120 Mins", cost: "£150" },
    ],
    image: serviceImages.infant,
    bgColor: "bg-purple-200",
    icon: <FaBabyCarriage className="text-xl inline-block mr-2" />,
  },
  {
    title: "Deep Tissue Massage",
    description:
      "Focuses on deeper layers of muscle tissue, effective for chronic pain and stiffness.",
    prices: [
      { duration: "60 Mins", cost: "£80" },
      { duration: "90 Mins", cost: "£110" },
      { duration: "120 Mins", cost: "£150" },
    ],
    image: serviceImages.deepTissue,
    bgColor: "bg-teal-200",
    icon: <FaHandsHelping className="text-xl inline-block mr-2" />,
  },
  {
    title: "Aged Care/Palliative Care/Grief Massage",
    description:
      "Gentle techniques tailored for elderly clients or those in palliative care.",
    prices: [
      { duration: "60 Mins", cost: "£80" },
      { duration: "90 Mins", cost: "£110" },
      { duration: "120 Mins", cost: "£150" },
    ],
    image: serviceImages.agedCare,
    bgColor: "bg-orange-200",
    icon: <FaHandsHelping className="text-xl inline-block mr-2" />,
  },
  {
    title: "Sports Massage",
    description:
      "Designed for athletes, focusing on preventing and treating sports injuries.",
    prices: [
      { duration: "60 Mins", cost: "£80" },
      { duration: "90 Mins", cost: "£110" },
      { duration: "120 Mins", cost: "£150" },
    ],
    image: serviceImages.sports,
    bgColor: "bg-lime-200",
    icon: <FaHandsHelping className="text-xl inline-block mr-2" />,
  },
  {
    title: "Seated Massage",
    description:
      "Quick and effective, performed while seated and focuses on the upper body.",
    prices: [
      { duration: "60 Mins", cost: "£80" },
      { duration: "90 Mins", cost: "£110" },
      { duration: "120 Mins", cost: "£150" },
    ],
    image: serviceImages.seated,
    bgColor: "bg-gray-200",
    icon: <FaHandsHelping className="text-xl inline-block mr-2" />,
  },
];

const ServiceCard = ({ service }) => (
  <div className={`p-4 ${service.bgColor} rounded-lg shadow-lg`}>
    <img
      src={service.image}
      alt={service.title}
      className="w-full h-48 object-cover rounded-t-lg mb-4"
    />
    <div className="flex items-center mb-2">
      {service.icon}
      <h3 className="text-2xl font-bold">{service.title}</h3>
    </div>
    <p className="text-gray-700 mb-4 text-lg">{service.description}</p>
    <ul className="space-y-1">
      {service.prices.map((price, index) => (
        <li key={index} className="text-gray-800 font-semibold text-xl">
          {price.duration} - {price.cost}
        </li>
      ))}
    </ul>
  </div>
);

const Services = () => (
  <div className="bg-lime-300">
    <div className="container mx-auto px-4 py-8">
      <h2 className="text-4xl font-bold text-center mb-12 pt-10">
        Our Services
      </h2>
      <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
        {services.map((service, index) => (
          <ServiceCard key={index} service={service} />
        ))}
      </div>
    </div>
  </div>
);

export default Services;
