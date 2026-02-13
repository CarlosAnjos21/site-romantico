import { Sparkles } from 'lucide-react'

export const PromiseCard = ({ photoUrl }) => (
  <div className="bg-white rounded-3xl p-6 shadow-lg border border-rose-200 relative overflow-hidden">
    <div className="flex items-center gap-3 mb-4">
      <img
        src={photoUrl}
        className="w-12 h-12 rounded-full object-cover border-2 border-rose-300"
        alt="Nós"
      />

      <div>
        <h3 className="font-semibold text-gray-800 flex items-center gap-1 text-sm">
          Minha Promessa
          <Sparkles size={14} className="text-amber-400" />
        </h3>

        <p className="text-xs text-gray-400 uppercase tracking-wider font-medium">
          Para sempre
        </p>
      </div>
    </div>

    <p className="text-sm text-gray-500 leading-relaxed italic mb-5">
      "Eu prometo estar ao seu lado em cada pôr do sol, cuidando de cada detalhe e fazendo do nosso sábado o melhor dia da semana..."
    </p>

    <button className="w-full bg-rose-500 hover:bg-rose-600 text-white py-3 rounded-2xl font-semibold text-sm shadow-md transition-all active:scale-95">
      Clique para uma surpresa 🥰
    </button>

    <p className="text-center mt-4 text-rose-400 font-serif italic text-sm">
      Eu te amo! ❤️
    </p>
  </div>
)
