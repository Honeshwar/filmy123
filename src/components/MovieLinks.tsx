import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";

interface MovieLinkSchema {
  [quality: string]: string[];
}

export default function MovieLinks({
  moviesDownload,
  moviesWatch,
}: {
  moviesDownload: MovieLinkSchema;
  moviesWatch: MovieLinkSchema;
}) {
  return (
    <div id="download-links" className="pt-24 grid gap-12 p-4 md:grid-cols-1">
      {/* Download Section */}
      <Card className="bg-[#d6d6d6] rounded-lg shadow-md w-full md:w-[auto] min-w-[80%] mx-auto">
        <CardContent className="p-4 rounded-lg">
          <h2 className="text-xl font-bold mb-3 text-primary">
            📥 Download Movies{" "}
            <small>
              {" "}
              <i>
                (Check the links below to download the movie. If none of them
                work, feel free to contact me
                <Link href="/contact" className="text-blue-600 hover:underline">
                  {" "}
                  here
                </Link>
                .)
              </i>
            </small>
          </h2>
          <ul className="space-y-2">
            <h3 className="text-lg font-bold">1080p</h3>
            {moviesDownload["1080p"].map((movie, index) => (
              <li key={index}>
                <Link href={movie} className="text-blue-600 hover:underline">
                  {movie}
                </Link>
              </li>
            ))}
            <h3 className="text-lg font-bold">720p</h3>
            {moviesDownload["720p"].map((movie, index) => (
              <li key={index}>
                <Link href={movie} className="text-blue-600 hover:underline">
                  {movie}
                </Link>
              </li>
            ))}
            <h3 className="text-lg font-bold">480p</h3>
            {moviesDownload["480p"].map((movie, index) => (
              <li key={index}>
                <Link href={movie} className="text-blue-600 hover:underline">
                  {movie}
                </Link>
              </li>
            ))}
          </ul>
        </CardContent>
      </Card>

      {/* Watch Section */}
      <Card
        id="watch-links"
        className="bg-[#d6d6d6] rounded-lg shadow-md w-full md:w-[auto] min-w-[80%] mx-auto"
      >
        <CardContent className="p-4 rounded-lg">
          <h2 className="text-xl font-bold mb-3 text-primary">
            🎬 Watch Movies
          </h2>
          <ul className="space-y-2">
            <h3 className="text-lg font-bold">1080p</h3>
            {moviesWatch["1080p"].map((movie, index) => (
              <li key={index}>
                <Link href={movie} className="text-green-600 hover:underline">
                  {movie}
                </Link>
              </li>
            ))}
            <h3 className="text-lg font-bold">720p</h3>
            {moviesWatch["720p"].map((movie, index) => (
              <li key={index}>
                <Link href={movie} className="text-green-600 hover:underline">
                  {movie}
                </Link>
              </li>
            ))}
            <h3 className="text-lg font-bold">480p</h3>
            {moviesWatch["480p"].map((movie, index) => (
              <li key={index}>
                <Link href={movie} className="text-green-600 hover:underline">
                  {movie}
                </Link>
              </li>
            ))}
          </ul>
        </CardContent>
      </Card>
    </div>
  );
}
