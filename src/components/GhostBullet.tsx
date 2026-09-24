import React from 'react';
import './GhostBullet.css';

interface GhostBulletProps {
  size?: number;
  color?: string;
  className?: string;
}

export const GhostBullet: React.FC<GhostBulletProps> = ({
  size = 17,
  color = 'red',
  className = '',
}) => {
  const scale = size / 140;

  return (
    <span
      className={`ghost-bullet-container ${className}`}
      style={
        {
          width: `${size}px`,
          height: `${size}px`,
          '--ghost-color': color,
        } as React.CSSProperties
      }
      aria-hidden="true"
    >
      <div
        className="ghost-bullet-scaler"
        style={{
          transform: `translate(-50%, -50%) scale(${scale})`,
        }}
      >
        <div className="ghost-bullet-red">
          <div className="ghost-bullet-pupil" />
          <div className="ghost-bullet-pupil1" />
          <div className="ghost-bullet-eye" />
          <div className="ghost-bullet-eye1" />
          <div className="ghost-bullet-top0" />
          <div className="ghost-bullet-top1" />
          <div className="ghost-bullet-top2" />
          <div className="ghost-bullet-top3" />
          <div className="ghost-bullet-top4" />
          <div className="ghost-bullet-st0" />
          <div className="ghost-bullet-st1" />
          <div className="ghost-bullet-st2" />
          <div className="ghost-bullet-st3" />
          <div className="ghost-bullet-st4" />
          <div className="ghost-bullet-st5" />
          <div className="ghost-bullet-an1" />
          <div className="ghost-bullet-an2" />
          <div className="ghost-bullet-an3" />
          <div className="ghost-bullet-an4" />
          <div className="ghost-bullet-an5" />
          <div className="ghost-bullet-an6" />
          <div className="ghost-bullet-an7" />
          <div className="ghost-bullet-an8" />
          <div className="ghost-bullet-an9" />
          <div className="ghost-bullet-an10" />
          <div className="ghost-bullet-an11" />
          <div className="ghost-bullet-an12" />
          <div className="ghost-bullet-an13" />
          <div className="ghost-bullet-an14" />
          <div className="ghost-bullet-an15" />
          <div className="ghost-bullet-an16" />
          <div className="ghost-bullet-an17" />
          <div className="ghost-bullet-an18" />
        </div>
        <div className="ghost-bullet-shadow" />
      </div>
    </span>
  );
};

export default GhostBullet;
