"use client";
import { useState } from "react";

import ContentRow from "@/components/ContentRow";
import { Button } from "@/components/ui/button";
import { Tv, Loader2 } from "lucide-react";
import { AllMovies } from "@/lib/utils";

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
