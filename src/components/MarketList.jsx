import MarketCard from "./MarketCard";

export default function MarketList({ activeTab, onAddSelection }) {
  const classMarkets = [
    {
      id: "cls-1",
      type: "Class",
      title: "Calculus I Midterm Avg",
      subtitle: "Freshman cohort",
      line: 78.5,
      oddsOver: -110,
      oddsUnder: -110,
    },
    {
      id: "cls-2",
      type: "Class",
      title: "Organic Chemistry Midterm Avg",
      subtitle: "Pre-med section",
      line: 72.5,
      oddsOver: +100,
      oddsUnder: -120,
    },
    {
      id: "cls-3",
      type: "Class",
      title: "Computer Science I Midterm Avg",
      subtitle: "Intro to CS",
      line: 84.5,
      oddsOver: -105,
      oddsUnder: -115,
    },
    {
      id: "cls-4",
      type: "Class",
      title: "Economics 101 Midterm Avg",
      subtitle: "Macro focus",
      line: 76.5,
      oddsOver: -115,
      oddsUnder: -105,
    },
  ];

  const sportMarkets = [
    {
      id: "spr-1",
      type: "Sport",
      title: "Football vs. Rivals — Team Total Points",
      subtitle: "Home game",
      line: 28.5,
      oddsOver: -110,
      oddsUnder: -110,
    },
    {
      id: "spr-2",
      type: "Sport",
      title: "Basketball vs. State — Game Total",
      subtitle: "Conference play",
      line: 142.5,
      oddsOver: -108,
      oddsUnder: -112,
    },
    {
      id: "spr-3",
      type: "Sport",
      title: "Soccer vs. City — Team Total Goals",
      subtitle: "Regular season",
      line: 2.5,
      oddsOver: +120,
      oddsUnder: -140,
    },
    {
      id: "spr-4",
      type: "Sport",
      title: "Baseball vs. Tech — Team Total Runs",
      subtitle: "Weekend series",
      line: 4.5,
      oddsOver: -102,
      oddsUnder: -118,
    },
  ];

  const markets = activeTab === "classes" ? classMarkets : sportMarkets;

  return (
    <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
      {markets.map((m) => (
        <MarketCard
          key={m.id}
          market={m}
          onPick={({ pick, odds }) =>
            onAddSelection({
              id: `${m.id}-${pick}`,
              type: m.type,
              name: m.title,
              market: activeTab === "classes" ? "Midterm Average" : "Team/Game Total",
              pick,
              line: m.line,
              odds,
            })
          }
        />
      ))}
    </section>
  );
}
