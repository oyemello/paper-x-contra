import React from 'react';

export default function Announcements() {
  return (
    
    <div className="[font-synthesis:none] flex items-start gap-5 self-stretch flex-col antialiased text-xs/4 p-0">
      <div className="flex overflow-clip items-center gap-5 justify-between pl-12.5 pr-20 self-stretch">
        <div className="flex items-center gap-5 p-0">
          <div className="inline-flex justify-center items-center py-2.5">
            <div className="flex items-center gap-0 p-0">
              <div className="flex items-center justify-center shrink-0 size-6 overflow-clip">
                <span className="material-symbols-rounded">calendar_add_on</span>
              </div>
            </div>
          </div>
          <div className="tracking-[-0.011em] [white-space-collapse:preserve] text-black font-['BraunLinear-Medium','Braun_Linear',system-ui,sans-serif] font-medium flex-1 text-xl/7.5">
            Annoucements
          </div>
        </div>
        <div className="inline-flex justify-center items-center rounded-[30px] py-2.5 px-5 gap-2.5 h-11 bg-white border border-solid border-[#9BA2A5]">
          <div className="flex items-center gap-0 p-0">
            <div className="flex items-center justify-center shrink-0 size-6 overflow-clip">
              <span className="material-symbols-rounded !text-[#9BA2A5]" style={{ fontVariationSettings: "'FILL' 0, 'wght' 200, 'GRAD' 0, 'opsz' 24" }}>visibility</span>
            </div>
          </div>
          <div className="tracking-[-0.011em] [white-space-collapse:preserve] text-[#9BA2A5] font-['BraunLinear-Light','Braun_Linear',system-ui,sans-serif] font-light text-base/6">
            view all
          </div>
        </div>
      </div>
      <div className="flex items-start gap-0 self-stretch p-0">
        <div className="flex overflow-clip flex-col items-start gap-5 flex-1">
          <div className="flex flex-col items-start gap-5 self-stretch pb-12.5 pl-12.5 pr-5">
            <div className="flex flex-col items-start gap-0 self-stretch rounded-[10px] bg-white [outline:1px_solid_#3B4B59] p-0">
              <div className="flex overflow-clip flex-col items-start gap-7.5 justify-center self-stretch rounded-tl-[10px] rounded-tr-[10px] bg-[#292624] py-7.5">
                <div className="flex items-center self-stretch gap-5 justify-between px-7.5">
                  <div className="flex items-center gap-5 p-0">
                    <div className="inline-flex justify-center items-center p-2.5">
                      <div className="flex items-center justify-center shrink-0 size-6 overflow-clip">
                        <span className="material-symbols-rounded !text-white" style={{ fontVariationSettings: "'FILL' 1, 'wght' 200, 'GRAD' 0, 'opsz' 24" }}>counter_1</span>
                      </div>
                    </div>
                    <div className="flex flex-col items-start justify-center p-0">
                      <div className="text-[20px] leading-[round(up,110%,1px)] [white-space-collapse:preserve] tracking-[-0.011em] text-white font-['BraunLinear-Medium','Braun_Linear',system-ui,sans-serif] font-medium flex-1">
                        This week:
                      </div>
                      <div className="text-[20px] leading-[round(up,110%,1px)] [white-space-collapse:preserve] tracking-[-0.011em] text-[#9BA2A5] font-['BraunLinear-Medium','Braun_Linear',system-ui,sans-serif] font-medium flex-1">
                        Adobe Max and Creative Collisions
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center gap-5 p-0">
                    <div className="flex flex-col items-start justify-center p-0">
                      <div className="text-[20px] leading-[round(up,110%,1px)] [white-space-collapse:preserve] tracking-[-0.011em] text-white font-['BraunLinear-Medium','Braun_Linear',system-ui,sans-serif] font-medium flex-1 whitespace-pre-wrap">
                        15 Oct’24{'  '}|{'  '}9:09 AM
                      </div>
                      <div className="text-[20px] leading-[round(up,110%,1px)] [white-space-collapse:preserve] tracking-[-0.011em] text-[#9BA2A5] font-['BraunLinear-Medium','Braun_Linear',system-ui,sans-serif] font-medium flex-1">
                        by Adam Smith
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex overflow-clip flex-col items-start gap-7.5 justify-center self-stretch rounded-bl-[10px] rounded-br-[10px] py-7.5">
                <div className="flex items-center self-stretch gap-5 justify-between px-7.5">
                  <div className="flex items-center gap-5 self-stretch flex-1 p-0">
                    <div className="flex-1 self-stretch grow shrink basis-[0%] [white-space-collapse:preserve] tracking-[-0.011em] text-black font-['BraunLinear-Medium','Braun_Linear',system-ui,sans-serif] font-medium whitespace-pre-wrap text-xl/7.5">
                      Adobe Max: Catch inspirational talks and keynotes. They discuss how creativity and skills remain important even with AI.<br /><br />Creative Collisions: Don't miss it! Starts Wednesday at 9:00 AM (Recording available if not attending live).
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col items-start gap-5 flex-1">
          <div className="flex flex-col items-start gap-5 self-stretch pb-12.5 pl-5 pr-12.5">
            <div className="flex overflow-clip rounded-[10px] flex-col items-start gap-7.5 justify-center self-stretch bg-white [outline:1px_solid_#3B4B59] py-7.5">
              <div className="flex items-center self-stretch gap-5 justify-between px-7.5">
                <div className="flex items-center gap-5 p-0">
                  <div className="inline-flex justify-center items-center p-2.5">
                    <div className="flex items-center justify-center shrink-0 size-6 overflow-clip">
                      <span className="material-symbols-rounded !text-[#292624]" style={{ fontVariationSettings: "'FILL' 1, 'wght' 200, 'GRAD' 0, 'opsz' 24" }}>counter_2</span>
                    </div>
                  </div>
                  <div className="[white-space-collapse:preserve] tracking-[-0.011em] text-black font-['BraunLinear-Medium','Braun_Linear',system-ui,sans-serif] font-medium flex-1 text-xl/7.5">
                    Make-up Class!!
                  </div>
                </div>
                <div className="flex items-center gap-5 p-0">
                  <div className="flex flex-col items-start justify-center p-0">
                    <div className="text-[20px] leading-[round(up,110%,1px)] [white-space-collapse:preserve] tracking-[-0.011em] text-[#292624] font-['BraunLinear-Medium','Braun_Linear',system-ui,sans-serif] font-medium flex-1 whitespace-pre-wrap">
                      30 Sept’24{'  '}|{'  '}5:01 PM
                    </div>
                    <div className="text-[20px] leading-[round(up,110%,1px)] [white-space-collapse:preserve] tracking-[-0.011em] text-[#9BA2A5] font-['BraunLinear-Medium','Braun_Linear',system-ui,sans-serif] font-medium flex-1">
                      by Bethany Marconi
                    </div>
                  </div>
                </div>
              </div>
              <div className="h-0.5 self-stretch bg-[#DDDDDD] shrink-0" />
              <div className="flex items-center self-stretch gap-5 justify-between px-7.5">
                <div className="flex items-center gap-5 p-0">
                  <div className="inline-flex justify-center items-center p-2.5">
                    <div className="flex items-center justify-center shrink-0 size-6 overflow-clip">
                      <span className="material-symbols-rounded !text-[#292624]" style={{ fontVariationSettings: "'FILL' 1, 'wght' 200, 'GRAD' 0, 'opsz' 24" }}>counter_3</span>
                    </div>
                  </div>
                  <div className="[white-space-collapse:preserve] tracking-[-0.011em] text-black font-['BraunLinear-Medium','Braun_Linear',system-ui,sans-serif] font-medium flex-1 text-xl/7.5">
                    Project Due Date
                  </div>
                </div>
                <div className="flex items-center gap-5 p-0">
                  <div className="flex flex-col items-start justify-center p-0">
                    <div className="text-[20px] leading-[round(up,110%,1px)] [white-space-collapse:preserve] tracking-[-0.011em] text-[#292624] font-['BraunLinear-Medium','Braun_Linear',system-ui,sans-serif] font-medium flex-1 whitespace-pre-wrap">
                      28 Aug’24{'  '}|{'  '}10:09 PM
                    </div>
                    <div className="text-[20px] leading-[round(up,110%,1px)] [white-space-collapse:preserve] tracking-[-0.011em] text-[#9BA2A5] font-['BraunLinear-Medium','Braun_Linear',system-ui,sans-serif] font-medium flex-1">
                      by Changfeng Ge
                    </div>
                  </div>
                </div>
              </div>
              <div className="h-0.5 self-stretch bg-[#DDDDDD] shrink-0" />
              <div className="flex items-center self-stretch gap-5 justify-between px-7.5">
                <div className="flex items-center gap-5 p-0">
                  <div className="inline-flex justify-center items-center p-2.5">
                    <div className="flex items-center justify-center shrink-0 size-6 overflow-clip">
                      <span className="material-symbols-rounded !text-[#292624]" style={{ fontVariationSettings: "'FILL' 1, 'wght' 200, 'GRAD' 0, 'opsz' 24" }}>counter_4</span>
                    </div>
                  </div>
                  <div className="[white-space-collapse:preserve] tracking-[-0.011em] text-black font-['BraunLinear-Medium','Braun_Linear',system-ui,sans-serif] font-medium flex-1 text-xl/7.5">
                    Figma Workspace
                  </div>
                </div>
                <div className="flex items-center gap-5 p-0">
                  <div className="flex flex-col items-start justify-center p-0">
                    <div className="text-[20px] leading-[round(up,110%,1px)] [white-space-collapse:preserve] tracking-[-0.011em] text-[#292624] font-['BraunLinear-Medium','Braun_Linear',system-ui,sans-serif] font-medium flex-1 whitespace-pre-wrap">
                      26 Aug’24{'  '}|{'  '}11:47 AM
                    </div>
                    <div className="text-[20px] leading-[round(up,110%,1px)] [white-space-collapse:preserve] tracking-[-0.011em] text-[#9BA2A5] font-['BraunLinear-Medium','Braun_Linear',system-ui,sans-serif] font-medium flex-1">
                      by Mike Strobert
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  
  );
}