// "use client"; // This ensures the component is treated as a Client Component
// import { useEffect } from "react";

const NotFound = () => {
  // useEffect(() => {
  //   console.error(
  //     "404 Error: User attempted to access non-existent route:",
  //     location.pathname
  //   );
  // }, []);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-4">404</h1>
        <p className="text-xl text-gray-600 mb-4">Oops! Page not found</p>
        <a
          href="/"
          className="bg-tubiPurple hover:bg-tubiPurple/97 text-white font-bold py-2 px-4 rounded"
        >
          Return to Home
        </a>
      </div>
    </div>
  );
};

export default NotFound;
