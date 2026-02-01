import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu, Wallet, Shield, X } from "lucide-react";
import { motion } from "framer-motion";

const navLinks = [
  { href: "/dashboard", label: "Dashboard" },
  { href: "/borrow-lend", label: "Borrow & Lend" },
  { href: "/vault", label: "Vault" },
  { href: "/credit-profile", label: "Credit Profile" },
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isConnected, setIsConnected] = useState(false);
  const location = useLocation();

  const handleConnect = () => {
    setIsConnected(!isConnected);
  };

  return (
    <motion.header
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="sticky top-0 z-50 w-full border-b bg-background/80 backdrop-blur-xl"
    >
      <div className="container flex h-16 items-center justify-between px-4">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2.5">
          <div className="relative flex h-9 w-9 items-center justify-center rounded-lg hero-gradient">
            <Shield className="h-5 w-5 text-white" />
            <div className="absolute inset-0 rounded-lg bg-white/20 animate-pulse-soft" />
          </div>
          <span className="text-xl font-bold tracking-tight">
            <span className="text-primary">R</span>
            <span className="text-foreground">-Credit</span>
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-1">
          {navLinks.map((link) => {
            const isActive = location.pathname === link.href;
            return (
              <Link
                key={link.href}
                to={link.href}
                className={`relative px-4 py-2 text-sm font-medium transition-colors rounded-lg ${
                  isActive
                    ? "text-primary"
                    : "text-muted-foreground hover:text-foreground hover:bg-muted"
                }`}
              >
                {link.label}
                {isActive && (
                  <motion.div
                    layoutId="navbar-indicator"
                    className="absolute bottom-0 left-2 right-2 h-0.5 bg-primary rounded-full"
                    transition={{ type: "spring", bounce: 0.25, duration: 0.5 }}
                  />
                )}
              </Link>
            );
          })}
        </nav>

        {/* Connect Wallet Button */}
        <div className="hidden md:flex items-center gap-3">
          <Button
            onClick={handleConnect}
            variant={isConnected ? "outline" : "default"}
            className={`gap-2 ${
              isConnected
                ? "border-accent text-accent hover:bg-accent/10"
                : "hero-gradient hover:opacity-90"
            }`}
          >
            <Wallet className="h-4 w-4" />
            {isConnected ? "0xA9F...E21" : "Connect Wallet"}
          </Button>
        </div>

        {/* Mobile Menu */}
        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger asChild className="md:hidden">
            <Button variant="ghost" size="icon">
              <Menu className="h-5 w-5" />
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="w-[300px] p-0">
            <div className="flex flex-col h-full">
              <div className="flex items-center justify-between p-4 border-b">
                <span className="text-lg font-semibold">Menu</span>
                <Button variant="ghost" size="icon" onClick={() => setIsOpen(false)}>
                  <X className="h-5 w-5" />
                </Button>
              </div>
              <nav className="flex flex-col p-4 gap-1">
                {navLinks.map((link) => {
                  const isActive = location.pathname === link.href;
                  return (
                    <Link
                      key={link.href}
                      to={link.href}
                      onClick={() => setIsOpen(false)}
                      className={`px-4 py-3 rounded-lg text-sm font-medium transition-colors ${
                        isActive
                          ? "bg-primary/10 text-primary"
                          : "text-muted-foreground hover:bg-muted hover:text-foreground"
                      }`}
                    >
                      {link.label}
                    </Link>
                  );
                })}
              </nav>
              <div className="mt-auto p-4 border-t">
                <Button
                  onClick={handleConnect}
                  className="w-full gap-2 hero-gradient"
                >
                  <Wallet className="h-4 w-4" />
                  {isConnected ? "0xA9F...E21" : "Connect Wallet"}
                </Button>
              </div>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </motion.header>
  );
}
