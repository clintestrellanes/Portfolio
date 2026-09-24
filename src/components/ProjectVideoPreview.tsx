import React, { useRef, useState, useEffect } from 'react';
import { Play, Pause, Maximize2, ExternalLink, Image as ImageIcon, Loader2 } from 'lucide-react';

interface ProjectVideoPreviewProps {
  videoUrl?: string;
  posterUrl?: string;
  title: string;
  projectNumber?: string;
  onOpenModal?: () => void;
}

export const ProjectVideoPreview: React.FC<ProjectVideoPreviewProps> = ({
  videoUrl,
  posterUrl,
  title,
  projectNumber,
  onOpenModal,
}) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isLoading, setIsLoading] = useState(true);
  const [videoError, setVideoError] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  const hasVideo = Boolean(videoUrl && !videoError);

  useEffect(() => {
    setIsLoading(true);
    const vid = videoRef.current;
    if (hasVideo && vid && vid.readyState >= 2) {
      setIsLoading(false);
    }
  }, [videoUrl, hasVideo]);

  const togglePlay = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (!videoRef.current) return;
    if (isPlaying) {
      videoRef.current.pause();
      setIsPlaying(false);
    } else {
      videoRef.current.play().catch(() => {});
      setIsPlaying(true);
    }
  };

  return (
    <div
      className="relative w-full aspect-[16/10] bg-neutral-900 overflow-hidden rounded-xl sm:rounded-2xl group border border-neutral-200/80 shadow-xs cursor-pointer select-none"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={onOpenModal}
    >
      {/* Loading State Overlay */}
      {isLoading && (
        <div className="absolute inset-0 z-20 flex flex-col items-center justify-center bg-neutral-900 text-neutral-400 pointer-events-none transition-opacity duration-300">
          <Loader2 className="w-6 h-6 sm:w-7 sm:h-7 animate-spin text-neutral-300 mb-2" />
          <span className="text-[10px] sm:text-[11px] font-mono tracking-widest text-neutral-400 uppercase">
            Loading...
          </span>
        </div>
      )}

      {/* Showcase Media: Video or Poster Image */}
      {hasVideo ? (
        <div className="relative w-full h-full bg-neutral-950">
          <video
            ref={videoRef}
            src={videoUrl}
            autoPlay
            loop
            muted
            playsInline
            onLoadedData={() => setIsLoading(false)}
            onCanPlay={() => setIsLoading(false)}
            onPlaying={() => setIsLoading(false)}
            onWaiting={() => setIsLoading(true)}
            onError={() => {
              setVideoError(true);
              setIsLoading(false);
            }}
            className={`relative z-10 w-full h-full object-cover transition-opacity duration-500 ease-out group-hover:scale-105 ${
              isLoading ? 'opacity-0' : 'opacity-100'
            }`}
          />
        </div>
      ) : posterUrl ? (
        <div className="relative w-full h-full bg-neutral-950">
          <img
            src={posterUrl}
            alt={title}
            loading="lazy"
            onLoad={() => setIsLoading(false)}
            onError={() => setIsLoading(false)}
            className={`w-full h-full object-cover transition-opacity duration-500 ease-out group-hover:scale-105 ${
              isLoading ? 'opacity-0' : 'opacity-100'
            }`}
          />
        </div>
      ) : (
        <div className="w-full h-full bg-neutral-900 flex items-center justify-center text-neutral-600 text-xs font-mono">
          No preview available
        </div>
      )}

      {/* Hover Overlay Controls */}
      <div
        className={`absolute inset-0 bg-gradient-to-t from-black/80 via-black/25 to-transparent z-30 flex items-center justify-center transition-opacity duration-300 ${
          isHovered && !isLoading ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
      >
        <div className="flex items-center gap-2.5 sm:gap-3">
          {hasVideo && (
            <button
              onClick={togglePlay}
              title={isPlaying ? 'Pause video navigation' : 'Play video navigation'}
              className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-white/95 text-neutral-900 flex items-center justify-center shadow-lg hover:scale-110 hover:bg-white transition-transform"
            >
              {isPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4 ml-0.5" />}
            </button>
          )}
          <button
            onClick={(e) => {
              e.stopPropagation();
              onOpenModal?.();
            }}
            title="Inspect project details"
            className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-neutral-900/85 backdrop-blur-md text-white border border-neutral-700 flex items-center justify-center shadow-lg hover:scale-110 transition-transform"
          >
            <Maximize2 className="w-4 h-4" />
          </button>
        </div>

        {/* Bottom Banner inside overlay */}
        <div className="absolute bottom-2.5 sm:bottom-3 inset-x-3 flex items-center justify-between text-[11px] sm:text-xs text-neutral-300">
          <span className="font-medium tracking-wide flex items-center gap-1.5">
            {hasVideo ? (
              'Video preview'
            ) : (
              <>
                <ImageIcon className="w-3.5 h-3.5 text-neutral-400" />
                Image showcase
              </>
            )}
          </span>
          <span className="flex items-center gap-1 font-mono text-[10px] sm:text-[11px] text-neutral-400">
            Details <ExternalLink className="w-3 h-3 ml-0.5" />
          </span>
        </div>
      </div>
    </div>
  );
};

export default ProjectVideoPreview;