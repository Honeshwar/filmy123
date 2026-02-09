"use client";
import { use, useEffect, useState } from "react";

import { Button } from "@/components/ui/button";
import { ChevronLeft, ListFilter } from "lucide-react";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import { useSearchParams } from "next/navigation";

import { AllMovies } from "@/lib/utils";

const SeeAll = () => {
  // const ITEMS_PER_PAGE = window.innerWidth > 768 ? 12 : 6;
  const [ITEMS_PER_PAGE, setITEMS_PER_PAGE] = useState(6);

  useEffect(() => {
    setITEMS_PER_PAGE(window.innerWidth > 768 ? 12 : 6);
  }, []);
  const location = useSearchParams();
  const [category, setCategory] = useState<string>("Trending Movies");
  const [items, setItems] = useState<any[]>([]);

  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.ceil(items.length / ITEMS_PER_PAGE);

  useEffect(() => {
    // Get category from query params
    // const params = new URLSearchParams(location.search);
    const categoryParam = location?.get("category");

    if (categoryParam && AllMovies[categoryParam as keyof typeof AllMovies]) {
      setCategory(categoryParam);
      setItems(AllMovies[categoryParam as keyof typeof AllMovies]);
    } else {
      // Default to Trending Movies
      setItems([]);
    }
  }, [location]);

  useEffect(() => {
    const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
    const endIndex = startIndex + ITEMS_PER_PAGE;
    setItems(AllMovies[category as keyof typeof AllMovies]?.slice(startIndex, endIndex) || []);
  }, [currentPage, category]);

  return (
    <main className="pt-16">
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
          <div className="flex items-center gap-3">
            <Button
              variant="ghost"
              className="p-2 text-white hover:text-tubiYellow hover:bg-transparent"
              onClick={() => window.history.back()}
            >
              <ChevronLeft className="h-5 w-5" />
            </Button>
            <h1 className="text-3xl md:text-4xl font-bold text-white">
              {category}
            </h1>
          </div>

          {/* <Button variant="outline" className="text-white border-white/20 hover:bg-tubiPurple/30 self-start md:self-auto">
              <ListFilter className="mr-2 h-4 w-4" />
              Filter
            </Button> */}
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
          {items.map((item) => (
            <div
              key={item.id}
              className="relative group overflow-hidden rounded-lg transition-transform duration-300 hover:scale-105 cursor-pointer"
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full aspect-[2/3] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <p className="text-white font-medium truncate">
                    {item.title}
                  </p>
                </div>
              </div>
            </div>
          ))}

          {items.length === 0 && (
            <div className="col-span-6 h-[20vh] flex items-center justify-center">
              <p className="text-white text-center">No items found</p>
            </div>
          )}
        </div>

        <div className="mt-10">
          {totalPages > 1 && (
            <Pagination className="text-white mt-10">
              <PaginationContent>
                <PaginationItem>
                  <PaginationPrevious
                    href="#"
                    onClick={(e) => {
                      e.preventDefault();
                      setCurrentPage((prev) => Math.max(prev - 1, 1));
                    }}
                  />
                </PaginationItem>

                {Array.from({ length: totalPages }, (_, index) => (
                  <PaginationItem key={index}>
                    <PaginationLink
                      href="#"
                      isActive={currentPage === index + 1}
                      onClick={(e) => {
                        e.preventDefault();
                        setCurrentPage(index + 1);
                      }}
                    >
                      {index + 1}
                    </PaginationLink>
                  </PaginationItem>
                ))}

                <PaginationItem>
                  <PaginationNext
                    href="#"
                    onClick={(e) => {
                      e.preventDefault();
                      setCurrentPage((prev) => Math.min(prev + 1, totalPages));
                    }}
                  />
                </PaginationItem>
              </PaginationContent>
            </Pagination>
          )}
        </div>
      </div>
    </main>
  );
};

export default SeeAll;
