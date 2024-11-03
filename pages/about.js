import { useRef } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Image from 'next/image';

export default function About() {
    const footerRef = useRef(null);

    const scrollToFooter = () => {
      if (footerRef.current) {
        footerRef.current.scrollIntoView({ behavior: 'smooth' });
      }
    };
  return (
    <>
      <Header scrollToFooter={scrollToFooter} />
      <section className="px-6  md:px-20 lg:px-40">
        <div className="max-w-4xl mx-auto">
            <header className="mb-10">
            
            <p className="text-8xl pt-10 font-bold mb-2">Hello world! <span role="img" aria-label="globe">🌍</span></p>
            <h1 className="text-xl text-gray-700">
                Hi there! I'm Fernando Guevara, a Product Designer and tech enthusiast. My passion lies in crafting digital experiences that aren't just functional, but also a joy to use.
            </h1>
            </header>

            <div className="mb-8">
            <h2 className="text-2xl font-semibold mb-2">My Product Design Journey in SaaS and UX</h2>
            <p className="text-xl text-gray-700">
                Over the years, I've refined my ability to craft outstanding software products, working hand-in-hand with diverse teams and developers across multiple sectors to ensure seamless end-to-end delivery.
            </p>
            </div>

            <div className="mb-8">
            <h2 className="text-2xl font-semibold mb-2">What Drives Me</h2>
            <p className="text-xl text-gray-700">
                My approach to problem-solving is deeply rooted in human-centered design and Lean/Agile methodologies. I'm all about incorporating user feedback early and often, using it to validate ideas and iterate quickly. The goal? To create user-friendly products that not only meet needs but also connect with users on a deeper level.
            </p>
            </div>

            <div className="mb-16">
            <h2 className="text-2xl font-semibold mb-2">Who I Team Up With</h2>
            <p className="text-xl text-gray-700 mb-6">
                My journey's been about helping different kinds of clients, from fresh new startups to renowned Fortune 500 companies. Together, we make products that are easy to use, look great, and feel just right.
            </p>
            <div className="text-center py-8">
                <Image src="/images/companies.png" alt="companies ferguevara" width={791} height={136} />
            </div>
            </div>

            <div>
            <h2 className="text-2xl font-semibold mb-2">Skills and Expertise</h2>
            <p className="text-xl text-gray-700 mb-4">My Handy Set of Abilities and Cool Tools</p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                <div>
                <h3 className="text-xl font-semibold mb-4">Research and Strategy</h3>
                <ul className="text-gray-700">
                    <li>Agile software development</li>
                    <li>Lean Startup</li>
                    <li>Usability Testing</li>
                    <li>Personas building</li>
                    <li>Google Analytics</li>
                    <li>Content Strategy</li>
                    <li>Card sorting</li>
                    <li>Affinity mapping</li>
                    <li>A/B testing</li>
                    <li>KPI's</li>
                    <li>Information architecture</li>
                    <li>Journey Mapping</li>
                    <li>Conducting interviews</li>
                    <li>Competitive analysis</li>
                </ul>
                </div>
                <div>
                <h3 className="text-xl font-semibold mb-4">Design</h3>
                <ul className="text-gray-700">
                    <li>Figma</li>
                    <li>Design Systems</li>
                    <li>Interaction Design</li>
                    <li>Adobe Creative Suite</li>
                    <li>Web-flow</li>
                    <li>Framer</li>
                    <li>Prototyping</li>
                    <li>Maze</li>
                    <li>Adobe After Effects</li>
                    <li>Wire framing</li>
                    <li>Visual Design</li>
                    <li>Responsive Design</li>
                    <li>Data Visualisation</li>
                    <li>iOS & Material design</li>
                </ul>
                </div>
                <div>
                    <h3 className="text-xl font-semibold mb-4">Development</h3>
                    <ul className="text-gray-700">
                        <li>HTML5</li>
                        <li>CSS3</li>
                        <li>SASS</li>
                        <li>Tailwind</li>
                        <li>JavaScript</li>
                        <li>GitHub</li>
                    </ul>
                </div>
                <div>
                    <h3 className="text-xl font-semibold mb-4">Languages</h3>
                    <ul className="text-gray-700">
                        <li>English</li>
                        <li>Spanish</li>
                    </ul>
                </div>
            </div>
            </div>

            <div className="text-center max-w-2xl mx-auto py-16">
                <span role="img" aria-label="wave" className="text-6xl">👋</span>
                <p className="text-3xl pt-4 font-semibold">
                    Thank you for stopping by, I look forward to the possibility of working with you!
                </p>
            </div>
        </div>
        </section>
        <div ref={footerRef}>
            <Footer />
        </div>
    </>
  );
}