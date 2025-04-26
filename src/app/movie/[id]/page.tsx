import Movies from "@/app/movie/[id]/movie";
import { AllMovies } from "@/lib/utils";
const AllMovieTogether = [
  ...AllMovies["Trending Now"],
  ...AllMovies["New Releases"],
  ...AllMovies["Popular TV Shows"],
  ...AllMovies["Action"],
  ...AllMovies["Comedy"],
  ...AllMovies["Drama"],
  ...AllMovies["Family"],
];

// static dynamic files

export async function generateStaticParams() {
  // Suppose you have IDs like 1, 2, and 3
  const ids = AllMovieTogether.map((movie) => movie.id);

  return ids.map((id) => ({
    id: id,
  }));
}

const MovieDetail = () => {
  return <Movies />;
};

export default MovieDetail;
