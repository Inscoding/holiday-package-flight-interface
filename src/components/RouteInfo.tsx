import { ArrowLeftRight } from "lucide-react";

interface RouteInfoProps {
  from: string;
  fromCode: string;
  to: string;
  toCode: string;
  departureDate: string;
  returnDate: string;
}

export function RouteInfo({
  from,
  fromCode,
  to,
  toCode,
  departureDate,
  returnDate,
}: RouteInfoProps) {
  return (
    <div className="bg-card border border-border rounded-lg p-4 flex items-center gap-6">
      {/* From */}
      <div className="flex-1">
        <p className="text-xs text-muted-foreground mb-1">From</p>
        <p className="text-sm font-medium text-foreground">
          {from} ({fromCode}), Hyderabad, India
        </p>
      </div>

      {/* Departure Date */}
      <div className="w-[150px]">
        <p className="text-xs text-muted-foreground mb-1">Departure Date</p>
        <p className="text-sm font-medium text-foreground">{departureDate}</p>
      </div>

      {/* Swap Icon */}
      <div className="flex items-center justify-center">
        <ArrowLeftRight className="w-5 h-5 text-muted-foreground" />
      </div>

      {/* To */}
      <div className="flex-1">
        <p className="text-xs text-muted-foreground mb-1">To</p>
        <p className="text-sm font-medium text-foreground">
          {to} ({toCode}), Goa, India
        </p>
      </div>

      {/* Return Date */}
      <div className="w-[150px]">
        <p className="text-xs text-muted-foreground mb-1">Return Date</p>
        <p className="text-sm font-medium text-foreground">{returnDate}</p>
      </div>
    </div>
  );
}
