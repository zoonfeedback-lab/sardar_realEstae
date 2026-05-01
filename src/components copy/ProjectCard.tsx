import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { FiMapPin, FiHome } from 'react-icons/fi';

export interface Project {
  id: string;
  title: string;
  location: string;
  type: 'Residential' | 'Commercial';
  description: string;
  price: string;
  imageUrl: string;
}

interface ProjectCardProps {
  project: Project;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      whileHover={{ y: -10 }}
      className="group relative flex flex-col bg-[#111111] rounded-2xl overflow-hidden border border-white/10 hover:border-white/30 transition-all duration-300"
    >
      {/* Image Container */}
      <div className="relative h-64 w-full overflow-hidden">
        <Image
          src={project.imageUrl}
          alt={project.title}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#111111] via-transparent to-transparent" />
      </div>

      {/* Content Container */}
      <div className="flex flex-col flex-grow p-6">
        <h3 className="text-2xl font-bold text-white mb-2">{project.title}</h3>
        
        <div className="flex items-center gap-4 text-sm text-gray-400 mb-4">
          <div className="flex items-center gap-1">
            <FiMapPin size={16} />
            <span>{project.location}</span>
          </div>
          <div className="flex items-center gap-1">
            <FiHome size={16} />
            <span>{project.type}</span>
          </div>
        </div>
        
        <p className="text-gray-300 text-sm mb-6 flex-grow line-clamp-3">
          {project.description}
        </p>
        
        <div className="flex items-center justify-between mt-auto">
          <div className="flex flex-col">
            <span className="text-xs text-gray-500 uppercase tracking-wider">Starting from</span>
            <span className="text-lg font-bold text-white">{project.price}</span>
          </div>
          
          <button className="px-5 py-2.5 bg-white text-black text-sm font-semibold rounded-full hover:bg-gray-200 hover:scale-105 transition-all duration-300 active:scale-95">
            View Details
          </button>
        </div>
      </div>
    </motion.div>
  );
}
