import Link from "next/link";
import { Button } from "./ui/button";
import { ChevronRight } from "lucide-react";
import CustomCard from "./CustomCard";
import { Movie } from "@/types/movie";
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
            <CustomCard key={item.id} item={item} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ContentRow;
