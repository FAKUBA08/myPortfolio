import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Star, Quote } from 'lucide-react';
import Styles from '../Styles/Testimonial.module.css';

const testimonials = [
  {
    id: 1,
    name: "Sarah Johnson",
    role: "Product Manager",
    company: "TechCorp",
    content: "This platform has completely transformed how we manage our projects. The intuitive interface and powerful features have increased our team's productivity by 40%.",
    rating: 5,
    avatar: "SJ"
  },
  {
    id: 2,
    name: "Michael Chen",
    role: "CEO",
    company: "StartupX",
    content: "Outstanding service and support. The team goes above and beyond to ensure our success. I can't imagine running our business without this solution.",
    rating: 5,
    avatar: "MC"
  },
  {
    id: 3,
    name: "Emily Rodriguez",
    role: "Marketing Director",
    company: "GrowthCo",
    content: "The analytics and insights provided have helped us make data-driven decisions that resulted in a 60% increase in our conversion rates.",
    rating: 5,
    avatar: "ER"
  },
  {
    id: 4,
    name: "David Thompson",
    role: "CTO",
    company: "InnovateNow",
    content: "Seamless integration and robust security features. Our development team was able to implement the solution in just a few days.",
    rating: 5,
    avatar: "DT"
  }
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