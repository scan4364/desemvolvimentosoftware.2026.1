"use client";
import { useRouter, usePathname } from "next/navigation";

export default function GlobalBackButton() {
  const router = useRouter();
  const pathname = usePathname();

  if (pathname === "/home" || pathname === "/") return null;

  return (
    <div className="fixed top-4 left-4 md:left-68 z-[100]"> 
      <button
        onClick={() => router.back()}
        className="flex items-center gap-2 px-3 py-2 text-sm font-medium text-gray-400 hover:text-white bg-gray-900/80 backdrop-blur-md border border-gray-800 rounded-lg shadow-xl transition-all"
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="m15 18-6-6 6-6"/>
        </svg>
        <span>Voltar</span>
      </button>
    </div>
  );
}