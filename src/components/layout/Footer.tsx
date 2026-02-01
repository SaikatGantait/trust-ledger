import { Link } from "react-router-dom";
import { Shield, Github, FileText, Info, ExternalLink } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t bg-muted/30">
      <div className="container px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="md:col-span-2">
            <Link to="/" className="flex items-center gap-2.5 mb-4">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg hero-gradient">
                <Shield className="h-4 w-4 text-white" />
              </div>
              <span className="text-lg font-bold">
                <span className="text-primary">Cred</span>
                <span className="text-foreground">Layer</span>
              </span>
            </Link>
            <p className="text-sm text-muted-foreground max-w-sm mb-4">
              Trust-based lending protocol where credit is tied to identity, not wallets. 
              Build your reputation, borrow securely.
            </p>
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-warning/10 border border-warning/30">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-warning opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-warning"></span>
              </span>
              <span className="text-xs font-medium text-warning-foreground">Hackathon Demo</span>
            </div>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-semibold mb-4 text-sm">Protocol</h4>
            <ul className="space-y-3">
              <li>
                <Link to="/dashboard" className="text-sm text-muted-foreground hover:text-foreground transition-colors inline-flex items-center gap-1">
                  Dashboard
                </Link>
              </li>
              <li>
                <Link to="/borrow" className="text-sm text-muted-foreground hover:text-foreground transition-colors inline-flex items-center gap-1">
                  Borrow
                </Link>
              </li>
              <li>
                <Link to="/lend" className="text-sm text-muted-foreground hover:text-foreground transition-colors inline-flex items-center gap-1">
                  Lend
                </Link>
              </li>
              <li>
                <Link to="/vault" className="text-sm text-muted-foreground hover:text-foreground transition-colors inline-flex items-center gap-1">
                  Vault
                </Link>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="font-semibold mb-4 text-sm">Resources</h4>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors inline-flex items-center gap-1">
                  <Info className="h-3.5 w-3.5" />
                  About
                </a>
              </li>
              <li>
                <a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors inline-flex items-center gap-1">
                  <FileText className="h-3.5 w-3.5" />
                  Docs
                </a>
              </li>
              <li>
                <a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors inline-flex items-center gap-1">
                  <Github className="h-3.5 w-3.5" />
                  GitHub
                  <ExternalLink className="h-3 w-3" />
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t mt-8 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-muted-foreground">
            © 2024 CredLayer. Built for demonstration purposes.
          </p>
          <p className="text-xs text-muted-foreground">
            This is a hackathon demo. Not for production use.
          </p>
        </div>
      </div>
    </footer>
  );
}
