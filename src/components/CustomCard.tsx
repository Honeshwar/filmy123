import { Movie } from '@/types/movie'
import Link from 'next/link'
import React from 'react'

export default function CustomCard({ item }: { item: Movie }) {
  return (
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
            {
                (item.year || item.genres) && (
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
                )
            }
        </div>
        </div>
    </Link>
  )
}
