"use client";
import { useState, useEffect, useMemo, useRef, useCallback } from "react";
import { useSearchParams } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Search, BanknoteXIcon } from "lucide-react";
import Link from "next/link";
import { AllMovies } from "@/lib/utils";
import { debounce } from "lodash-es";
import CustomCard from "@/components/CustomCard";

// const ITEMS_PER_PAGE = window.innerWidth > 768 ? 12 : 6;

const Browse = () => {
  // const ITEMS_PER_PAGE = window.innerWidth > 768 ? 12 : 6;
  const [ITEMS_PER_PAGE, setITEMS_PER_PAGE] = useState(6);
  // All content stays the same...
  const allContent = useMemo(() => {
    const allMovies = [
      ...AllMovies["Trending Now"],
      ...AllMovies["New Releases"],
      ...AllMovies["Popular TV Shows"],
      ...AllMovies["Action"],
      ...AllMovies["Comedy"],
      ...AllMovies["Drama"],
      ...AllMovies["Family"],
    ];
    // remove duplicates by `id`
    return Array.from(
      new Map(allMovies.map((movie) => [movie.id, movie])).values()
    );
  }, []);

  useEffect(() => {
    setITEMS_PER_PAGE(window.innerWidth > 768 ? 12 : 6);
  }, []);
  const searchParams = useSearchParams();
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredContent, setFilteredContent] = useState(allContent);
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.ceil(filteredContent.length / ITEMS_PER_PAGE);

  useEffect(() => {
    const queryFromUrl = searchParams?.get("q");
    if (queryFromUrl) {
      setSearchTerm(queryFromUrl);
      filterContent(queryFromUrl);
    } else {
      setFilteredContent(allContent);
    }
  }, [searchParams]);

  const filterContent = useCallback(
    (term: string) => {
      const filtered = allContent.filter(
        (item) =>
          item.title.toLowerCase().includes(term.toLowerCase()) ||
          item.genres.toLowerCase().includes(term.toLowerCase()) ||
          item.type.toLowerCase().includes(term.toLowerCase())
      );
      setFilteredContent(filtered);
      setCurrentPage(1); // Reset to first page on new search
    },
    [allContent]
  );

  // Create the debounced function using useRef to persist it across re-renders
  const debouncedSearch = useRef(
    debounce((value: string) => filterContent(value), 500) // 500ms delay or useCallback can also be used
  ).current;

  // Cleanup the debounce function when the component unmounts
  useEffect(() => {
    return () => {
      debouncedSearch.cancel();
    };
  }, [debouncedSearch]);

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setSearchTerm(value);
    // filterContent(value);
    debouncedSearch(value);
  };

  const paginatedContent = useMemo(() => {
    return filteredContent.slice(
      (currentPage - 1) * ITEMS_PER_PAGE,
      currentPage * ITEMS_PER_PAGE
    );
  }, [filteredContent, currentPage, ITEMS_PER_PAGE]);

  return (
    <main className="pt-16">
      <div className="container mx-auto px-4 py-8">
        <div className="flex items-center gap-3 mb-8">
          <Search className="h-8 w-8 text-tubiYellow" />
          <h1 className="text-3xl md:text-4xl font-bold text-white">Browse</h1>
        </div>

        <div className="mb-8 flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
            <input
              type="text"
              placeholder="Search titles..."
              value={searchTerm}
              onChange={handleSearchChange}
              className="bg-tubiPurple/50 border border-white/20 text-white px-10 py-2 rounded-md w-full md:w-80 focus:outline-none focus:border-tubiYellow"
            />
          </div>
        </div>

        {paginatedContent.length === 0 ? (
          <div className="text-center py-16">
            <p className="text-white text-xl">
              No results found for {searchTerm}
            </p>
            <p className="text-white/60 mt-2">
              Try different movies or request a new movie
              <Link href="/movie-request" className="flex justify-center mt-3">
                <Button className="cursor-pointer hidden md:flex bg-tubiYellow text-tubiPurple hover:bg-tubiYellow/90">
                  <BanknoteXIcon className="mr-0 h-4 w-4" />
                  Request Movie
                </Button>
              </Link>
            </p>
          </div>
        ) : (
          <>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
              {paginatedContent.map((item) => (
                <CustomCard key={item.id} item={item} />
              ))}
            </div>

            {/* Pagination Controls */}
            <div className="mt-10 flex justify-center items-center gap-3 text-white">
              <Button
                onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
                disabled={currentPage === 1}
                className="bg-tubiPurple border border-white/20 hover:bg-tubiPurple/70"
              >
                Previous
              </Button>
              <span className="text-white/80 text-sm">
                Page {currentPage} of {totalPages}
              </span>
              <Button
                onClick={() =>
                  setCurrentPage((prev) => Math.min(prev + 1, totalPages))
                }
                disabled={currentPage === totalPages}
                className="bg-tubiPurple border border-white/20 hover:bg-tubiPurple/70"
              >
                Next
              </Button>
            </div>
          </>
        )}
      </div>
    </main>
  );
};

export default Browse;