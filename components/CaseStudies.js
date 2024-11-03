"use client";

import useEmblaCarousel from 'embla-carousel-react';
import { useCallback } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const testimonials = [
  {
    name: 'Fernando Guevara',
    company: 'Nursebackpack app',
    testimonial: 'Fernando has been invaluable, quickly understanding our project and showing us new possibilities. Working with him has been great, and we look forward to more projects together.',
  },
  {
    name: 'EduTech Solutions',
    company: 'Toptal',
    testimonial: 'Fernando is a highly skilled designer with a deep understanding of UX principles. His designs significantly improved our user engagement.',
  },
  {
    name: 'HealthWell Startup',
    company: 'Samuel Romero, Software Developer',
    testimonial: 'Working with Fernando has been an amazing experience. His creativity and attention to detail are outstanding.',
  },
];

const CaseStudy = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  return (
    <section className="py-10 bg-white">
      <div className="container mx-auto">
        <h2 className="text-3xl mb-5 text-center text-gray-600">Hear it from others</h2>
        <div className="relative max-w-4xl text-2xl mx-auto">
          <div className="overflow-hidden" ref={emblaRef}>
            <div className="flex">
              {testimonials.map((testimonial, index) => (
                <div className="flex-[0_0_100%] mx-4 bg-white p-6" key={index}>
                  
                  <div>
                    <p className="text-center font-bold text-4xl">{testimonial.testimonial}</p>
                  </div>
                  <div className="pb-2 mb-4">
                    {/* <h3 className="text-lg font-bold">{testimonial.name}</h3> */}
                    <h3 className="text-gray-500  text-2xl text-center py-5">{testimonial.company}</h3>
                  </div>
                </div>
              ))}
            </div>
          </div>
          {/* Buttons positioning for desktop and mobile views */}
          <div className="flex justify-center mt-5 md:absolute md:top-1/2 md:left-0 md:right-0 md:transform md:-translate-y-1/2">
            <button
              className="p-3 m-2 bg-gray-300 rounded-full hover:bg-gray-400 transition-colors md:absolute md:left-0 md:transform md:-translate-x-full md:top-1/2 md:-translate-y-1/2"
              onClick={scrollPrev}
            >
              <ChevronLeft className="h-6 w-6" />
            </button>
            <button
              className="p-3 m-2 bg-gray-300 rounded-full hover:bg-gray-400 transition-colors md:absolute md:right-0 md:transform md:translate-x-full md:top-1/2 md:-translate-y-1/2"
              onClick={scrollNext}
            >
              <ChevronRight className="h-6 w-6" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CaseStudy;