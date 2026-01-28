import { FlightCard } from "./FlightCard";

interface Flight {
  id: string;
  airline: string;
  airlineCode: string;
  flightNumber: string;
  departureTime: string;
  departureCode: string;
  duration: string;
  stops: string;
  arrivalTime: string;
  arrivalCode: string;
  fares: { price: string; type: "sme" | "publish" | "flexi" | "expressfly" | "comfort" }[];
}

interface FlightListProps {
  title: string;
  flights: Flight[];
  selectedFlightId?: string;
  onSelectFlight?: (id: string) => void;
}

export function FlightList({
  title,
  flights,
  selectedFlightId,
  onSelectFlight,
}: FlightListProps) {
  return (
    <div className="flex-1">
      {/* Header */}
      <div className="flex items-center justify-between bg-muted rounded-t-lg px-4 py-2.5 border border-border">
        <span className="text-sm font-medium text-muted-foreground">{title}</span>
        <div className="flex gap-8 text-xs font-medium text-muted-foreground">
          <span>Departure</span>
          <span>Duration</span>
          <span>Arrival</span>
        </div>
      </div>

      {/* Flight Cards */}
      <div className="space-y-3 mt-3">
        {flights.map((flight) => (
          <FlightCard
            key={flight.id}
            {...flight}
            selected={selectedFlightId === flight.id}
            onSelect={() => onSelectFlight?.(flight.id)}
          />
        ))}
      </div>
    </div>
  );
}
