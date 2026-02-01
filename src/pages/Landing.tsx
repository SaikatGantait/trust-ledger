import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { PageLayout } from "@/components/layout/PageLayout";
import { 
  Shield, 
  Fingerprint, 
  TrendingUp, 
  Lock, 
  ArrowRight, 
  CheckCircle2,
  Sparkles,
  Users,
  Zap
} from "lucide-react";

const features = [
  {
    icon: Fingerprint,
    title: "Verify Once",
    description: "PAN + device binding creates a unique identity. One identity per human, forever.",
    highlight: "Zero-Knowledge Proof",
  },
  {
    icon: TrendingUp,
    title: "Build Credit",
    description: "Repay loans to grow your credit score. Your reputation unlocks better rates.",
    highlight: "On-Chain History",
  },
  {
    icon: Lock,
    title: "Borrow Securely",
    description: "Funds go to a protected Deposit Wallet. Hacks don't steal your money.",
    highlight: "Vault Protected",
  },
];

const stats = [
  { value: "₹50Cr+", label: "Total Volume" },
  { value: "12,000+", label: "Verified Identities" },
  { value: "0.3%", label: "Default Rate" },
  { value: "15%", label: "Avg APR" },
];

export default function Landing() {
  return (
    <PageLayout>
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 hero-gradient opacity-5" />
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />
        
        <div className="container px-4 py-20 md:py-32 relative">
          <div className="max-w-4xl mx-auto text-center">
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary border border-primary/20 mb-8"
            >
              <Sparkles className="h-4 w-4 text-primary" />
              <span className="text-sm font-medium text-primary">Trust-Based Lending Protocol</span>
            </motion.div>

            {/* Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6"
            >
              Credit without Collateral.{" "}
              <span className="text-gradient-hero">Built on Identity.</span>
            </motion.h1>

            {/* Subtext */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10"
            >
              Borrow using your reputation. Not your wallet balance.
              Build credit on-chain, access funds securely.
            </motion.p>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex flex-col sm:flex-row items-center justify-center gap-4"
            >
              <Button asChild size="lg" className="hero-gradient text-lg px-8 h-14 gap-2 shadow-lg hover:shadow-xl transition-all hover:scale-105">
                <Link to="/verify">
                  <Shield className="h-5 w-5" />
                  Verify Identity
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="text-lg px-8 h-14 gap-2 border-2 hover:bg-secondary">
                <Link to="/lend">
                  <Users className="h-5 w-5" />
                  Explore as Lender
                </Link>
              </Button>
            </motion.div>
          </div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-20 max-w-4xl mx-auto"
          >
            {stats.map((stat, index) => (
              <div
                key={stat.label}
                className="text-center p-6 rounded-2xl bg-card border shadow-sm"
              >
                <div className="text-2xl md:text-3xl font-bold text-primary mb-1">
                  {stat.value}
                </div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 md:py-32 bg-muted/30">
        <div className="container px-4">
          <div className="text-center mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-4">How It Works</h2>
              <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                Three simple steps to access credit without traditional collateral
              </p>
            </motion.div>
          </div>

          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="relative h-full overflow-hidden group hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border-2 hover:border-primary/20">
                  <CardContent className="p-8">
                    {/* Step Number */}
                    <div className="absolute top-4 right-4 text-6xl font-bold text-muted/30">
                      {index + 1}
                    </div>
                    
                    {/* Icon */}
                    <div className="relative mb-6">
                      <div className="w-14 h-14 rounded-2xl hero-gradient flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                        <feature.icon className="h-7 w-7 text-white" />
                      </div>
                    </div>

                    {/* Content */}
                    <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                    <p className="text-muted-foreground mb-4">{feature.description}</p>
                    
                    {/* Highlight */}
                    <div className="inline-flex items-center gap-1.5 text-sm font-medium text-accent">
                      <CheckCircle2 className="h-4 w-4" />
                      {feature.highlight}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Trust Banner */}
      <section className="py-20 md:py-32">
        <div className="container px-4">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative overflow-hidden rounded-3xl hero-gradient p-10 md:p-16 text-center text-white"
          >
            {/* Decorative elements */}
            <div className="absolute top-0 left-0 w-64 h-64 bg-white/5 rounded-full -translate-x-1/2 -translate-y-1/2" />
            <div className="absolute bottom-0 right-0 w-96 h-96 bg-white/5 rounded-full translate-x-1/3 translate-y-1/3" />
            
            <div className="relative">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm mb-6">
                <Lock className="h-4 w-4" />
                <span className="text-sm font-medium">Secure by Design</span>
              </div>
              
              <h2 className="text-3xl md:text-5xl font-bold mb-6 max-w-3xl mx-auto">
                Your identity is permanent. Defaults have consequences.
              </h2>
              
              <p className="text-lg md:text-xl text-white/80 max-w-2xl mx-auto mb-8">
                Unlike traditional DeFi, your credit history follows you across wallets and chains. 
                Build trust, earn better rates.
              </p>
              
              <Button asChild size="lg" variant="secondary" className="gap-2 text-lg px-8 h-14">
                <Link to="/verify">
                  Get Started
                  <ArrowRight className="h-5 w-5" />
                </Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Security Features */}
      <section className="py-20 md:py-32 bg-muted/30">
        <div className="container px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-accent/10 border border-accent/20 text-accent text-sm font-medium mb-6">
                <Zap className="h-3.5 w-3.5" />
                Why CredLayer?
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Hack-Resistant by Architecture
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                Even if your wallet is compromised, your borrowed funds remain safe in the 
                Deposit Wallet—protected by identity verification and device binding.
              </p>
              
              <ul className="space-y-4">
                {[
                  "Funds never leave the protected vault",
                  "Withdrawals require identity + device proof",
                  "Credit tied to you, not your keys",
                  "Defaults affect future access, not just one wallet",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-accent mt-0.5 shrink-0" />
                    <span className="text-foreground">{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              {/* Vault Visualization */}
              <div className="relative p-8 rounded-3xl vault-gradient text-white overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent" />
                
                <div className="relative space-y-6">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center">
                      <Lock className="h-6 w-6" />
                    </div>
                    <div>
                      <div className="font-semibold">Deposit Wallet</div>
                      <div className="text-sm text-white/60">ZK-Verified Access Only</div>
                    </div>
                  </div>

                  <div className="h-px bg-white/20" />

                  <div className="grid grid-cols-2 gap-4">
                    <div className="p-4 rounded-xl bg-white/10">
                      <div className="text-sm text-white/60 mb-1">Security Status</div>
                      <div className="flex items-center gap-2 font-semibold">
                        <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                        Locked
                      </div>
                    </div>
                    <div className="p-4 rounded-xl bg-white/10">
                      <div className="text-sm text-white/60 mb-1">Access Type</div>
                      <div className="font-semibold">Identity Bound</div>
                    </div>
                  </div>

                  <div className="p-4 rounded-xl bg-white/5 border border-white/10">
                    <div className="text-sm text-white/80">
                      💡 Even if your wallet is hacked, funds stay protected here.
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </PageLayout>
  );
}
