"use client";

export const Footer = () => {
  return (
    <footer className="w-full py-16 mt-32 border-t-4 border-[#0A1228]/20 relative z-10 bg-[#0A1228]">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-8">
        <div className="flex items-center gap-3 bg-surface px-4 py-2 rounded border-2 border-[#0A1228] shadow-[2px_2px_0px_rgba(10,18,40,1)]">
          <div className="w-3 h-3 rounded bg-[#0A1228] animate-pulse" />
          <span className="text-sm text-[#0A1228] font-bold tracking-wide uppercase">All Systems Operational</span>
        </div>

        <p className="text-sm text-surface/60 font-bold tracking-widest uppercase">
          © {new Date().getFullYear()} TweyaInc.
        </p>

        <div className="text-sm text-surface/80 flex items-center gap-8 font-bold uppercase tracking-wider">
          <a href="#" className="hover:text-surface transition-colors decoration-2 underline-offset-4 hover:underline">Privacy</a>
          <a href="#" className="hover:text-surface transition-colors decoration-2 underline-offset-4 hover:underline">Terms</a>
        </div>
      </div>
    </footer>
  );
};
