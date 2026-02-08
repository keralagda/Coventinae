"use client"

import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog"
import { Play } from "lucide-react"
import Image from "next/image"
import { useState } from "react"

interface VideoModalProps {
  thumbnailSrc: string
  videoId: string
}

export default function VideoModal({ thumbnailSrc, videoId }: VideoModalProps) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        <div className="relative group rounded-2xl overflow-hidden shadow-2xl cursor-pointer w-full max-w-md mx-auto transform transition-all hover:scale-[1.02]">
           <div className="aspect-[4/3] relative">
             <Image 
                src={thumbnailSrc} 
                alt="Video Thumbnail" 
                fill
                className="object-cover" 
             />
             <div className="absolute inset-0 bg-black/30 group-hover:bg-black/50 transition-colors flex items-center justify-center">
                <div className="h-16 w-16 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center pl-1 shadow-lg group-hover:scale-110 transition-transform">
                    <Play className="h-6 w-6 text-pine-teal fill-current" />
                </div>
             </div>
           </div>
        </div>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[800px] p-0 bg-black border-none overflow-hidden aspect-video">
        {isOpen && (
             <iframe
                width="100%"
                height="100%"
                src={`https://www.youtube.com/embed/${videoId}?autoplay=1`}
                title="Coventina Video"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="w-full h-full"
            />
        )}
      </DialogContent>
    </Dialog>
  )
}
