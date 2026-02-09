import Link from "next/link";
import { Button } from "./ui/button";
import { ChevronRight } from "lucide-react";

interface Movie {
  id: string;
  title: string;
  image: string;
  year?: string | number;
  genres?: string;
}

interface ContentRowProps {
  title: string;
  items: Movie[];
}

const ContentRow = ({ title, items }: ContentRowProps) => {
  return (
    <div className="py-8">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-2xl font-bold text-white">{title}</h2>
          <Link href={`/see-all?category=${encodeURIComponent(title)}`}>
            <Button
              variant="ghost"
              className="text-white hover:text-black"
              // tubiYellow
            >
              See all
              <ChevronRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
          {items.map((item) => (
            <Link
              key={item.id}
              href={`/movie/${item.id}`}
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
                  <div className="flex items-center gap-2 mt-1">
                    {item.year && (
                      <span className="text-xs text-white/70">
                        {item.year}
                      </span>
                    )}
                    {item.year && item.genres && (
                      <span className="text-xs text-white/70">•</span>
                    )}
                    {item.genres && (
                      <span className="text-xs text-white/70 text-ellipsis overflow-hidden whitespace-nowrap">
                        {item.genres}
                      </span>
                    )}
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ContentRow;
