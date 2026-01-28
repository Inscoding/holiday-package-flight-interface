import { cn } from "@/lib/utils";

interface HeaderTabsProps {
  activeTab: string;
  onTabChange: (tab: string) => void;
}

const tabs = ["Indian Holidays", "International Holidays"];

export function HeaderTabs({ activeTab, onTabChange }: HeaderTabsProps) {
  return (
    <div className="flex items-center gap-4">
      {tabs.map((tab) => (
        <button
          key={tab}
          onClick={() => onTabChange(tab)}
          className={cn(
            "px-5 py-2 text-sm font-medium transition-colors",
            activeTab === tab
              ? "bg-black text-white rounded-md"
              : "text-black bg-transparent"
          )}
        >
          {tab}
        </button>
      ))}
    </div>
  );
}
