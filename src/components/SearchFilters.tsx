import { useState } from "react";
import { Search, CalendarDays, Users, ChevronDown, Info } from "lucide-react";
import { cn } from "@/lib/utils";
import { Checkbox } from "@/components/ui/checkbox";

export function SearchFilters() {
  const [hotelStandard, setHotelStandard] = useState<string[]>(["3★"]);
  const [addLunch, setAddLunch] = useState(true);
  const [addDinner, setAddDinner] = useState(false);

  const starOptions = ["3★", "4★", "5★"];

  const toggleStar = (star: string) => {
    setHotelStandard((prev) =>
      prev.includes(star) ? prev.filter((s) => s !== star) : [...prev, star]
    );
  };

  return (
    <div className="space-y-4">
      {/* Main Filters Row */}
      <div className="flex items-end gap-4">
        {/* Destination */}
        <div className="flex-1 min-w-[200px]">
          <label className="block text-xs text-muted-foreground mb-1">
            Destination
          </label>
          <div className="filter-input flex items-center gap-2">
            <input
              type="text"
              placeholder="City"
              className="flex-1 bg-transparent outline-none text-sm"
            />
          </div>
        </div>

        {/* Trip Start Date */}
        <div className="w-[180px]">
          <label className="block text-xs text-muted-foreground mb-1">
            Trip start date
          </label>
          <div className="filter-input flex items-center gap-2">
            <CalendarDays className="w-4 h-4 text-muted-foreground" />
            <input
              type="text"
              placeholder="Tue, Mar 12"
              defaultValue="Tue, Mar 12"
              className="flex-1 bg-transparent outline-none text-sm"
            />
          </div>
        </div>

        {/* No. of Passengers */}
        <div className="w-[220px]">
          <label className="block text-xs text-muted-foreground mb-1">
            No.of Passengers
          </label>
          <div className="filter-input flex items-center gap-2">
            <Users className="w-4 h-4 text-muted-foreground" />
            <span className="flex-1 text-sm">2 Adults, 2 Children</span>
            <ChevronDown className="w-4 h-4 text-muted-foreground" />
          </div>
        </div>

        {/* Search Button */}
        <button className="bg-black text-white p-3.5 rounded-lg hover:bg-black/90 transition-colors">
          <Search className="w-5 h-5" />
        </button>
      </div>

      {/* Hotel Standard & Add-ons Row */}
      <div className="flex items-center gap-6">
        <div className="flex items-center gap-3">
          <span className="text-sm text-foreground font-medium">
            Hotel Standard
          </span>
          <div className="flex gap-1">
            {starOptions.map((star) => (
              <button
                key={star}
                onClick={() => toggleStar(star)}
                className={cn(
                  "star-button",
                  hotelStandard.includes(star) && "star-button-active"
                )}
              >
                {star}
              </button>
            ))}
          </div>
        </div>

        <div className="flex items-center gap-4">
          <label className="flex items-center gap-2 cursor-pointer">
            <Checkbox
              checked={addLunch}
              onCheckedChange={(checked) => setAddLunch(checked as boolean)}
            />
            <span className="text-sm">Add Lunch</span>
          </label>

          <label className="flex items-center gap-2 cursor-pointer">
            <Checkbox
              checked={addDinner}
              onCheckedChange={(checked) => setAddDinner(checked as boolean)}
            />
            <span className="text-sm">Add Dinner</span>
            <Info className="w-4 h-4 text-muted-foreground" />
          </label>
        </div>
      </div>
    </div>
  );
}
