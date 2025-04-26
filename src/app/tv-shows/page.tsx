"use client";
import { useState } from "react";

import ContentRow from "@/components/ContentRow";
import { Button } from "@/components/ui/button";
import { Tv, Loader2 } from "lucide-react";
import { AllMovies } from "@/lib/utils";

// Initial set of TV shows
// const initialDramaShows = [
//   {
//     id: 31,
//     title: "Breaking Bad",
//     image:
//       "https://images.unsplash.com/photo-1626814026160-2237a95fc5a0?w=800&auto=format&fit=crop",
//     year: 2008,
//     genre: "Drama",
//   },
//   {
//     id: 32,
//     title: "Game of Thrones",
//     image:
//       "https://images.unsplash.com/photo-1635805737707-575885ab0820?w=800&auto=format&fit=crop",
//     year: 2011,
//     genre: "Fantasy",
//   },
//   {
//     id: 33,
//     title: "The Crown",
//     image:
//       "https://images.unsplash.com/photo-1596727147705-61a532a659bd?w=800&auto=format&fit=crop",
//     year: 2016,
//     genre: "Drama",
//   },
//   {
//     id: 34,
//     title: "The Sopranos",
//     image:
//       "https://images.unsplash.com/photo-1536440136628-849c177e76a1?w=800&auto=format&fit=crop",
//     year: 1999,
//     genre: "Drama",
//   },
//   {
//     id: 35,
//     title: "Better Call Saul",
//     image:
//       "https://images.unsplash.com/photo-1626814026160-2237a95fc5a0?w=800&auto=format&fit=crop",
//     year: 2015,
//     genre: "Drama",
//   },
//   {
//     id: 36,
//     title: "The Wire",
//     image:
//       "https://images.unsplash.com/photo-1635805737707-575885ab0820?w=800&auto=format&fit=crop",
//     year: 2002,
//     genre: "Crime",
//   },
// ];

// const initialComedyShows = [
//   {
//     id: 41,
//     title: "Friends",
//     image:
//       "https://images.unsplash.com/photo-1594909122845-11baa439b7bf?w=800&auto=format&fit=crop",
//     year: 1994,
//     genre: "Comedy",
//   },
//   {
//     id: 42,
//     title: "The Office",
//     image:
//       "https://images.unsplash.com/photo-1517604931442-7e0c8ed2963c?w=800&auto=format&fit=crop",
//     year: 2005,
//     genre: "Comedy",
//   },
//   {
//     id: 43,
//     title: "Brooklyn Nine-Nine",
//     image:
//       "https://images.unsplash.com/photo-1604975701397-6365ccbd028a?w=800&auto=format&fit=crop",
//     year: 2013,
//     genre: "Comedy",
//   },
//   {
//     id: 44,
//     title: "Parks and Recreation",
//     image:
//       "https://images.unsplash.com/photo-1536440136628-849c177e76a1?w=800&auto=format&fit=crop",
//     year: 2009,
//     genre: "Comedy",
//   },
//   {
//     id: 45,
//     title: "How I Met Your Mother",
//     image:
//       "https://images.unsplash.com/photo-1517604931442-7e0c8ed2963c?w=800&auto=format&fit=crop",
//     year: 2005,
//     genre: "Comedy",
//   },
//   {
//     id: 46,
//     title: "The Big Bang Theory",
//     image:
//       "https://images.unsplash.com/photo-1594909122845-11baa439b7bf?w=800&auto=format&fit=crop",
//     year: 2007,
//     genre: "Comedy",
//   },
// ];

// const initialScifiShows = [
//   {
//     id: 51,
//     title: "Stranger Things",
//     image:
//       "https://images.unsplash.com/photo-1626814026160-2237a95fc5a0?w=800&auto=format&fit=crop",
//     year: 2016,
//     genre: "Sci-Fi",
//   },
//   {
//     id: 52,
//     title: "Black Mirror",
//     image:
//       "https://images.unsplash.com/photo-1635805737707-575885ab0820?w=800&auto=format&fit=crop",
//     year: 2011,
//     genre: "Sci-Fi",
//   },
//   {
//     id: 53,
//     title: "Westworld",
//     image:
//       "https://images.unsplash.com/photo-1596727147705-61a532a659bd?w=800&auto=format&fit=crop",
//     year: 2016,
//     genre: "Sci-Fi",
//   },
//   {
//     id: 54,
//     title: "The Expanse",
//     image:
//       "https://images.unsplash.com/photo-1536440136628-849c177e76a1?w=800&auto=format&fit=crop",
//     year: 2015,
//     genre: "Sci-Fi",
//   },
//   {
//     id: 55,
//     title: "The Mandalorian",
//     image:
//       "https://images.unsplash.com/photo-1626814026160-2237a95fc5a0?w=800&auto=format&fit=crop",
//     year: 2019,
//     genre: "Sci-Fi",
//   },
//   {
//     id: 56,
//     title: "Dark",
//     image:
//       "https://images.unsplash.com/photo-1635805737707-575885ab0820?w=800&auto=format&fit=crop",
//     year: 2017,
//     genre: "Sci-Fi",
//   },
// ];

