import { Trash2 } from "lucide-react";
import { useMemo } from "react";

function americanToDecimal(odds) {
  if (odds > 0) return 1 + odds / 100;
  return 1 + 100 / Math.abs(odds);
}

export default function BetSlip({ selections, onRemove, onClear, stake, setStake }) {
  const parlayDecimal = useMemo(
    () => selections.reduce((acc, s) => acc * americanToDecimal(s.odds), 1),
    [selections]
  );
  const payout = +(stake * parlayDecimal).toFixed(2);
  const profit = +(payout - stake).toFixed(2);

  return (
    <aside className="rounded-xl border border-gray-200 bg-white shadow-sm p-4 sticky top-20">
      <div className="flex items-center justify-between mb-3">
        <h3 className="font-semibold text-gray-900">Parlay Bet Slip</h3>
        <button
          onClick={onClear}
          className="text-xs text-gray-600 hover:text-red-600"
          disabled={selections.length === 0}
        >
          Clear all
        </button>
      </div>

      {selections.length === 0 ? (
        <p className="text-sm text-gray-500">Add over/under picks to build your parlay.</p>
      ) : (
        <div className="space-y-3">
          <ul className="divide-y divide-gray-100 border border-gray-100 rounded-lg overflow-hidden">
            {selections.map((s) => (
              <li key={s.id} className="p-3 flex items-start gap-3">
                <div className="flex-1">
                  <p className="text-xs uppercase tracking-wide text-gray-500">{s.type}</p>
                  <p className="text-sm font-medium text-gray-900">{s.name}</p>
                  <p className="text-xs text-gray-600">{s.pick} {s.line} • {s.odds > 0 ? `+${s.odds}` : s.odds}</p>
                </div>
                <button
                  onClick={() => onRemove(s.id)}
                  className="p-1.5 rounded-md hover:bg-gray-100 text-gray-500"
                  aria-label="Remove selection"
                >
                  <Trash2 className="h-4 w-4" />
                </button>
              </li>
            ))}
          </ul>

          <div className="space-y-2">
            <label className="text-sm font-medium text-gray-700">Stake</label>
            <div className="flex items-center gap-2">
              <input
                type="number"
                min="0"
                step="1"
                value={stake}
                onChange={(e) => setStake(Number(e.target.value))}
                className="w-full rounded-lg border border-gray-300 px-3 py-2 focus:ring-2 focus:ring-indigo-500 focus:outline-none"
                placeholder="Enter amount"
              />
            </div>
          </div>

          <div className="bg-gray-50 rounded-lg p-3 text-sm">
            <div className="flex items-center justify-between">
              <span className="text-gray-600">Legs</span>
              <span className="font-semibold text-gray-900">{selections.length}</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-gray-600">Combined odds (decimal)</span>
              <span className="font-semibold text-gray-900">{parlayDecimal.toFixed(2)}x</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-gray-600">Potential payout</span>
              <span className="font-semibold text-gray-900">${payout.toLocaleString()}</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-gray-600">Potential profit</span>
              <span className="font-semibold text-gray-900">${profit.toLocaleString()}</span>
            </div>
          </div>

          <button
            className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-2.5 rounded-lg transition-colors disabled:opacity-50"
            disabled={selections.length < 2 || stake <= 0}
          >
            Place Parlay
          </button>
          <p className="text-[10px] text-gray-500">For entertainment and educational purposes only.</p>
        </div>
      )}
    </aside>
  );
}
