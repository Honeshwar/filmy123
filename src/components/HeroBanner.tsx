import Link from "next/link";
import { Button } from "./ui/button";
import { Play, Info } from "lucide-react";
import { AllMovies } from "@/lib/utils";

const HeroBanner = () => {
  // Featured movie ID for the banner
  const featuredMovieId = "havoc-2025";
  const featuredMovie = AllMovies["Trending Now"].find(
    (movie) => movie.id === featuredMovieId
  );

  return (
    <div className="relative h-[70vh] min-h-[600px] w-full overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url(${featuredMovie?.imageBanner})`,
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-t from-tubiPurple via-tubiPurple/50 to-transparent" />
      </div>

      <div className="relative container mx-auto px-4 md:px-8 h-full flex items-center">
        <div className="max-w-2xl space-y-6 animate-fade-in">
          <span className="inline-block bg-tubiYellow/90 text-tubiPurple text-sm font-medium px-2 py-1 rounded">
            {/* Featured */}
            {featuredMovie?.year}
          </span>
          <h1 className="text-4xl md:text-6xl font-bold text-white">
            {featuredMovie?.title}
            {/* <small className="text-sm font">
              <i>(year of release: {featuredMovie?.year})</i>
            </small> */}
          </h1>
          <p className="text-lg md:text-xl text-white/80">
            {featuredMovie?.description}
          </p>
          <div className="flex flex-wrap gap-4">
            <Link href={`/movie/${featuredMovieId}`}>
              <Button className="bg-tubiYellow text-tubiPurple hover:bg-tubiYellow/90">
                <Play className="mr-2 h-4 w-4" />
                Watch Now
              </Button>
            </Link>
            <Link href={`/movie/${featuredMovieId}`}>
              <Button
                variant="outline"
                className="border-white/40 text-white hover:text-white hover:bg-white/10"
              >
                <Info className="mr-2 h-4 w-4" />
                More Info
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroBanner;
