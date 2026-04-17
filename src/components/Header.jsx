import React from 'react';

export default function Header() {
  return (
    
    <div className="[font-synthesis:none] flex justify-between items-center h-18 w-full px-12.5 py-12.5 bg-[#292624] border-b border-b-solid border-b-[#E4DECF] shrink-0 antialiased text-xs/4">
      <div className="flex items-center gap-2.5 bg-[#9CA2A5] size-6" />
      <div className="flex items-center gap-5">
        <div className="inline-flex justify-center items-center p-2.5">
          <div className="flex items-center gap-0 p-0">
            <div className="flex items-center justify-center shrink-0 size-10 text-white overflow-clip">
              <span className="material-symbols-rounded !text-white !text-[40px]">lock</span>
            </div>
          </div>
        </div>
        <div className="w-0.5 h-6 bg-white shrink-0" />
        <div className="inline-flex justify-center items-center p-2.5">
          <div className="flex items-center gap-0 p-0">
            <div className="flex items-center justify-center shrink-0 size-10 text-white overflow-clip">
              <span className="material-symbols-rounded !text-white !text-[40px]">chat</span>
            </div>
          </div>
        </div>
        <div className="inline-flex justify-center items-center p-2.5">
          <div className="flex items-center gap-0 p-0">
            <div className="flex items-center justify-center shrink-0 size-10 text-white overflow-clip">
              <span className="material-symbols-rounded !text-white !text-[40px]">mail</span>
            </div>
          </div>
        </div>
        <div className="w-0.5 h-6 bg-white shrink-0" />
        <div className="inline-flex justify-center items-center p-2.5">
          <div className="flex items-center gap-0 p-0">
            <div className="flex items-center justify-center shrink-0 size-10 text-white overflow-clip">
              <span className="material-symbols-rounded !text-white !text-[40px]">notifications</span>
            </div>
          </div>
        </div>
        <div className="inline-flex justify-center items-center p-2.5">
          <div className="flex items-center gap-0 p-0">
            <div className="flex items-center justify-center shrink-0 size-10 text-white overflow-clip">
              <span className="material-symbols-rounded !text-white !text-[40px]">help</span>
            </div>
          </div>
        </div>
        <div className="w-0.5 h-6 bg-white shrink-0" />
        <div className="inline-flex justify-center items-center p-2.5">
          <div className="flex items-center gap-0 p-0">
            <div className="flex items-center justify-center shrink-0 size-10 text-white overflow-clip">
              <span className="material-symbols-rounded !text-white !text-[40px]">account_circle</span>
            </div>
          </div>
        </div>
        <div className="text-pretty [white-space-collapse:preserve] tracking-[-0.011em] text-white font-['BraunLinear-Bold','Braun_Linear',system-ui,sans-serif] font-bold text-[32px]/10">
          John Doe
        </div>
      </div>
    </div>
  
  );
}