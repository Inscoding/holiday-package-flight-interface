import { cn } from "@/lib/utils";

interface PackageTabsProps {
  activeTab: string;
  onTabChange: (tab: string) => void;
}

const tabs = ["Package with Flights", "Package without Flights"];

export function PackageTabs({ activeTab, onTabChange }: PackageTabsProps) {
  return (
    <div className="flex items-center border-b border-border">
      {tabs.map((tab) => (
        <button
          key={tab}
          onClick={() => onTabChange(tab)}
          className={cn(
            "px-4 py-3 text-sm font-medium border-b-2 transition-colors -mb-px",
            activeTab === tab
              ? "border-primary text-primary"
              : "border-transparent text-muted-foreground hover:text-foreground"
          )}
        >
          {tab}
        </button>
      ))}
    </div>
  );
}
