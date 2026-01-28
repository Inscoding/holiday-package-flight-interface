import { Filter, MapPin, Bell, ChevronDown } from "lucide-react";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { GogagaLogo } from "./GogagaLogo";

export function TopHeader() {
  return (
    <header className="h-14 bg-card border-b border-border flex items-center justify-between px-4">
      <div className="flex items-center gap-2">
        <GogagaLogo />
      </div>

      <div className="flex items-center gap-3">
        {/* Grid icon */}
        <button className="p-2 hover:bg-muted rounded-lg transition-colors">
          <div className="grid grid-cols-2 gap-0.5">
            <div className="w-2 h-2 border border-muted-foreground rounded-sm" />
            <div className="w-2 h-2 border border-muted-foreground rounded-sm" />
            <div className="w-2 h-2 border border-muted-foreground rounded-sm" />
            <div className="w-2 h-2 border border-muted-foreground rounded-sm" />
          </div>
        </button>

        {/* Notification Icons in boxes */}
        <div className="flex items-center gap-1">
          {/* Filter with badge - green border */}
          <div className="relative border-2 border-success rounded-lg p-1.5">
            <Filter className="w-4 h-4 text-success" />
            <span className="absolute -top-2 -right-2 min-w-[20px] h-5 bg-success text-success-foreground text-[10px] font-bold rounded-md flex items-center justify-center px-1">
              520
            </span>
          </div>

          {/* Location with badge - blue border */}
          <div className="relative border-2 border-info rounded-lg p-1.5 ml-1">
            <MapPin className="w-4 h-4 text-info" />
            <span className="absolute -top-2 -right-2 min-w-[18px] h-5 bg-info text-info-foreground text-[10px] font-bold rounded-full flex items-center justify-center">
              1
            </span>
          </div>

          {/* Bell with badge - red border */}
          <div className="relative border-2 border-destructive rounded-lg p-1.5 ml-1">
            <Bell className="w-4 h-4 text-destructive" />
            <span className="absolute -top-2 -right-2 min-w-[20px] h-5 bg-destructive text-destructive-foreground text-[10px] font-bold rounded-md flex items-center justify-center px-1">
              15
            </span>
          </div>
        </div>

        {/* Divider */}
        <div className="w-px h-8 bg-border ml-2" />

        {/* User - no profile photo */}
        <div className="flex items-center gap-2 px-2 py-1.5">
          <Avatar className="w-8 h-8">
            <AvatarFallback className="bg-muted text-muted-foreground text-sm">
              GK
            </AvatarFallback>
          </Avatar>
          <span className="text-sm font-medium text-foreground">Girish Kumar</span>
          <ChevronDown className="w-4 h-4 text-muted-foreground" />
        </div>
      </div>
    </header>
  );
}
