import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { PageLayout } from "@/components/layout/PageLayout";
import {
  TrendingUp,
  Wallet,
  ShieldCheck,
  AlertTriangle,
  Info,
  Percent,
  Users,
  PiggyBank,
  ArrowUpRight,
} from "lucide-react";

const overviewCards = [
  {
    title: "Total Deposited",
    value: "₹2,50,000",
    change: "+₹15,000",
    trend: "up",
    icon: Wallet,
    color: "primary",
  },
  {
    title: "Average APR",
    value: "14.5%",
    change: "+2.1%",
    trend: "up",
    icon: Percent,
    color: "accent",
  },
  {
    title: "Default Rate",
    value: "0.3%",
    change: "-0.1%",
    trend: "down",
    icon: AlertTriangle,
    color: "warning",
  },
  {
    title: "Insurance Coverage",
    value: "95%",
    change: "Protected",
    trend: "neutral",
    icon: ShieldCheck,
    color: "info",
  },
];

const lendingPools = [
  {
    name: "Conservative Pool",
    riskLevel: "Low",
    apr: "8-10%",
    coverage: "100%",
    minDeposit: "₹1,000",
  },
  {
    name: "Balanced Pool",
    riskLevel: "Medium",
    apr: "12-15%",
    coverage: "90%",
    minDeposit: "₹5,000",
  },
  {
    name: "Growth Pool",
    riskLevel: "High",
    apr: "18-24%",
    coverage: "75%",
    minDeposit: "₹10,000",
  },
];

const riskColors: Record<string, string> = {
  Low: "bg-accent/10 text-accent border-accent/30",
  Medium: "bg-warning/10 text-warning border-warning/30",
  High: "bg-destructive/10 text-destructive border-destructive/30",
};

export default function LenderDashboard() {
  return (
    <PageLayout>
      <div className="container px-4 py-8 md:py-12">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-8"
        >
          <h1 className="text-2xl md:text-3xl font-bold mb-2">Lender Dashboard</h1>
          <p className="text-muted-foreground">
            Earn yield by funding trust-based loans
          </p>
        </motion.div>

        {/* Overview Cards */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          {overviewCards.map((card, index) => (
            <motion.div
              key={card.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.05 * index }}
            >
              <Card className="metric-card h-full">
                <CardContent className="p-4 md:p-6">
                  <div className="flex items-start justify-between mb-3">
                    <div
                      className={`w-10 h-10 rounded-xl flex items-center justify-center ${
                        card.color === "primary"
                          ? "bg-primary/10 text-primary"
                          : card.color === "accent"
                          ? "bg-accent/10 text-accent"
                          : card.color === "warning"
                          ? "bg-warning/10 text-warning"
                          : "bg-info/10 text-info"
                      }`}
                    >
                      <card.icon className="h-5 w-5" />
                    </div>
                    {card.trend === "up" && (
                      <div className="flex items-center gap-1 text-xs text-accent">
                        <ArrowUpRight className="h-3 w-3" />
                        {card.change}
                      </div>
                    )}
                  </div>
                  <div className="text-2xl md:text-3xl font-bold mb-1">{card.value}</div>
                  <div className="text-xs md:text-sm text-muted-foreground">{card.title}</div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Lending Pools Table */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="lg:col-span-2"
          >
            <Card className="border-2 shadow-lg">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <PiggyBank className="h-5 w-5 text-primary" />
                  Active Lending Pools
                </CardTitle>
                <CardDescription>Choose a pool based on your risk appetite</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="overflow-x-auto">
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>Pool Name</TableHead>
                        <TableHead>Risk Level</TableHead>
                        <TableHead>APR Range</TableHead>
                        <TableHead>Insurance</TableHead>
                        <TableHead className="text-right">Action</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {lendingPools.map((pool) => (
                        <TableRow key={pool.name} className="group">
                          <TableCell>
                            <div>
                              <div className="font-medium">{pool.name}</div>
                              <div className="text-xs text-muted-foreground">
                                Min: {pool.minDeposit}
                              </div>
                            </div>
                          </TableCell>
                          <TableCell>
                            <Badge
                              variant="outline"
                              className={`${riskColors[pool.riskLevel]} font-medium`}
                            >
                              {pool.riskLevel}
                            </Badge>
                          </TableCell>
                          <TableCell>
                            <span className="font-semibold text-accent">{pool.apr}</span>
                          </TableCell>
                          <TableCell>
                            <div className="flex items-center gap-1">
                              <ShieldCheck className="h-4 w-4 text-info" />
                              {pool.coverage}
                            </div>
                          </TableCell>
                          <TableCell className="text-right">
                            <Button size="sm" className="hero-gradient">
                              Deposit
                            </Button>
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Explanation Panel */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="space-y-6"
          >
            {/* How It Works */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg flex items-center gap-2">
                  <Info className="h-5 w-5 text-info" />
                  How Lending Works
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="p-4 rounded-xl bg-muted">
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-primary/10 text-primary flex items-center justify-center text-sm font-bold shrink-0">
                      1
                    </div>
                    <div>
                      <h4 className="font-medium text-sm">Deposit Funds</h4>
                      <p className="text-xs text-muted-foreground">
                        Choose a pool and deposit your funds
                      </p>
                    </div>
                  </div>
                </div>
                <div className="p-4 rounded-xl bg-muted">
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-primary/10 text-primary flex items-center justify-center text-sm font-bold shrink-0">
                      2
                    </div>
                    <div>
                      <h4 className="font-medium text-sm">Earn Interest</h4>
                      <p className="text-xs text-muted-foreground">
                        Borrowers pay interest on their loans
                      </p>
                    </div>
                  </div>
                </div>
                <div className="p-4 rounded-xl bg-muted">
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-primary/10 text-primary flex items-center justify-center text-sm font-bold shrink-0">
                      3
                    </div>
                    <div>
                      <h4 className="font-medium text-sm">Insurance Protection</h4>
                      <p className="text-xs text-muted-foreground">
                        Fees fund an insurance pool for defaults
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Risk Notice */}
            <Card className="border-warning/30 bg-warning/5">
              <CardContent className="p-6">
                <div className="flex items-start gap-3">
                  <AlertTriangle className="h-5 w-5 text-warning shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-semibold text-sm mb-2">Risk Disclosure</h4>
                    <p className="text-xs text-muted-foreground">
                      Some borrowers may default. Higher returns compensate for risk. 
                      Fees fund an insurance pool to cover potential losses.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Stats */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg flex items-center gap-2">
                  <Users className="h-5 w-5 text-primary" />
                  Pool Statistics
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex justify-between py-2 border-b">
                  <span className="text-sm text-muted-foreground">Active Lenders</span>
                  <span className="font-medium">1,247</span>
                </div>
                <div className="flex justify-between py-2 border-b">
                  <span className="text-sm text-muted-foreground">Total TVL</span>
                  <span className="font-medium">₹15.2 Cr</span>
                </div>
                <div className="flex justify-between py-2 border-b">
                  <span className="text-sm text-muted-foreground">Active Loans</span>
                  <span className="font-medium">3,892</span>
                </div>
                <div className="flex justify-between py-2">
                  <span className="text-sm text-muted-foreground">Insurance Pool</span>
                  <span className="font-medium text-accent">₹45.6 L</span>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </PageLayout>
  );
}
