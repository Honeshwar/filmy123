import { Suspense } from "react";
import SeeAllContent from "./see-all";

export default function SeeAllPage() {
  return (
    <Suspense
      fallback={
        <div className="text-white flex items-center justify-center ">
          Loading...
        </div>
      }
    >
      <SeeAllContent />
    </Suspense>
  );
}
