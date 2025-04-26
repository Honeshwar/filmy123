 
import { Tv } from "lucide-react";

const liveChannels = [
  {
    id: 1,
    name: "News 24/7",
    category: "News",
    viewers: "15.2K",
    image: "https://images.unsplash.com/photo-1495020689067-958852a7765e?w=800&auto=format&fit=crop",
    current: "Breaking News Coverage"
  },
  {
    id: 2,
    name: "Classic Movies",
    category: "Movies",
    viewers: "8.4K",
    image: "https://images.unsplash.com/photo-1536440136628-849c177e76a1?w=800&auto=format&fit=crop",
    current: "The Maltese Falcon (1941)"
  },
  {
    id: 3,
    name: "Sports Zone",
    category: "Sports",
    viewers: "22.7K",
    image: "https://images.unsplash.com/photo-1517927033932-b3d18e61fb3a?w=800&auto=format&fit=crop",
    current: "Premier League Highlights"
  },
  {
    id: 4,
    name: "Comedy Central",
    category: "Comedy",
    viewers: "12.1K",
    image: "https://images.unsplash.com/photo-1517604931442-7e0c8ed2963c?w=800&auto=format&fit=crop",
    current: "Stand-up Comedy Hour"
  },
  {
    id: 5,
    name: "Nature & Wildlife",
    category: "Documentary",
    viewers: "6.3K",
    image: "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?w=800&auto=format&fit=crop",
    current: "Wonders of the Ocean"
  },
  {
    id: 6,
    name: "Sci-Fi Network",
    category: "Sci-Fi",
    viewers: "9.8K",
    image: "https://images.unsplash.com/photo-1596727147705-61a532a659bd?w=800&auto=format&fit=crop",
    current: "Star Trek Marathon"
  },
  {
    id: 7,
    name: "Kids Corner",
    category: "Children",
    viewers: "18.5K",
    image: "https://images.unsplash.com/photo-1560169897-fc0cdbdfa4d5?w=800&auto=format&fit=crop",
    current: "Animated Adventures"
  },
  {
    id: 8,
    name: "Crime Stories",
    category: "Crime",
    viewers: "11.2K",
    image: "https://images.unsplash.com/photo-1626814026160-2237a95fc5a0?w=800&auto=format&fit=crop",
    current: "True Crime Investigations"
  },
];

const Live = () => {
  return (
     
      <main className="pt-16">
        <div className="container mx-auto px-4 py-8">
          <div className="flex items-center gap-3 mb-8">
            <Tv className="h-8 w-8 text-tubiYellow" />
            <h1 className="text-3xl md:text-4xl font-bold text-white">Live TV</h1>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {liveChannels.map((channel) => (
              <div key={channel.id} className="group relative overflow-hidden rounded-lg">
                <div className="aspect-video w-full overflow-hidden rounded-lg">
                  <img 
                    src={channel.image} 
                    alt={channel.name} 
                    className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                </div>
                
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent flex flex-col justify-end p-4">
                  <div className="flex items-center justify-between mb-1">
                    <span className="inline-block bg-tubiYellow/90 text-tubiPurple text-xs font-medium px-2 py-1 rounded">
                      LIVE
                    </span>
                    <span className="text-white text-sm">
                      {channel.viewers} viewers
                    </span>
                  </div>
                  <h3 className="text-lg font-bold text-white">{channel.name}</h3>
                  <p className="text-white/80 text-sm">{channel.current}</p>
                  <span className="text-xs text-white/60 mt-1">{channel.category}</span>
                </div>
                
                <div className="absolute inset-0 flex items-center justify-center opacity-0 transition-opacity duration-300 group-hover:opacity-100 bg-black/40">
                  <button className="bg-tubiYellow text-tubiPurple hover:bg-tubiYellow/90 px-4 py-2 rounded-md font-medium">
                    Watch Now
                  </button>
                </div>
              </div>
            ))}
          </div>
          
          <div className="mt-10 flex justify-center">
            <button className="bg-tubiYellow text-tubiPurple hover:bg-tubiYellow/90 px-6 py-3 rounded-md font-medium">
              Load More Channels
            </button>
          </div>
        </div>
      </main>
       
  );
};

export default Live;
