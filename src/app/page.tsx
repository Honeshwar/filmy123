import HeroBanner from "@/components/HeroBanner";
import ContentRow from "@/components/ContentRow";
import { AllMovies } from "@/lib/utils";

const Index = () => {
  return (
    <main className="pt-16">
      <HeroBanner />
      <div className="space-y-2">
        <ContentRow title="Trending Now" items={AllMovies["Trending Now"]} />
        <ContentRow title="New Releases" items={AllMovies["New Releases"]} />
        <ContentRow
          title="Popular TV Shows"
          items={AllMovies["Popular TV Shows"]}
        />
        <ContentRow title="Action" items={AllMovies["Action"]} />
        <ContentRow title="Comedy" items={AllMovies["Comedy"]} />
        <ContentRow title="Drama" items={AllMovies["Drama"]} />
        <ContentRow title="Family" items={AllMovies["Family"]} />
      </div>
    </main>
  );
};

export default Index;
