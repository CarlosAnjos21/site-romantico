import { useState, useRef } from "react";
import { Heart, Leaf, BookHeart, Camera, Calendar } from "lucide-react";
import { Header } from "./components/Header";
import { ActionCard } from "./components/ActionCard";
import { TimelineCard } from "./components/TimelineCard";
import { useRevealOnScroll } from "./hooks/useRevealOnScroll";
import { LoveCard } from "./components/LoveCard"; // novo card

function App() {
  const [activeTab, setActiveTab] = useState(null);
  const [selectedIndex, setSelectedIndex] = useState(null);

  const toggleTab = (tab) => setActiveTab(activeTab === tab ? null : tab);

  const images = Object.values(
    import.meta.glob("./assets/*.jpeg", { eager: true, import: "default" })
  ).sort((a, b) =>
    a.localeCompare(b, undefined, { numeric: true, sensitivity: "base" })
  );

  // Refs para animação de scroll
  const nossoDiaRef = useRef(null);
  const timelineRef = useRef(null);
  const momentosRef = useRef(null);
  const inicioRef = useRef(null);
  const historiaRef = useRef(null);
  const promessaRef = useRef(null);

  useRevealOnScroll(nossoDiaRef);
  useRevealOnScroll(timelineRef);
  useRevealOnScroll(momentosRef);
  useRevealOnScroll(inicioRef);
  useRevealOnScroll(historiaRef);
  useRevealOnScroll(promessaRef);

  return (
    <div className="relative min-h-screen overflow-hidden flex justify-center items-start p-6">

      {/* 🎨 Fundo */}
      <div className="bg-gradient-romantic absolute inset-0 z-0"></div>

      {/* 💖 Corações flutuantes */}
      <div className="absolute inset-0 z-10 pointer-events-none overflow-hidden">
        {[...Array(70)].map((_, i) => (
          <Heart
            key={i}
            className="floating-heart text-rose-400"
            style={{
              left: `${Math.random() * 100}%`,
              animationDuration: `${6 + Math.random() * 8}s`,
              animationDelay: `-${Math.random() * 20}s`,
            }}
            size={14 + Math.random() * 18}
          />
        ))}
      </div>

      {/* Conteúdo */}
      <div className="w-full max-w-md space-y-6 relative z-20">
        <Header />

        {/* 📅 Nosso Dia */}
        <div
          ref={nossoDiaRef}
          className="opacity-0 translate-y-6 scale-95 transition-all duration-700 ease-out
                     bg-white/90 backdrop-blur-md rounded-3xl p-6 border border-rose-100 flex flex-col items-center text-center shadow-md hover:shadow-lg"
        >
          <Calendar className="text-rose-500 mb-3" size={32} />
          <h3 className="text-lg font-semibold text-gray-800"> 📅 Nosso Dia 11</h3>
          <p className="text-sm text-gray-500 mt-2">
            Cada mês ao seu lado não é só mais um número, é mais amor, mais
            cumplicidade, mais certeza de que quero continuar escolhendo você.
          </p>
        </div>

        {/* Timeline */}
        <TimelineCard ref={timelineRef} />

        <div className="space-y-4 text-center">
          {/* 📸 Momentos */}
          <ActionCard
            ref={momentosRef}
            title="📸 Momentos"
            subtitle="Memórias inesquecíveis"
            icon={Camera}
            colorClass="bg-amber-500"
            isOpen={activeTab === "momentos"}
            onClick={() => toggleTab("momentos")}
          >
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 mt-3 max-h-96 overflow-y-auto pr-2">
              {images.map((img, index) => (
                <img
                  key={index}
                  src={img}
                  loading="lazy"
                  decoding="async"
                  onClick={() => setSelectedIndex(index)}
                  className="rounded-xl object-cover aspect-square hover:scale-105 transition duration-300 cursor-pointer"
                  alt={`Momento ${index + 1}`}
                />
              ))}
            </div>
          </ActionCard>

          {/* 🌱 Início */}
          <ActionCard
            ref={inicioRef}
            title="🌱 Início"
            subtitle="Onde tudo floresceu"
            icon={Leaf}
            colorClass="bg-emerald-500"
            isOpen={activeTab === "inicio"}
            onClick={() => toggleTab("inicio")}
          >
            Lembro exatamente do dia em que nossos caminhos se cruzaram.
            Foi ali que algo diferente começou a nascer dentro de mim.
          </ActionCard>

          {/* 📖 Nossa História */}
          <ActionCard
            ref={historiaRef}
            title="📖 Nossa História"
            subtitle="Cada capítulo com você"
            icon={BookHeart}
            colorClass="bg-rose-500"
            isOpen={activeTab === "historia"}
            onClick={() => toggleTab("historia")}
          >
            Desde as conversas de madrugada até os planos de futuro,
            cada detalhe foi construindo algo que eu nunca imaginei viver.
          </ActionCard>

          {/* 💍 Promessa */}
          <ActionCard
            ref={promessaRef}
            title="💍 Promessa"
            subtitle="Meu compromisso com você"
            icon={Heart}
            colorClass="bg-pink-600"
            isOpen={activeTab === "promessa"}
            onClick={() => toggleTab("promessa")}
          >
            Eu prometo estar ao seu lado nos dias bons e nos difíceis.
            Prometo cuidar, respeitar e amar você todos os dias.
            Você é minha escolha hoje e sempre.
          </ActionCard>

          {/* ❤️ Eu Te Amo */}
          <LoveCard />
        </div>
      </div>

      {/* 💖 Modal de Imagem */}
      {selectedIndex !== null && (
        <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50">
          <button
            className="absolute top-6 right-6 text-white text-3xl"
            onClick={() => setSelectedIndex(null)}
          >
            ✕
          </button>
          <button
            className="absolute left-4 text-white text-4xl"
            onClick={() =>
              setSelectedIndex(
                (selectedIndex - 1 + images.length) % images.length
              )
            }
          >
            ‹
          </button>
          <img
            src={images[selectedIndex]}
            className="max-h-[85vh] max-w-[90vw] object-contain rounded-2xl shadow-2xl"
            alt="Momento ampliado"
          />
          <button
            className="absolute right-4 text-white text-4xl"
            onClick={() =>
              setSelectedIndex((selectedIndex + 1) % images.length)
            }
          >
            ›
          </button>
        </div>
      )}
    </div>
  );
}

export default App;

