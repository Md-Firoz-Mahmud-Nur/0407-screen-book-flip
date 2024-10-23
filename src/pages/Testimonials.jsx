import { useEffect, useState } from 'react';
import './Testimonials.css'; // Ensure you import the CSS file for styling and animations

const testimonials = [
    {
        text: "“The massage therapy sessions were incredible! I feel rejuvenated and stress-free.”",
        author: "- Sarah J.",
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTOuxrvcNMfGLh73uKP1QqYpKoCB0JLXiBMvA&s",
    },
    {
        text: "“A serene environment with wonderful spa treatments. Highly recommend!”",
        author: "- Michael D.",
        img: "https://cdn-icons-png.flaticon.com/512/2219/2219822.png",
    },
    {
        text: "“The personal training program transformed my life. Amazing results!”",
        author: "- Emily F.",
        img: "https://cdn-icons-png.flaticon.com/512/5300/5300849.png",
    },
];

const Testimonials = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [swiping, setSwiping] = useState(false);

    useEffect(() => {
        const interval = setInterval(() => {
            setSwiping(true); // Start swiping effect
            setTimeout(() => {
                setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
                setSwiping(false); // Reset swiping effect
            }, 600); // Match with CSS transition duration
        }, 5000); // Change testimonial every 5 seconds

        return () => clearInterval(interval);
    }, []);

    return (
        <div className='flex flex-col items-center justify-center pb-5'>
            <h2 className="text-4xl font-bold text-white mb-6">What Our Clients Say</h2>
            <div className={`testimonial-container bg-gray-50 rounded-xl border h-fit ${swiping ? 'swiping' : ''}`}>
                <div className="testimonial-card">
                    <img src={testimonials[currentIndex].img} alt={testimonials[currentIndex].author} className="rounded-full mb-4 w-24 h-24" />
                    <p className="italic text-gray-600 text-center">{testimonials[currentIndex].text}</p>
                    <h3 className="mt-4 text-lg font-bold">{testimonials[currentIndex].author}</h3>
                </div>
            </div>
        </div>
    );
};

export default Testimonials;
