import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Star, Quote } from 'lucide-react';
import Styles from '../Styles/Testimonial.module.css';

const testimonials = [
  {
    id: 1,
    name: "SQI College of ICT ",
    role: "Intern",
    company: "SQI",
    content: "During Faruq's internship at SQI College of ICT, he demonstrated strong technical skills, a proactive attitude, and a deep eagerness to learn. He was actively involved in practical web development tasks and consistently delivered high-quality work on time. Faruq quickly became a reliable part of the development team, showing excellent problem-solving abilities and a strong grasp of both frontend and backend concepts",
    rating: 5,
    avatar: "SJ"
  },
  {
    id: 2,
    name: " MichaelDigitalSolution.com",
    role: "Fullstack Developer",
    company: "MichaelDigitalSolution",
    content: "Faruq worked with us as a Fullstack Developer at Michael Digital Solution, where he played a crucial role in building and maintaining client applications. From creating responsive frontends in React to building efficient Node.js APIs, Faruq consistently delivered scalable and clean code. His ability to handle full project cycles—from database design to frontend polish—made him a key asset to our development team. His professionalism and problem-solving skills stood out on every project.",
    rating: 5,
    avatar: "MC"
  },
   {
    id: 3,
    name: "#DiasporaVote.eu",
    role: "Fullstack Developer",
    company: "#DiasporaVote.eu",
    content: "As a Fullstack Developer at DiasporaVote, Faruq made a meaningful impact by developing features that enhanced user engagement and improved platform performance. He worked across the stack, integrating third-party APIs, improving accessibility, and ensuring mobile responsiveness. Faruq excelled in remote collaboration, meeting tight deadlines, and contributing valuable insights during team discussions. His contributions were vital to several of our civic-tech initiatives.",
    rating: 5,
    avatar: "DT"
  },
  {
 id: 4,
  name: "Emily Rodriguez",
  role: "Fullstack Developer",
  company: "GrowthCo",
  content: "Working with Faruq as our Fullstack Developer was a turning point for our platform. His seamless integration of backend analytics and frontend dashboards gave our team the visibility we needed. The insights provided through his work helped us make data-driven decisions that resulted in a 60% increase in our conversion rates.",
  rating: 5,
  avatar: "ER"
  },
];

const Testimonial = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      nextTestimonial();
    }, 5000);

    return () => clearInterval(interval);
  }, [currentIndex]);

  const nextTestimonial = () => {
    if (!isAnimating) {
      setIsAnimating(true);
      setTimeout(() => {
        setCurrentIndex((prev) => (prev + 1) % testimonials.length);
        setIsAnimating(false);
      }, 150);
    }
  };

  const prevTestimonial = () => {
    if (!isAnimating) {
      setIsAnimating(true);
      setTimeout(() => {
        setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
        setIsAnimating(false);
      }, 150);
    }
  };

  const goToTestimonial = (index) => {
    if (!isAnimating && index !== currentIndex) {
      setIsAnimating(true);
      setTimeout(() => {
        setCurrentIndex(index);
        setIsAnimating(false);
      }, 150);
    }
  };

  const renderStars = (rating) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        className={`${Styles.star} ${
          i < rating ? Styles.starFilled : Styles.starEmpty
        }`}
      />
    ));
  };

  return (
    <section className={Styles.container}>
      <div className={Styles.maxWidth}>
      
        <div className={Styles.header}>
          <a className={Styles.title}>
            What Our Customers Say
          </a>
          <p className={Styles.subtitle}>
            Don't just take our word for it. Here's what industry leaders have to say about our platform.
          </p>
        </div>

        {/* Main Testimonial Card */}
        <div className={Styles.carouselContainer}>
          <div className={Styles.cardWrapper}>
            <div className={`${Styles.cardContent} ${isAnimating ? Styles.animating : ''}`}>
              <div className={Styles.mainCard}>
                <div className={Styles.cardInner}>
                  <div className={Styles.cardLayout}>
                    {/* Avatar */}
                    <div className={Styles.avatar}>
                      {testimonials[currentIndex].avatar}
                    </div>

                    {/* Content */}
                    <div className={Styles.content}>
                      {/* Quote Icon */}
                      <Quote className={Styles.quoteIcon} />
                      
                      {/* Rating */}
                      <div className={Styles.rating}>
                        {renderStars(testimonials[currentIndex].rating)}
                      </div>

                      {/* Testimonial Text */}
                      <blockquote className={Styles.testimonialText}>
                        "{testimonials[currentIndex].content}"
                      </blockquote>

                      {/* Author Info */}
                      <div>
                        <div className={Styles.authorName}>
                          {testimonials[currentIndex].name}
                        </div>
                        <div className={Styles.authorRole}>
                          {testimonials[currentIndex].role} at {testimonials[currentIndex].company}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Navigation Buttons */}
          <button
            className={`${Styles.navButton} ${Styles.prevButton}`}
            onClick={prevTestimonial}
            disabled={isAnimating}
          >
            <ChevronLeft />
          </button>

          <button
            className={`${Styles.navButton} ${Styles.nextButton}`}
            onClick={nextTestimonial}
            disabled={isAnimating}
          >
            <ChevronRight />
          </button>
        </div>

        {/* Pagination Dots */}
        <div className={Styles.pagination}>
          {testimonials.map((_, index) => (
            <button
              key={index}
              className={`${Styles.dot} ${index === currentIndex ? Styles.dotActive : ''}`}
              onClick={() => goToTestimonial(index)}
            />
          ))}
        </div>

        {/* Mini Cards Grid */}
        <div className={Styles.miniCardsGrid}>
          {testimonials.map((testimonial, index) => (
            <div
              key={testimonial.id}
              className={`${Styles.miniCard} ${index === currentIndex ? Styles.miniCardActive : ''}`}
              onClick={() => goToTestimonial(index)}
            >
              <div className={Styles.miniCardHeader}>
                <div className={Styles.miniAvatar}>
                  {testimonial.avatar}
                </div>
                <div>
                  <div className={Styles.miniAuthorName}>
                    {testimonial.name}
                  </div>
                  <div className={Styles.miniCompany}>
                    {testimonial.company}
                  </div>
                </div>
              </div>
              <div className={Styles.miniRating}>
                {renderStars(testimonial.rating)}
              </div>
              <p className={Styles.miniContent}>
                {testimonial.content}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonial;