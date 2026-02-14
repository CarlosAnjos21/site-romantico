import { useState, forwardRef } from "react";
import { Heart } from "lucide-react";
import { useRevealOnScroll } from "../hooks/useRevealOnScroll";

export const TimelineCard = forwardRef((props, ref) => {
  const [isOpen, setIsOpen] = useState(false);

  const events = [
    { date: "04/03/2025", title: "O Primeiro 'Oi'", desc: "Onde tudo começou..." },
    { date: "23/08/2025", title: "Primeiro Encontro", desc: "Aquele frio na barriga inesquecível." },
    { date: "11/10/2025", title: "O Pedido", desc: "O 'sim' que mudou minha vida." },
    { date: "Hoje", title: "4 Meses", desc: "Mais um capítulo da nossa história." }
  ];

  // Revela o card ao scroll
  useRevealOnScroll(ref);

  return (
    <div
      ref={ref}
      className="opacity-0 translate-y-6 scale-95 transition-all duration-700 ease-out bg-white rounded-3xl shadow-sm border border-rose-100 overflow-hidden"
    >
      {/* Botão principal */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center p-4 text-left hover:bg-rose-50 transition-colors"
      >
        <div className="p-2 rounded-lg bg-rose-500 mr-3 flex items-center justify-center">
          <Heart size={20} className="text-white" />
        </div>
        <div>
          <h3 className="text-sm font-semibold text-gray-700">Nossa Timeline</h3>
          <p className="text-xs text-gray-400">Clique para abrir</p>
        </div>
      </button>

      {/* Conteúdo expansível */}
      <div
        className={`transition-all duration-500 ease-in-out overflow-hidden ${
          isOpen ? "max-h-[1000px] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="px-4 pb-4 pt-2 border-t border-rose-100 space-y-6">
          {events.map((event, i) => (
            <div
              key={i}
              className="relative pl-8 flex flex-col bg-rose-50 p-3 rounded-2xl transition-all duration-300 group hover:bg-rose-100 hover:shadow-md hover:-translate-y-1"
            >
              {/* Bolinha da timeline */}
              <div className="absolute -left-[9px] top-1 w-4 h-4 bg-rose-400 rounded-full border-4 border-white shadow-sm transition-all duration-300 group-hover:scale-125 group-hover:bg-rose-500" />
              <span className="text-xs font-bold text-rose-400 uppercase group-hover:text-rose-500">
                {event.date}
              </span>
              <h4 className="text-sm font-semibold text-gray-800 group-hover:text-rose-600">
                {event.title}
              </h4>
              <p className="text-sm text-gray-500 italic mt-1 group-hover:text-gray-700">
                {event.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
});
