import { Briefcase, FileText, RefreshCw, Clock, AlertCircle } from "lucide-react";
import { Checkbox } from "@/components/ui/checkbox";
import { cn } from "@/lib/utils";

interface FlightFare {
  price: string;
  type: "sme" | "publish" | "flexi" | "expressfly" | "comfort";
}

interface FlightCardProps {
  airline: string;
  airlineCode: string;
  flightNumber: string;
  departureTime: string;
  departureCode: string;
  duration: string;
  stops: string;
  arrivalTime: string;
  arrivalCode: string;
  fares: FlightFare[];
  selected?: boolean;
  onSelect?: () => void;
}

const fareTypeStyles: Record<string, string> = {
  sme: "bg-success/10 text-success",
  publish: "bg-badge-publish/10 text-badge-publish",
  flexi: "bg-info/10 text-info",
  expressfly: "bg-warning/10 text-warning",
  comfort: "bg-badge-comfort/10 text-badge-comfort",
};

const fareTypeLabels: Record<string, string> = {
  sme: "SME",
  publish: "Publish",
  flexi: "Flexi",
  expressfly: "Expressfly",
  comfort: "Comfort",
};

export function FlightCard({
  airline,
  airlineCode,
  flightNumber,
  departureTime,
  departureCode,
  duration,
  stops,
  arrivalTime,
  arrivalCode,
  fares,
  selected,
  onSelect,
}: FlightCardProps) {
  return (
    <div
      className={cn(
        "flight-card",
        selected && "ring-2 ring-primary border-primary"
      )}
    >
      {/* Flight Header */}
      <div className="flex items-start justify-between mb-3">
        <div className="flex items-center gap-3">
          {/* Airline Logo */}
          <div className="w-10 h-10 rounded flex items-center justify-center overflow-hidden">
            {airlineCode === "IX" ? (
              <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/ae/Air_India_Express_logo.svg/200px-Air_India_Express_logo.svg.png" alt="Air India Express" className="w-full h-full object-contain" />
            ) : airlineCode === "AI" ? (
              <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/77/Air_India_Logo.svg/200px-Air_India_Logo.svg.png" alt="Air India" className="w-full h-full object-contain" />
            ) : airlineCode === "6E" ? (
              <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/IndiGo_Airlines_logo.svg/200px-IndiGo_Airlines_logo.svg.png" alt="IndiGo" className="w-full h-full object-contain" />
            ) : (
              <div className="w-8 h-8 bg-muted rounded flex items-center justify-center">
                <span className="text-xs font-bold text-muted-foreground">{airlineCode}</span>
              </div>
            )}
          </div>
          <div>
            <p className="text-sm font-semibold text-foreground">{airline}</p>
            <p className="text-xs text-muted-foreground">{flightNumber}</p>
          </div>
        </div>

        {/* Times and Duration */}
        <div className="flex items-center gap-4 text-center">
          <div>
            <p className="text-lg font-semibold text-foreground">{departureTime}</p>
            <p className="text-xs text-muted-foreground">{departureCode}</p>
          </div>
          <div className="flex flex-col items-center">
            <div className="flex items-center gap-1 text-xs text-muted-foreground">
              <Clock className="w-3 h-3" />
              <span>{duration}</span>
            </div>
            <div className="w-16 h-px bg-border my-1" />
            <p className="text-xs text-warning">{stops}</p>
          </div>
          <div>
            <p className="text-lg font-semibold text-foreground">{arrivalTime}</p>
            <p className="text-xs text-muted-foreground">{arrivalCode}</p>
          </div>
        </div>
      </div>

      {/* Fares Row */}
      <div className="flex items-center gap-3 mb-3 flex-wrap">
        {fares.map((fare, idx) => (
          <label key={idx} className="flex items-center gap-2 cursor-pointer">
            <Checkbox
              checked={idx === 0 && selected}
              onCheckedChange={idx === 0 ? onSelect : undefined}
            />
            <span className="text-sm font-medium text-foreground">
              ₹ {fare.price}
            </span>
            <span className={cn("fare-badge", fareTypeStyles[fare.type])}>
              {fareTypeLabels[fare.type]}
            </span>
          </label>
        ))}
      </div>

      {/* Footer */}
      <div className="flex items-center gap-4 pt-3 border-t border-border text-xs text-muted-foreground">
        <div className="flex items-center gap-1">
          <Briefcase className="w-3.5 h-3.5" />
          <span>Hand Baggage - 7 Kg</span>
        </div>
        <div className="flex items-center gap-1">
          <Briefcase className="w-3.5 h-3.5" />
          <span>Chick-In Baggage</span>
        </div>
        <div className="flex items-center gap-1">
          <RefreshCw className="w-3.5 h-3.5" />
          <span>Refundable</span>
        </div>
        <div className="flex items-center gap-1">
          <FileText className="w-3.5 h-3.5" />
          <span>Rules</span>
        </div>
      </div>
    </div>
  );
}
