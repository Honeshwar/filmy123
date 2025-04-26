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
      downloadLinks: {
        "1080p": [
          "https://new17.gdtot.dad/file/5356363521",
          "https://hubdrive.fit/file/2368761071",
          "https://new1.filepress.icu/file/680b6b1c8d595a25feb6f3e6",
          "http://uploadhub.wf/5oe8a1n3ksmt",
          "https://1fichier.com/?abceuue987l6r946cxu9",
          "https://1fichier.com/?g83sqnw4zcbz6jvqaisd",
          "https://clicknupload.cfd/i9hmuoboje38",
          "https://dl.uploadflix.com/wjkd6i8w9kbm",
          "https://gofile.io/d/2pqWBK",
          "https://megaup.net/23563948673b57f22befc33443286599/Havoc_(2025)www.10xflix.com_Hindi_ORG_Dual_Audio_1080p_HDRip.mkv",
          "https://multiup.io/download/833b133cc6eaadccfd984425ef91971a/Havoc%20%282025%29www.10xflix.com%20Hindi%20ORG%20Dual%20Audio%201080p%20HDRip.mkv",
          "https://send.now/d/1X0oJ",
          "https://streamtape.to/v/8ROM6r3kmVFoVLV",
          "https://updown.cam/xmb1wa2e7sqp",
        ],
        "720p": [
          "https://new17.gdtot.dad/file/2713430615",
          "https://hubdrive.fit/file/2157705731",
          "https://new1.filepress.icu/file/680b6b1e8d595a25feb6f443",
          "http://uploadhub.wf/xsju5ood1ndo",
          "https://1fichier.com/?c3u3rm78untdpno7osiv",
          "https://1fichier.com/?q62cp944pxirrc4cc12b",
          "https://clicknupload.cfd/5gmq21f6y9c8",
          "https://desiupload.co/yewdx33mt015",
          "https://dl.uploadflix.com/zk814kwahq7a",
          "https://dl6.indishare.info/dxpf4qkrw9yp",
          "https://gofile.io/d/6b1v8h",
          "https://megaup.net/dee2d0dcf89eee51b5dae813cf553e8a/Havoc_(2025)www.10xflix.com_Hindi_ORG_Dual_Audio_720p_HDRip.mkv",
          "https://multiup.io/download/1890269f94bb05e767a88a531f149bf3/Havoc%20%282025%29www.10xflix.com%20Hindi%20ORG%20Dual%20Audio%20720p%20HDRip.mkv",
          "https://streamtape.to/v/OdqMoZ79l7UzAL",
          "https://updown.cam/7ibj9f487l3t",
        ],
        "480p": [
          "https://new17.gdtot.dad/file/1101444919",
          "https://hubdrive.fit/file/2157705731",
          "https://new1.filepress.icu/file/680b6b1b8d595a25feb6f38a",
          "http://uploadhub.wf/d3hwxmlrwwya",
          "https://1fichier.com/?bq07p5khiqiycpxhpbw4",
          "https://1fichier.com/?qi4ilc7c1oto5nhnjcy8",
          "https://clicknupload.cfd/qsm8nsz1czb7",
          "https://desiupload.co/7yuo2pe68lg1",
          "https://dl.uploadflix.com/53n48qb5jzlw",
          "https://dl6.indishare.info/1nx92z4sfbls",
          "https://gofile.io/d/nwWt2w",
          "https://megaup.net/1279d7bad781d3af6b8a8c51966f0746/Havoc_(2025)www.10xflix.com_Hindi_ORG_Dual_Audio_480p_HDRip.mkv",
          "https://send.now/d/1X0oh",
          "https://streamtape.to/v/qDJooOgArWSz2oa",
          "https://updown.cam/copgns2tz7rp",
        ],
      },
      watchLinks: {
        "1080p": [
          "https://send.now/d/1X0oJ",
          "https://gofile.io/d/2pqWBK",
          "https://streamtape.to/v/8ROM6r3kmVFoVLV",
          "https://updown.cam/xmb1wa2e7sqp",
        ],
        "720p": [
          "https://multiup.io/download/1890269f94bb05e767a88a531f149bf3/Havoc%20%282025%29www.10xflix.com%20Hindi%20ORG%20Dual%20Audio%20720p%20HDRip.mkv",
          "https://gofile.io/d/6b1v8h",
          "https://streamtape.to/v/OdqMoZ79l7UzAL",
          "https://updown.cam/7ibj9f487l3t",
        ],
        "480p": [
          "https://send.now/d/1X0oh",
          "https://gofile.io/d/nwWt2w",
          "https://streamtape.to/v/qDJooOgArWSz2oa",
          "https://updown.cam/copgns2tz7rp",
        ],
      },
    },
  ],
  Family: [],
  "New Releases": [],
  "Popular TV Shows": [],
  Action: [],
  Comedy: [],
  Drama: [],
  "Si-Fi": [],
};
