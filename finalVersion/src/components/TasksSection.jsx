import React from 'react';
import IconButton from './IconButton';

export default function TasksSection() {
  return (
    
    <div className="[font-synthesis:none] flex items-start gap-0 self-stretch antialiased text-xs/4 p-0">
      <div className="flex overflow-clip flex-col items-start gap-5 flex-1">
        <div className="flex overflow-clip items-center gap-5 self-stretch justify-between px-12.5">
          <div className="flex items-center gap-5 p-0">
            <div className="inline-flex justify-center items-center py-2.5">
              <div className="flex items-center gap-0 p-0">
                <div className="flex items-center justify-center shrink-0 size-6 overflow-clip">
                  <span className="material-symbols-rounded">calendar_add_on</span>
                </div>
              </div>
            </div>
            <div className="tracking-[-0.011em] [white-space-collapse:preserve] text-black font-['BraunLinear-Medium','Braun_Linear',system-ui,sans-serif] font-medium flex-1 text-xl/7.5">
              Upcoming Tasks
            </div>
          </div>
          <IconButton className="inline-flex justify-center items-center rounded-[30px] bg-white border border-solid border-[#9BA2A5] shrink-0 p-2.5 size-11">
            <div className="flex items-center gap-0 p-0">
              <div className="flex items-center justify-center shrink-0 size-6 overflow-clip">
                <span className="material-symbols-rounded" style={{ fontVariationSettings: "'FILL' 0, 'wght' 200, 'GRAD' 0, 'opsz' 24" }}>filter_list</span>
              </div>
            </div>
          </IconButton>
        </div>
        <div className="flex flex-col items-start gap-5 self-stretch pb-12.5 pl-12.5 pr-5">
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
                <div className="[white-space-collapse:preserve] tracking-[-0.011em] text-black font-['BraunLinear-Medium','Braun_Linear',system-ui,sans-serif] font-medium text-xl/7.5 whitespace-nowrap">
                  Weekly 1
                </div>
                <div className="text-[16px] leading-[round(up,150%,1px)] [white-space-collapse:preserve] tracking-[-0.011em] text-[#9BA2A5] font-['BraunLinear-Light','Braun_Linear',system-ui,sans-serif] font-light flex-1">
                  VCDE 790
                </div>
                <div className="inline-flex justify-center items-center py-2.5 px-5 rounded-full h-11 bg-white border border-solid border-[#3B4B59]">
                  <div className="tracking-[-0.011em] [white-space-collapse:preserve] text-[#292624] font-['BraunLinear-Light','Braun_Linear',system-ui,sans-serif] font-light text-base/6">
                    thesis program
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-5 p-0">
                <IconButton className="inline-flex justify-center items-center rounded-[30px] bg-white border border-solid border-[#9BA2A5] shrink-0 p-2.5 size-11">
                  <div className="flex items-center justify-center shrink-0 size-6 overflow-clip">
                    <span className="material-symbols-rounded" style={{ fontVariationSettings: "'FILL' 0, 'wght' 200, 'GRAD' 0, 'opsz' 24" }}>add_alert</span>
                  </div>
                </IconButton>
              </div>
            </div>
            <div className="h-0.5 self-stretch bg-[#DDDDDD] shrink-0" />
            <div className="flex overflow-clip items-center self-stretch gap-5 justify-between pl-0 pr-7.5">
              <div className="flex items-center gap-5 pr-0 py-0">
                <div className="inline-flex justify-center items-center rounded-tr-[10px] rounded-br-[10px] gap-2.5 pl-7.5 pr-5 bg-[#ED3F1C] py-2.5">
                  <div className="flex items-center gap-0 p-0">
                    <div className="flex items-center justify-center shrink-0 size-6 overflow-clip">
                      <span className="material-symbols-rounded !text-white" style={{ fontVariationSettings: "'FILL' 1, 'wght' 200, 'GRAD' 0, 'opsz' 24" }}>brightness_alert</span>
                    </div>
                  </div>
                  <div className="tracking-[-0.011em] [white-space-collapse:preserve] text-white font-['BraunLinear-Light','Braun_Linear',system-ui,sans-serif] font-light text-base/6">
                    Due, Sept 11
                  </div>
                </div>
                <div className="[white-space-collapse:preserve] tracking-[-0.011em] text-black font-['BraunLinear-Medium','Braun_Linear',system-ui,sans-serif] font-medium text-xl/7.5 whitespace-nowrap">
                  W3 - Review
                </div>
                <div className="text-[16px] leading-[round(up,150%,1px)] [white-space-collapse:preserve] tracking-[-0.011em] text-[#9BA2A5] font-['BraunLinear-Light','Braun_Linear',system-ui,sans-serif] font-light flex-1">
                  VCDE 737
                </div>
                <div className="inline-flex justify-center items-center py-2.5 px-5 rounded-full h-11 bg-white border border-solid border-[#3B4B59]">
                  <div className="tracking-[-0.011em] [white-space-collapse:preserve] text-[#292624] font-['BraunLinear-Light','Braun_Linear',system-ui,sans-serif] font-light text-base/6">
                    thesis program
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-5 p-0">
                <IconButton className="inline-flex justify-center items-center rounded-[30px] bg-white border border-solid border-[#9BA2A5] shrink-0 p-2.5 size-11">
                  <div className="flex items-center justify-center shrink-0 size-6 overflow-clip">
                    <span className="material-symbols-rounded" style={{ fontVariationSettings: "'FILL' 0, 'wght' 200, 'GRAD' 0, 'opsz' 24" }}>add_alert</span>
                  </div>
                </IconButton>
              </div>
            </div>
            <div className="h-0.5 self-stretch bg-[#DDDDDD] shrink-0" />
            <div className="flex overflow-clip items-center self-stretch gap-5 justify-between pl-0 pr-7.5">
              <div className="flex items-center gap-5 pr-0 py-0">
                <div className="inline-flex justify-center items-center rounded-tr-[10px] rounded-br-[10px] gap-2.5 pl-7.5 pr-5 bg-[#ED3F1C] py-2.5">
                  <div className="flex items-center gap-0 p-0">
                    <div className="flex items-center justify-center shrink-0 size-6 overflow-clip">
                      <span className="material-symbols-rounded !text-white" style={{ fontVariationSettings: "'FILL' 1, 'wght' 200, 'GRAD' 0, 'opsz' 24" }}>brightness_alert</span>
                    </div>
                  </div>
                  <div className="tracking-[-0.011em] [white-space-collapse:preserve] text-white font-['BraunLinear-Light','Braun_Linear',system-ui,sans-serif] font-light text-base/6">
                    Due, Sept 13
                  </div>
                </div>
                <div className="[white-space-collapse:preserve] tracking-[-0.011em] text-black font-['BraunLinear-Medium','Braun_Linear',system-ui,sans-serif] font-medium text-xl/7.5 whitespace-nowrap">
                  Weekly 2
                </div>
                <div className="text-[16px] leading-[round(up,150%,1px)] [white-space-collapse:preserve] tracking-[-0.011em] text-[#9BA2A5] font-['BraunLinear-Light','Braun_Linear',system-ui,sans-serif] font-light flex-1">
                  VCDE 790
                </div>
                <div className="inline-flex justify-center items-center py-2.5 px-5 rounded-full h-11 bg-white border border-solid border-[#3B4B59]">
                  <div className="tracking-[-0.011em] [white-space-collapse:preserve] text-[#292624] font-['BraunLinear-Light','Braun_Linear',system-ui,sans-serif] font-light text-base/6">
                    thesis program
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-5 p-0">
                <IconButton className="inline-flex justify-center items-center rounded-[30px] bg-white border border-solid border-[#9BA2A5] shrink-0 p-2.5 size-11">
                  <div className="flex items-center justify-center shrink-0 size-6 overflow-clip">
                    <span className="material-symbols-rounded" style={{ fontVariationSettings: "'FILL' 0, 'wght' 200, 'GRAD' 0, 'opsz' 24" }}>add_alert</span>
                  </div>
                </IconButton>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex overflow-clip flex-col items-start gap-5 flex-1">
        <div className="flex overflow-clip items-center gap-5 self-stretch justify-between pl-5 pr-20">
          <div className="flex items-center gap-5 p-0">
            <div className="inline-flex justify-center items-center py-2.5">
              <div className="flex items-center gap-0 p-0">
                <div className="flex items-center justify-center shrink-0 size-6 overflow-clip">
                  <span className="material-symbols-rounded">calendar_add_on</span>
                </div>
              </div>
            </div>
            <div className="tracking-[-0.011em] [white-space-collapse:preserve] text-black font-['BraunLinear-Medium','Braun_Linear',system-ui,sans-serif] font-medium flex-1 text-xl/7.5">
              Overdue Tasks
            </div>
          </div>
          <IconButton className="inline-flex justify-center items-center rounded-[30px] bg-white border border-solid border-[#9BA2A5] shrink-0 p-2.5 size-11">
            <div className="flex items-center gap-0 p-0">
              <div className="flex items-center justify-center shrink-0 size-6 overflow-clip">
                <span className="material-symbols-rounded" style={{ fontVariationSettings: "'FILL' 0, 'wght' 200, 'GRAD' 0, 'opsz' 24" }}>filter_list</span>
              </div>
            </div>
          </IconButton>
        </div>
        <div className="flex flex-col items-start gap-5 self-stretch pb-12.5 pl-5 pr-12.5">
          <div className="flex overflow-clip rounded-[10px] flex-col items-start gap-7.5 justify-center self-stretch bg-white [outline:1px_solid_#3B4B59] py-7.5">
            <div className="flex items-center self-stretch gap-5 justify-between pl-0 pr-7.5">
              <div className="flex items-center gap-5 p-0">
                <div className="inline-flex justify-center items-center rounded-tr-[10px] rounded-br-[10px] gap-2.5 pl-7.5 pr-5 bg-white [outline:1px_solid_#ED3F1C] py-2.5">
                  <div className="flex items-center gap-0 p-0">
                    <div className="flex items-center justify-center shrink-0 size-6 overflow-clip">
                      <span className="material-symbols-rounded !text-[#ED3F1C]" style={{ fontVariationSettings: "'FILL' 1, 'wght' 200, 'GRAD' 0, 'opsz' 24" }}>warning</span>
                    </div>
                  </div>
                  <div className="tracking-[-0.011em] [white-space-collapse:preserve] text-[#ED3F1C] font-['BraunLinear-Light','Braun_Linear',system-ui,sans-serif] font-light text-base/6">
                    6 Days Late
                  </div>
                </div>
                <div className="[white-space-collapse:preserve] tracking-[-0.011em] text-black font-['BraunLinear-Medium','Braun_Linear',system-ui,sans-serif] font-medium text-xl/7.5 whitespace-nowrap">
                  Initial Reserch
                </div>
                <div className="text-[16px] leading-[round(up,150%,1px)] [white-space-collapse:preserve] tracking-[-0.011em] text-[#9BA2A5] font-['BraunLinear-Light','Braun_Linear',system-ui,sans-serif] font-light flex-1">
                  VCDE 790
                </div>
              </div>
              <IconButton className="inline-flex justify-center items-center rounded-[30px] bg-white border border-solid border-[#9BA2A5] shrink-0 p-2.5 size-11">
                <span className="material-symbols-rounded" style={{ fontVariationSettings: "'FILL' 0, 'wght' 200, 'GRAD' 0, 'opsz' 24" }}>more_vert</span>
              </IconButton>
            </div>
            <div className="h-0.5 self-stretch bg-[#DDDDDD] shrink-0" />
            <div className="flex items-center self-stretch gap-5 justify-between pl-0 pr-7.5">
              <div className="flex items-center gap-5 pr-0 py-0">
                <div className="inline-flex justify-center items-center rounded-tr-[10px] rounded-br-[10px] gap-2.5 pl-7.5 pr-5 bg-white [outline:1px_solid_#ED3F1C] py-2.5">
                  <div className="flex items-center gap-0 p-0">
                    <div className="flex items-center justify-center shrink-0 size-6 overflow-clip">
                      <span className="material-symbols-rounded !text-[#ED3F1C]" style={{ fontVariationSettings: "'FILL' 1, 'wght' 200, 'GRAD' 0, 'opsz' 24" }}>warning</span>
                    </div>
                  </div>
                  <div className="[white-space-collapse:preserve] tracking-[-0.011em] text-[#ED3F1C] font-['BraunLinear-Light','Braun_Linear',system-ui,sans-serif] font-light text-base/6">
                    4 Days Late
                  </div>
                </div>
                <div className="[white-space-collapse:preserve] tracking-[-0.011em] text-black font-['BraunLinear-Medium','Braun_Linear',system-ui,sans-serif] font-medium text-xl/7.5 whitespace-nowrap">
                  W2 - Review
                </div>
                <div className="text-[16px] leading-[round(up,150%,1px)] [white-space-collapse:preserve] tracking-[-0.011em] text-[#9BA2A5] font-['BraunLinear-Light','Braun_Linear',system-ui,sans-serif] font-light flex-1">
                  VCDE 737
                </div>
              </div>
              <div className="flex items-center gap-5 p-0">
                <div className="inline-flex justify-center items-center icon-button rounded-[30px] bg-white border border-solid border-[#9BA2A5] shrink-0 p-2.5 size-11">
                  <span className="material-symbols-rounded" style={{ fontVariationSettings: "'FILL' 0, 'wght' 200, 'GRAD' 0, 'opsz' 24" }}>more_vert</span>
                </div>
              </div>
            </div>
            <div className="h-0.5 self-stretch bg-[#DDDDDD] shrink-0" />
            <div className="flex items-center self-stretch gap-5 justify-between pl-0 pr-7.5">
              <div className="flex items-center gap-5 pr-0 py-0">
                <div className="inline-flex justify-center items-center rounded-tr-[10px] rounded-br-[10px] gap-2.5 pl-7.5 pr-5 bg-white [outline:1px_solid_#ED3F1C] py-2.5">
                  <div className="flex items-center gap-0 p-0">
                    <div className="flex items-center justify-center shrink-0 size-6 overflow-clip">
                      <span className="material-symbols-rounded !text-[#ED3F1C]" style={{ fontVariationSettings: "'FILL' 1, 'wght' 200, 'GRAD' 0, 'opsz' 24" }}>warning</span>
                    </div>
                  </div>
                  <div className="[white-space-collapse:preserve] tracking-[-0.011em] text-[#ED3F1C] font-['BraunLinear-Light','Braun_Linear',system-ui,sans-serif] font-light text-base/6">
                    2 Days Late
                  </div>
                </div>
                <div className="[white-space-collapse:preserve] tracking-[-0.011em] text-black font-['BraunLinear-Medium','Braun_Linear',system-ui,sans-serif] font-medium text-xl/7.5 whitespace-nowrap">
                  Mid Term Review
                </div>
                <div className="text-[16px] leading-[round(up,150%,1px)] [white-space-collapse:preserve] tracking-[-0.011em] text-[#9BA2A5] font-['BraunLinear-Light','Braun_Linear',system-ui,sans-serif] font-light flex-1">
                  VCDE 790
                </div>
              </div>
              <div className="flex items-center gap-5 p-0">
                <div className="inline-flex justify-center items-center icon-button rounded-[30px] bg-white border border-solid border-[#9BA2A5] shrink-0 p-2.5 size-11">
                  <span className="material-symbols-rounded" style={{ fontVariationSettings: "'FILL' 0, 'wght' 200, 'GRAD' 0, 'opsz' 24" }}>more_vert</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  
  );
}