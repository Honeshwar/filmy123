"use client";
import { useState, useEffect, useMemo, useRef, useCallback } from "react";
import { useSearchParams } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Search, BanknoteXIcon } from "lucide-react";
import Link from "next/link";
import { AllMovies } from "@/lib/utils";
import { debounce } from "lodash-es";

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
                <Link
                  key={item.id}
                  href={`/movie/${item.id}`}
                  className="relative group overflow-hidden rounded-lg transition-transform duration-300 hover:scale-105  cursor-pointer"
                >
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full aspect-[2/3] object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent lg:opacity-0 group-hover:opacity-100 transition-opacity">
                    <div className="absolute bottom-0 left-0 right-0 p-4">
                      <p className="text-white font-medium truncate">
                        {item.title}
                      </p>
                      <div className="flex items-center gap-2 mt-1">
                        <span className="text-xs text-white/70">
                          {item.type}
                        </span>
                        <span className="text-xs text-white/70">•</span>
                        <span className="text-xs text-white/70 text-ellipsis overflow-hidden whitespace-nowrap">
                          {item.genres}
                        </span>
                      </div>
                    </div>
                  </div>
                </Link>
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

// "use client";
// import { useState, useEffect } from "react";
// import { useSearchParams } from 'next/navigation';

// import { Button } from "@/components/ui/button";
// import { Search, ListFilter, BanknoteXIcon } from "lucide-react";
// import Link from "next/link";

// // Mock data for browsing
// const allContent = [
//   // Action Movies
//   {
//     id: 1,
//     title: "The Dark Knight",
//     image: "https://images.unsplash.com/photo-1635805737707-575885ab0820?w=800&auto=format&fit=crop",
//     type: "Movie",
//     genre: "Action",
//   },
//   {
//     id: 2,
//     title: "Inception",
//     image: "https://images.unsplash.com/photo-1626814026160-2237a95fc5a0?w=800&auto=format&fit=crop",
//     type: "Movie",
//     genre: "Action",
//   },
//   // Comedy Movies
//   {
//     id: 11,
//     title: "Superbad",
//     image: "https://images.unsplash.com/photo-1594909122845-11baa439b7bf?w=800&auto=format&fit=crop",
//     type: "Movie",
//     genre: "Comedy",
//   },
//   {
//     id: 12,
//     title: "The Hangover",
//     image: "https://images.unsplash.com/photo-1517604931442-7e0c8ed2963c?w=800&auto=format&fit=crop",
//     type: "Movie",
//     genre: "Comedy",
//   },
//   // Drama Shows
//   {
//     id: 31,
//     title: "Breaking Bad",
//     image: "https://images.unsplash.com/photo-1626814026160-2237a95fc5a0?w=800&auto=format&fit=crop",
//     type: "TV Show",
//     genre: "Drama",
//   },
//   {
//     id: 32,
//     title: "Game of Thrones",
//     image: "https://images.unsplash.com/photo-1635805737707-575885ab0820?w=800&auto=format&fit=crop",
//     type: "TV Show",
//     genre: "Drama",
//   },
//   // Comedy Shows
//   {
//     id: 41,
//     title: "Friends",
//     image: "https://images.unsplash.com/photo-1594909122845-11baa439b7bf?w=800&auto=format&fit=crop",
//     type: "TV Show",
//     genre: "Comedy",
//   },
//   {
//     id: 42,
//     title: "The Office",
//     image: "https://images.unsplash.com/photo-1517604931442-7e0c8ed2963c?w=800&auto=format&fit=crop",
//     type: "TV Show",
//     genre: "Comedy",
//   },
//   // More content
//   {
//     id: 51,
//     title: "Stranger Things",
//     image: "https://images.unsplash.com/photo-1626814026160-2237a95fc5a0?w=800&auto=format&fit=crop",
//     type: "TV Show",
//     genre: "Sci-Fi",
//   },
//   {
//     id: 52,
//     title: "Black Mirror",
//     image: "https://images.unsplash.com/photo-1635805737707-575885ab0820?w=800&auto=format&fit=crop",
//     type: "TV Show",
//     genre: "Sci-Fi",
//   },
//   {
//     id: 21,
//     title: "The Godfather",
//     image: "https://images.unsplash.com/photo-1626814026160-2237a95fc5a0?w=800&auto=format&fit=crop",
//     type: "Movie",
//     genre: "Drama",
//   },
//   {
//     id: 22,
//     title: "Shawshank Redemption",
//     image: "https://images.unsplash.com/photo-1635805737707-575885ab0820?w=800&auto=format&fit=crop",
//     type: "Movie",
//     genre: "Drama",
//   },
// ];

