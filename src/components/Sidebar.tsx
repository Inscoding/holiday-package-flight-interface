import {
  Home,
  Filter,
  MapPin,
  Cloud,
  Gift,
  Calculator,
  FileText,
  HeadphonesIcon,
  Settings,
  Database,
  UserCog,
  Package,
  UsersRound,
  Handshake,
  Truck,
  ChevronRight,
  Menu,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { GogagaLogo } from "./GogagaLogo";

interface NavItem {
  icon: React.ElementType;
  label: string;
  badge?: string;
  hasSubmenu?: boolean;
  isActive?: boolean;
  isBlue?: boolean;
}

interface NavSection {
  title: string;
  items: NavItem[];
}

const navSections: NavSection[] = [
  {
    title: "MENU",
    items: [
      { icon: Home, label: "Dashboard", isBlue: true },
      { icon: Filter, label: "Leads", hasSubmenu: true, isBlue: true },
      { icon: MapPin, label: "Itineraries", hasSubmenu: true },
      { icon: Cloud, label: "Google Reviews" },
      { icon: Gift, label: "Vouchers", hasSubmenu: true },
      { icon: Calculator, label: "Accounts", hasSubmenu: true },
      { icon: FileText, label: "Reports", hasSubmenu: true },
      { icon: HeadphonesIcon, label: "Customer Support" },
    ],
  },
  {
    title: "USER CONTROL",
    items: [
      { icon: Settings, label: "User Settings", hasSubmenu: true },
      { icon: Database, label: "Masters Settings", hasSubmenu: true },
      { icon: UserCog, label: "HRM", hasSubmenu: true },
      { icon: Package, label: "Assets Management", hasSubmenu: true },
    ],
  },
  {
    title: "PARTICIPANTS",
    items: [
      { icon: UsersRound, label: "Itinerary Customers" },
      { icon: Handshake, label: "Partners" },
      { icon: Truck, label: "Suppliers", hasSubmenu: true },
    ],
  },
  {
    title: "MISCELLANEOUS",
    items: [],
  },
];

export function Sidebar() {
  return (
    <aside className="min-h-screen w-60 bg-sidebar border-r border-sidebar-border flex flex-col flex-shrink-0">
      {/* Logo Section */}
      <div className="flex items-center justify-between p-4 border-b border-sidebar-border">
        <GogagaLogo />
        <button className="p-1.5 hover:bg-sidebar-accent rounded-lg transition-colors">
          <Menu className="w-5 h-5 text-sidebar-foreground" />
        </button>
      </div>

      {/* Navigation */}
      <nav className="flex-1 py-4">
        {navSections.map((section, sectionIdx) => (
          <div key={sectionIdx} className="mb-4">
            {section.title && (
              <p className="px-4 mb-2 text-xs font-semibold text-muted-foreground uppercase tracking-wider">
                {section.title}
              </p>
            )}
            <ul className="space-y-1 px-2">
              {section.items.map((item, itemIdx) => {
                const Icon = item.icon;
                const isLeads = item.label === "Leads" && item.hasSubmenu;

                return (
                  <li key={itemIdx}>
                    <div
                      className={cn(
                        "nav-item",
                        item.isActive && "nav-item-active",
                        item.isBlue && "hover:text-[hsl(270,60%,35%)]"
                      )}
                    >
                      <Icon className={cn("w-5 h-5", item.isBlue && "text-[hsl(270,60%,40%)]")} />
                      <span className={cn("flex-1 text-sm", item.isBlue && "text-[hsl(270,60%,40%)]")}>{item.label}</span>
                      {item.hasSubmenu && (
                        <span className="text-muted-foreground">
                          <ChevronRight className="w-4 h-4" />
                        </span>
                      )}
                    </div>
                    
                    {/* Submenu for Leads - always visible */}
                    {isLeads && (
                      <div className="ml-6 mt-1">
                        <div className="flex items-center gap-3 px-4 py-2.5 rounded-lg bg-sidebar-accent">
                          <Filter className="w-4 h-4 text-[hsl(270,60%,40%)]" />
                          <span className="flex-1 text-sm text-[hsl(270,60%,40%)]">Leads</span>
                          <span className="px-2 py-0.5 text-xs font-semibold text-white bg-[hsl(142,71%,45%)] rounded">
                            30434
                          </span>
                        </div>
                      </div>
                    )}
                  </li>
                );
              })}
            </ul>
          </div>
        ))}
      </nav>
    </aside>
  );
}
