import { Heart, ChevronDown } from "lucide-react";

export const Header = () => (
  <header className="text-center relative z-10">
    <p
      className="font-serif text-rose-600 italic text-center mx-auto leading-snug"
      style={{
        fontSize: "clamp(18px, 5vw, 30px)", // mínimo 16px, máximo 30px, escala suave com 5% da viewport
        maxWidth: "min(100%, 460px)", // ocupa no máximo 480px ou 90% da tela, o que for menor
        padding: "0 1rem", // garante espaço lateral em telas muito pequenas
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