// const Browse = () => {
//   const searchParams = useSearchParams();
//   const [searchTerm, setSearchTerm] = useState("");
//   const [filteredContent, setFilteredContent] = useState(allContent);

//   // Extract search query from URL if present
//   useEffect(() => {
//     // const queryParams = new URLSearchParams(location.search as string);
//     const queryFromUrl = searchParams?.get('q');
//     if (queryFromUrl) {
//       setSearchTerm(queryFromUrl);
//       filterContent(queryFromUrl);
//     } else {
//       setFilteredContent(allContent);
//     }
//   }, [searchParams]);

//   const filterContent = (term: string) => {
//     const filtered = allContent.filter(item =>
//       item.title.toLowerCase().includes(term.toLowerCase()) ||
//       item.genre.toLowerCase().includes(term.toLowerCase()) ||
//       item.type.toLowerCase().includes(term.toLowerCase())
//     );
//     setFilteredContent(filtered);
//   };

//   const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     const value = e.target.value;
//     setSearchTerm(value);
//     filterContent(value);
//   };

//   return (

//       <main className="pt-16">
//         <div className="container mx-auto px-4 py-8">
//           <div className="flex items-center gap-3 mb-8">
//             <Search className="h-8 w-8 text-tubiYellow" />
//             <h1 className="text-3xl md:text-4xl font-bold text-white">Browse</h1>
//           </div>

//           <div className="mb-8 flex flex-col md:flex-row md:items-center justify-between gap-4">
//             <div className="relative">
//               <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
//               <input
//                 type="text"
//                 placeholder="Search titles..."
//                 value={searchTerm}
//                 onChange={handleSearchChange}
//                 className="bg-tubiPurple/50 border border-white/20 text-white px-10 py-2 rounded-md w-full md:w-80 focus:outline-none focus:border-tubiYellow"
//               />
//             </div>

//             {/* <Button variant="outline" className="text-white border-white/20 hover:bg-tubiPurple/30">
//               <ListFilter className="mr-2 h-4 w-4" />
//               Filter
//             </Button> */}
//           </div>

//           {filteredContent.length === 0 ? (
//             <div className="text-center py-16">
//               <p className="text-white text-xl">No results found for "{searchTerm}"</p>
//               <p className="text-white/60 mt-2">Try different movies or request a new movie
//               <Link href="/movie-request" className="flex justify-center mt-3">
//               <Button
//               className="cursor-pointer hidden md:flex bg-tubiYellow text-tubiPurple hover:bg-tubiYellow/90">
//               <BanknoteXIcon className="mr-0 h-4 w-4" />
//             Request Movie
//             </Button>
//               </Link>
//             </p>
//             </div>
//           ) : (
//             <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
//               {filteredContent.map((item) => (
//                 <div
//                   key={item.id}
//                   className="relative group overflow-hidden rounded-lg transition-transform duration-300 hover:scale-105"
//                 >
//                   <img
//                     src={item.image}
//                     alt={item.title}
//                     className="w-full aspect-[2/3] object-cover"
//                   />
//                   <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
//                     <div className="absolute bottom-0 left-0 right-0 p-4">
//                       <p className="text-white font-medium truncate">{item.title}</p>
//                       <div className="flex items-center gap-2 mt-1">
//                         <span className="text-xs text-white/70">{item.type}</span>
//                         <span className="text-xs text-white/70">•</span>
//                         <span className="text-xs text-white/70">{item.genre}</span>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               ))}
//             </div>
//           )}

//           {filteredContent.length > 0 && (
//             <div className="mt-10 flex justify-center">
//               <Button className="bg-tubiYellow text-tubiPurple hover:bg-tubiYellow/90">
//                 Load More
//               </Button>
//             </div>
//           )}
//         </div>
//       </main>

//   );
// };

// export default Browse;
