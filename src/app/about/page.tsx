const AboutUs = () => {
  return (
    <main className="pt-24">
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl md:text-4xl font-bold text-white mb-8">
          About Us
        </h1>

        <div className="prose prose-invert max-w-none">
          <p className="text-lg text-white/80 mb-6">
            Tubi Vision is a free streaming service that offers thousands of
            movies and TV shows to our viewers. Filmy123 is a free platform that
            brings together thousands of movies and TV shows available across
            the internet. We aim to make popular entertainment easily accessible
            by organizing publicly available content through open-source links —
            all at zero cost to our users. We do not host or store any content
            on our servers.
          </p>

          <h2 className="text-2xl font-bold text-white mt-8 mb-4">Our Story</h2>
          <p className="text-lg text-white/80 mb-6">
            Founded in 2025, Filmy123 started with a simple goal: to help people
            discover and watch trending movies and shows without searching all
            over the internet. By curating high-quality, freely available
            content, we’ve become a go-to hub for movie and TV lovers.
          </p>

          <h2 className="text-2xl font-bold text-white mt-8 mb-4">
            Our Vision
          </h2>
          <p className="text-lg text-white/80 mb-6">
            We believe entertainment should be for everyone — free, easy to
            find, and enjoyable. Our mission is to provide access to movies and
            shows using open links, while keeping the platform clean, fast, and
            user-friendly.
          </p>

          <h2 className="text-2xl font-bold text-white mt-8 mb-4">Our Team</h2>
          <p className="text-lg text-white/80 mb-6">
            Our passionate team is focused on curating the best movie and show
            links from the web, designing a smooth experience, and keeping
            things up-to-date. We&apos;re committed to offering a reliable
            platform that connects you with great entertainment, always free.
          </p>
        </div>
      </div>
    </main>
  );
};

export default AboutUs;
