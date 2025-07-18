"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Camera,
  X,
  ChevronLeft,
  ChevronRight,
  Heart,
  Grid3X3,
  Grid2X2,
} from "lucide-react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

type Photo = {
  id: number;
  src: string;
  title: string;
  category: string;
  aspectRatio: string;
};

const galleryCategories = [
  { name: "All", active: true },
  { name: "Workshops", active: false },
  { name: "Networking", active: false },
  { name: "Community", active: false },
  { name: "Awards", active: false },
];

const photos = [
  {
    id: 1,
    src: "/placeholder.svg?height=400&width=300",
    title: "React Workshop Session",
    category: "Workshops",
    aspectRatio: "3:4",
  },
  {
    id: 2,
    src: "/placeholder.svg?height=300&width=400",
    title: "Team Collaboration",
    category: "Workshops",
    aspectRatio: "4:3",
  },
  {
    id: 3,
    src: "/placeholder.svg?height=500&width=300",
    title: "Networking Event",
    category: "Networking",
    aspectRatio: "3:5",
  },
  {
    id: 4,
    src: "/placeholder.svg?height=300&width=300",
    title: "Community Gathering",
    category: "Community",
    aspectRatio: "1:1",
  },
  {
    id: 5,
    src: "/placeholder.svg?height=400&width=300",
    title: "Design Workshop",
    category: "Workshops",
    aspectRatio: "3:4",
  },
  {
    id: 6,
    src: "/placeholder.svg?height=350&width=400",
    title: "Success Stories",
    category: "Community",
    aspectRatio: "4:3.5",
  },
  {
    id: 7,
    src: "/placeholder.svg?height=450&width=300",
    title: "Award Ceremony",
    category: "Awards",
    aspectRatio: "3:4.5",
  },
  {
    id: 8,
    src: "/placeholder.svg?height=300&width=400",
    title: "Coding Session",
    category: "Workshops",
    aspectRatio: "4:3",
  },
  {
    id: 9,
    src: "/placeholder.svg?height=400&width=300",
    title: "Group Discussion",
    category: "Networking",
    aspectRatio: "3:4",
  },
  {
    id: 10,
    src: "/placeholder.svg?height=300&width=300",
    title: "Community Iftar",
    category: "Community",
    aspectRatio: "1:1",
  },
  {
    id: 11,
    src: "/placeholder.svg?height=500&width=300",
    title: "Presentation Time",
    category: "Workshops",
    aspectRatio: "3:5",
  },
  {
    id: 12,
    src: "/placeholder.svg?height=350&width=400",
    title: "Team Building",
    category: "Community",
    aspectRatio: "4:3.5",
  },
  {
    id: 13,
    src: "/placeholder.svg?height=400&width=300",
    title: "Learning Together",
    category: "Workshops",
    aspectRatio: "3:4",
  },
  {
    id: 14,
    src: "/placeholder.svg?height=300&width=400",
    title: "Networking Coffee",
    category: "Networking",
    aspectRatio: "4:3",
  },
  {
    id: 15,
    src: "/placeholder.svg?height=450&width=300",
    title: "Recognition Event",
    category: "Awards",
    aspectRatio: "3:4.5",
  },
];

// Animation variants are removed as per your request,
// only 'whileHover' will be used directly on motion components.

