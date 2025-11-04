import { useMemo, useState } from "react";
import Header from "./components/Header";
import MarketList from "./components/MarketList";
import BetSlip from "./components/BetSlip";

function App() {
  const [activeTab, setActiveTab] = useState("classes");
  const [selections, setSelections] = useState([]);
  const [stake, setStake] = useState(10);

  const addSelection = (sel) => {
    setSelections((prev) => {
      // Prevent duplicate leg for same market side
      const filtered = prev.filter((p) => p.id !== sel.id);
      return [...filtered, sel];
    });
  };

  const removeSelection = (id) => {
    setSelections((prev) => prev.filter((s) => s.id !== id));
  };

  const clearSelections = () => setSelections([]);

  const greeting = useMemo(() => {
    return activeTab === "classes"
      ? "Bet the over/under on class midterm averages"
      : "Bet the over/under on team scores and game totals";
  }, [activeTab]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-purple-50 text-gray-900">
      <Header activeTab={activeTab} setActiveTab={setActiveTab} />

      <main className="max-w-6xl mx-auto px-4 py-8 grid grid-cols-1 lg:grid-cols-3 gap-6">
        <section className="lg:col-span-2">
          <div className="mb-6">
            <h1 className="text-2xl sm:text-3xl font-extrabold tracking-tight">Campus Parlay</h1>
            <p className="text-gray-600 mt-1">{greeting}. Build a multi-leg parlay and see your potential payout instantly.</p>
          </div>

          <MarketList activeTab={activeTab} onAddSelection={addSelection} />
        </section>

        <div className="lg:col-span-1">
          <BetSlip
            selections={selections}
            onRemove={removeSelection}
            onClear={clearSelections}
            stake={stake}
            setStake={setStake}
          />
        </div>
      </main>

      <footer className="py-8 text-center text-xs text-gray-500">
        Campus Parlay is a fan-made concept. No real money wagering. Always study responsibly.
      </footer>
    </div>
  );
}

export default App;
