import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { PageLayout } from "@/components/layout/PageLayout";
import { 
  Shield, 
  Fingerprint, 
  CheckCircle2, 
  ArrowRight, 
  Smartphone,
  FileText,
  Lock,
  Sparkles
} from "lucide-react";

const steps = [
  { id: 1, title: "PAN Verification", icon: FileText },
  { id: 2, title: "Device Binding", icon: Smartphone },
  { id: 3, title: "Identity Created", icon: CheckCircle2 },
];

export default function IdentityVerification() {
  const [currentStep, setCurrentStep] = useState(1);
  const [panNumber, setPanNumber] = useState("");
  const [isVerifying, setIsVerifying] = useState(false);
  const navigate = useNavigate();

  const handlePanVerify = async () => {
    setIsVerifying(true);
    // Simulate verification
    await new Promise((resolve) => setTimeout(resolve, 2000));
    setIsVerifying(false);
    setCurrentStep(2);
  };

  const handleDeviceBind = async () => {
    setIsVerifying(true);
    await new Promise((resolve) => setTimeout(resolve, 2500));
    setIsVerifying(false);
    setCurrentStep(3);
  };

  const handleComplete = () => {
    navigate("/dashboard");
  };

  return (
    <PageLayout showFooter={false}>
      <div className="min-h-[calc(100vh-4rem)] bg-gradient-to-b from-muted/30 to-background">
        <div className="container px-4 py-12">
          {/* Stepper */}
          <div className="max-w-2xl mx-auto mb-12">
            <div className="flex items-center justify-between relative">
              {/* Progress Line */}
              <div className="absolute top-6 left-0 right-0 h-0.5 bg-border">
                <motion.div
                  className="h-full hero-gradient"
                  initial={{ width: "0%" }}
                  animate={{ width: `${((currentStep - 1) / (steps.length - 1)) * 100}%` }}
                  transition={{ duration: 0.5 }}
                />
              </div>

              {steps.map((step, index) => {
                const isActive = step.id === currentStep;
                const isCompleted = step.id < currentStep;
                const StepIcon = step.icon;

                return (
                  <div key={step.id} className="relative flex flex-col items-center">
                    <motion.div
                      initial={{ scale: 0.8 }}
                      animate={{ scale: isActive ? 1.1 : 1 }}
                      className={`w-12 h-12 rounded-full flex items-center justify-center z-10 transition-colors duration-300 ${
                        isCompleted
                          ? "hero-gradient text-white"
                          : isActive
                          ? "hero-gradient text-white shadow-lg glow"
                          : "bg-muted border-2 border-border text-muted-foreground"
                      }`}
                    >
                      {isCompleted ? (
                        <CheckCircle2 className="h-6 w-6" />
                      ) : (
                        <StepIcon className="h-5 w-5" />
                      )}
                    </motion.div>
                    <span
                      className={`mt-3 text-sm font-medium ${
                        isActive ? "text-primary" : "text-muted-foreground"
                      }`}
                    >
                      {step.title}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Step Content */}
          <div className="max-w-xl mx-auto">
            <AnimatePresence mode="wait">
              {currentStep === 1 && (
                <motion.div
                  key="step1"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.3 }}
                >
                  <Card className="border-2 shadow-xl">
                    <CardHeader className="text-center pb-2">
                      <div className="w-16 h-16 rounded-2xl hero-gradient mx-auto mb-4 flex items-center justify-center">
                        <FileText className="h-8 w-8 text-white" />
                      </div>
                      <CardTitle className="text-2xl">PAN Verification</CardTitle>
                      <CardDescription className="text-base">
                        Verify your identity with your PAN card
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-6 pt-4">
                      <div className="space-y-2">
                        <Label htmlFor="pan">PAN Number</Label>
                        <Input
                          id="pan"
                          placeholder="ABCDE1234F"
                          value={panNumber}
                          onChange={(e) => setPanNumber(e.target.value.toUpperCase())}
                          className="text-lg h-12 font-mono tracking-wider"
                          maxLength={10}
                        />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="name">Name (Auto-filled)</Label>
                        <Input
                          id="name"
                          value={panNumber.length === 10 ? "Rahul Sharma" : ""}
                          readOnly
                          className="bg-muted h-12"
                          placeholder="Will be auto-filled after verification"
                        />
                      </div>

                      <div className="p-4 rounded-xl bg-info/10 border border-info/20">
                        <div className="flex gap-3">
                          <Lock className="h-5 w-5 text-info shrink-0 mt-0.5" />
                          <div className="text-sm text-muted-foreground">
                            <strong className="text-foreground">Privacy First:</strong> Your PAN data is never stored. 
                            A zero-knowledge proof is generated instead.
                          </div>
                        </div>
                      </div>

                      <Button
                        onClick={handlePanVerify}
                        disabled={panNumber.length !== 10 || isVerifying}
                        className="w-full h-12 text-lg hero-gradient gap-2"
                      >
                        {isVerifying ? (
                          <>
                            <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                            Verifying...
                          </>
                        ) : (
                          <>
                            Verify PAN
                            <ArrowRight className="h-5 w-5" />
                          </>
                        )}
                      </Button>
                    </CardContent>
                  </Card>
                </motion.div>
              )}

              {currentStep === 2 && (
                <motion.div
                  key="step2"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.3 }}
                >
                  <Card className="border-2 shadow-xl">
                    <CardHeader className="text-center pb-2">
                      <div className="w-16 h-16 rounded-2xl hero-gradient mx-auto mb-4 flex items-center justify-center relative">
                        <Fingerprint className="h-8 w-8 text-white" />
                        <div className="absolute inset-0 rounded-2xl border-2 border-white/50 animate-ping" />
                      </div>
                      <CardTitle className="text-2xl">Device Binding</CardTitle>
                      <CardDescription className="text-base">
                        Bind this identity to your current device
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-6 pt-4">
                      {/* Animated Biometric Visual */}
                      <div className="relative py-8">
                        <div className="w-32 h-32 mx-auto relative">
                          <div className="absolute inset-0 rounded-full bg-accent/20 animate-ping" />
                          <div className="absolute inset-2 rounded-full bg-accent/30 animate-pulse" />
                          <div className="absolute inset-4 rounded-full hero-gradient flex items-center justify-center">
                            <Fingerprint className="h-12 w-12 text-white" />
                          </div>
                        </div>
                      </div>

                      <div className="text-center text-muted-foreground">
                        Use your device's biometric authentication (Face ID / Fingerprint) 
                        to securely bind this identity.
                      </div>

                      <div className="p-4 rounded-xl bg-warning/10 border border-warning/20">
                        <div className="flex gap-3">
                          <Smartphone className="h-5 w-5 text-warning shrink-0 mt-0.5" />
                          <div className="text-sm text-muted-foreground">
                            <strong className="text-foreground">Important:</strong> This device will be 
                            linked to your identity. You'll need it for future transactions.
                          </div>
                        </div>
                      </div>

                      <Button
                        onClick={handleDeviceBind}
                        disabled={isVerifying}
                        className="w-full h-12 text-lg hero-gradient gap-2"
                      >
                        {isVerifying ? (
                          <>
                            <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                            Binding Device...
                          </>
                        ) : (
                          <>
                            <Fingerprint className="h-5 w-5" />
                            Bind Device
                          </>
                        )}
                      </Button>
                    </CardContent>
                  </Card>
                </motion.div>
              )}

              {currentStep === 3 && (
                <motion.div
                  key="step3"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4 }}
                >
                  <Card className="border-2 shadow-xl overflow-hidden">
                    <div className="hero-gradient p-6 text-white text-center">
                      <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ type: "spring", duration: 0.6, delay: 0.2 }}
                        className="w-20 h-20 rounded-full bg-white/20 mx-auto mb-4 flex items-center justify-center"
                      >
                        <CheckCircle2 className="h-10 w-10" />
                      </motion.div>
                      <h2 className="text-2xl font-bold">Identity Verified!</h2>
                      <p className="text-white/80 mt-1">Welcome to CredLayer</p>
                    </div>
                    
                    <CardContent className="p-6 space-y-4">
                      <div className="grid grid-cols-2 gap-4">
                        <div className="p-4 rounded-xl bg-muted">
                          <div className="text-sm text-muted-foreground mb-1">Identity Status</div>
                          <div className="flex items-center gap-2 font-semibold text-accent">
                            <CheckCircle2 className="h-4 w-4" />
                            Verified
                          </div>
                        </div>
                        <div className="p-4 rounded-xl bg-muted">
                          <div className="text-sm text-muted-foreground mb-1">Credit Score</div>
                          <div className="font-semibold text-2xl">0</div>
                        </div>
                      </div>

                      <div className="p-4 rounded-xl bg-muted">
                        <div className="text-sm text-muted-foreground mb-1">Identity Hash</div>
                        <div className="font-mono text-sm bg-background rounded-lg px-3 py-2 border">
                          0xA9F...E21
                        </div>
                      </div>

                      <div className="p-4 rounded-xl bg-muted">
                        <div className="text-sm text-muted-foreground mb-1">Account Type</div>
                        <div className="flex items-center gap-2">
                          <Sparkles className="h-4 w-4 text-primary" />
                          <span className="font-medium">Unique Living Identity</span>
                        </div>
                      </div>

                      <div className="p-4 rounded-xl bg-accent/10 border border-accent/20">
                        <div className="flex gap-3">
                          <Shield className="h-5 w-5 text-accent shrink-0 mt-0.5" />
                          <div className="text-sm">
                            Your identity is now active on-chain. Start building your credit history!
                          </div>
                        </div>
                      </div>

                      <Button
                        onClick={handleComplete}
                        className="w-full h-12 text-lg hero-gradient gap-2"
                      >
                        Go to Dashboard
                        <ArrowRight className="h-5 w-5" />
                      </Button>
                    </CardContent>
                  </Card>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </PageLayout>
  );
}
