import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  Mail, AlertTriangle, CheckCircle2, XCircle, 
  ArrowRight, RotateCcw, Paperclip, ExternalLink,
  User, Clock, Flag
} from "lucide-react";

interface Email {
  id: string;
  from: { name: string; email: string };
  subject: string;
  date: string;
  body: string;
  attachment?: string;
  isPhishing: boolean;
  redFlags: string[];
  explanation: string;
}

const emails: Email[] = [
  {
    id: "1",
    from: { name: "Amazon Security", email: "security@amaz0n-alerts.com" },
    subject: "⚠️ URGENT: Your Account Has Been Compromised",
    date: "Today, 10:23 AM",
    body: `Dear Valued Customer,

We have detected unusual activity on your Amazon account. Someone tried to access your account from an unrecognized device.

For your protection, we have temporarily limited your account. To restore full access, please verify your information immediately by clicking the link below:

[Verify Account Now]

If you do not verify within 24 hours, your account will be permanently suspended.

Thank you for your immediate attention to this matter.

Amazon Security Team`,
    isPhishing: true,
    redFlags: [
      "Fake domain: 'amaz0n-alerts.com' uses zero instead of 'o'",
      "Creates artificial urgency with threats",
      "Generic greeting 'Dear Valued Customer'",
      "Threatens permanent suspension",
      "Pressures immediate action"
    ],
    explanation: "This is a classic phishing attempt. Amazon would never send emails from a misspelled domain, threaten permanent suspension, or pressure you with 24-hour deadlines. Always check sender domains carefully."
  },
  {
    id: "2",
    from: { name: "LinkedIn", email: "notifications@linkedin.com" },
    subject: "John Smith viewed your profile",
    date: "Today, 9:15 AM",
    body: `Hi there,

John Smith, Senior Recruiter at Tech Solutions Inc., viewed your profile.

See what they're interested in:
• Your recent experience at your current company
• Your skills and endorsements

View Profile

You received this email because you have notifications enabled for profile views.

Manage your notification settings
LinkedIn Corporation, 1000 W Maude Ave, Sunnyvale, CA 94085`,
    isPhishing: false,
    redFlags: [],
    explanation: "This is a legitimate LinkedIn notification. The sender domain is correct (linkedin.com), there's no urgency or threats, and it follows LinkedIn's standard email format. The footer contains proper company information."
  },
  {
    id: "3",
    from: { name: "IT Support", email: "helpdesk@company-it-support.net" },
    subject: "Password Expiration Notice - Action Required",
    date: "Yesterday, 4:45 PM",
    body: `Hello Employee,

Your network password will expire in 2 hours. To prevent losing access to company systems, click here to reset your password immediately.

[Reset Password Now]

Note: Failure to reset your password will result in account lockout and you will need to contact IT in person to regain access.

IT Support Team
Company IT Department`,
    attachment: "password_reset_form.exe",
    isPhishing: true,
    redFlags: [
      "Generic external domain, not your actual company",
      "Vague greeting 'Hello Employee'",
      "Extremely short timeframe creates pressure",
      "Suspicious .exe attachment",
      "Threatens consequences for non-compliance"
    ],
    explanation: "Internal IT would email from your company domain, address you by name, and never send .exe files. Password resets should go through your company's official portal, not email links."
  },
  {
    id: "4",
    from: { name: "PayPal", email: "service@paypal.com" },
    subject: "Receipt for your payment to Netflix",
    date: "Yesterday, 2:30 PM",
    body: `Hi Sarah,

You sent a payment of $15.99 USD to Netflix.

Transaction ID: 5RG28947KL392847S
Date: January 15, 2025

If you didn't make this payment, visit the PayPal Resolution Center.

Thanks for using PayPal.

The PayPal Team

PayPal is committed to preventing fraudulent emails. Emails from PayPal will always contain your full name.`,
    isPhishing: false,
    redFlags: [],
    explanation: "This is a legitimate PayPal receipt. It uses the correct domain, addresses you by name, includes a real transaction ID format, and explains PayPal's security practices. The footer is consistent with genuine PayPal communications."
  },
  {
    id: "5",
    from: { name: "Michael Chen - CEO", email: "m.chen.ceo@gmail.com" },
    subject: "Confidential Request - Need Your Help",
    date: "Today, 8:05 AM",
    body: `Hey,

I'm in a meeting and need you to handle something urgently. Can you purchase 5 Amazon gift cards worth $200 each? It's for employee appreciation.

Please buy them and send me the codes directly. I'll reimburse you when I'm out of this meeting.

This is time sensitive, please don't discuss with anyone.

Thanks,
Michael

Sent from my iPhone`,
    isPhishing: true,
    redFlags: [
      "CEO using personal Gmail instead of company email",
      "Requests gift cards - common scam tactic",
      "Asks for secrecy: 'don't discuss with anyone'",
      "Creates urgency with 'time sensitive'",
      "Unusual request bypassing normal procedures"
    ],
    explanation: "This is CEO fraud / Business Email Compromise. Executives don't ask employees to buy gift cards, especially through personal email with secrecy requirements. Always verify unusual requests through a separate channel."
  },
  {
    id: "6",
    from: { name: "Google Security", email: "no-reply@accounts.google.com" },
    subject: "Security alert: New sign-in on Windows",
    date: "2 days ago",
    body: `Your Google Account was just signed in to from a new Windows device.

New device sign-in:
Device: Windows Computer
Location: San Francisco, CA, USA
Time: January 13, 2025, 3:42 PM PST

If this was you, you don't need to do anything.

If you don't recognize this activity, review your account security.

You received this email to let you know about important changes to your Google Account and services.

Google LLC, 1600 Amphitheatre Parkway, Mountain View, CA 94043`,
    isPhishing: false,
    redFlags: [],
    explanation: "This is a genuine Google security alert. The domain is legitimate, it provides specific details without requesting information, and doesn't create false urgency. Google's security notifications follow this format."
  },
];

