import { Trophy, Book, BarChart3 } from "lucide-react";

export default function Header({ activeTab, setActiveTab }) {
  return (
    <header className="sticky top-0 z-20 backdrop-blur bg-white/70 border-b border-gray-100">
      <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Trophy className="h-6 w-6 text-indigo-600" />
          <span className="font-bold text-xl tracking-tight">Campus Parlay</span>
        </div>
        <nav className="flex items-center gap-2">
          <button
            onClick={() => setActiveTab("classes")}
            className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
              activeTab === "classes"
                ? "bg-indigo-600 text-white"
                : "text-gray-700 hover:bg-gray-100"
            }`}
          >
            <div className="inline-flex items-center gap-2">
              <Book className="h-4 w-4" />
              Classes
            </div>
          </button>
          <button
            onClick={() => setActiveTab("sports")}
            className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
              activeTab === "sports"
                ? "bg-indigo-600 text-white"
                : "text-gray-700 hover:bg-gray-100"
            }`}
          >
            <div className="inline-flex items-center gap-2">
              <BarChart3 className="h-4 w-4" />
              Sports
            </div>
          </button>
        </nav>
      </div>
    </header>
  );
}