export default function GallerySection() {
  const [selectedPhoto, setSelectedPhoto] = useState<Photo | null>(null);
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [gridSize, setGridSize] = useState<"small" | "large">("small");
  const [activeCategory, setActiveCategory] = useState<string>("All");

  const filteredPhotos =
    activeCategory === "All"
      ? photos
      : photos.filter((p) => p.category === activeCategory);

  const openLightbox = (photo: Photo, index: number) => {
    setSelectedPhoto(photo);
    setCurrentIndex(index);
  };

  const closeLightbox = () => setSelectedPhoto(null);

  const nextPhoto = () => {
    const nextIndex = (currentIndex + 1) % filteredPhotos.length;
    setCurrentIndex(nextIndex);
    setSelectedPhoto(filteredPhotos[nextIndex]);
  };

  const prevPhoto = () => {
    const prevIndex =
      (currentIndex - 1 + filteredPhotos.length) % filteredPhotos.length;
    setCurrentIndex(prevIndex);
    setSelectedPhoto(filteredPhotos[prevIndex]);
  };

  return (
    <div className="min-h-screen bg-gdfa-neutral-white">
      <div className="md:container mx-auto px-4 py-24">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="flex items-center bg-blue-100 w-fit mx-auto py-2 px-4 rounded-full justify-center gap-2 text-gdfa-secondary mb-4">
            <Camera className="w-5 h-5" />
            <span className="text-sm font-medium">Community Gallery</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-gdfa-primary mb-4">
            Our Moments
          </h1>
          <p className="text-lg text-gdfa-primary/70 max-w-2xl mx-auto">
            Capturing the spirit of GDFA through workshops, events, and
            gatherings.
          </p>
        </div>

        {/* Controls */}
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4 mb-8">
          {/* Category Filter */}
          <div className="flex gap-2 flex-wrap items-center justify-center overflow-x-auto pb-2">
            {galleryCategories.map((category) => (
              <Button
                key={category.name}
                variant={activeCategory === category.name ? "default" : "ghost"}
                size="sm"
                onClick={() => setActiveCategory(category.name)}
                className={`whitespace-nowrap shadow cursor-pointer ${
                  activeCategory === category.name
                    ? "bg-gdfa-secondary text-white hover:bg-gdfa-primary"
                    : "text-gdfa-secondary hover:text-gdfa-primary hover:bg-gdfa-secondary/10"
                }`}
              >
                {category.name}
              </Button>
            ))}
          </div>

          {/* Grid Size Toggle */}
          <div className="flex gap-1 border border-gdfa-secondary/30 rounded-lg p-1">
            <Button
              variant={gridSize === "small" ? "default" : "ghost"}
              size="sm"
              onClick={() => setGridSize("small")}
              className={`p-2 ${
                gridSize === "small"
                  ? "bg-gdfa-secondary text-white hover:bg-gdfa-primary"
                  : "text-gdfa-secondary hover:text-gdfa-primary"
              }`}
            >
              <Grid3X3 className="w-4 h-4" />
            </Button>
            <Button
              variant={gridSize === "large" ? "default" : "ghost"}
              size="sm"
              onClick={() => setGridSize("large")}
              className={`p-2 ${
                gridSize === "large"
                  ? "bg-gdfa-secondary text-white hover:bg-gdfa-primary"
                  : "text-gdfa-secondary hover:text-gdfa-primary"
              }`}
            >
              <Grid2X2 className="w-4 h-4" />
            </Button>
          </div>
        </div>

        {/* Photo Grid */}
        <div
          className={`grid gap-4 ${
            gridSize === "small"
              ? "grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5"
              : "grid-cols-1 md:grid-cols-2 lg:grid-cols-3"
          }`}
        >
          {filteredPhotos.map((photo, index) => (
            <motion.div
              key={photo.id} // Retain key for AnimatePresence if re-adding. For now, it just acts as a unique ID.
              layout // Keep layout for smooth transitions when filtering/resizing
              transition={{
                duration: 0.5,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="group relative overflow-hidden rounded-xl cursor-pointer bg-gdfa-neutral-white shadow-lg hover:shadow-xl transition-shadow duration-300"
              onClick={() => openLightbox(photo, index)}
              whileHover={{
                scale: 1.03,
                boxShadow: "0 12px 25px rgba(0,0,0,0.15)",
              }}
            >
              <Image
                src={photo.src.split("?")[0]}
                alt={photo.title}
                width={400}
                height={300}
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                style={{ aspectRatio: photo.aspectRatio }}
              />

              {/* Hover Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-gdfa-primary/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              {/* Photo Info */}
              <div className="absolute bottom-0 left-0 right-0 p-3 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <p className="text-white text-sm font-medium truncate">
                  {photo.title}
                </p>
                <div className="flex items-center gap-1 text-white/80 text-xs mt-1">
                  <Heart className="w-3 h-3" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Load More */}
        <div className="text-center mt-12">
          <Button
            variant="outline"
            className="border-gdfa-secondary text-gdfa-secondary hover:bg-gdfa-secondary/10"
          >
            Load More Photos
          </Button>
        </div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {selectedPhoto && (
          <motion.div
            className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center"
            initial={{ opacity: 0 }} // Keep initial for a fade-in on open
            animate={{ opacity: 1 }} // Keep animate for a fade-in on open
            exit={{ opacity: 0 }} // Keep exit for a fade-out on close
          >
            {/* Close */}
            <Button
              variant="ghost"
              size="icon"
              className="absolute top-4 right-4 text-white hover:bg-white/10"
              onClick={closeLightbox}
            >
              <X className="w-6 h-6" />
            </Button>

            {/* Nav */}
            <Button
              variant="ghost"
              size="icon"
              className="absolute left-4 top-1/2 -translate-y-1/2 text-white hover:bg-white/10"
              onClick={prevPhoto}
            >
              <ChevronLeft className="w-8 h-8" />
            </Button>
            <Button
              variant="ghost"
              size="icon"
              className="absolute right-4 top-1/2 -translate-y-1/2 text-white hover:bg-white/10"
              onClick={nextPhoto}
            >
              <ChevronRight className="w-8 h-8" />
            </Button>

            {/* Photo */}
            <motion.div
              className="relative max-w-4xl max-h-[90vh] mx-4"
              initial={{ scale: 0.8, opacity: 0 }} // Keep initial for a zoom-in on open
              animate={{ scale: 1, opacity: 1 }} // Keep animate for a zoom-in on open
            >
              <Image
                src={selectedPhoto.src}
                alt={selectedPhoto.title}
                width={800}
                height={600}
                className="max-w-full max-h-full object-contain"
              />

              {/* Info */}
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6">
                <h3 className="text-white text-xl font-semibold">
                  {selectedPhoto.title}
                </h3>
                <div className="flex justify-between text-white/80 mt-2">
                  <span>{selectedPhoto.category}</span>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
