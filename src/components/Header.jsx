import { Heart, ChevronDown } from "lucide-react";

export const Header = () => (
  <header className="text-center relative z-10">
    <h1
      className="font-serif text-rose-600 italic leading-tight text-center mx-auto"
      style={{
        fontSize: "clamp(1rem, 5vw, 3rem)", // mínimo 1rem, escala com 5% da viewport, máximo 3rem
        maxWidth: "36ch", // força duas linhas aproximadas
      }}
    >
      Para você!! que deixa ❤ meus sábados mais felizes ❤
    </h1>

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
