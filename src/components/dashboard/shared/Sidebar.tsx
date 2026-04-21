"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "motion/react";
import {
  LayoutDashboard,
  Users,
  FormInput,
  Settings,
  HelpCircle,
  LogOut,
  Plus,
  Menu,
  X,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";
import { useState } from "react";

const navItems = [
  { icon: LayoutDashboard, label: "Overview", path: "/dashboard" },
  { icon: Users, label: "Leads", path: "/leads", badge: "1,284" },
  { icon: FormInput, label: "Forms", path: "#" },
  { icon: Settings, label: "Settings", path: "/settings" },
];

export function Sidebar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  const SidebarContent = () => (
    <>
      <div className="font-heading text-primary flex items-center justify-between px-6 py-8 text-xl font-bold tracking-tighter">
        <Link href="/" className="mb-12">
          <span className="text-primary font-heading text-4xl font-extrabold tracking-tighter">
            Contactify
          </span>
        </Link>
        <Button
          variant="ghost"
          size="icon"
          className="lg:hidden"
          onClick={() => setIsOpen(false)}
          aria-label="Close sidebar"
        >
          <X className="h-5 w-5" aria-hidden="true" />
        </Button>
      </div>

      <nav className="relative flex-1 space-y-1" aria-label="Main navigation">
        {navItems.map((item) => {
          const isActive = pathname === item.path;
          return (
            <Link
              key={item.label}
              href={item.path}
              onClick={() => setIsOpen(false)}
              aria-current={isActive ? "page" : undefined}
              className={cn(
                "group relative mx-4 flex items-center justify-between rounded-xl px-4 py-3 text-sm font-medium transition-all",
                isActive
                  ? "bg-primary/10 text-primary shadow-[inset_0_0_0_1px_rgba(3,68,46,0.1)]"
                  : "text-muted-foreground hover:bg-muted/50 hover:text-primary"
              )}
            >
              {isActive && (
                <motion.div
                  layoutId="active-pill"
                  className="bg-primary absolute left-0 h-6 w-1 rounded-r-full"
                  transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  aria-hidden="true"
                />
              )}

              <div className="flex items-center gap-3">
                <item.icon
                  className={cn(
                    "h-5 w-5 transition-colors",
                    isActive ? "text-primary fill-primary/10" : "group-hover:text-primary"
                  )}
                  aria-hidden="true"
                />
                <span className={cn(isActive && "font-bold")}>{item.label}</span>
              </div>

              {item.badge && (
                <Badge
                  variant="secondary"
                  className={cn(
                    "rounded-full border-none px-2 py-0.5 text-[10px] font-bold transition-colors",
                    isActive ? "bg-primary text-white" : "bg-secondary/10 text-secondary"
                  )}
                >
                  <span className="sr-only">Total leads: </span>
                  {item.badge}
                </Badge>
              )}
            </Link>
          );
        })}
      </nav>

      <div className="mb-8 px-6">
        <Button
          className="bg-primary h-auto w-full rounded-xl py-7 text-base font-bold text-white shadow-lg transition-all hover:scale-[1.02] hover:shadow-xl"
          aria-label="Create a new lead"
        >
          <Plus className="mr-2 h-5 w-5" aria-hidden="true" />
          Create New Lead
        </Button>
      </div>

      <div className="mt-auto space-y-1 pb-6">
        <Link
          href="#"
          className="text-muted-foreground hover:bg-muted mx-4 flex items-center gap-3 rounded-full px-4 py-3 text-sm font-medium transition-all"
        >
          <HelpCircle className="h-5 w-5" aria-hidden="true" />
          <span>Help Center</span>
        </Link>
        <Link
          href="/login"
          className="text-muted-foreground hover:bg-muted mx-4 flex items-center gap-3 rounded-full px-4 py-3 text-sm font-medium transition-all"
        >
          <LogOut className="h-5 w-5" aria-hidden="true" />
          <span>Sign Out</span>
        </Link>
      </div>
    </>
  );

  return (
    <>
      {/* Mobile Toggle */}
      <div className="fixed top-6 left-6 z-[60] lg:hidden">
        <Button
          variant="outline"
          size="icon"
          className="bg-card border-border rounded-xl shadow-sm"
          onClick={() => setIsOpen(true)}
          aria-label="Open navigation menu"
        >
          <Menu className="h-5 w-5" aria-hidden="true" />
        </Button>
      </div>

      {/* Desktop Sidebar */}
      <aside className="bg-card border-border fixed top-0 left-0 z-50 hidden h-screen w-64 flex-col border-r lg:flex">
        <SidebarContent />
      </aside>

      {/* Mobile Sidebar Overlay */}
      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 z-[60] bg-black/50 backdrop-blur-sm lg:hidden"
            />
            <motion.aside
              initial={{ x: "-100%" }}
              animate={{ x: 0 }}
              exit={{ x: "-100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="bg-card border-border fixed top-0 left-0 z-[70] flex h-screen w-72 flex-col border-r lg:hidden"
            >
              <SidebarContent />
            </motion.aside>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