// // Additional TV shows to load
// const moreDramaShows = [
//   {
//     id: 37,
//     title: "Succession",
//     image:
//       "https://images.unsplash.com/photo-1626814026160-2237a95fc5a0?w=800&auto=format&fit=crop",
//     year: 2018,
//     genre: "Drama",
//   },
//   {
//     id: 38,
//     title: "Mad Men",
//     image:
//       "https://images.unsplash.com/photo-1635805737707-575885ab0820?w=800&auto=format&fit=crop",
//     year: 2007,
//     genre: "Drama",
//   },
//   {
//     id: 39,
//     title: "Boardwalk Empire",
//     image:
//       "https://images.unsplash.com/photo-1596727147705-61a532a659bd?w=800&auto=format&fit=crop",
//     year: 2010,
//     genre: "Drama",
//   },
//   {
//     id: 40,
//     title: "Six Feet Under",
//     image:
//       "https://images.unsplash.com/photo-1536440136628-849c177e76a1?w=800&auto=format&fit=crop",
//     year: 2001,
//     genre: "Drama",
//   },
// ];

// const moreComedyShows = [
//   {
//     id: 47,
//     title: "Arrested Development",
//     image:
//       "https://images.unsplash.com/photo-1594909122845-11baa439b7bf?w=800&auto=format&fit=crop",
//     year: 2003,
//     genre: "Comedy",
//   },
//   {
//     id: 48,
//     title: "It's Always Sunny in Philadelphia",
//     image:
//       "https://images.unsplash.com/photo-1517604931442-7e0c8ed2963c?w=800&auto=format&fit=crop",
//     year: 2005,
//     genre: "Comedy",
//   },
//   {
//     id: 49,
//     title: "Curb Your Enthusiasm",
//     image:
//       "https://images.unsplash.com/photo-1604975701397-6365ccbd028a?w=800&auto=format&fit=crop",
//     year: 2000,
//     genre: "Comedy",
//   },
//   {
//     id: 50,
//     title: "Community",
//     image:
//       "https://images.unsplash.com/photo-1536440136628-849c177e76a1?w=800&auto=format&fit=crop",
//     year: 2009,
//     genre: "Comedy",
//   },
// ];

// const moreScifiShows = [
//   {
//     id: 57,
//     title: "The X-Files",
//     image:
//       "https://images.unsplash.com/photo-1626814026160-2237a95fc5a0?w=800&auto=format&fit=crop",
//     year: 1993,
//     genre: "Sci-Fi",
//   },
//   {
//     id: 58,
//     title: "Battlestar Galactica",
//     image:
//       "https://images.unsplash.com/photo-1635805737707-575885ab0820?w=800&auto=format&fit=crop",
//     year: 2004,
//     genre: "Sci-Fi",
//   },
//   {
//     id: 59,
//     title: "The Twilight Zone",
//     image:
//       "https://images.unsplash.com/photo-1596727147705-61a532a659bd?w=800&auto=format&fit=crop",
//     year: 1959,
//     genre: "Sci-Fi",
//   },
//   {
//     id: 60,
//     title: "Fringe",
//     image:
//       "https://images.unsplash.com/photo-1536440136628-849c177e76a1?w=800&auto=format&fit=crop",
//     year: 2008,
//     genre: "Sci-Fi",
//   },
// ];

const TVShows = () => {
  const [dramaShows, setDramaShows] = useState(AllMovies["Drama"]);
  const [comedyShows, setComedyShows] = useState(AllMovies["Comedy"]);
  const [scifiShows, setScifiShows] = useState(AllMovies["Si-Fi"]);
  const [isLoading, setIsLoading] = useState(false);
  const [loadedAll, setLoadedAll] = useState(false);

  const handleLoadMore = () => {
    setIsLoading(true);

    // Simulate API call delay
    // setTimeout(() => {
    //   setDramaShows([...dramaShows, ...moreDramaShows]);
    //   setComedyShows([...comedyShows, ...moreComedyShows]);
    //   setScifiShows([...scifiShows, ...moreScifiShows]);
    //   setIsLoading(false);
    //   setLoadedAll(true);
    // }, 1500);
  };

  return (
    <main className="pt-16">
      <div className="container mx-auto px-4 py-8">
        <div className="flex items-center gap-3 mb-8">
          <Tv className="h-8 w-8 text-tubiYellow" />
          <h1 className="text-3xl md:text-4xl font-bold text-white">
            TV Shows
          </h1>
        </div>

        <div className="space-y-8">
          <ContentRow title="Drama Shows" items={dramaShows} />
          <ContentRow title="Comedy Shows" items={comedyShows} />
          <ContentRow title="Sci-Fi Shows" items={scifiShows} />
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

export default TVShows;
