const Careers = () => {
  return (
    <main className="pt-24">
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl md:text-4xl font-bold text-white mb-8">
          Careers
        </h1>

        <div className="prose prose-invert max-w-none">
          <p className="text-lg text-white/80 mb-6">
            Join our team of passionate individuals dedicated to revolutionizing
            the streaming industry. At Tubi Vision, we offer an exciting,
            fast-paced environment where innovation and creativity thrive.
          </p>

          <h2 className="text-2xl font-bold text-white mt-8 mb-4">
            Why Work With Us
          </h2>
          <ul className="list-disc list-inside text-white/80 space-y-2 mb-6">
            <li>Innovative technology and projects</li>
            <li>Collaborative and inclusive culture</li>
            <li>Competitive compensation and benefits</li>
            <li>Opportunities for growth and development</li>
            <li>Work with a diverse team of professionals</li>
          </ul>

          <h2 className="text-2xl font-bold text-white mt-8 mb-4">
            Open Positions
          </h2>
          <div className="space-y-6 mb-8">
            <div className="p-6 rounded-lg bg-tubiPurple/40 border border-white/10">
              <h3 className="text-xl font-bold text-white mb-2">
                Senior Frontend Developer
              </h3>
              <p className="text-white/80 mb-4">
                Help us build remarkable user experiences with modern web
                technologies.
              </p>
              <span className="inline-block bg-tubiYellow/90 text-tubiPurple text-xs font-medium px-2 py-1 rounded">
                Full-time
              </span>
            </div>

            <div className="p-6 rounded-lg bg-tubiPurple/40 border border-white/10">
              <h3 className="text-xl font-bold text-white mb-2">
                Content Acquisition Specialist
              </h3>
              <p className="text-white/80 mb-4">
                Source and negotiate for high-quality content to expand our
                library.
              </p>
              <span className="inline-block bg-tubiYellow/90 text-tubiPurple text-xs font-medium px-2 py-1 rounded">
                Full-time
              </span>
            </div>

            <div className="p-6 rounded-lg bg-tubiPurple/40 border border-white/10">
              <h3 className="text-xl font-bold text-white mb-2">
                Marketing Manager
              </h3>
              <p className="text-white/80 mb-4">
                Drive our marketing strategy to reach and engage new audiences.
              </p>
              <span className="inline-block bg-tubiYellow/90 text-tubiPurple text-xs font-medium px-2 py-1 rounded">
                Full-time
              </span>
            </div>
          </div>

          <p className="text-lg text-white/80 mt-8">
            Don&apos;t see a position that matches your skills? We&apos;re
            always looking for talented individuals. Send your resume to
            careers@tubivision.example.com
          </p>
        </div>
      </div>
    </main>
  );
};

export default Careers;
