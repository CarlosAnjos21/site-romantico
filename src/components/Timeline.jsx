import { Heart } from "lucide-react";

export const Timeline = () => {
  const events = [
    { date: "04/03/2025", title: "O Primeiro 'Oi'", desc: "Onde tudo começou..." },
    { date: "23/08/2025", title: "Primeiro Encontro", desc: "Aquele frio na barriga inesquecível." },
    { date: "11/10/2025", title: "O Pedido", desc: "O 'sim' que mudou minha vida." },
    { date: "Hoje", title: "4 Meses", desc: "Mais um capítulo da nossa história." }
  ];

  return (
    <div className="bg-white rounded-3xl p-6 border border-rose-100 shadow-sm">
      
      {/* Header */}
      <div className="flex items-center justify-between mb-8">
        <div className="flex items-center gap-2">
          <div className="bg-rose-100 p-1.5 rounded-full">
            <Heart size={14} className="text-rose-500" fill="currentColor" />
          </div>
          <h2 className="text-sm font-semibold text-gray-700 uppercase tracking-wider">
            Nossa Timeline
          </h2>
        </div>

        <span className="text-xs font-semibold text-rose-300 bg-rose-50 px-2 py-1 rounded-full">
          Est. 2026
        </span>
      </div>

      {/* Linha */}
      <div className="relative border-l-2 border-dashed border-rose-200 ml-3 space-y-8">
        {events.map((event, index) => (
          <div
            key={index}
            className="relative pl-8 group transition-all duration-300"
          >
            {/* Bolinha */}
            <div className="absolute -left-[9px] top-1 w-4 h-4 bg-rose-400 rounded-full border-4 border-white shadow-sm 
                            group-hover:scale-125 group-hover:bg-rose-500 transition-all duration-300" />

            {/* Card */}
            <div className="flex flex-col bg-rose-50 p-3 rounded-2xl 
                            transition-all duration-300 
                            group-hover:bg-rose-100 
                            group-hover:shadow-md 
                            group-hover:-translate-y-1">
              <span className="text-xs font-bold text-rose-400 uppercase 
                               group-hover:text-rose-500 transition">
                {event.date}
              </span>

              <h3 className="text-sm font-semibold text-gray-800 
                             group-hover:text-rose-600 transition">
                {event.title}
              </h3>

              <p className="text-sm text-gray-500 italic mt-1 
                            group-hover:text-gray-700 transition">
                {event.desc}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Rodapé com efeito especial */}
      <div className="mt-8 pt-4 border-t border-rose-100 text-center">
        <p className="text-base font-semibold italic bg-gradient-to-r from-pink-500 via-rose-500 to-pink-600 
                      bg-clip-text text-transparent 
                      animate-pulse tracking-wide">
          ~ Larissa e Carlos ~  
        </p>
      </div>
    </div>
  );
};

