import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-tubiPurple/50 py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-center md:text-start text-white font-bold mb-4">
              Company
            </h3>
            <ul className="space-y-2">
              <li className="text-center md:text-start">
                <Link
                  href="/about"
                  className="text-white/70 hover:text-tubiYellow"
                >
                  About Us
                </Link>
              </li>
              {/* <li><Link href="/careers" className="text-white/70 hover:text-tubiYellow">Careers</Link></li> */}
              <li className="text-center md:text-start">
                <Link
                  href="/contact"
                  className="text-white/70 hover:text-tubiYellow"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-center md:text-start text-white font-bold mb-4">
              Support
            </h3>
            <ul className="space-y-2">
              <li className="text-center md:text-start">
                <Link
                  href="/movie-request"
                  className="text-white/70 hover:text-tubiYellow"
                >
                  Movie Request
                </Link>
              </li>
              <li className="text-center md:text-start">
                <Link
                  href="/faq"
                  className="text-white/70 hover:text-tubiYellow"
                >
                  FAQ
                </Link>
              </li>
              <li className="text-center md:text-start">
                <Link
                  href="/terms"
                  className="text-white/70 hover:text-tubiYellow"
                >
                  Terms of Use
                </Link>
              </li>
              {/* <li><Link href="/privacy" className="text-white/70 hover:text-tubiYellow">Privacy Policy</Link></li> */}
            </ul>
          </div>

          <div>
            <h3 className="text-center md:text-start text-white font-bold mb-4">
              Browse & Watch
            </h3>
            <ul className="space-y-2">
              <li className="text-center md:text-start">
                <Link
                  href="/browse"
                  className="text-white/70 hover:text-tubiYellow"
                >
                  Browse
                </Link>
              </li>
              <li className="text-center md:text-start">
                <Link
                  href="/movies"
                  className="text-white/70 hover:text-tubiYellow"
                >
                  Movies
                </Link>
              </li>
              {/* <li className="text-center md:text-start">
                <Link
                  href="/tv-shows"
                  className="text-white/70 hover:text-tubiYellow"
                >
                  TV Shows
                </Link>
              </li> */}
              {/* <li><Link href="/live" className="text-white/70 hover:text-tubiYellow">Live TV</Link></li> */}
            </ul>
          </div>

          <div>
            <h3 className="text-center md:text-start text-white font-bold mb-4">
              Connect
            </h3>
            <ul className="space-y-2">
              <li className="text-center md:text-start">
                <a
                  href="https://www.facebook.com/"
                  className="text-white/70 hover:text-tubiYellow"
                >
                  Facebook
                </a>
              </li>
              <li className="text-center md:text-start">
                <a
                  href="https://x.com/"
                  className="text-white/70 hover:text-tubiYellow"
                >
                  Twitter
                </a>
              </li>
              <li className="text-center md:text-start">
                <a
                  href="https://instagram.com/"
                  className="text-white/70 hover:text-tubiYellow"
                >
                  Instagram
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-white/10 text-center">
          <p className="text-white/50">
            Disclaimer: Filmy123 does not host or store any content. All media
            is publicly available via third-party sources.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
