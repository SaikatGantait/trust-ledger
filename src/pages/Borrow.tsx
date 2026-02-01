import { useState } from "react";
import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Slider } from "@/components/ui/slider";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from "@/components/ui/dialog";
import { PageLayout } from "@/components/layout/PageLayout";
import {
  CreditCard,
  Lock,
  TrendingUp,
  AlertCircle,
  CheckCircle2,
  ArrowRight,
  Shield,
  Info,
} from "lucide-react";

export default function Borrow() {
  const [amount, setAmount] = useState([5000]);
  const [duration, setDuration] = useState("30");
  const [showConfirmModal, setShowConfirmModal] = useState(false);
  const [isProcessing, setIsProcessing] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const maxAmount = 10000;
  const interestRate = 12; // APR
  const monthlyInterest = (amount[0] * (interestRate / 100)) / 12;

  const handleConfirm = async () => {
    setIsProcessing(true);
    await new Promise((resolve) => setTimeout(resolve, 2000));
    setIsProcessing(false);
    setIsSuccess(true);
  };

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
          <h1 className="text-2xl md:text-3xl font-bold mb-2">Request a Loan</h1>
          <p className="text-muted-foreground">
            Borrow against your credit score. No collateral required.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Form */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="lg:col-span-2"
          >
            <Card className="border-2 shadow-lg">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <CreditCard className="h-5 w-5 text-primary" />
                  Borrow Request
                </CardTitle>
                <CardDescription>
                  Choose your loan amount and duration
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-8">
                {/* Amount Slider */}
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <label className="text-sm font-medium">Loan Amount</label>
                    <span className="text-2xl font-bold text-primary">
                      ₹{amount[0].toLocaleString()}
                    </span>
                  </div>
                  <Slider
                    value={amount}
                    onValueChange={setAmount}
                    max={maxAmount}
                    min={1000}
                    step={500}
                    className="py-4"
                  />
                  <div className="flex justify-between text-sm text-muted-foreground">
                    <span>₹1,000</span>
                    <span>₹{maxAmount.toLocaleString()}</span>
                  </div>
                </div>

                {/* Duration Select */}
                <div className="space-y-2">
                  <label className="text-sm font-medium">Loan Duration</label>
                  <Select value={duration} onValueChange={setDuration}>
                    <SelectTrigger className="h-12">
                      <SelectValue placeholder="Select duration" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="7">7 Days</SelectItem>
                      <SelectItem value="14">14 Days</SelectItem>
                      <SelectItem value="30">30 Days</SelectItem>
                      <SelectItem value="60">60 Days</SelectItem>
                      <SelectItem value="90">90 Days</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                {/* Credit Info */}
                <div className="p-4 rounded-xl bg-accent/10 border border-accent/20">
                  <div className="flex items-start gap-3">
                    <TrendingUp className="h-5 w-5 text-accent shrink-0 mt-0.5" />
                    <div>
                      <div className="font-medium text-sm mb-1">
                        Your credit score allows borrowing up to ₹10,000
                      </div>
                      <div className="text-xs text-muted-foreground">
                        Repay on time to increase your limit
                      </div>
                    </div>
                  </div>
                </div>

                {/* Submit */}
                <Button
                  onClick={() => setShowConfirmModal(true)}
                  className="w-full h-14 text-lg hero-gradient gap-2"
                >
                  Request Loan
                  <ArrowRight className="h-5 w-5" />
                </Button>
              </CardContent>
            </Card>
          </motion.div>

          {/* Summary Sidebar */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="space-y-6"
          >
            {/* Loan Summary */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Loan Summary</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex justify-between py-2 border-b">
                  <span className="text-muted-foreground">Principal</span>
                  <span className="font-medium">₹{amount[0].toLocaleString()}</span>
                </div>
                <div className="flex justify-between py-2 border-b">
                  <span className="text-muted-foreground">Duration</span>
                  <span className="font-medium">{duration} Days</span>
                </div>
                <div className="flex justify-between py-2 border-b">
                  <span className="text-muted-foreground">Interest Rate</span>
                  <span className="font-medium">{interestRate}% APR</span>
                </div>
                <div className="flex justify-between py-2 border-b">
                  <span className="text-muted-foreground">Est. Interest</span>
                  <span className="font-medium">
                    ₹{(monthlyInterest * (parseInt(duration) / 30)).toFixed(0)}
                  </span>
                </div>
                <div className="flex justify-between py-3 text-lg">
                  <span className="font-semibold">Total Repayment</span>
                  <span className="font-bold text-primary">
                    ₹{(amount[0] + monthlyInterest * (parseInt(duration) / 30)).toFixed(0)}
                  </span>
                </div>
              </CardContent>
            </Card>

            {/* Security Notice */}
            <Card className="vault-gradient text-white">
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center">
                    <Lock className="h-5 w-5" />
                  </div>
                  <span className="font-semibold">Vault Protected</span>
                </div>
                <p className="text-sm text-white/80">
                  Loan funds are deposited to your secure Deposit Wallet. 
                  Even if your wallet is hacked, funds remain protected.
                </p>
              </CardContent>
            </Card>
          </motion.div>
        </div>

        {/* Confirmation Modal */}
        <Dialog open={showConfirmModal} onOpenChange={setShowConfirmModal}>
          <DialogContent className="sm:max-w-md">
            {!isSuccess ? (
              <>
                <DialogHeader>
                  <DialogTitle className="flex items-center gap-2">
                    <Shield className="h-5 w-5 text-primary" />
                    Confirm Borrow Request
                  </DialogTitle>
                  <DialogDescription>
                    Review your loan details before confirming
                  </DialogDescription>
                </DialogHeader>

                <div className="space-y-4 py-4">
                  <div className="p-4 rounded-xl bg-muted space-y-3">
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Loan Amount</span>
                      <span className="font-semibold">₹{amount[0].toLocaleString()}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Interest Rate</span>
                      <span className="font-semibold">{interestRate}% APR</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Duration</span>
                      <span className="font-semibold">{duration} Days</span>
                    </div>
                  </div>

                  <div className="p-4 rounded-xl bg-primary/5 border border-primary/20">
                    <div className="flex items-center gap-2 text-sm mb-2">
                      <Lock className="h-4 w-4 text-primary" />
                      <span className="font-medium">Funds Destination</span>
                    </div>
                    <div className="text-sm text-muted-foreground">
                      <strong className="text-foreground">Deposit Wallet</strong> - Your secure vault
                    </div>
                  </div>

                  <div className="p-4 rounded-xl bg-warning/10 border border-warning/30">
                    <div className="flex items-start gap-2">
                      <Info className="h-4 w-4 text-warning shrink-0 mt-0.5" />
                      <div className="text-sm text-muted-foreground">
                        <strong className="text-foreground">Security Notice:</strong> Funds cannot 
                        be withdrawn to personal wallets without identity verification.
                      </div>
                    </div>
                  </div>
                </div>

                <DialogFooter className="gap-2">
                  <Button variant="outline" onClick={() => setShowConfirmModal(false)}>
                    Cancel
                  </Button>
                  <Button
                    onClick={handleConfirm}
                    disabled={isProcessing}
                    className="hero-gradient gap-2"
                  >
                    {isProcessing ? (
                      <>
                        <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                        Processing...
                      </>
                    ) : (
                      <>
                        <CheckCircle2 className="h-4 w-4" />
                        Confirm Borrow
                      </>
                    )}
                  </Button>
                </DialogFooter>
              </>
            ) : (
              <div className="text-center py-8">
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ type: "spring", duration: 0.5 }}
                  className="w-20 h-20 rounded-full bg-accent/10 mx-auto mb-6 flex items-center justify-center"
                >
                  <CheckCircle2 className="h-10 w-10 text-accent" />
                </motion.div>
                <h3 className="text-xl font-bold mb-2">Loan Approved!</h3>
                <p className="text-muted-foreground mb-6">
                  ₹{amount[0].toLocaleString()} has been deposited to your Vault
                </p>
                <Button
                  onClick={() => {
                    setShowConfirmModal(false);
                    setIsSuccess(false);
                  }}
                  className="hero-gradient"
                >
                  View in Vault
                </Button>
              </div>
            )}
          </DialogContent>
        </Dialog>
      </div>
    </PageLayout>
  );
}
