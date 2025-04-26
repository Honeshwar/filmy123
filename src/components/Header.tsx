"use client";
import { useState } from "react";
import { Search, Menu, User, X, MoveIcon, MicrowaveIcon } from "lucide-react";
import { Button } from "./ui/button";

import { Input } from "./ui/input";
import SignInModal from "./auth/SignInModal";
import Link from "next/link";
import { useRouter } from "next/navigation";

const Header = () => {
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isSignInModalOpen, setIsSignInModalOpen] = useState(false);
  const navigate = useRouter();

  const toggleSearch = () => {
    if (!isSearchOpen) {
      // If not open yet, redirect to browse page
      navigate.push("/browse");
    } else {
      // If closing, reset the search query
      setSearchQuery("");
    }
    setIsSearchOpen(!isSearchOpen);
  };

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    // Navigate to browse page with the search query
    navigate.push(`/browse?q=${encodeURIComponent(searchQuery)}`);
    setIsSearchOpen(false);
    setSearchQuery("");
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-tubiPurple/95 backdrop-blur-sm">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center gap-8">
            <Link href="/" className="text-tubiYellow font-bold text-2xl">
              Filmy123
            </Link>
            <nav className="hidden md:flex items-center gap-6">
              <Link
                href="/browse"
                className="text-white hover:text-tubiYellow transition"
              >
                Browse
              </Link>
              <Link
                href="/movies"
                className="text-white hover:text-tubiYellow transition"
              >
                Movies
              </Link>
              {/* <Link href="/tv-shows" className="text-white hover:text-tubiYellow transition">TV Shows</Link> */}
              <Link
                href="/feedback"
                className="text-white hover:text-tubiYellow transition"
              >
                Feedback
              </Link>
              {/* <Link href="/live" className="text-white hover:text-tubiYellow transition">Live TV</Link> */}
            </nav>
          </div>

          <div className="flex items-center gap-0 md:gap-4">
            {/* {isSearchOpen ? (
              <form onSubmit={handleSearch} className="relative hidden md:flex">
                <Input
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="bg-tubiPurple/70 border-white/20 text-white w-64 pr-10"
                  placeholder="Search movies, TV shows..."
                  autoFocus
                />
                <button 
                  type="button" 
                  className="absolute right-2 top-1/2 transform -translate-y-1/2 text-white/60 hover:text-white"
                  onClick={toggleSearch}
                >
                  <X className="h-4 w-4" />
                </button>
              </form>
            ) : (
              <Button variant="ghost" size="icon" className="text-white hover:text-tubiYellow" onClick={toggleSearch}>
                <Search className="h-5 w-5" />
              </Button>
            )} */}

            <Button
              variant="ghost"
              size="icon"
              className="cursor-pointer text-white hover:text-black"
              onClick={() => navigate.push("/browse")}
            >
              <Search className="h-5 w-5" />
            </Button>

            <Button
              variant="ghost"
              size="icon"
              className="text-white hover:text-tubiYellow md:hidden"
              onClick={toggleMobileMenu}
            >
              <Menu className="h-5 w-5" />
            </Button>

            <Button
              className="cursor-pointer hidden md:flex bg-tubiYellow text-tubiPurple hover:bg-tubiYellow/90"
              // onClick={() => setIsSignInModalOpen(true)}
              onClick={() => navigate.push("/movie-request")}
            >
              <MicrowaveIcon className="mr-0 h-4 w-4" />
              Movie Request
            </Button>
          </div>
        </div>

        {/* Mobile Search Bar */}
        {/* {isSearchOpen && (
          <div className="md:hidden py-3 border-t border-white/10">
            <form onSubmit={handleSearch} className="relative">
              <Input
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="bg-tubiPurple/70 border-white/20 text-white w-full pr-10"
                placeholder="Search movies, TV shows..."
                autoFocus
              />
              <button 
                type="button" 
                className="absolute right-2 top-1/2 transform -translate-y-1/2 text-white/60 hover:text-white"
                onClick={toggleSearch}
              >
                <X className="h-4 w-4" />
              </button>
            </form>
          </div>
        )} */}

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-white/10">
            <nav className="flex flex-col space-y-4">
              <Link
                href="/browse"
                className="text-white hover:text-tubiYellow px-2 py-1"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Browse
              </Link>
              <Link
                href="/movies"
                className="text-white hover:text-tubiYellow px-2 py-1"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Movies
              </Link>
              {/* <Link 
                href="/tv-shows" 
                className="text-white hover:text-tubiYellow px-2 py-1"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                TV Shows
              </Link> */}
              <Link
                href="/feedback"
                className="text-white hover:text-tubiYellow px-2 py-1"
              >
                Feedback
              </Link>
              {/* <Link 
                href="/live" 
                className="text-white hover:text-tubiYellow px-2 py-1"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Live TV
              </Link> */}
              <Button
                className="cursor-pointer w-full bg-tubiYellow text-tubiPurple hover:bg-tubiYellow/90"
                // onClick={() => {
                //   setIsSignInModalOpen(true);
                //   setIsMobileMenuOpen(false);
                // }}
                onClick={() => navigate.push("/movie-request")}
              >
                <MicrowaveIcon className="mr-2 h-4 w-4" />
                Movie Request
              </Button>
            </nav>
          </div>
        )}
      </div>

      {/* Sign In Modal with fixed positioning */}
      {/* <SignInModal 
        isOpen={isSignInModalOpen} 
        onClose={() => setIsSignInModalOpen(false)} 
      /> */}
    </header>
  );
};

export default Header;
