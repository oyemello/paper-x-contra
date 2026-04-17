import React from 'react';
import IconButton from './IconButton';
import BookCarousel from './BookCarousel';

export default function HeroSection() {
  return (
    
    <div className="[font-synthesis:none] flex overflow-clip flex-col items-center justify-center self-stretch antialiased text-xs/4">
      <div className="flex overflow-clip flex-col items-center px-12.5 py-12.5 self-stretch">
        <div className="flex items-center gap-4 justify-center p-0">
          <div className="text-[48px] leading-[round(up,80%,1px)] text-center content-center [white-space-collapse:preserve] tracking-[-0.011em] text-black font-['BraunLinear-Bold','Braun_Linear',system-ui,sans-serif] font-bold flex-1 whitespace-pre-wrap">
            Week 11{'   '}|{'   '}2024 · Fall Semester
          </div>
            <div className="flex items-center gap-0 p-0">
              <div className="flex items-center justify-center shrink-0 size-6 overflow-clip">
                <span className="material-symbols-rounded">arrow_drop_down</span>
              </div>
            </div>
        </div>
      </div>
      <BookCarousel />
      <div className="flex overflow-clip items-start gap-5 self-stretch pb-12.5 justify-center px-12.5">
        <div className="inline-flex justify-center items-center rounded-[30px] py-2.5 px-5 bg-[#ED3F1C]">
          <div className="h-6 content-center tracking-[-0.011em] [white-space-collapse:preserve] text-white font-['BraunLinear-Light','Braun_Linear',system-ui,sans-serif] font-light text-base/5">
            view more
          </div>
        </div>
        <IconButton className="inline-flex justify-center items-center rounded-[30px] bg-white border border-solid border-[#9BA2A5] p-2.5">
            <div className="flex items-center gap-0 p-0">
              <div className="flex items-center justify-center shrink-0 size-6 overflow-clip">
                <span className="material-symbols-rounded" style={{ fontVariationSettings: "'FILL' 0, 'wght' 200, 'GRAD' 0, 'opsz' 24" }}>assignment</span>
              </div>
            </div>
        </IconButton>
        <IconButton className="inline-flex justify-center items-center rounded-[30px] bg-white border border-solid border-[#9BA2A5] p-2.5">
          <div className="flex items-center gap-0 p-0">
            <div className="flex items-center justify-center shrink-0 size-6 overflow-clip">
              <span className="material-symbols-rounded" style={{ fontVariationSettings: "'FILL' 0, 'wght' 200, 'GRAD' 0, 'opsz' 24" }}>help</span>
            </div>
          </div>
        </IconButton>
      </div>
    </div>
  
  );
}