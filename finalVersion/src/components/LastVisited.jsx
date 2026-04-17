import React from 'react';
import IconButton from './IconButton';

export default function LastVisited() {
  return (
    
    <div className="[font-synthesis:none] flex overflow-clip flex-col items-start gap-5 self-stretch antialiased text-xs/4">
      <div className="flex overflow-clip items-center gap-5 px-12.5 self-stretch">
        <div className="inline-flex justify-center items-center p-0">
          <div className="flex items-center gap-0 p-0">
            <div className="flex items-center justify-center shrink-0 size-6 overflow-clip">
              <span className="material-symbols-rounded">auto_stories</span>
            </div>
          </div>
        </div>
        <div className="tracking-[-0.011em] [white-space-collapse:preserve] text-black font-['BraunLinear-Medium','Braun_Linear',system-ui,sans-serif] font-medium flex-1 text-xl/7.5">
          Last Visited
        </div>
      </div>
      <div className="flex flex-col items-start gap-5 self-stretch pb-12.5 px-12.5">
        <div className="flex overflow-clip rounded-[10px] flex-col items-start gap-7.5 justify-center self-stretch bg-white [outline:1px_solid_#3B4B59] py-7.5">
          <div className="flex overflow-clip items-center self-stretch gap-5 justify-between pl-0 pr-7.5">
            <div className="flex items-center gap-5 p-0">
              <div className="inline-flex justify-center items-center rounded-tr-[10px] rounded-br-[10px] gap-2.5 pl-7.5 pr-5 bg-[#ED3F1C] py-2.5">
                <div className="flex items-center gap-0 p-0">
                  <div className="flex items-center justify-center shrink-0 size-6 overflow-clip">
                    <span className="material-symbols-rounded !text-white" style={{ fontVariationSettings: "'FILL' 1, 'wght' 200, 'GRAD' 0, 'opsz' 24" }}>brightness_alert</span>
                  </div>
                </div>
                <div className="tracking-[-0.011em] [white-space-collapse:preserve] text-white font-['BraunLinear-Light','Braun_Linear',system-ui,sans-serif] font-light text-base/6">
                  Due, Oct 31
                </div>
              </div>
              <div className="tracking-[-0.011em] [white-space-collapse:preserve] text-black font-['BraunLinear-Medium','Braun_Linear',system-ui,sans-serif] font-medium flex-1 text-xl/7.5">
                Problem 31
              </div>
              <div className="text-[16px] leading-[round(up,150%,1px)] tracking-[-0.011em] [white-space-collapse:preserve] text-black font-['BraunLinear-Light','Braun_Linear',system-ui,sans-serif] font-light whitespace-nowrap">
                PACK 751 · Advanced Packaging Design
              </div>
              <div className="inline-flex justify-center items-center py-2.5 px-5 rounded-full h-11 bg-white border border-solid border-[#3B4B59]">
                <div className="tracking-[-0.011em] [white-space-collapse:preserve] text-[#292624] font-['BraunLinear-Light','Braun_Linear',system-ui,sans-serif] font-light text-base/6">
                  assignment
                </div>
              </div>
            </div>
            <div className="flex items-center gap-5 p-0">
              <div className="inline-flex justify-center items-center rounded-[30px] py-2.5 px-5 gap-2.5 h-11 bg-white border border-solid border-[#9BA2A5]">
                <div className="flex items-center gap-0 p-0">
                  <div className="flex items-center justify-center shrink-0 size-6 overflow-clip">
                    <span className="material-symbols-rounded" style={{ fontVariationSettings: "'FILL' 0, 'wght' 200, 'GRAD' 0, 'opsz' 24" }}>note_stack_add</span>
                  </div>
                </div>
                <div className="tracking-[-0.011em] [white-space-collapse:preserve] text-[#9BA2A5] font-['BraunLinear-Light','Braun_Linear',system-ui,sans-serif] font-light text-base/6">
                  add a file
                </div>
              </div>
              <div className="inline-flex justify-center items-center rounded-[30px] py-2.5 px-5 gap-2.5 h-11 bg-white border border-solid border-[#9BA2A5]">
                <div className="flex items-center gap-0 p-0">
                  <div className="flex items-center justify-center shrink-0 size-6 overflow-clip">
                    <span className="material-symbols-rounded" style={{ fontVariationSettings: "'FILL' 0, 'wght' 200, 'GRAD' 0, 'opsz' 24" }}>cloud_upload</span>
                  </div>
                </div>
                <div className="tracking-[-0.011em] [white-space-collapse:preserve] text-[#9BA2A5] font-['BraunLinear-Light','Braun_Linear',system-ui,sans-serif] font-light text-base/6">
                  submit
                </div>
              </div>
              <IconButton className="inline-flex justify-center items-center rounded-[30px] bg-white border border-solid border-[#9BA2A5] shrink-0 p-2.5 size-11">
                <span className="material-symbols-rounded" style={{ fontVariationSettings: "'FILL' 0, 'wght' 200, 'GRAD' 0, 'opsz' 24" }}>chat</span>
              </IconButton>
              <IconButton className="inline-flex justify-center items-center rounded-[30px] bg-white border border-solid border-[#9BA2A5] shrink-0 p-2.5 size-11">
                <span className="material-symbols-rounded" style={{ fontVariationSettings: "'FILL' 0, 'wght' 200, 'GRAD' 0, 'opsz' 24" }}>info_i</span>
              </IconButton>
            </div>
          </div>
          <div className="h-0.5 self-stretch bg-[#DDDDDD] shrink-0" />
          <div className="flex overflow-clip items-center self-stretch gap-5 justify-between pl-0 pr-7.5">
            <div className="flex items-center gap-5 pl-7.5 pr-0 py-0">
              <div className="tracking-[-0.011em] [white-space-collapse:preserve] text-black font-['BraunLinear-Medium','Braun_Linear',system-ui,sans-serif] font-medium flex-1 text-xl/7.5">
                E-Book by Changfeng Ge
              </div>
              <div className="text-[16px] leading-[round(up,150%,1px)] tracking-[-0.011em] [white-space-collapse:preserve] text-black font-['BraunLinear-Light','Braun_Linear',system-ui,sans-serif] font-light whitespace-nowrap">
                PACK 751 · Advanced Packaging Design
              </div>
              <div className="inline-flex justify-center items-center py-2.5 px-5 rounded-full h-11 bg-white border border-solid border-[#3B4B59]">
                <div className="tracking-[-0.011em] [white-space-collapse:preserve] text-[#292624] font-['BraunLinear-Light','Braun_Linear',system-ui,sans-serif] font-light text-base/6">
                  assignment
                </div>
              </div>
            </div>
            <div className="flex items-center gap-5 p-0">
              <div className="inline-flex justify-center items-center rounded-[30px] py-2.5 px-5 gap-2.5 h-11 bg-white border border-solid border-[#9BA2A5]">
                <div className="flex items-center gap-0 p-0">
                  <div className="flex items-center justify-center shrink-0 size-6 overflow-clip">
                    <span className="material-symbols-rounded" style={{ fontVariationSettings: "'FILL' 0, 'wght' 200, 'GRAD' 0, 'opsz' 24" }}>cloud_download</span>
                  </div>
                </div>
                <div className="tracking-[-0.011em] [white-space-collapse:preserve] text-[#9BA2A5] font-['BraunLinear-Light','Braun_Linear',system-ui,sans-serif] font-light text-base/6">
                  download
                </div>
              </div>
              <IconButton className="inline-flex justify-center items-center rounded-[30px] bg-white border border-solid border-[#9BA2A5] shrink-0 p-2.5 size-11">
                <span className="material-symbols-rounded" style={{ fontVariationSettings: "'FILL' 0, 'wght' 200, 'GRAD' 0, 'opsz' 24" }}>share</span>
              </IconButton>
              <IconButton className="inline-flex justify-center items-center rounded-[30px] bg-white border border-solid border-[#9BA2A5] shrink-0 p-2.5 size-11">
                <span className="material-symbols-rounded" style={{ fontVariationSettings: "'FILL' 0, 'wght' 200, 'GRAD' 0, 'opsz' 24" }}>info_i</span>
              </IconButton>
            </div>
          </div>
          <div className="h-0.5 self-stretch bg-[#DDDDDD] shrink-0" />
          <div className="flex overflow-clip items-center self-stretch gap-5 justify-between pl-0 pr-7.5">
            <div className="flex items-center gap-5 pl-7.5 pr-0 py-0">
              <div className="tracking-[-0.011em] [white-space-collapse:preserve] text-black font-['BraunLinear-Medium','Braun_Linear',system-ui,sans-serif] font-medium flex-1 text-xl/7.5">
                Progress
              </div>
              <div className="text-[16px] leading-[round(up,150%,1px)] tracking-[-0.011em] [white-space-collapse:preserve] text-black font-['BraunLinear-Light','Braun_Linear',system-ui,sans-serif] font-light whitespace-nowrap">
                VCDE 636 · 3D Motion Design
              </div>
              <div className="inline-flex justify-center items-center py-2.5 px-5 rounded-full h-11 bg-white border border-solid border-[#3B4B59]">
                <div className="tracking-[-0.011em] [white-space-collapse:preserve] text-[#292624] font-['BraunLinear-Light','Braun_Linear',system-ui,sans-serif] font-light text-base/6">
                  assignment
                </div>
              </div>
            </div>
            <div className="flex items-center gap-5 p-0">
              <div className="inline-flex justify-center items-center rounded-[30px] py-2.5 px-5 gap-2.5 h-11 bg-white border border-solid border-[#9BA2A5]">
                <div className="flex items-center gap-0 p-0">
                  <div className="flex items-center justify-center shrink-0 size-6 overflow-clip">
                    <span className="material-symbols-rounded" style={{ fontVariationSettings: "'FILL' 0, 'wght' 200, 'GRAD' 0, 'opsz' 24" }}>kid_star</span>
                  </div>
                </div>
                <div className="tracking-[-0.011em] [white-space-collapse:preserve] text-[#9BA2A5] font-['BraunLinear-Light','Braun_Linear',system-ui,sans-serif] font-light text-base/6">
                  view how you fared
                </div>
              </div>
              <IconButton className="inline-flex justify-center items-center rounded-[30px] bg-white border border-solid border-[#9BA2A5] shrink-0 p-2.5 size-11">
                <span className="material-symbols-rounded" style={{ fontVariationSettings: "'FILL' 0, 'wght' 200, 'GRAD' 0, 'opsz' 24" }}>info_i</span>
              </IconButton>
            </div>
          </div>
        </div>
      </div>
    </div>
  
  );
}