import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Testimonial = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3, // Number of slides to show at once
        slidesToScroll: 1,
        autoplay: true, // Corrected property
        autoplaySpeed: 2000, // Autoplay interval in milliseconds
        responsive: [
            {
                breakpoint: 1024, // For medium screens
                settings: {
                    slidesToShow: 2,
                },
            },
            {
                breakpoint: 768, // For small screens
                settings: {
                    slidesToShow: 1,
                },
            },
        ],
    };

    const testimonials = [
        {
            img: "/images/client-1.jpg",
            name: "John Doe",
            text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
        },
        {
            img: "/images/client-2.jpg",
            name: "Jane Smith",
            text: "Lorem Ipsum has been the industry's standard dummy text since the 1500s.",
        },
        {
            img: "/images/client-3.jpg",
            name: "Alice Johnson",
            text: "This is an example testimonial about great service!",
        },
        {
            img: "/images/client-4.jfif",
            name: "Akib Johnson",
            text: "This testimonial describes the amazing experience I had!",
        },
        {
            img: "/images/client-5.jfif",
            name: "Amil Johnson",
            text: "Great work! I highly recommend this service to everyone.",
        },
        {
            img: "/images/client-6.jpg",
            name: "Rajeccv Doe",
            text: "Fantastic! The service was fast and very professional.",
        },
    ];

    return (
        <div className="testimonial-bg">
            <h1 className="testimonial-review">Testimonials and Reviews</h1>
            <Slider {...settings}>
                {testimonials.map((testimonial, index) => (
                    <div key={index} className="testimonial-card">
                        <div className="card">
                            <div className="card-img-top d-flex justify-content-center">
                                <img
                                    src={testimonial.img}
                                    className="rounded-circle"
                                    alt={testimonial.name}
                                    style={{ width: "110px", height: "110px" }}
                                />
                            </div>
                            <div className="card-body text-center">
                                <h5 className="card-title">{testimonial.name}</h5>
                                <p className="card-text">"{testimonial.text}"</p>
                            </div>
                        </div>
                    </div>
                ))}
            </Slider>
        </div>
    );
};

export default Testimonial;
