import { Heart, ChevronDown } from "lucide-react";

export const Header = () => (
  <header className="text-center relative z-10">
    <p
      className="font-serif text-rose-600 italic text-center mx-auto leading-snug"
      style={{
        fontSize: "clamp(15px, 6vw, 32px)", // fonte mínima 18px, escala com 8% da largura da tela
        maxWidth: "100%", // aumenta largura máxima em telas pequenas
        minWidth: "280px", // garante largura mínima para não quebrar demais
      }}
    >
      Para você!! que deixa <br /> meus sábados mais felizes ❤
    </p>

    <p className="text-sm text-rose-400 mt-2 italic">
      4 meses de uma história que está apenas começando...
    </p>

    <button className="mt-6 mx-auto flex items-center gap-2 px-5 py-2 bg-white rounded-full text-rose-500 text-xs font-semibold shadow-sm border border-rose-100 transition-transform hover:scale-105">
      <Heart size={14} fill="currentColor" />
      Role com carinho
      <ChevronDown size={14} />
    </button>
  </header>
);
