export const ActionCard = ({
  title,
  subtitle,
  icon: Icon,
  children,
  colorClass,
  isOpen,
  onClick
}) => {
  return (
    <div className="bg-white rounded-2xl shadow-sm border border-rose-100 overflow-hidden transition-all">
      <button
        onClick={onClick}
        className="w-full flex items-center p-4 text-left hover:bg-rose-50 transition-colors"
      >
        <div className={`p-2 rounded-lg ${colorClass} mr-3`}>
          <Icon size={20} className="text-white" />
        </div>

        <div>
          <h3 className="text-sm font-semibold text-gray-700">{title}</h3>
          <p className="text-xs text-gray-400">{subtitle}</p>
        </div>
      </button>

      <div
        className={`transition-all duration-500 ease-in-out overflow-hidden ${
          isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="px-4 pb-4 pt-2 border-t border-gray-100 text-sm text-gray-600 leading-relaxed">
          {children}
        </div>
      </div>
    </div>
  );
};
