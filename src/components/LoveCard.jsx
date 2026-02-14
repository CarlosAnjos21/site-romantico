import { useState } from "react";

export const LoveCard = () => {
  const [open, setOpen] = useState(false);

  const handleClick = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div className="relative">
      {/* Card principal */}
      {!open && (
        <div
          onClick={handleClick}
          className="mt-5 mb-4 bg-gradient-to-r from-pink-500 to-rose-600 text-white rounded-3xl p-6 text-center shadow-lg cursor-pointer
            transition-transform duration-300 ease-out hover:scale-105 hover:shadow-2xl"
        >
          <h2 className="text-2xl font-bold tracking-wide animate-pulse text-white">
            ❤ Eu Te Amo ❤
          </h2>
          <p className="text-sm mt-2 opacity-90">
            Clique para abrir
          </p>
        </div>
      )}

      {/* Carta de amor */}
      {open && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 px-4">
          <div className="bg-gradient-to-br from-pink-50 via-rose-50 to-rose-100 rounded-3xl p-6 sm:p-8 max-w-lg w-full shadow-2xl text-gray-800 transform transition-all duration-500 ease-out scale-95 opacity-0 animate-open relative">
            
            {/* Botão fechar */}
            <button
              onClick={handleClose}
              className="absolute top-4 right-4 text-gray-500 hover:text-rose-500 text-2xl font-bold"
            >
              ✕
            </button>

            <h3 className="text-base font-bold text-rose-600 mb-4 text-center bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-rose-600 animate-gradient">
              Mais do que palavras podem explicar!.
            </h3>

            <p className="text-sm leading-relaxed space-y-2">
              Meu amor, não há palavras suficientes para expressar tudo o que
              sinto por você. Cada momento ao seu lado é um presente, e cada
              sorriso seu ilumina meus dias de uma forma que eu nunca imaginei
              ser possível. Amo cada detalhe seu: seu sorriso que aquece meu
              coração, seu olhar que me faz sentir seguro, seu cabelo que adoro
              tocar, seu cheiro que me acalma, sua pele macia e sedosa, sua voz suave e única,
              sua postura elegante, e cada pequeno gesto que te torna você. Quero que
              saiba que mesmo nos momentos que eu falhei ou deixei algo passar,
              eu sempre penso em melhorar, em ser a melhor versão de mim mesmo
              por você. Você me inspira a crescer, a amar com mais intensidade e
              a valorizar cada instante que passamos juntos. Sonho com nosso
              futuro: com nossa família, nossos filhos, nossas risadas, nossas
              aventuras, e principalmente com Deus nos guiando e abençoando cada
              passo. Quero te amar como Cristo amou a igreja, com paciência,
              dedicação e entrega total. Quero que você se sinta amada todos os
              dias, reconhecida em cada detalhe, e segura em saber que estarei
              sempre ao seu lado. Obrigado por ser quem você é, por sua
              autenticidade, seu jeitinho especial de ser, e por cada momento
              que compartilhamos. Eu te amo hoje, amanhã e para sempre, e todos
              os meus pensamentos têm você no centro, e no meu coração...
            </p>
          </div>
        </div>
      )}

      {/* Animação */}
      <style jsx>{`
        @keyframes open {
          0% { opacity: 0; transform: scale(0.9); }
          100% { opacity: 1; transform: scale(1); }
        }

        @keyframes gradient {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }

        .animate-open {
          animation: open 0.5s forwards;
        }

        .animate-gradient {
          background-size: 200% 200%;
          animation: gradient 4s ease infinite;
        }
      `}</style>
    </div>
  );
};
