import { clsx, type ClassValue } from "clsx";
import { Download } from "lucide-react";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

// Mock data for content rows with additional information
export const AllMovies = {
  "Trending Now": [
    {
      id: "delivery-man-2013",
      title: "Delivery Man",
      image:
        "https://m.media-amazon.com/images/M/MV5BM2MzYmMyZmQtYmEzOC00NGM1LThkZTEtNjMzYjM3OWEyNjQxXkEyXkFqcGc@._V1_FMjpg_UX1045_.jpg",
      imageBanner:
        "https://m.media-amazon.com/images/M/MV5BMTAxMDY0MDE1MzFeQTJeQWpwZ15BbWU3MDk0NTg5Nzk@._V1_FMjpg_UX2048_.jpg",
      year: "2013",
      genres: "Comedy, Drama",
      type: "Movie",
      rating: "6.4",
      duration: "1h 45m",
      description:
        "An affable underachiever finds out he's fathered 533 children through anonymous donations 20 years ago. Now, when 142 of them file a lawsuit to reveal his identity, he must decide whether to come forward.",
      cast: ["Vince Vaughn", "Chris Pratt", "Cobie Smulders"],
      quality: ["1080p", "720p", "480p"],
      trailerUrl:
        "https://www.youtube.com/embed/C1bafHGcqLs?si=gWWwwlOFSfCJEdSP",
    },
    {
      id: "havoc-2025",
      title: "Havoc",
      image:
        "https://m.media-amazon.com/images/M/MV5BOWFiNWVlOWYtYjg1NS00ZjQ0LWI3N2QtZjdmM2I5OGI3NTBjXkEyXkFqcGc@._V1_FMjpg_UX1080_.jpg",
      imageBanner:
        "https://m.media-amazon.com/images/M/MV5BYjMwZjg3ZWEtMmJjZS00ZGY3LTlkYzQtN2RjNTdiNWZiYmE5XkEyXkFqcGc@._V1_FMjpg_UX2160_.jpg",
      year: "2025",
      genres: "Action, Crime, Drama, Mystery, Thriller",
      type: "Movie",
      rating: "8.0",
      duration: "1h 25m",
      description:
        "The story is set after a drug deal gone wrong, when a bruised detective must fight his way through a criminal underworld to rescue a politician’s estranged son, while unraveling a deep web of corruption and conspiracy that ensnares his entire city.",
      cast: ["Tom Hardy", "Jessie Mei Li", "Justin Cornwell"],
      quality: ["1080p", "720p", "480p"],
      trailerUrl:
        "https://www.youtube.com/embed/6txjTWLoSc8?si=TiM1MIV4RQaZRkYe",
    },
    {
      id: "do-you-wanna-partner-2025",
      title: "Do You Wanna Partner",
      image:
        "https://m.media-amazon.com/images/M/MV5BZTc1MTk1MjEtNDdhZi00ZTcyLWE0NGYtZWYyM2I4NTc1MTkzXkEyXkFqcGc@._V1_FMjpg_UX1152_.jpg",
      imageBanner:
        "https://m.media-amazon.com/images/M/MV5BMzNkMTQzMWMtYjVlNy00MjE3LWJjNTQtMzg4YmRjNzhiMjQ5XkEyXkFqcGc@._V1_FMjpg_UX2048_.jpg",
      year: "2025–",
      genres: "Drama",
      type: "TV Series",
      rating: "8.0",
      duration: "Season 1",
      description:
        "Two best friends embark on a daring journey as partners in an alcohol start-up. Their audacious adventure unfolds as they challenge norms, bend rules, and 'craft' their destiny within a male-dominated industry.",
      cast: ["Tamannaah Bhatia", "Diana Penty", "Indraneil Sengupta"],
      quality: ["1080p", "720p", "480p"],
      trailerUrl:
        "https://www.youtube.com/embed/vD39Kb3eXuU?si=QJwK3EfKm0qFTMfT", // replace with official trailer link when available
    },
    {
      id: "lost-ladies-2023",
      title: "Lost Ladies",
      image:
        "https://m.media-amazon.com/images/M/MV5BZTkxMjg1MWEtZjI4Mi00MzBmLTlhZjMtY2EwNzhkZWMyNzc5XkEyXkFqcGc@._V1_FMjpg_UX1080_.jpg",
      imageBanner:
        "https://m.media-amazon.com/images/M/MV5BZTUxZDQzOGUtMDk2Zi00NGQ5LWE5MWEtNmRiOWE1OWM5ZmJmXkEyXkFqcGc@._V1_FMjpg_UX1920_.jpg",
      year: "2023",
      genres: "Comedy, Drama, Family",
      type: "Movie",
      rating: "7.5",
      duration: "2h 2m",
      description:
        "The misadventures of two young brides who get lost from the same train. Mistaken identities and chaotic escapades bring laughter and heartwarming moments.",
      cast: ["Nitanshi Goel", "Pratibha Ranta", "Sparsh Shrivastava"],
      quality: ["1080p", "720p", "480p"],
      trailerUrl:
        "https://www.youtube.com/embed/hGM87LCJxRc?si=3TW5yUXANGgvt4n9",
    },
    {
      id: "dragon-2025",
      title: "Dragon",
      image:
        "https://m.media-amazon.com/images/M/MV5BZWI2MjIxMDMtOThmOC00ZGNhLWEwOTEtMTFmZjJlNmRjMzk5XkEyXkFqcGc@._V1_FMjpg_UY2048_.jpg",
      imageBanner:
        "https://m.media-amazon.com/images/M/MV5BMjRhOTllYjYtMzY5Yy00MWUyLWFiY2EtMDgyNTdmZDA0ZTg2XkEyXkFqcGc@._V1_FMjpg_UX2048_.jpg",
      year: "2025",
      genres: "Drama, Thriller",
      type: "Movie",
      rating: "7.8",
      duration: "2h 37m",
      description:
        "After a devastating breakup, troubled student Ragavan abandons his studies and enters the dangerous world of financial fraud, pursuing wealth and power while becoming entangled in escalating deception.",
      cast: ["Anupama Parameswaran", "Pradeep Ranganathan", "Kayadu Lohar"],
      quality: ["1080p", "720p", "480p"],
      trailerUrl:
        "https://www.youtube.com/embed/qIBZlbJ7NUE?si=qhP3BEzx1d9nfdtT",
    },
  ],
  Family: [
    {
      id: "panchayat-2020",
      title: "Panchayat",
      image:
        "https://m.media-amazon.com/images/M/MV5BNjMwYWMxNjYtY2I2NC00OWE0LTg4MmQtMmI5ZGI2NzU4ODhiXkEyXkFqcGc@._V1_FMjpg_UY4000_.jpg",
      imageBanner:
        "https://m.media-amazon.com/images/M/MV5BMjJjNjg1YjktNmQ0OC00NzQ5LWI1YzEtZGE5NDc5OTg1ZGNjXkEyXkFqcGc@._V1_FMjpg_UX2160_.jpg",
      year: "2020–",
      genres: "Comedy, Drama, Family",
      type: "TV Series",
      rating: "8.9",
      duration: "Season 4",
      description:
        "A comedy-drama that follows the journey of an engineering graduate, Abhishek, who becomes secretary of a Panchayat office in a remote Uttar Pradesh village after failing to find a better job.",
      cast: ["Jitendra Kumar", "Raghubir Yadav", "Chandan Roy"],
      quality: ["1080p", "720p", "480p"],
      trailerUrl:
        "https://www.youtube.com/embed/AHMEtNAZTP4?si=wB2BYWXDm4-_g38c",
    },
    {
      id: "lost-ladies-2023",
      title: "Lost Ladies",
      image:
        "https://m.media-amazon.com/images/M/MV5BZTkxMjg1MWEtZjI4Mi00MzBmLTlhZjMtY2EwNzhkZWMyNzc5XkEyXkFqcGc@._V1_FMjpg_UX1080_.jpg",
      imageBanner:
        "https://m.media-amazon.com/images/M/MV5BZTUxZDQzOGUtMDk2Zi00NGQ5LWE5MWEtNmRiOWE1OWM5ZmJmXkEyXkFqcGc@._V1_FMjpg_UX1920_.jpg",
      year: "2023",
      genres: "Comedy, Drama, Family",
      type: "Movie",
      rating: "7.5",
      duration: "2h 2m",
      description:
        "The misadventures of two young brides who get lost from the same train. Mistaken identities and chaotic escapades bring laughter and heartwarming moments.",
      cast: ["Nitanshi Goel", "Pratibha Ranta", "Sparsh Shrivastava"],
      quality: ["1080p", "720p", "480p"],
      trailerUrl:
        "https://www.youtube.com/embed/hGM87LCJxRc?si=3TW5yUXANGgvt4n9",
    },
    {
      id: "home-2015",
      title: "Home",
      image:
        "https://m.media-amazon.com/images/M/MV5BMjExOTQ4MDMyMV5BMl5BanBnXkFtZTgwMTE3NDM2MzE@._V1_FMjpg_UY2048_.jpg",
      imageBanner:
        "https://m.media-amazon.com/images/M/MV5BMzM1MDA1MjY5Ml5BMl5BanBnXkFtZTgwNDY5NTE5NDE@._V1_FMjpg_UX2048_.jpg",
      year: "2015",
      genres: "Animation, Adventure, Comedy, Family, Sci-Fi",
      type: "Movie",
      rating: "6.6",
      duration: "1h 34m",
      description:
        "Oh, a lovable misfit alien, runs away from his planet and takes shelter on Earth, where he befriends Tip, an adventurous young girl on a quest to find her displaced mother.",
      cast: ["Jim Parsons", "Rihanna", "Steve Martin"],
      quality: ["1080p", "720p", "480p"],
      trailerUrl: "https://www.youtube.com/embed/MyqZf8LiWvM",
    },
  ],
  "New Releases": [
    {
      id: "l2-empuraan-2025",
      title: "L2: Empuraan",
      image:
        "https://m.media-amazon.com/images/M/MV5BOWYwMmZkMjUtNzZjOS00NDNhLTk5MjAtZDNjZDZlOGFiNDVkXkEyXkFqcGc@._V1_FMjpg_UX954_.jpg",
      imageBanner:
        "https://m.media-amazon.com/images/M/MV5BZGE4NTM5ZDktZWU3NC00ZGMxLTg3MGQtYzA2ZjBjYTZmNTgxXkEyXkFqcGc@._V1_FMjpg_UX2160_.jpg",
      year: "2025",
      genres: "Action Epic, Action, Crime, Thriller",
      type: "Movie",
      rating: "6.4",
      duration: "2h 59m",
      description:
        "The journey of Stephen Nedumpally, a man leading a double life as Khureshi Ab'raam, an enigmatic leader of a powerful global crime syndicate.",
      cast: ["Mohanlal", "Prithviraj Sukumaran", "Rick Yune"],
      quality: ["480p", "720p", "1080p"],
      trailerUrl:
        "https://www.youtube.com/embed/wxLsVKWEHTs?si=U0nn6wSN8gxv0SJF",
    },
    {
      id: "delivery-man-2013",
      title: "Delivery Man",
      image:
        "https://m.media-amazon.com/images/M/MV5BM2MzYmMyZmQtYmEzOC00NGM1LThkZTEtNjMzYjM3OWEyNjQxXkEyXkFqcGc@._V1_FMjpg_UX1045_.jpg",
      imageBanner:
        "https://m.media-amazon.com/images/M/MV5BMTAxMDY0MDE1MzFeQTJeQWpwZ15BbWU3MDk0NTg5Nzk@._V1_FMjpg_UX2048_.jpg",
      year: "2013",
      genres: "Comedy, Drama",
      type: "Movie",
      rating: "6.4",
      duration: "1h 45m",
      description:
        "An affable underachiever finds out he's fathered 533 children through anonymous donations 20 years ago. Now, when 142 of them file a lawsuit to reveal his identity, he must decide whether to come forward.",
      cast: ["Vince Vaughn", "Chris Pratt", "Cobie Smulders"],
      quality: ["1080p", "720p", "480p"],
      trailerUrl:
        "https://www.youtube.com/embed/C1bafHGcqLs?si=gWWwwlOFSfCJEdSP",
    },
    {
      id: "do-you-wanna-partner-2025",
      title: "Do You Wanna Partner",
      image:
        "https://m.media-amazon.com/images/M/MV5BZTc1MTk1MjEtNDdhZi00ZTcyLWE0NGYtZWYyM2I4NTc1MTkzXkEyXkFqcGc@._V1_FMjpg_UX1152_.jpg",
      imageBanner:
        "https://m.media-amazon.com/images/M/MV5BMzNkMTQzMWMtYjVlNy00MjE3LWJjNTQtMzg4YmRjNzhiMjQ5XkEyXkFqcGc@._V1_FMjpg_UX2048_.jpg",
      year: "2025–",
      genres: "Drama",
      type: "TV Series",
      rating: "8.0",
      duration: "Season 1",
      description:
        "Two best friends embark on a daring journey as partners in an alcohol start-up. Their audacious adventure unfolds as they challenge norms, bend rules, and 'craft' their destiny within a male-dominated industry.",
      cast: ["Tamannaah Bhatia", "Diana Penty", "Indraneil Sengupta"],
      quality: ["1080p", "720p", "480p"],
      trailerUrl:
        "https://www.youtube.com/embed/vD39Kb3eXuU?si=QJwK3EfKm0qFTMfT", // replace with official trailer link when available
    },
  ],
  "Popular TV Shows": [
    {
      id: "do-you-wanna-partner-2025",
      title: "Do You Wanna Partner",
      image:
        "https://m.media-amazon.com/images/M/MV5BZTc1MTk1MjEtNDdhZi00ZTcyLWE0NGYtZWYyM2I4NTc1MTkzXkEyXkFqcGc@._V1_FMjpg_UX1152_.jpg",
      imageBanner:
        "https://m.media-amazon.com/images/M/MV5BMzNkMTQzMWMtYjVlNy00MjE3LWJjNTQtMzg4YmRjNzhiMjQ5XkEyXkFqcGc@._V1_FMjpg_UX2048_.jpg",
      year: "2025–",
      genres: "Drama",
      type: "TV Series",
      rating: "8.0",
      duration: "Season 1",
      description:
        "Two best friends embark on a daring journey as partners in an alcohol start-up. Their audacious adventure unfolds as they challenge norms, bend rules, and 'craft' their destiny within a male-dominated industry.",
      cast: ["Tamannaah Bhatia", "Diana Penty", "Indraneil Sengupta"],
      quality: ["1080p", "720p", "480p"],
      trailerUrl:
        "https://www.youtube.com/embed/vD39Kb3eXuU?si=QJwK3EfKm0qFTMfT", // replace with official trailer link when available
    },
    {
      id: "su-from-so-2025",
      title: "Su from So",
      image:
        "https://m.media-amazon.com/images/M/MV5BYTM2ZDMzMDAtMjhlNS00YmVmLWJkYWEtMTczNTMwMjhiZjExXkEyXkFqcGc@._V1_FMjpg_UX1200_.jpg",
      imageBanner:
        "https://m.media-amazon.com/images/M/MV5BZjE3MTc5MzQtODMwNy00MTY5LWJkMzQtZTc3ZTlhZjgxYzBmXkEyXkFqcGc@._V1_FMjpg_UY2048_.jpg",
      year: "2025",
      genres: "Drama, Mystery",
      type: "Movie",
      rating: "9.0",
      duration: "2h 17m",
      description:
        "In a quiet village, a boy's innocent crush unleashes strange events that have everyone convinced he's brought a ghost along with his feelings.",
      cast: ["Raj B. Shetty", "Shanil Guru", "Prakash Thuminad"],
      quality: ["1080p", "720p", "480p"],
      trailerUrl:
        "https://www.youtube.com/embed/Fe11GLdTL5k?si=0T6u4Ez0jeNOXkGe",
    },
  ],
  Action: [
    {
      id: "havoc-2025",
      title: "Havoc",
      image:
        "https://m.media-amazon.com/images/M/MV5BOWFiNWVlOWYtYjg1NS00ZjQ0LWI3N2QtZjdmM2I5OGI3NTBjXkEyXkFqcGc@._V1_FMjpg_UX1080_.jpg",
      imageBanner:
        "https://m.media-amazon.com/images/M/MV5BYjMwZjg3ZWEtMmJjZS00ZGY3LTlkYzQtN2RjNTdiNWZiYmE5XkEyXkFqcGc@._V1_FMjpg_UX2160_.jpg",
      year: "2025",
      genres: "Action, Crime, Drama, Mystery, Thriller",
      type: "Movie",
      rating: "8.0",
      duration: "1h 25m",
      description:
        "The story is set after a drug deal gone wrong, when a bruised detective must fight his way through a criminal underworld to rescue a politician’s estranged son, while unraveling a deep web of corruption and conspiracy that ensnares his entire city.",
      cast: ["Tom Hardy", "Jessie Mei Li", "Justin Cornwell"],
      quality: ["1080p", "720p", "480p"],
      trailerUrl:
        "https://www.youtube.com/embed/6txjTWLoSc8?si=TiM1MIV4RQaZRkYe",
    },
    {
      id: "l2-empuraan-2025",
      title: "L2: Empuraan",
      image:
        "https://m.media-amazon.com/images/M/MV5BOWYwMmZkMjUtNzZjOS00NDNhLTk5MjAtZDNjZDZlOGFiNDVkXkEyXkFqcGc@._V1_FMjpg_UX954_.jpg",
      imageBanner:
        "https://m.media-amazon.com/images/M/MV5BZGE4NTM5ZDktZWU3NC00ZGMxLTg3MGQtYzA2ZjBjYTZmNTgxXkEyXkFqcGc@._V1_FMjpg_UX2160_.jpg",
      year: "2025",
      genres: "Action Epic, Action, Crime, Thriller",
      type: "Movie",
      rating: "6.4",
      duration: "2h 59m",
      description:
        "The journey of Stephen Nedumpally, a man leading a double life as Khureshi Ab'raam, an enigmatic leader of a powerful global crime syndicate.",
      cast: ["Mohanlal", "Prithviraj Sukumaran", "Rick Yune"],
      quality: ["480p", "720p", "1080p"],
      trailerUrl:
        "https://www.youtube.com/embed/wxLsVKWEHTs?si=U0nn6wSN8gxv0SJF",
    },
    {
      id: "jumanji-the-next-level-2019",
      title: "Jumanji: The Next Level",
      image:
        "https://m.media-amazon.com/images/M/MV5BMzU4ZWRhMzktZWJmMS00YTYwLWExZGUtMWRjMTk2MDA4M2RmXkEyXkFqcGc@._V1_FMjpg_UX1200_.jpg",
      imageBanner:
        "https://m.media-amazon.com/images/M/MV5BN2M0N2ZlODYtMjNmMS00ODgyLTgxZTctMzMwYTUyYzhlN2Y3XkEyXkFqcGc@._V1_FMjpg_UX2160_.jpg",
      year: "2019",
      genres: "Action, Adventure, Comedy",
      type: "Movie",
      rating: "6.7",
      duration: "2h 3m",
      description:
        "A team of friends return to Jumanji to rescue one of their own but discover that nothing is as they expect. They must brave deserts and snowy mountains to escape the world's most dangerous game.",
      cast: [
        "Dwayne Johnson",
        "Jack Black",
        "Kevin Hart",
        "Karen Gillan",
        "Danny Glover",
      ],
      quality: ["1080p", "720p", "480p"],
      trailerUrl: "https://www.youtube.com/embed/rBxcF-r9Ibs",
    },
  ],
  Comedy: [
    {
      id: "delivery-man-2013",
      title: "Delivery Man",
      image:
        "https://m.media-amazon.com/images/M/MV5BM2MzYmMyZmQtYmEzOC00NGM1LThkZTEtNjMzYjM3OWEyNjQxXkEyXkFqcGc@._V1_FMjpg_UX1045_.jpg",
      imageBanner:
        "https://m.media-amazon.com/images/M/MV5BMTAxMDY0MDE1MzFeQTJeQWpwZ15BbWU3MDk0NTg5Nzk@._V1_FMjpg_UX2048_.jpg",
      year: "2013",
      genres: "Comedy, Drama",
      type: "Movie",
      rating: "6.4",
      duration: "1h 45m",
      description:
        "An affable underachiever finds out he's fathered 533 children through anonymous donations 20 years ago. Now, when 142 of them file a lawsuit to reveal his identity, he must decide whether to come forward.",
      cast: ["Vince Vaughn", "Chris Pratt", "Cobie Smulders"],
      quality: ["1080p", "720p", "480p"],
      trailerUrl:
        "https://www.youtube.com/embed/C1bafHGcqLs?si=gWWwwlOFSfCJEdSP",
    },
    {
      id: "joker-folie-a-deux-2024",
      title: "Joker: Folie à Deux",
      image:
        "https://m.media-amazon.com/images/M/MV5BNTRlNmU1NzEtODNkNC00ZGM3LWFmNzQtMjBlMWRiYTcyMGRhXkEyXkFqcGc@._V1_FMjpg_UY4096_.jpg", // Sample poster URL, you can replace if you have another
      imageBanner:
        "https://m.media-amazon.com/images/M/MV5BYWRlZWVkODctNzc4My00OTVjLTkyZDEtMTJlYmFjNGUxNTYxXkEyXkFqcGc@._V1_FMjpg_UX1280_.jpg", // Sample banner, replace if needed
      year: "2024",
      genres: "Crime, Drama, Musical, Thriller",
      type: "Movie",
      rating: "5.6",
      duration: "2h 18m",
      description:
        "Arthur Fleck is institutionalized at Arkham, awaiting trial for his crimes as Joker. While struggling with his dual identity, Arthur stumbles upon true love and discovers the music that’s always been inside him.",
      cast: [
        "Joaquin Phoenix",
        "Lady Gaga",
        "Brendan Gleeson",
        "Catherine Keener",
        "Zazie Beetz",
      ],
      quality: ["1080p", "720p", "480p"],
      trailerUrl:
        "https://www.youtube.com/embed/dYHPHLSGavM?si=erhm7n8U-SdNgOZh",
    },
    {
      id: "su-from-so-2025",
      title: "Su from So",
      image:
        "https://m.media-amazon.com/images/M/MV5BYTM2ZDMzMDAtMjhlNS00YmVmLWJkYWEtMTczNTMwMjhiZjExXkEyXkFqcGc@._V1_FMjpg_UX1200_.jpg",
      imageBanner:
        "https://m.media-amazon.com/images/M/MV5BZjE3MTc5MzQtODMwNy00MTY5LWJkMzQtZTc3ZTlhZjgxYzBmXkEyXkFqcGc@._V1_FMjpg_UY2048_.jpg",
      year: "2025",
      genres: "Drama, Mystery",
      type: "Movie",
      rating: "9.0",
      duration: "2h 17m",
      description:
        "In a quiet village, a boy's innocent crush unleashes strange events that have everyone convinced he's brought a ghost along with his feelings.",
      cast: ["Raj B. Shetty", "Shanil Guru", "Prakash Thuminad"],
      quality: ["1080p", "720p", "480p"],
      trailerUrl:
        "https://www.youtube.com/embed/Fe11GLdTL5k?si=0T6u4Ez0jeNOXkGe",
    },
    {
      id: "dragon-2025",
      title: "Dragon",
      image:
        "https://m.media-amazon.com/images/M/MV5BZWI2MjIxMDMtOThmOC00ZGNhLWEwOTEtMTFmZjJlNmRjMzk5XkEyXkFqcGc@._V1_FMjpg_UY2048_.jpg",
      imageBanner:
        "https://m.media-amazon.com/images/M/MV5BMjRhOTllYjYtMzY5Yy00MWUyLWFiY2EtMDgyNTdmZDA0ZTg2XkEyXkFqcGc@._V1_FMjpg_UX2048_.jpg",
      year: "2025",
      genres: "Drama, Thriller",
      type: "Movie",
      rating: "7.8",
      duration: "2h 37m",
      description:
        "After a devastating breakup, troubled student Ragavan abandons his studies and enters the dangerous world of financial fraud, pursuing wealth and power while becoming entangled in escalating deception.",
      cast: ["Anupama Parameswaran", "Pradeep Ranganathan", "Kayadu Lohar"],
      quality: ["1080p", "720p", "480p"],
      trailerUrl:
        "https://www.youtube.com/embed/qIBZlbJ7NUE?si=qhP3BEzx1d9nfdtT",
    },
  ],
  Drama: [
    {
      id: "dragon-2025",
      title: "Dragon",
      image:
        "https://m.media-amazon.com/images/M/MV5BZWI2MjIxMDMtOThmOC00ZGNhLWEwOTEtMTFmZjJlNmRjMzk5XkEyXkFqcGc@._V1_FMjpg_UY2048_.jpg",
      imageBanner:
        "https://m.media-amazon.com/images/M/MV5BMjRhOTllYjYtMzY5Yy00MWUyLWFiY2EtMDgyNTdmZDA0ZTg2XkEyXkFqcGc@._V1_FMjpg_UX2048_.jpg",
      year: "2025",
      genres: "Drama, Thriller",
      type: "Movie",
      rating: "7.8",
      duration: "2h 37m",
      description:
        "After a devastating breakup, troubled student Ragavan abandons his studies and enters the dangerous world of financial fraud, pursuing wealth and power while becoming entangled in escalating deception.",
      cast: ["Anupama Parameswaran", "Pradeep Ranganathan", "Kayadu Lohar"],
      quality: ["1080p", "720p", "480p"],
      trailerUrl:
        "https://www.youtube.com/embed/qIBZlbJ7NUE?si=qhP3BEzx1d9nfdtT",
    },
    {
      id: "joker-folie-a-deux-2024",
      title: "Joker: Folie à Deux",
      image:
        "https://m.media-amazon.com/images/M/MV5BNTRlNmU1NzEtODNkNC00ZGM3LWFmNzQtMjBlMWRiYTcyMGRhXkEyXkFqcGc@._V1_FMjpg_UY4096_.jpg", // Sample poster URL, you can replace if you have another
      imageBanner:
        "https://m.media-amazon.com/images/M/MV5BYWRlZWVkODctNzc4My00OTVjLTkyZDEtMTJlYmFjNGUxNTYxXkEyXkFqcGc@._V1_FMjpg_UX1280_.jpg", // Sample banner, replace if needed
      year: "2024",
      genres: "Crime, Drama, Musical, Thriller",
      type: "Movie",
      rating: "5.6",
      duration: "2h 18m",
      description:
        "Arthur Fleck is institutionalized at Arkham, awaiting trial for his crimes as Joker. While struggling with his dual identity, Arthur stumbles upon true love and discovers the music that’s always been inside him.",
      cast: [
        "Joaquin Phoenix",
        "Lady Gaga",
        "Brendan Gleeson",
        "Catherine Keener",
        "Zazie Beetz",
      ],
      quality: ["1080p", "720p", "480p"],
      trailerUrl:
        "https://www.youtube.com/embed/dYHPHLSGavM?si=erhm7n8U-SdNgOZh",
    },
    {
      id: "havoc-2025",
      title: "Havoc",
      image:
        "https://m.media-amazon.com/images/M/MV5BOWFiNWVlOWYtYjg1NS00ZjQ0LWI3N2QtZjdmM2I5OGI3NTBjXkEyXkFqcGc@._V1_FMjpg_UX1080_.jpg",
      imageBanner:
        "https://m.media-amazon.com/images/M/MV5BYjMwZjg3ZWEtMmJjZS00ZGY3LTlkYzQtN2RjNTdiNWZiYmE5XkEyXkFqcGc@._V1_FMjpg_UX2160_.jpg",
      year: "2025",
      genres: "Action, Crime, Drama, Mystery, Thriller",
      type: "Movie",
      rating: "8.0",
      duration: "1h 25m",
      description:
        "The story is set after a drug deal gone wrong, when a bruised detective must fight his way through a criminal underworld to rescue a politician’s estranged son, while unraveling a deep web of corruption and conspiracy that ensnares his entire city.",
      cast: ["Tom Hardy", "Jessie Mei Li", "Justin Cornwell"],
      quality: ["1080p", "720p", "480p"],
      trailerUrl:
        "https://www.youtube.com/embed/6txjTWLoSc8?si=TiM1MIV4RQaZRkYe",
    },

    {
      id: "su-from-so-2025",
      title: "Su from So",
      image:
        "https://m.media-amazon.com/images/M/MV5BYTM2ZDMzMDAtMjhlNS00YmVmLWJkYWEtMTczNTMwMjhiZjExXkEyXkFqcGc@._V1_FMjpg_UX1200_.jpg",
      imageBanner:
        "https://m.media-amazon.com/images/M/MV5BZjE3MTc5MzQtODMwNy00MTY5LWJkMzQtZTc3ZTlhZjgxYzBmXkEyXkFqcGc@._V1_FMjpg_UY2048_.jpg",
      year: "2025",
      genres: "Drama, Mystery",
      type: "Movie",
      rating: "9.0",
      duration: "2h 17m",
      description:
        "In a quiet village, a boy's innocent crush unleashes strange events that have everyone convinced he's brought a ghost along with his feelings.",
      cast: ["Raj B. Shetty", "Shanil Guru", "Prakash Thuminad"],
      quality: ["1080p", "720p", "480p"],
      trailerUrl:
        "https://www.youtube.com/embed/Fe11GLdTL5k?si=0T6u4Ez0jeNOXkGe",
    },
  ],
  "Si-Fi": [
    {
      id: "delivery-man-2013",
      title: "Delivery Man",
      image:
        "https://m.media-amazon.com/images/M/MV5BM2MzYmMyZmQtYmEzOC00NGM1LThkZTEtNjMzYjM3OWEyNjQxXkEyXkFqcGc@._V1_FMjpg_UX1045_.jpg",
      imageBanner:
        "https://m.media-amazon.com/images/M/MV5BMTAxMDY0MDE1MzFeQTJeQWpwZ15BbWU3MDk0NTg5Nzk@._V1_FMjpg_UX2048_.jpg",
      year: "2013",
      genres: "Comedy, Drama",
      type: "Movie",
      rating: "6.4",
      duration: "1h 45m",
      description:
        "An affable underachiever finds out he's fathered 533 children through anonymous donations 20 years ago. Now, when 142 of them file a lawsuit to reveal his identity, he must decide whether to come forward.",
      cast: ["Vince Vaughn", "Chris Pratt", "Cobie Smulders"],
      quality: ["1080p", "720p", "480p"],
      trailerUrl:
        "https://www.youtube.com/embed/C1bafHGcqLs?si=gWWwwlOFSfCJEdSP",
    },
    {
      id: "l2-empuraan-2025",
      title: "L2: Empuraan",
      image:
        "https://m.media-amazon.com/images/M/MV5BOWYwMmZkMjUtNzZjOS00NDNhLTk5MjAtZDNjZDZlOGFiNDVkXkEyXkFqcGc@._V1_FMjpg_UX954_.jpg",
      imageBanner:
        "https://m.media-amazon.com/images/M/MV5BZGE4NTM5ZDktZWU3NC00ZGMxLTg3MGQtYzA2ZjBjYTZmNTgxXkEyXkFqcGc@._V1_FMjpg_UX2160_.jpg",
      year: "2025",
      genres: "Action Epic, Action, Crime, Thriller",
      type: "Movie",
      rating: "6.4",
      duration: "2h 59m",
      description:
        "The journey of Stephen Nedumpally, a man leading a double life as Khureshi Ab'raam, an enigmatic leader of a powerful global crime syndicate.",
      cast: ["Mohanlal", "Prithviraj Sukumaran", "Rick Yune"],
      quality: ["480p", "720p", "1080p"],
      trailerUrl:
        "https://www.youtube.com/embed/wxLsVKWEHTs?si=U0nn6wSN8gxv0SJF",
    },
    {
      id: "jumanji-the-next-level-2019",
      title: "Jumanji: The Next Level",
      image:
        "https://m.media-amazon.com/images/M/MV5BMzU4ZWRhMzktZWJmMS00YTYwLWExZGUtMWRjMTk2MDA4M2RmXkEyXkFqcGc@._V1_FMjpg_UX1200_.jpg",
      imageBanner:
        "https://m.media-amazon.com/images/M/MV5BN2M0N2ZlODYtMjNmMS00ODgyLTgxZTctMzMwYTUyYzhlN2Y3XkEyXkFqcGc@._V1_FMjpg_UX2160_.jpg",
      year: "2019",
      genres: "Action, Adventure, Comedy",
      type: "Movie",
      rating: "6.7",
      duration: "2h 3m",
      description:
        "A team of friends return to Jumanji to rescue one of their own but discover that nothing is as they expect. They must brave deserts and snowy mountains to escape the world's most dangerous game.",
      cast: [
        "Dwayne Johnson",
        "Jack Black",
        "Kevin Hart",
        "Karen Gillan",
        "Danny Glover",
      ],
      quality: ["1080p", "720p", "480p"],
      trailerUrl: "https://www.youtube.com/embed/rBxcF-r9Ibs",
    },
    {
      id: "dragon-2025",
      title: "Dragon",
      image:
        "https://m.media-amazon.com/images/M/MV5BZWI2MjIxMDMtOThmOC00ZGNhLWEwOTEtMTFmZjJlNmRjMzk5XkEyXkFqcGc@._V1_FMjpg_UY2048_.jpg",
      imageBanner:
        "https://m.media-amazon.com/images/M/MV5BMjRhOTllYjYtMzY5Yy00MWUyLWFiY2EtMDgyNTdmZDA0ZTg2XkEyXkFqcGc@._V1_FMjpg_UX2048_.jpg",
      year: "2025",
      genres: "Drama, Thriller",
      type: "Movie",
      rating: "7.8",
      duration: "2h 37m",
      description:
        "After a devastating breakup, troubled student Ragavan abandons his studies and enters the dangerous world of financial fraud, pursuing wealth and power while becoming entangled in escalating deception.",
      cast: ["Anupama Parameswaran", "Pradeep Ranganathan", "Kayadu Lohar"],
      quality: ["1080p", "720p", "480p"],
      trailerUrl:
        "https://www.youtube.com/embed/qIBZlbJ7NUE?si=qhP3BEzx1d9nfdtT",
    },
  ],
};
