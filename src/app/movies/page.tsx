"use client";
import { useState } from "react";

import ContentRow from "@/components/ContentRow";
import { Button } from "@/components/ui/button";
import { Film, Loader2 } from "lucide-react";
import { AllMovies } from "@/lib/utils";

const Movies = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [loadedAll, setLoadedAll] = useState(false);

  const handleLoadMore = () => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      setLoadedAll(true);
    }, 2000);

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
          <ContentRow title="Trending Now" items={AllMovies["Trending Now"]} />
          <ContentRow title="New Releases" items={AllMovies["New Releases"]} />
          <ContentRow
            title="Popular TV Shows"
            items={AllMovies["Popular TV Shows"]}
          />
          <ContentRow title="Action" items={AllMovies["Action"]} />

          {loadedAll && (
            <>
              <ContentRow title="Comedy" items={AllMovies["Comedy"]} />
              <ContentRow title="Drama" items={AllMovies["Drama"]} />
              <ContentRow title="Family" items={AllMovies["Family"]} />
              <ContentRow title="Sci-Fi" items={AllMovies["Si-Fi"]} />
            </>
          )}
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
