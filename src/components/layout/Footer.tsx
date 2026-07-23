"use client";

export const Footer = () => {
  return (
    <footer className="w-full py-16 mt-32 border-t border-white/[0.06] relative z-10 bg-[#0C0908]/80 backdrop-blur-xl">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-8">
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
