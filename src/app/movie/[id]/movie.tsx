"use client";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";

import { Button } from "@/components/ui/button";
import { Play, Download, Star, Clock, Calendar } from "lucide-react";
import { AllMovies } from "@/lib/utils";
import Link from "next/link";

const AllMovieTogether = [
  ...AllMovies["Trending Now"],
  ...AllMovies["New Releases"],
  ...AllMovies["Popular TV Shows"],
  ...AllMovies["Action"],
  ...AllMovies["Comedy"],
  ...AllMovies["Drama"],
  ...AllMovies["Family"],
];
interface MovieDetails {
  id: string;
  title: string;
  image: string;
  imageBanner: string;
  year: string;
  genres: string;
  type: "Movie" | "Series" | string;
  rating: string;
  duration: string;
  description: string;
  cast: string[];
  quality: string[];
  trailerUrl: string;
  downloadLinks?: {
    [quality: string]: string[];
  };
  watchLinks?: {
    [quality: string]: string[];
  };
}

const MovieDetail = () => {
  const { id }: any = useParams();
  const [movie, setMovie] = useState<MovieDetails | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    // In a real app, we would fetch movie details from an API
    const fetchMovie = null;

    for (let movie of AllMovieTogether) {
      if (movie.id === String(id)) {
        setMovie(movie);
        setIsLoading(false);
        return;
      }
    }
    setIsLoading(false);
  }, [id]);

  if (isLoading) {
    return (
      <div className="min-h-screen bg-tubiPurple flex items-center justify-center">
        <div className="animate-pulse text-white text-xl">Loading...</div>
      </div>
    );
  }

  if (!movie) {
    return (
      <div className="min-h-screen bg-tubiPurple flex items-center justify-center">
        <div className="text-white text-xl">Movie not found</div>
      </div>
    );
  }

  return (
    <main className="pt-16">
      <div className="relative">
        {/* Banner Image */}
        <div
          className="w-full h-[50vh] bg-cover bg-center"
          style={{ backgroundImage: `url(${movie.imageBanner})` }}
        >
          <div className="absolute inset-0 bg-gradient-to-t from-tubiPurple via-tubiPurple/50 to-transparent" />
        </div>

        {/* Movie Info */}
        <div className="container mx-auto px-4 relative -mt-32 z-10">
          <div className="grid md:grid-cols-3 gap-8">
            {/* Poster */}
            <div className="hidden md:block">
              <div className="rounded-lg overflow-hidden shadow-lg">
                <img
                  src={movie.image}
                  alt={movie.title}
                  className="w-full max-w-[350px] mx-auto object-cover aspect-[2/3] rounded-lg"
                  // style={{
                  //   border: "5px solid #fff",
                  // }}
                />
              </div>
            </div>

            {/* Details */}
            <div className="md:col-span-2 space-y-6">
              <h1 className="text-3xl md:text-5xl font-bold text-white">
                {movie.title}
              </h1>

              <div className="flex flex-wrap gap-4 text-sm text-white/80">
                <div className="flex items-center">
                  <Star className="h-4 w-4 text-tubiYellow mr-1" />
                  <span>{movie.rating}</span>
                </div>
                <div className="flex items-center">
                  <Clock className="h-4 w-4 mr-1" />
                  <span>{movie.duration}</span>
                </div>
                <div className="flex items-center">
                  <Calendar className="h-4 w-4 mr-1" />
                  <span>{movie.year}</span>
                </div>
                <div>
                  <span>{movie.genres}</span>
                </div>
              </div>

              <div className="space-y-4">
                <h2 className="text-xl font-bold text-white">Synopsis</h2>
                <p className="text-white/80 leading-relaxed">
                  {movie.description}
                </p>
              </div>

              <div className="space-y-4">
                <h2 className="text-xl font-bold text-white">Cast</h2>
                <div className="flex flex-wrap gap-2">
                  {movie.cast.map((actor, index) => (
                    <span
                      key={index}
                      className="bg-tubiPurple/50 border border-white/10 rounded-full px-3 py-1 text-sm text-white/80"
                    >
                      {actor}
                    </span>
                  ))}
                </div>
              </div>

              <div className="flex flex-wrap gap-4 pt-4">
                <Link href={"#watch"}>
                  <Button className="cursor-pointer bg-tubiYellow text-tubiPurple hover:bg-tubiYellow/90">
                    <Play className="mr-2 h-4 w-4" />
                    Watch Now
                  </Button>
                </Link>
                <Link href={"#watch"}>
                  <Button
                    variant="outline"
                    className="cursor-pointer hover:text-white border-white/30 text-white hover:bg-white/10"
                  >
                    <Download className="mr-2 h-4 w-4" />
                    Download
                  </Button>
                </Link>
              </div>
            </div>
          </div>

          {/* Trailer */}
          <div id="watch" className="mt-12 mb-12 space-y-6">
            <h2 className="text-3xl font-bold text-white text-center">
              Trailer
            </h2>
            <div className=" w-full rounded-lg overflow-hidden">
              <iframe
                src={movie.trailerUrl}
                title={`${movie.title} Trailer`}
                className="w-[70%] h-[70%] aspect-[16/9] mx-auto rounded-lg"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </div>

          {/* Movies Links 
          <MovieLinks
            moviesDownload={movie.downloadLinks}
            moviesWatch={movie.watchLinks}
          />*/}
        </div>
      </div>
    </main>
  );
};

export default MovieDetail;
