import React, { useRef, useState } from 'react';
import { Play, Pause, Maximize2, ExternalLink, Image as ImageIcon } from 'lucide-react';

interface ProjectVideoPreviewProps {
  videoUrl?: string;
  posterUrl: string;
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
  const [videoError, setVideoError] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  const hasVideo = Boolean(videoUrl && !videoError);

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
      className="relative w-full aspect-[16/10] bg-neutral-100 overflow-hidden rounded-2xl group border border-neutral-200/80 shadow-sm cursor-pointer"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={onOpenModal}
    >
      {/* Showcase Media: Either Video Only or Image Only */}
      {hasVideo ? (
        <div className="relative w-full h-full">
          {/* Immediate poster layer beneath video to eliminate flash before video decode */}
          <img
            src={posterUrl}
            alt={title}
            loading="eager"
            referrerPolicy="no-referrer"
            className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
          />
          <video
            ref={videoRef}
            src={videoUrl}
            poster={posterUrl}
            autoPlay
            loop
            muted
            playsInline
            onError={() => setVideoError(true)}
            className="relative z-10 w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
          />
        </div>
      ) : (
        <img
          src={posterUrl}
          alt={title}
          loading="eager"
          referrerPolicy="no-referrer"
          className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
        />
      )}

      {/* Hover Overlay Controls */}
      <div
        className={`absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent z-10 flex items-center justify-center transition-opacity duration-300 ${
          isHovered ? 'opacity-100' : 'opacity-0'
        }`}
      >
        <div className="flex items-center gap-3">
          {hasVideo && (
            <button
              onClick={togglePlay}
              title={isPlaying ? 'Pause video navigation' : 'Play video navigation'}
              className="w-10 h-10 rounded-full bg-white/90 text-neutral-900 flex items-center justify-center shadow-lg hover:scale-110 hover:bg-white transition-transform"
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
            className="w-10 h-10 rounded-full bg-neutral-900/80 backdrop-blur-md text-white border border-neutral-700 flex items-center justify-center shadow-lg hover:scale-110 transition-transform"
          >
            <Maximize2 className="w-4 h-4" />
          </button>
        </div>

        {/* Bottom Banner inside overlay */}
        <div className="absolute bottom-3 inset-x-3 flex items-center justify-between text-xs text-neutral-300">
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
          <span className="flex items-center gap-1 font-mono text-[11px] text-neutral-400">
            Click card to view details <ExternalLink className="w-3 h-3 ml-0.5" />
          </span>
        </div>
      </div>
    </div>
  );
};

export default ProjectVideoPreview;