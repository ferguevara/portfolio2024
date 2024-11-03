import Header from '../components/Header';
import Hero from '../components/Hero';
import Projects from '../components/Projects';
import CaseStudies from '../components/CaseStudies';
import FAQ from '../components/FAQ';
import Footer from '../components/Footer';
import { NextSeo } from 'next-seo';
import { useRef } from 'react';

export default function Home() {
  const footerRef = useRef(null);

  const scrollToFooter = () => {
    if (footerRef.current) {
      footerRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <NextSeo
        title="Fernando Guevara | Digital Product Designer"
        description="Hi 👋, I am a product designer with 10+ years of experience in healthcare, edtech, and startups. I create intuitive experiences through research, data analysis, prototyping, and agile collaboration. My designs improve engagement, conversion rates, and growth while aligning with business goals."
        canonical="https://ferguevara.com/"
        openGraph={{
          url: 'https://ferguevara.com/',
          title: 'Fernando Guevara | Digital Product Designer',
          description: 'Hi 👋, I am a product designer with 10+ years of experience in healthcare, edtech, and startups. I create intuitive experiences through research, data analysis, prototyping, and agile collaboration. My designs improve engagement, conversion rates, and growth while aligning with business goals.',
          images: [
            {
              url: 'https://your-portfolio.com/og-image.jpg',
              width: 800,
              height: 600,
              alt: 'Portfolio Image',
            },
          ],
        }}
      />
      <Header scrollToFooter={scrollToFooter} />
      <Hero />
      <Projects />
      <CaseStudies />
      <FAQ />
      <div ref={footerRef}>
        <Footer />
      </div>
    </>
  );
}