const PhishingDemo = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<boolean | null>(null);
  const [showResult, setShowResult] = useState(false);
  const [score, setScore] = useState(0);
  const [completed, setCompleted] = useState(false);

  const currentEmail = emails[currentIndex];

  const handleAnswer = (isPhishing: boolean) => {
    setSelectedAnswer(isPhishing);
    setShowResult(true);
    if (isPhishing === currentEmail.isPhishing) {
      setScore(score + 1);
    }
  };

  const nextEmail = () => {
    if (currentIndex < emails.length - 1) {
      setCurrentIndex(currentIndex + 1);
      setSelectedAnswer(null);
      setShowResult(false);
    } else {
      setCompleted(true);
    }
  };

  const restart = () => {
    setCurrentIndex(0);
    setSelectedAnswer(null);
    setShowResult(false);
    setScore(0);
    setCompleted(false);
  };

  if (completed) {
    const percentage = Math.round((score / emails.length) * 100);
    return (
      <div className="min-h-screen pt-24 pb-12">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto">
            <div className="card-gradient border border-border rounded-2xl p-8 md:p-12 text-center">
              <div className="w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-6">
                <Flag className="h-10 w-10 text-primary" />
              </div>
              
              <h1 className="text-3xl font-bold text-foreground mb-2">Demo Complete!</h1>
              <p className="text-muted-foreground mb-8">Here's how you did at spotting phishing attempts</p>

              <div className="bg-secondary/50 rounded-xl p-6 mb-8">
                <div className="text-6xl font-bold text-foreground mb-2">{percentage}%</div>
                <div className="text-xl text-muted-foreground">
                  {score} of {emails.length} correctly identified
                </div>
              </div>

              {percentage === 100 ? (
                <p className="text-green-500 mb-8">Excellent! You're a phishing detection expert!</p>
              ) : percentage >= 70 ? (
                <p className="text-yellow-500 mb-8">Good job! Keep practicing to sharpen your skills.</p>
              ) : (
                <p className="text-primary mb-8">Consider reviewing our modules to improve your detection skills.</p>
              )}

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button variant="hero" onClick={restart}>
                  <RotateCcw className="mr-2 h-4 w-4" />
                  Try Again
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen pt-24 pb-12">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold text-foreground mb-2">Phishing Detection Demo</h1>
            <p className="text-muted-foreground">
              Review each email and decide: Is it legitimate or a phishing attempt?
            </p>
            <div className="mt-4 text-sm text-muted-foreground">
              Email {currentIndex + 1} of {emails.length} | Score: {score}/{currentIndex + (showResult ? 1 : 0)}
            </div>
          </div>

          {/* Email Preview */}
          <div className="card-gradient border border-border rounded-xl overflow-hidden mb-6">
            {/* Email Header */}
            <div className="bg-secondary/50 p-4 border-b border-border">
              <div className="flex items-start justify-between mb-2">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center">
                    <User className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <div className="font-medium text-foreground">{currentEmail.from.name}</div>
                    <div className="text-sm text-muted-foreground font-mono">{currentEmail.from.email}</div>
                  </div>
                </div>
                <div className="text-sm text-muted-foreground flex items-center gap-1">
                  <Clock className="h-4 w-4" />
                  {currentEmail.date}
                </div>
              </div>
              <div className="font-semibold text-foreground mt-3">{currentEmail.subject}</div>
              {currentEmail.attachment && (
                <div className="mt-2 flex items-center gap-2 text-sm text-muted-foreground">
                  <Paperclip className="h-4 w-4" />
                  <span className="font-mono">{currentEmail.attachment}</span>
                </div>
              )}
            </div>

            {/* Email Body */}
            <div className="p-6">
              <div className="whitespace-pre-line text-foreground/90 leading-relaxed">
                {currentEmail.body.split('\n').map((line, i) => {
                  if (line.includes('[') && line.includes(']')) {
                    return (
                      <p key={i} className="my-2">
                        <span className="text-primary underline cursor-pointer inline-flex items-center gap-1">
                          {line.replace(/[\[\]]/g, '')}
                          <ExternalLink className="h-3 w-3" />
                        </span>
                      </p>
                    );
                  }
                  return <p key={i} className="my-1">{line}</p>;
                })}
              </div>
            </div>
          </div>

          {/* Answer Buttons */}
          {!showResult && (
            <div className="grid grid-cols-2 gap-4 mb-6">
              <Button
                variant="outline"
                size="lg"
                className="h-20 border-green-500/50 hover:bg-green-500/10 hover:border-green-500"
                onClick={() => handleAnswer(false)}
              >
                <CheckCircle2 className="h-6 w-6 text-green-500 mr-3" />
                <span className="text-lg">Legitimate</span>
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="h-20 border-primary/50 hover:bg-primary/10 hover:border-primary"
                onClick={() => handleAnswer(true)}
              >
                <AlertTriangle className="h-6 w-6 text-primary mr-3" />
                <span className="text-lg">Phishing</span>
              </Button>
            </div>
          )}

          {/* Result */}
          {showResult && (
            <div className="space-y-4">
              <div className={`p-6 rounded-xl border ${
                selectedAnswer === currentEmail.isPhishing 
                  ? 'bg-green-500/10 border-green-500/50' 
                  : 'bg-primary/10 border-primary/50'
              }`}>
                <div className="flex items-center gap-3 mb-4">
                  {selectedAnswer === currentEmail.isPhishing ? (
                    <>
                      <CheckCircle2 className="h-6 w-6 text-green-500" />
                      <span className="text-lg font-semibold text-green-500">Correct!</span>
                    </>
                  ) : (
                    <>
                      <XCircle className="h-6 w-6 text-primary" />
                      <span className="text-lg font-semibold text-primary">Incorrect</span>
                    </>
                  )}
                  <Badge variant={currentEmail.isPhishing ? "destructive" : "secondary"} className="ml-auto">
                    {currentEmail.isPhishing ? "Phishing" : "Legitimate"}
                  </Badge>
                </div>
                <p className="text-muted-foreground mb-4">{currentEmail.explanation}</p>
                
                {currentEmail.isPhishing && currentEmail.redFlags.length > 0 && (
                  <div className="mt-4 pt-4 border-t border-border">
                    <h4 className="font-semibold text-foreground mb-2 flex items-center gap-2">
                      <Flag className="h-4 w-4 text-primary" />
                      Red Flags:
                    </h4>
                    <ul className="space-y-1">
                      {currentEmail.redFlags.map((flag, i) => (
                        <li key={i} className="text-sm text-muted-foreground flex items-start gap-2">
                          <span className="text-primary mt-1">•</span>
                          {flag}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>

              <div className="flex justify-end">
                <Button variant="hero" onClick={nextEmail}>
                  {currentIndex < emails.length - 1 ? "Next Email" : "See Results"}
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default PhishingDemo;
