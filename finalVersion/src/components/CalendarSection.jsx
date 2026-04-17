import React from 'react';
import IconButton from './IconButton';

export default function CalendarSection() {
  return (
    
    <div className="[font-synthesis:none] flex items-start gap-0 self-stretch antialiased text-xs/4 p-0">
      <div className="flex overflow-clip flex-col items-start gap-5 flex-1">
        <div className="flex overflow-clip items-center gap-5 self-stretch justify-between pl-12.5 pr-20">
          <div className="flex items-center gap-5 p-0">
            <div className="inline-flex justify-center items-center py-2.5">
          <div className="flex items-center gap-0 p-0">
            <div className="flex items-center justify-center shrink-0 size-6 overflow-clip">
              <span className="material-symbols-rounded">calendar_today</span>
            </div>
          </div>
        </div>
            <div className="[white-space-collapse:preserve] tracking-[-0.011em] text-black font-['BraunLinear-Medium','Braun_Linear',system-ui,sans-serif] font-medium flex-1 text-xl/7.5">
              Calendar
            </div>
          </div>
          <div className="flex items-start gap-5 p-0">
            <div className="inline-flex justify-center items-center rounded-[30px] py-2.5 px-5 gap-2.5 h-11 bg-white border border-solid border-[#9BA2A5]">
              <div className="[white-space-collapse:preserve] tracking-[-0.011em] text-[#9BA2A5] font-['BraunLinear-Light','Braun_Linear',system-ui,sans-serif] font-light flex-1 text-base/6">
                Button
              </div>
              <div className="flex items-center gap-0 p-0 transform translate-x-1.5">
               <span className="material-symbols-rounded" style={{ fontVariationSettings: "'FILL' 1, 'wght' 300, 'GRAD' 0, 'opsz' 24" }}>arrow_drop_down</span>
            </div>
            </div>
            <IconButton className="inline-flex justify-center items-center rounded-[30px] bg-white border border-solid border-[#9BA2A5] shrink-0 p-2.5 size-11">
              <span className="material-symbols-rounded" style={{ fontVariationSettings: "'FILL' 0, 'wght' 200, 'GRAD' 0, 'opsz' 24" }}>more_vert</span>
            </IconButton>
            <IconButton className="inline-flex justify-center items-center rounded-[30px] bg-white border border-solid border-[#9BA2A5] shrink-0 p-2.5 size-11">
              <div className="flex items-center gap-0 p-0">
               <span className="material-symbols-rounded" style={{ fontVariationSettings: "'FILL' 1, 'wght' 200, 'GRAD' 0, 'opsz' 24" }}>open_in_full</span>
            </div>
            </IconButton>
            <IconButton className="inline-flex justify-center items-center rounded-[30px] bg-white border border-solid border-[#9BA2A5] shrink-0 p-2.5 size-11">
              <div className="flex items-center gap-0 p-0">
               <span className="material-symbols-rounded" style={{ fontVariationSettings: "'FILL' 1, 'wght' 200, 'GRAD' 0, 'opsz' 24" }}>add</span>
            </div>
            </IconButton>
          </div>
        </div>
        <div className="flex flex-col items-start gap-5 self-stretch pb-12.5 px-12.5">
          <div className="flex overflow-clip rounded-[10px] items-start gap-7.5 self-stretch pl-7.5 bg-white [outline:1px_solid_#3B4B59] py-7.5">
            <div className="flex overflow-clip items-start">
              <div className="text-[20px] leading-[round(up,150%,1px)] [white-space-collapse:preserve] tracking-[-0.011em] text-black font-['BraunLinear-Medium','Braun_Linear',system-ui,sans-serif] font-medium flex-1">
                Today, November 4
              </div>
            </div>
            <div className="flex flex-col items-start gap-7.5 flex-1 p-0">
              <div className="flex overflow-clip items-center self-stretch gap-5 justify-between pl-0 pr-7.5">
                <div className="flex items-center gap-5 p-0">
                  <div className="w-2.5 h-15 rounded-full bg-[#DDDDDD] shrink-0" />
                  <div className="flex items-start gap-5 p-0">
                    <div className="flex flex-col items-start justify-center p-0">
                      <div className="text-[20px] leading-[round(up,110%,1px)] [white-space-collapse:preserve] tracking-[-0.011em] text-[#292624] font-['BraunLinear-Medium','Braun_Linear',system-ui,sans-serif] font-medium flex-1 whitespace-pre-wrap">
                        Badminton{'  '}/{'  '}WREC-4
                      </div>
                      <div className="text-[20px] leading-[round(up,110%,1px)] [white-space-collapse:preserve] tracking-[-0.011em] text-[#9BA2A5] font-['BraunLinear-Medium','Braun_Linear',system-ui,sans-serif] font-medium flex-1 whitespace-pre-wrap">
                        9 - 9:50 AM{'  '}·{'  '}Hale-Andrews Center (HAC) - Court 3,4
                      </div>
                    </div>
                    <div className="text-[16px] leading-[round(up,110%,1px)] [white-space-collapse:preserve] tracking-[-0.011em] text-[#9BA2A5] font-['BraunLinear-Light','Braun_Linear',system-ui,sans-serif] font-light flex-1">
                      • Badminton Singles Tournament (Day 2 / 4)
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-5 p-0">
                  <IconButton className="inline-flex justify-center items-center rounded-[30px] bg-white border border-solid border-[#9BA2A5] shrink-0 p-2.5 size-11">
                    <span className="material-symbols-rounded" style={{ fontVariationSettings: "'FILL' 0, 'wght' 200, 'GRAD' 0, 'opsz' 24" }}>more_vert</span>
                  </IconButton>
                </div>
              </div>
              <div className="h-0.5 self-stretch bg-[#DDDDDD] shrink-0" />
              <div className="flex overflow-clip items-center self-stretch gap-5 justify-between pl-0 pr-7.5">
                <div className="flex items-center gap-5 p-0">
                  <div className="w-2.5 h-15 rounded-full bg-[#DDDDDD] shrink-0" />
                  <div className="flex items-start gap-5 p-0">
                    <div className="flex flex-col items-start justify-center p-0">
                      <div className="text-[20px] leading-[round(up,110%,1px)] [white-space-collapse:preserve] tracking-[-0.011em] text-[#292624] font-['BraunLinear-Medium','Braun_Linear',system-ui,sans-serif] font-medium flex-1 whitespace-pre-wrap">
                        RIT Finance & Administration{'  '}/{'  '}Work
                      </div>
                      <div className="text-[20px] leading-[round(up,110%,1px)] [white-space-collapse:preserve] tracking-[-0.011em] text-[#9BA2A5] font-['BraunLinear-Medium','Braun_Linear',system-ui,sans-serif] font-medium flex-1 whitespace-pre-wrap">
                        10:30 AM - 2 PM{'  '}·{'  '}George Eastman Hall
                      </div>
                    </div>
                    <div className="text-[16px] leading-[round(up,110%,1px)] [white-space-collapse:preserve] tracking-[-0.011em] text-[#9BA2A5] font-['BraunLinear-Light','Braun_Linear',system-ui,sans-serif] font-light flex-1">
                      • Protected Content: Check Asana for Tasks
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-5 p-0">
                  <div className="inline-flex justify-center items-center rounded-[30px] py-2.5 px-5 gap-2.5 h-11 bg-white border border-solid border-[#9BA2A5]">
                    <div className="[white-space-collapse:preserve] tracking-[-0.011em] text-[#9BA2A5] font-['BraunLinear-Light','Braun_Linear',system-ui,sans-serif] font-light flex-1 text-base/6">
                      Slack
                    </div>
                    <div className="flex items-center gap-0 p-0">
                      <div className="flex items-center justify-center shrink-0 size-6 overflow-clip">
                        <span className="material-symbols-rounded" style={{ fontVariationSettings: "'FILL' 0, 'wght' 200, 'GRAD' 0, 'opsz' 24" }}>warning</span>
                      </div>
                    </div>
                  </div>
                  <IconButton className="inline-flex justify-center items-center rounded-[30px] bg-white border border-solid border-[#9BA2A5] shrink-0 p-2.5 size-11">
                    <span className="material-symbols-rounded" style={{ fontVariationSettings: "'FILL' 0, 'wght' 200, 'GRAD' 0, 'opsz' 24" }}>more_vert</span>
                  </IconButton>
                </div>
              </div>
              <div className="h-0.5 self-stretch bg-[#DDDDDD] shrink-0" />
              <div className="flex overflow-clip items-center self-stretch gap-5 justify-between pl-0 pr-7.5">
                <div className="flex items-center gap-5 p-0">
                  <div className="w-2.5 h-15 rounded-full bg-[#DDDDDD] shrink-0" />
                  <div className="flex items-start gap-5 p-0">
                    <div className="flex flex-col items-start justify-center p-0">
                      <div className="text-[20px] leading-[round(up,110%,1px)] [white-space-collapse:preserve] tracking-[-0.011em] text-[#292624] font-['BraunLinear-Medium','Braun_Linear',system-ui,sans-serif] font-medium flex-1 whitespace-pre-wrap">
                        UX Design Strategies{'  '}/{'  '}VCDE-737
                      </div>
                      <div className="text-[20px] leading-[round(up,110%,1px)] [white-space-collapse:preserve] tracking-[-0.011em] text-[#9BA2A5] font-['BraunLinear-Medium','Braun_Linear',system-ui,sans-serif] font-medium flex-1 whitespace-pre-wrap">
                         - 4:50 AM{'  '}·{'  '}James E Booth (BOO) - 1305
                      </div>
                    </div>
                    <div className="text-[16px] leading-[round(up,110%,1px)] [white-space-collapse:preserve] tracking-[-0.011em] text-[#9BA2A5] font-['BraunLinear-Light','Braun_Linear',system-ui,sans-serif] font-light flex-1">
                      • Project 2 - 2 Design Direction Examples Landing Page
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-5 p-0">
                  <IconButton className="inline-flex justify-center items-center rounded-[30px] bg-white border border-solid border-[#9BA2A5] shrink-0 p-2.5 size-11">
                    <span className="material-symbols-rounded" style={{ fontVariationSettings: "'FILL' 0, 'wght' 200, 'GRAD' 0, 'opsz' 24" }}>more_vert</span>
                  </IconButton>
                </div>
              </div>
              <div className="h-0.5 self-stretch bg-[#DDDDDD] shrink-0" />
              <div className="flex overflow-clip items-center self-stretch gap-5 justify-between pl-0 pr-7.5">
                <div className="flex items-center gap-5 p-0">
                  <div className="w-2.5 h-15 rounded-full bg-[#DDDDDD] shrink-0" />
                  <div className="flex items-start gap-5 p-0">
                    <div className="flex flex-col items-start justify-center p-0">
                      <div className="text-[20px] leading-[round(up,110%,1px)] [white-space-collapse:preserve] tracking-[-0.011em] text-[#292624] font-['BraunLinear-Medium','Braun_Linear',system-ui,sans-serif] font-medium flex-1 whitespace-pre-wrap">
                        UX Design Strategies{'  '}/{'  '}VCDE-737
                      </div>
                      <div className="text-[20px] leading-[round(up,110%,1px)] [white-space-collapse:preserve] tracking-[-0.011em] text-[#9BA2A5] font-['BraunLinear-Medium','Braun_Linear',system-ui,sans-serif] font-medium flex-1 whitespace-pre-wrap">
                        2 - 4:50 AM{'  '}·{'  '}James E Booth (BOO) - 1305
                      </div>
                    </div>
                    <div className="text-[16px] leading-[round(up,110%,1px)] [white-space-collapse:preserve] tracking-[-0.011em] text-[#9BA2A5] font-['BraunLinear-Light','Braun_Linear',system-ui,sans-serif] font-light flex-1">
                      • Project 2 - 2 Design Direction Examples Landing Page
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-5 p-0">
                  <IconButton className="inline-flex justify-center items-center rounded-[30px] bg-white border border-solid border-[#9BA2A5] shrink-0 p-2.5 size-11">
                    <span className="material-symbols-rounded" style={{ fontVariationSettings: "'FILL' 0, 'wght' 200, 'GRAD' 0, 'opsz' 24" }}>more_vert</span>
                  </IconButton>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  
  );
}