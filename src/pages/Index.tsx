import { useState } from "react";
import { Sidebar } from "@/components/Sidebar";
import { TopHeader } from "@/components/TopHeader";
import { HeaderTabs } from "@/components/HeaderTabs";
import { PackageTabs } from "@/components/PackageTabs";
import { SearchFilters } from "@/components/SearchFilters";
import { RouteInfo } from "@/components/RouteInfo";
import { FareSummary } from "@/components/FareSummary";
import { FlightList } from "@/components/FlightList";

const departureFlights = [
  {
    id: "d1",
    airline: "Air India Express",
    airlineCode: "IX",
    flightNumber: "IX 2879 TC",
    departureTime: "12:05",
    departureCode: "HYD",
    duration: "03h 25m",
    stops: "1 stop(s) left nearby Airport",
    arrivalTime: "13:30",
    arrivalCode: "GOI",
    fares: [
      { price: "13,300.00", type: "publish" as const },
      { price: "13,300.00", type: "flexi" as const },
      { price: "29,144.00", type: "expressfly" as const },
    ],
  },
  {
    id: "d2",
    airline: "Air India",
    airlineCode: "AI",
    flightNumber: "IX 2879 TC",
    departureTime: "11:30",
    departureCode: "HYD",
    duration: "04h 30m",
    stops: "2 Stop Via BOM 1 seats left nearby Airport",
    arrivalTime: "18:55",
    arrivalCode: "GOX",
    fares: [
      { price: "13,300.00", type: "sme" as const },
      { price: "105,300.00", type: "publish" as const },
    ],
  },
  {
    id: "d3",
    airline: "Indigo",
    airlineCode: "6E",
    flightNumber: "6E 426 SM | 6E 6944 SM",
    departureTime: "20:50",
    departureCode: "HYD",
    duration: "09h 30m +1D",
    stops: "1 Stop(s) via PNQ 3 seats(s) left",
    arrivalTime: "0620",
    arrivalCode: "GOI",
    fares: [
      { price: "13,300.00", type: "sme" as const },
      { price: "13,300.00", type: "publish" as const },
    ],
  },
  {
    id: "d4",
    airline: "Star Air",
    airlineCode: "S5",
    flightNumber: "S5 212 TQ2 | S5 210 TQ2",
    departureTime: "09:50",
    departureCode: "HYD",
    duration: "08h 25m",
    stops: "1 Stop(s) via ROV 5 seats(s) left",
    arrivalTime: "17:55",
    arrivalCode: "GOX",
    fares: [
      { price: "13,300.00", type: "sme" as const },
      { price: "13,300.00", type: "flexi" as const },
      { price: "13,300.00", type: "comfort" as const },
    ],
  },
  {
    id: "d5",
    airline: "Star Air",
    airlineCode: "S5",
    flightNumber: "S5 212 TQ2 | S5 210 TQ2",
    departureTime: "09:50",
    departureCode: "HYD",
    duration: "08h 25m",
    stops: "1 Stop(s) via ROV 5 seats(s) left",
    arrivalTime: "17:55",
    arrivalCode: "GOX",
    fares: [
      { price: "13,300.00", type: "sme" as const },
      { price: "13,300.00", type: "flexi" as const },
    ],
  },
];

