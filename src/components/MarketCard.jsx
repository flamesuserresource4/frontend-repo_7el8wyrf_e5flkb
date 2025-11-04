import { Plus, Minus } from "lucide-react";

export default function MarketCard({ market, onPick }) {
  const { title, subtitle, line, oddsOver = -110, oddsUnder = -110 } = market;

  const DisplayOdds = ({ odds }) => (
    <span className="text-xs font-semibold text-gray-600">{odds > 0 ? `+${odds}` : odds}</span>
  );

  return (
    <div className="rounded-xl border border-gray-200 bg-white shadow-sm hover:shadow-md transition-shadow">
      <div className="p-4">
        <div className="flex items-baseline justify-between">
          <div>
            <h3 className="text-sm font-semibold text-gray-900">{title}</h3>
            {subtitle && (
              <p className="text-xs text-gray-500 mt-0.5">{subtitle}</p>
            )}
          </div>
          <div className="text-right">
            <p className="text-xs text-gray-500">Line</p>
            <p className="text-base font-bold text-gray-800">{line}</p>
          </div>
        </div>
        <div className="mt-3 grid grid-cols-2 gap-2">
          <button
            onClick={() => onPick({ pick: "Over", odds: oddsOver })}
            className="flex items-center justify-between rounded-lg border border-gray-200 px-3 py-2 hover:border-indigo-400 hover:bg-indigo-50"
          >
            <div className="inline-flex items-center gap-2 text-gray-900 font-medium">
              <Plus className="h-4 w-4" /> Over
            </div>
            <DisplayOdds odds={oddsOver} />
          </button>
          <button
            onClick={() => onPick({ pick: "Under", odds: oddsUnder })}
            className="flex items-center justify-between rounded-lg border border-gray-200 px-3 py-2 hover:border-indigo-400 hover:bg-indigo-50"
          >
            <div className="inline-flex items-center gap-2 text-gray-900 font-medium">
              <Minus className="h-4 w-4" /> Under
            </div>
            <DisplayOdds odds={oddsUnder} />
          </button>
        </div>
      </div>
    </div>
  );
}
