import { useState, useRef, useEffect } from "react";

export const LoveCard = () => {
  const [open, setOpen] = useState(false);
  const cardRef = useRef(null);

  // Abre o card
  const handleClick = () => setOpen(true);

  // Fecha o card
  const handleClose = () => setOpen(false);

  // Fecha o card ao clicar fora
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (cardRef.current && !cardRef.current.contains(event.target)) {
        setOpen(false);
      }
    };

    if (open) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [open]);

  return (
    <div className="relative">
      {/* Card principal */}
      {!open && (
        <div
          onClick={handleClick}
          className="
            mt-5 mb-4 
            bg-gradient-to-r from-pink-500 to-rose-600 
            text-white rounded-3xl p-6 text-center 
            shadow-lg cursor-pointer
            transition-transform duration-300 ease-out 
            hover:scale-105 hover:shadow-2xl
          "
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-wide animate-pulse">
            ❤ Eu Te Amo ❤
          </h2>
          <p className="text-sm sm:text-base mt-2 opacity-90">
            Clique para abrir
          </p>
        </div>
      )}

      {/* Modal da carta de amor */}
      {open && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 px-2 sm:px-6 overflow-auto custom-scroll">
          <div
            ref={cardRef}
            className="
              bg-gradient-to-br from-pink-50 via-rose-50 to-rose-100
              rounded-3xl p-4 sm:p-6 md:p-8 
              w-full max-w-3xl shadow-2xl text-gray-800 
              relative overflow-y-auto max-h-[90vh]
            "
          >
            {/* Botão de fechar */}
            <button
              onClick={handleClose}
              className="
    absolute top-4 right-4 
    text-gray-500 hover:text-rose-500 
    text-2xl sm:text-3xl font-bold 
    p-2 rounded-full pointer-events-auto
  "
              aria-label="Fechar carta"
            >
              ×
            </button>

            {/* Título do modal */}
            <h3
              className="
              text-base sm:text-lg md:text-xl 
              font-bold text-rose-600 mb-4 text-center
              bg-clip-text text-transparent
              bg-gradient-to-r from-pink-500 to-rose-600 
              animate-pulse
            "
            >
              Mais do que palavras podem explicar!..
            </h3>

            {/* Conteúdo do modal */}
            <div className="pr-4">
              <p className="text-sm sm:text-base leading-relaxed space-y-2">
                Meu amor, não há palavras suficientes para expressar tudo o que
                sinto por você. Cada momento ao seu lado é um presente, e cada
                sorriso seu ilumina meus dias de uma forma que eu nunca imaginei
                ser possível. Amo cada detalhe seu: seu sorriso que aquece meu
                coração, seu olhar que me faz sentir seguro, seu cabelo que
                adoro tocar, seu cheiro que me acalma, sua pele macia e sedosa,
                sua voz suave e única, sua postura elegante, e cada pequeno
                gesto que te torna você. Quero que saiba que mesmo nos momentos
                que eu falhei ou deixei algo passar, eu sempre penso em
                melhorar, em ser a melhor versão de mim mesmo por você. Você me
                inspira a crescer, a amar com mais intensidade e a valorizar
                cada instante que passamos juntos. Sonho com nosso futuro: com
                nossa família, nossos filhos, nossas risadas, nossas aventuras,
                e principalmente com Deus nos guiando e abençoando cada passo.
                Quero te amar como Cristo amou a igreja, com paciência,
                dedicação e entrega total. Quero que você se sinta amada todos
                os dias, reconhecida em cada detalhe, e segura em saber que
                estarei sempre ao seu lado. Obrigado por ser quem você é, por
                sua autenticidade, seu jeitinho especial de ser, e por cada
                momento que compartilhamos. Eu te amo hoje, amanhã e para
                sempre, e todos os meus pensamentos têm você no centro, e no meu
                coração...
              </p>
            </div>
          </div>
        </div>
      )}

      {/* Scroll personalizado */}
      <style jsx>{`
        /* Chrome, Edge, Safari */
        .custom-scroll::-webkit-scrollbar {
          width: 7px;
          background: transparent;
        }

        .custom-scroll::-webkit-scrollbar-track {
          background-color: transparent;
        }

        .custom-scroll::-webkit-scrollbar-thumb {
          background-color: rgba(255, 105, 180, 0.7);
          border-radius: 4px;
        }

        /* Firefox */
        .custom-scroll {
          scrollbar-width: thin;
          scrollbar-color: rgba(255, 105, 180, 0.7) transparent;
        }
      `}</style>
    </div>
  );
};
