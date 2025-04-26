"use client";
import { useState } from "react";

import ContentRow from "@/components/ContentRow";
import { Button } from "@/components/ui/button";
import { Film, Loader2 } from "lucide-react";
import { AllMovies } from "@/lib/utils";

// // Initial set of movies
// const initialActionMovies = [
//   {
//     id: 1,
//     title: "The Dark Knight",
//     image: "https://images.unsplash.com/photo-1635805737707-575885ab0820?w=800&auto=format&fit=crop",
//     year: 2008,
//     genre: "Action"
//   },
//   {
//     id: 2,
//     title: "Inception",
//     image: "https://images.unsplash.com/photo-1626814026160-2237a95fc5a0?w=800&auto=format&fit=crop",
//     year: 2010,
//     genre: "Sci-Fi"
//   },
//   {
//     id: 3,
//     title: "Interstellar",
//     image: "https://images.unsplash.com/photo-1596727147705-61a532a659bd?w=800&auto=format&fit=crop",
//     year: 2014,
//     genre: "Sci-Fi"
//   },
//   {
//     id: 4,
//     title: "Blade Runner",
//     image: "https://images.unsplash.com/photo-1536440136628-849c177e76a1?w=800&auto=format&fit=crop",
//     year: 1982,
//     genre: "Sci-Fi"
//   },
//   {
//     id: 5,
//     title: "Mad Max",
//     image: "https://images.unsplash.com/photo-1616530940355-351fabd9524b?w=800&auto=format&fit=crop",
//     year: 2015,
//     genre: "Action"
//   },
//   {
//     id: 6,
//     title: "John Wick",
//     image: "https://images.unsplash.com/photo-1626814026160-2237a95fc5a0?w=800&auto=format&fit=crop",
//     year: 2014,
//     genre: "Action"
//   },
// ];

// const initialComedyMovies = [
//   {
//     id: 11,
//     title: "Superbad",
//     image: "https://images.unsplash.com/photo-1594909122845-11baa439b7bf?w=800&auto=format&fit=crop",
//     year: 2007,
//     genre: "Comedy"
//   },
//   {
//     id: 12,
//     title: "The Hangover",
//     image: "https://images.unsplash.com/photo-1517604931442-7e0c8ed2963c?w=800&auto=format&fit=crop",
//     year: 2009,
//     genre: "Comedy"
//   },
//   {
//     id: 13,
//     title: "Bridesmaids",
//     image: "https://images.unsplash.com/photo-1604975701397-6365ccbd028a?w=800&auto=format&fit=crop",
//     year: 2011,
//     genre: "Comedy"
//   },
//   {
//     id: 14,
//     title: "Anchorman",
//     image: "https://images.unsplash.com/photo-1536440136628-849c177e76a1?w=800&auto=format&fit=crop",
//     year: 2004,
//     genre: "Comedy"
//   },
//   {
//     id: 15,
//     title: "Step Brothers",
//     image: "https://images.unsplash.com/photo-1517604931442-7e0c8ed2963c?w=800&auto=format&fit=crop",
//     year: 2008,
//     genre: "Comedy"
//   },
//   {
//     id: 16,
//     title: "Dumb and Dumber",
//     image: "https://images.unsplash.com/photo-1594909122845-11baa439b7bf?w=800&auto=format&fit=crop",
//     year: 1994,
//     genre: "Comedy"
//   },
// ];

// const initialDramaMovies = [
//   {
//     id: 21,
//     title: "The Godfather",
//     image: "https://images.unsplash.com/photo-1626814026160-2237a95fc5a0?w=800&auto=format&fit=crop",
//     year: 1972,
//     genre: "Drama"
//   },
//   {
//     id: 22,
//     title: "Shawshank Redemption",
//     image: "https://images.unsplash.com/photo-1635805737707-575885ab0820?w=800&auto=format&fit=crop",
//     year: 1994,
//     genre: "Drama"
//   },
//   {
//     id: 23,
//     title: "Forrest Gump",
//     image: "https://images.unsplash.com/photo-1596727147705-61a532a659bd?w=800&auto=format&fit=crop",
//     year: 1994,
//     genre: "Drama"
//   },
//   {
//     id: 24,
//     title: "The Green Mile",
//     image: "https://images.unsplash.com/photo-1536440136628-849c177e76a1?w=800&auto=format&fit=crop",
//     year: 1999,
//     genre: "Drama"
//   },
//   {
//     id: 25,
//     title: "Schindler's List",
//     image: "https://images.unsplash.com/photo-1626814026160-2237a95fc5a0?w=800&auto=format&fit=crop",
//     year: 1993,
//     genre: "Drama"
//   },
//   {
//     id: 26,
//     title: "The Pianist",
//     image: "https://images.unsplash.com/photo-1635805737707-575885ab0820?w=800&auto=format&fit=crop",
//     year: 2002,
//     genre: "Drama"
//   },
// ];

const Movies = () => {
  const [actionMovies, setActionMovies] = useState(AllMovies["Action"]);
  const [comedyMovies, setComedyMovies] = useState(AllMovies["Comedy"]);
  const [dramaMovies, setDramaMovies] = useState(AllMovies["Drama"]);
  const [isLoading, setIsLoading] = useState(false);
  const [loadedAll, setLoadedAll] = useState(false);

  const handleLoadMore = () => {
    setIsLoading(true);

    // Simulate API call delay
    // setTimeout(() => {
    //   setActionMovies([...actionMovies, ...moreActionMovies]);
    //   setComedyMovies([...comedyMovies, ...moreComedyMovies]);
    //   setDramaMovies([...dramaMovies, ...moreDramaMovies]);
    //   setIsLoading(false);
    //   setLoadedAll(true);
    // }, 1500);
  };

  return (
    <main className="pt-16">
      <div className="container mx-auto px-4 py-8">
        <div className="flex items-center gap-3 mb-8">
          <Film className="h-8 w-8 text-tubiYellow" />
          <h1 className="text-3xl md:text-4xl font-bold text-white">Movies</h1>
        </div>

        <div className="space-y-8">
          <ContentRow title="Action Movies" items={actionMovies} />
          <ContentRow title="Comedy Movies" items={comedyMovies} />
          <ContentRow title="Drama Movies" items={dramaMovies} />
        </div>

        <div className="mt-10 flex justify-center">
          {!loadedAll ? (
            <Button
              className="bg-tubiYellow text-tubiPurple hover:bg-tubiYellow/90 px-6 py-2"
              onClick={handleLoadMore}
              disabled={isLoading}
            >
              {isLoading ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  Loading...
                </>
              ) : (
                "Load More"
              )}
            </Button>
          ) : (
            <p className="text-white/60">
              You've reached the end of our content
            </p>
          )}
        </div>
      </div>
    </main>
  );
};

export default Movies;