const returnFlights = [
  {
    id: "r1",
    airline: "Air India Express",
    airlineCode: "IX",
    flightNumber: "IX 2879 TC",
    departureTime: "12:05",
    departureCode: "HYD",
    duration: "03h 25m",
    stops: "1 stop(s) left nearby Airport",
    arrivalTime: "13:30",
    arrivalCode: "GOI",
    fares: [
      { price: "13,300.00", type: "publish" as const },
      { price: "13,300.00", type: "flexi" as const },
      { price: "29,144.00", type: "expressfly" as const },
    ],
  },
  {
    id: "r2",
    airline: "Air India",
    airlineCode: "AI",
    flightNumber: "IX 2879 TC",
    departureTime: "13:15",
    departureCode: "HYD",
    duration: "04h 30m +1D",
    stops: "2 Stop Via BOM 1 seats left nearby Airport",
    arrivalTime: "06:15",
    arrivalCode: "GOX",
    fares: [
      { price: "13,300.00", type: "sme" as const },
      { price: "105,300.00", type: "publish" as const },
    ],
  },
  {
    id: "r3",
    airline: "Indigo",
    airlineCode: "6E",
    flightNumber: "6E 426 SM | 6E 6944 SM",
    departureTime: "20:50",
    departureCode: "HYD",
    duration: "09h 30m +1D",
    stops: "1 Stop(s) via PNQ 3 seats(s) left",
    arrivalTime: "0620",
    arrivalCode: "GOI",
    fares: [
      { price: "13,300.00", type: "sme" as const },
      { price: "13,300.00", type: "publish" as const },
    ],
  },
  {
    id: "r4",
    airline: "Star Air",
    airlineCode: "S5",
    flightNumber: "S5 212 TQ2 | S5 210 TQ2",
    departureTime: "09:50",
    departureCode: "HYD",
    duration: "08h 25m",
    stops: "1 Stop(s) via ROV 5 seats(s) left",
    arrivalTime: "17:55",
    arrivalCode: "GOX",
    fares: [
      { price: "13,300.00", type: "sme" as const },
      { price: "13,300.00", type: "flexi" as const },
      { price: "13,300.00", type: "comfort" as const },
    ],
  },
  {
    id: "r5",
    airline: "Star Air",
    airlineCode: "S5",
    flightNumber: "S5 212 TQ2 | S5 210 TQ2",
    departureTime: "09:50",
    departureCode: "HYD",
    duration: "08h 25m",
    stops: "1 Stop(s) via ROV 5 seats(s) left",
    arrivalTime: "17:55",
    arrivalCode: "GOX",
    fares: [
      { price: "13,300.00", type: "sme" as const },
      { price: "13,300.00", type: "flexi" as const },
    ],
  },
];

const Index = () => {
  const [holidayTab, setHolidayTab] = useState("Indian Holidays");
  const [packageTab, setPackageTab] = useState("Package with Flights");
  const [selectedDeparture, setSelectedDeparture] = useState("d2");
  const [selectedReturn, setSelectedReturn] = useState("r2");

  return (
    <div className="flex min-h-screen bg-background w-full">
      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <div className="flex-1 flex flex-col">
        {/* Top Header */}
        <TopHeader />

        {/* Content Area */}
        <main className="flex-1 p-6 overflow-auto">
          {/* Holiday Tabs */}
          <div className="mb-6">
            <HeaderTabs activeTab={holidayTab} onTabChange={setHolidayTab} />
          </div>

          {/* Package Tabs */}
          <div className="mb-6">
            <PackageTabs activeTab={packageTab} onTabChange={setPackageTab} />
          </div>

          {/* Search Filters */}
          <div className="mb-6">
            <SearchFilters />
          </div>

          {/* Route Info */}
          <div className="mb-4">
            <RouteInfo
              from="Rajiv Gandhi International Airport"
              fromCode="HYD"
              to="Mopa Airport India"
              toCode="GOX"
              departureDate="Tue, Mar 12, 2025"
              returnDate="Sun, Mar 17, 2025"
            />
          </div>

          {/* Fare Summary */}
          <div className="mb-6">
            <FareSummary
              departureAirline="Air India"
              departureTime="11:30"
              departureArrivalTime="18:55"
              departureFare="₹105,300.00"
              returnAirline="Air India"
              returnTime="00:50"
              returnArrivalTime="01:55"
              returnFare="₹105,300.00"
              passengers="for 2 adult, 2 children"
              totalFare="₹210,600.00"
            />
          </div>

          {/* Flight Lists */}
          <div className="flex gap-6">
            <FlightList
              title="Outbound: Hyderabad(HYD)"
              flights={departureFlights}
              selectedFlightId={selectedDeparture}
              onSelectFlight={setSelectedDeparture}
            />
            <FlightList
              title="Outbound: Hyderabad(HYD)"
              flights={returnFlights}
              selectedFlightId={selectedReturn}
              onSelectFlight={setSelectedReturn}
            />
          </div>
        </main>
      </div>
    </div>
  );
};

export default Index;
