import { ArrowRight } from "lucide-react";

interface FareSummaryProps {
  departureAirline: string;
  departureTime: string;
  departureArrivalTime: string;
  departureFare: string;
  returnAirline: string;
  returnTime: string;
  returnArrivalTime: string;
  returnFare: string;
  passengers: string;
  totalFare: string;
}

export function FareSummary({
  departureAirline,
  departureTime,
  departureArrivalTime,
  departureFare,
  returnAirline,
  returnTime,
  returnArrivalTime,
  returnFare,
  passengers,
  totalFare,
}: FareSummaryProps) {
  return (
    <div className="bg-fare-banner text-fare-banner-foreground rounded-lg p-4 flex items-center justify-between">
      {/* Departure Flight */}
      <div className="flex items-center gap-6">
        <div>
          <p className="text-xs opacity-80 mb-1">Departure · {departureAirline}</p>
          <div className="flex items-center gap-2">
            <span className="text-xl font-semibold">{departureTime}</span>
            <ArrowRight className="w-4 h-4" />
            <span className="text-xl font-semibold">{departureArrivalTime}</span>
          </div>
        </div>
        <p className="text-xl font-semibold">{departureFare}</p>
      </div>

      {/* Divider */}
      <div className="w-px h-12 bg-fare-banner-foreground/20" />

      {/* Return Flight */}
      <div className="flex items-center gap-6">
        <div>
          <p className="text-xs opacity-80 mb-1">Return · {returnAirline}</p>
          <div className="flex items-center gap-2">
            <span className="text-xl font-semibold">{returnTime}</span>
            <ArrowRight className="w-4 h-4" />
            <span className="text-xl font-semibold">{returnArrivalTime}</span>
          </div>
        </div>
        <p className="text-xl font-semibold">{returnFare}</p>
      </div>

      {/* Divider */}
      <div className="w-px h-12 bg-fare-banner-foreground/20" />

      {/* Total */}
      <div className="text-right">
        <p className="text-xs opacity-80 mb-1">{passengers}</p>
        <p className="text-xs opacity-80">Total Round fare</p>
        <p className="text-2xl font-bold">{totalFare}</p>
      </div>
    </div>
  );
}
