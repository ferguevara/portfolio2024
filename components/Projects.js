export default function Projects() {
  const projects = [
    {
      title: "User Dashboard and Mobile Experience for Splitscend's Road-Smart Technology",
      image: '/images/project-1.png',
      link: 'https://www.figma.com/proto/z6dEi6HTTFulOxehFt7e1s/ferguevara.com-Portfolio-2024?type=design&node-id=14-22&t=xcdbwfqKgJZdLL7a-0&scaling=min-zoom&page-id=0%3A1&starting-point-node-id=14%3A532', // Add link here
    },
    {
      title: 'Optimizing task Success Rate through a revamped information architecture and website for gastro.org',
      image: '/images/project-2.png',
      link: 'https://www.figma.com/proto/z6dEi6HTTFulOxehFt7e1s/ferguevara.com-Portfolio-2024?type=design&node-id=14-255&t=xcdbwfqKgJZdLL7a-0&scaling=min-zoom&page-id=0%3A1&starting-point-node-id=14%3A532', // Add link here
    },
    {
      title: 'A marketplace for your own content with the power of NFTs',
      image: '/images/project-3.png',
      link: 'https://www.figma.com/proto/z6dEi6HTTFulOxehFt7e1s/ferguevara.com-Portfolio-2024?node-id=14-448&t=xsaEnSUVhmKlwAft-0&scaling=min-zoom&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=14%3A532', // Add link here
    },
    {
      title: 'Simplifying How Schedule and Manage Appointments',
      image: '/images/project-4.png',
      link: 'https://dribbble.com/shots/24791673-Scheduling-system-for-a-beauty-salon', // Add link here
    },
  ];

  return (
    <section className="py-12">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-7xl mx-auto px-4">
        {projects.map((project, index) => (
          <div key={index}>
            <a href={project.link} target="_blank" rel="noopener noreferrer">
              <div className="rounded-2xl overflow-hidden shadow-md bg-orange-400 transform transition-transform duration-300 hover:scale-105">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full object-cover h-62 md:h-84 lg:h-92"
                />
              </div>
            </a>
            <a href={project.link} target="_blank" rel="noopener noreferrer">
              <h3 className="text-xl font-semibold mb-2 py-4">{project.title}</h3>
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}