import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { 
  BookOpen, Shield, AlertTriangle, Brain, Lock, 
  ChevronRight, ChevronDown, CheckCircle2, Play, 
  Star, Clock
} from "lucide-react";

interface Lesson {
  id: string;
  title: string;
  duration: string;
  completed: boolean;
  content: string;
}

interface Module {
  id: string;
  level: "beginner" | "intermediate" | "advanced";
  title: string;
  description: string;
  icon: React.ElementType;
  lessons: Lesson[];
  color: string;
}

const modulesData: Module[] = [
  {
    id: "beginner",
    level: "beginner",
    title: "Foundations of Cyber Safety",
    description: "Start your journey with the basics of online security and threat awareness",
    icon: Shield,
    color: "text-green-500",
    lessons: [
      {
        id: "b1",
        title: "What is Cybersecurity?",
        duration: "5 min",
        completed: false,
        content: `# What is Cybersecurity?

Cybersecurity is the practice of protecting systems, networks, and programs from digital attacks. These attacks usually aim to access, change, or destroy sensitive information.

## Key Concepts

**Confidentiality**: Ensuring information is only accessible to authorized people.

**Integrity**: Protecting information from being modified by unauthorized parties.

**Availability**: Ensuring authorized users have access to information when needed.

## Common Threats

1. **Malware** - Software designed to harm your computer
2. **Phishing** - Deceptive attempts to steal your information
3. **Social Engineering** - Manipulating people to reveal confidential info

## Your Role

Everyone plays a part in cybersecurity. By learning to recognize threats and following best practices, you become the first line of defense.`
      },
      {
        id: "b2",
        title: "Recognizing Suspicious Emails",
        duration: "8 min",
        completed: false,
        content: `# Recognizing Suspicious Emails

Phishing emails are designed to look legitimate, but there are telltale signs.

## Red Flags to Watch For

### 1. Sender Address
- Check the actual email address, not just the display name
- Look for misspellings: "amaz0n-security.com" vs "amazon.com"

### 2. Urgency and Threats
- "Your account will be closed in 24 hours!"
- "Immediate action required!"
- Legitimate companies rarely create artificial urgency

### 3. Generic Greetings
- "Dear Customer" instead of your actual name
- "Dear User" or "Dear Account Holder"

### 4. Suspicious Links
- Hover over links before clicking
- Check if the URL matches the claimed sender

### 5. Attachments
- Unexpected attachments, especially .exe, .zip files
- Documents asking you to "Enable Macros"

## Practice Exercise
Next time you receive an email, check for at least 3 of these red flags before taking any action.`
      },
      {
        id: "b3",
        title: "Password Best Practices",
        duration: "6 min",
        completed: false,
        content: `# Password Best Practices

Your passwords are the keys to your digital life. Here's how to keep them strong.

## Creating Strong Passwords

### Use Passphrases
Instead of: P@ssw0rd123
Try: "Purple-Elephant-Dances-Tuesday!"

### Requirements
- At least 12 characters
- Mix of letters, numbers, symbols
- No personal information

## Password Management

### Never Reuse Passwords
If one account is breached, all accounts with that password are at risk.

### Use a Password Manager
- Generates unique passwords
- Stores them securely
- Only remember one master password

### Enable Two-Factor Authentication (2FA)
- Adds a second layer of security
- Even if password is stolen, account stays protected

## Quick Tips
1. Change passwords after any breach notification
2. Never share passwords via email or text
3. Avoid saving passwords in browsers`
      },
    ],
  },
  {
    id: "intermediate",
    level: "intermediate",
    title: "Advanced Threat Detection",
    description: "Dive deeper into sophisticated attack methods and defense strategies",
    icon: AlertTriangle,
    color: "text-yellow-500",
    lessons: [
      {
        id: "i1",
        title: "Spear Phishing & Whaling",
        duration: "10 min",
        completed: false,
        content: `# Spear Phishing & Whaling Attacks

## What is Spear Phishing?

Unlike mass phishing, spear phishing targets specific individuals or organizations using personalized information.

### How Attackers Research You
- LinkedIn profiles
- Social media posts
- Company websites
- Public records

### Real Example
"Hi John, following up on our conversation at the Chicago Tech Conference last week. Here's the proposal we discussed."

## Whaling: Targeting the Big Fish

Whaling specifically targets executives and high-profile individuals.

### Common Whaling Tactics
1. **CEO Fraud**: Impersonating executives to authorize transfers
2. **Legal Threats**: Fake lawsuits requiring immediate attention
3. **Vendor Impersonation**: Pretending to be trusted partners

### Protection Strategies
- Verify unusual requests through separate channels
- Implement multi-person authorization for large transactions
- Train executives on their specific risk profile
- Use email authentication (DKIM, DMARC)`
      },
      {
        id: "i2",
        title: "Social Engineering Tactics",
        duration: "12 min",
        completed: false,
        content: `# Social Engineering Tactics

Social engineering exploits human psychology rather than technical vulnerabilities.

## Key Psychological Principles Exploited

### 1. Authority
Attackers pose as figures of authority (IT, police, executives).

### 2. Urgency
Creating time pressure to prevent careful thinking.

### 3. Social Proof
"Everyone in your department has already done this..."

### 4. Reciprocity
Offering something first to create obligation.

### 5. Liking
Building rapport before making requests.

## Common Attack Scenarios

### Pretexting
Creating a fabricated scenario to engage a victim.
Example: "Hi, I'm from IT. We're doing security updates and need your login."

### Baiting
Offering something enticing.
Example: USB drives left in parking lots labeled "Salary Info"

### Tailgating
Following authorized personnel into secure areas.

## Defense Strategies
- Always verify identity through official channels
- Take time before responding to urgent requests
- Question unusual requests, even from "authority"
- Report suspicious interactions`
      },
      {
        id: "i3",
        title: "Business Email Compromise",
        duration: "8 min",
        completed: false,
        content: `# Business Email Compromise (BEC)

BEC is one of the most costly forms of cyber fraud, with billions lost annually.

## How BEC Works

### Step 1: Reconnaissance
Attackers study the organization, key personnel, and business processes.

### Step 2: Setup
- Create lookalike domains
- Compromise legitimate email accounts
- Build trust over time

### Step 3: Attack
Request wire transfers, sensitive data, or gift cards.

## Common BEC Scenarios

### The Fake Invoice
Legitimate vendor invoice with changed bank details.

### The CEO Request
"I need you to purchase gift cards for client appreciation. Keep this confidential."

### The Attorney
Fake lawyer handling confidential acquisition requiring immediate funds.

## Protection Measures

### Technical
- Email authentication protocols
- Domain monitoring for lookalikes
- Multi-factor authentication

### Process
- Dual authorization for payments
- Verbal verification for changes
- Established vendor management`
      },
    ],
  },
  {
    id: "advanced",
    level: "advanced",
    title: "AI-Powered Threats",
    description: "Understand and defend against cutting-edge AI-enhanced cyber attacks",
    icon: Brain,
    color: "text-primary",
    lessons: [
      {
        id: "a1",
        title: "AI-Generated Phishing",
        duration: "15 min",
        completed: false,
        content: `# AI-Generated Phishing

Artificial Intelligence has revolutionized phishing attacks, making them more convincing than ever.

## How AI Enhances Phishing

### Natural Language Generation
- Perfect grammar and spelling
- Contextually appropriate language
- Mimicking writing styles

### Personalization at Scale
AI can generate thousands of unique, personalized emails using:
- Social media data
- Public records
- Corporate information

### Voice Cloning
AI can replicate voices from minimal samples for vishing attacks.

## Identifying AI-Generated Content

### Look for Inconsistencies
- Factual errors despite polished language
- Unusual requests that don't match context
- Perfect language but wrong tone for sender

### Process Indicators
- Unexpected communication channels
- Deviation from normal procedures
- Unusual timing or frequency

## Advanced Defense Strategies

1. **Behavioral Analysis**: Look at patterns, not just content
2. **Multi-Channel Verification**: Always verify through separate means
3. **Zero Trust Approach**: Verify every request, regardless of source
4. **AI-Powered Defense**: Use AI tools to detect AI-generated threats`
      },
      {
        id: "a2",
        title: "Deepfakes in Cyber Attacks",
        duration: "12 min",
        completed: false,
        content: `# Deepfakes in Cyber Attacks

Deepfake technology creates realistic fake video and audio, enabling new attack vectors.

## The Technology

### How Deepfakes Work
- Machine learning analyzes facial features
- AI generates synthetic media
- Results are increasingly undetectable

### Current Capabilities
- Real-time video manipulation
- Voice cloning from minutes of audio
- Text-to-speech mimicry

## Attack Scenarios

### Video Conference Fraud
Attackers impersonating executives in video calls to authorize transactions.

### Evidence Fabrication
Creating fake video "evidence" for blackmail or manipulation.

### Impersonation Attacks
Using cloned voices to bypass voice authentication or social engineer staff.

## Detection Techniques

### Visual Indicators
- Unnatural blinking patterns
- Lighting inconsistencies
- Edge artifacts around face

### Audio Indicators
- Breathing pattern irregularities
- Background noise inconsistencies
- Emotional tone mismatches

### Verification Protocols
- Establish code words for sensitive communications
- Use multiple verification channels
- Question unexpected video calls requesting unusual actions`
      },
      {
        id: "a3",
        title: "Building a Security Culture",
        duration: "10 min",
        completed: false,
        content: `# Building a Security Culture

Technical controls alone cannot stop social engineering. Culture is your strongest defense.

## Elements of Security Culture

### 1. Awareness
Everyone understands:
- Current threats
- Their role in security
- How to report incidents

### 2. Empowerment
Staff feel comfortable:
- Questioning unusual requests
- Reporting potential threats
- Admitting mistakes

### 3. Accountability
Clear expectations with:
- Defined responsibilities
- Regular training
- Measured outcomes

## Building the Culture

### Leadership Commitment
- Executives model secure behavior
- Security is a business priority
- Resources allocated appropriately

### Continuous Training
- Regular, engaging content
- Simulated phishing exercises
- Gamification and rewards

### Open Communication
- No blame for honest mistakes
- Clear reporting channels
- Regular updates on threats

## Measuring Success

- Phishing simulation click rates
- Time to report incidents
- Employee security survey scores
- Reduction in security incidents

Remember: Security is everyone's responsibility, from the CEO to the newest intern.`
      },
    ],
  },
];

const Modules = () => {
  const [selectedModule, setSelectedModule] = useState<Module | null>(null);
  const [activeLesson, setActiveLesson] = useState<Lesson | null>(null);
  const [expandedModule, setExpandedModule] = useState<string | null>(null);

  const getLevelIcon = (level: string) => {
    switch (level) {
      case "beginner":
        return <Star className="h-4 w-4" />;
      case "intermediate":
        return <><Star className="h-4 w-4" /><Star className="h-4 w-4" /></>;
      case "advanced":
        return <><Star className="h-4 w-4" /><Star className="h-4 w-4" /><Star className="h-4 w-4" /></>;
    }
  };

  if (activeLesson) {
    return (
      <div className="min-h-screen pt-24 pb-12">
        <div className="container mx-auto px-4">
          <Button
            variant="ghost"
            className="mb-6"
            onClick={() => setActiveLesson(null)}
          >
            ← Back to Module
          </Button>

          <div className="max-w-3xl mx-auto">
            <div className="card-gradient border border-border rounded-2xl p-8 md:p-12">
              <div className="flex items-center gap-2 text-muted-foreground mb-4">
                <Clock className="h-4 w-4" />
                <span className="text-sm">{activeLesson.duration} read</span>
              </div>
              
              <article className="prose prose-invert prose-lg max-w-none">
                {activeLesson.content.split('\n').map((line, i) => {
                  if (line.startsWith('# ')) {
                    return <h1 key={i} className="text-3xl font-bold text-foreground mb-6">{line.slice(2)}</h1>;
                  }
                  if (line.startsWith('## ')) {
                    return <h2 key={i} className="text-2xl font-semibold text-foreground mt-8 mb-4">{line.slice(3)}</h2>;
                  }
                  if (line.startsWith('### ')) {
                    return <h3 key={i} className="text-xl font-medium text-foreground mt-6 mb-3">{line.slice(4)}</h3>;
                  }
                  if (line.startsWith('**') && line.endsWith('**')) {
                    return <p key={i} className="font-semibold text-foreground">{line.slice(2, -2)}</p>;
                  }
                  if (line.startsWith('- ')) {
                    return <li key={i} className="text-muted-foreground ml-4">{line.slice(2)}</li>;
                  }
                  if (line.match(/^\d+\./)) {
                    return <li key={i} className="text-muted-foreground ml-4">{line}</li>;
                  }
                  if (line.trim() === '') {
                    return <br key={i} />;
                  }
                  return <p key={i} className="text-muted-foreground mb-4">{line}</p>;
                })}
              </article>

              <div className="mt-12 pt-8 border-t border-border flex justify-between items-center">
                <Button variant="outline" onClick={() => setActiveLesson(null)}>
                  Back to Module
                </Button>
                <Button variant="hero">
                  Mark as Complete
                  <CheckCircle2 className="ml-2 h-4 w-4" />
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
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-foreground mb-4">Learning Modules</h1>
            <p className="text-muted-foreground text-lg">
              Interactive courses tailored to every skill level. Learn at your own pace.
            </p>
          </div>

          <div className="space-y-6">
            {modulesData.map((module) => (
              <div
                key={module.id}
                className="card-gradient border border-border rounded-xl overflow-hidden"
              >
                <button
                  className="w-full p-6 flex items-center justify-between hover:bg-secondary/30 transition-colors"
                  onClick={() => setExpandedModule(expandedModule === module.id ? null : module.id)}
                >
                  <div className="flex items-center gap-4">
                    <div className={`w-12 h-12 rounded-lg bg-secondary flex items-center justify-center ${module.color}`}>
                      <module.icon className="h-6 w-6" />
                    </div>
                    <div className="text-left">
                      <div className="flex items-center gap-2 mb-1">
                        <span className={`flex items-center gap-1 ${module.color}`}>
                          {getLevelIcon(module.level)}
                        </span>
                        <span className="text-xs text-muted-foreground uppercase tracking-wider">
                          {module.level}
                        </span>
                      </div>
                      <h3 className="text-lg font-semibold text-foreground">{module.title}</h3>
                      <p className="text-sm text-muted-foreground">{module.description}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <span className="text-sm text-muted-foreground hidden sm:block">
                      {module.lessons.length} lessons
                    </span>
                    {expandedModule === module.id ? (
                      <ChevronDown className="h-5 w-5 text-muted-foreground" />
                    ) : (
                      <ChevronRight className="h-5 w-5 text-muted-foreground" />
                    )}
                  </div>
                </button>

                {expandedModule === module.id && (
                  <div className="border-t border-border">
                    <div className="p-4 bg-secondary/20">
                      <div className="flex items-center justify-between mb-3">
                        <span className="text-sm text-muted-foreground">Progress</span>
                        <span className="text-sm text-muted-foreground">
                          {module.lessons.filter(l => l.completed).length}/{module.lessons.length} complete
                        </span>
                      </div>
                      <Progress 
                        value={(module.lessons.filter(l => l.completed).length / module.lessons.length) * 100} 
                        className="h-2" 
                      />
                    </div>
                    
                    <div className="divide-y divide-border">
                      {module.lessons.map((lesson, index) => (
                        <button
                          key={lesson.id}
                          className="w-full p-4 flex items-center justify-between hover:bg-secondary/30 transition-colors"
                          onClick={() => setActiveLesson(lesson)}
                        >
                          <div className="flex items-center gap-4">
                            <div className={`w-8 h-8 rounded-full flex items-center justify-center ${
                              lesson.completed ? 'bg-green-500/20 text-green-500' : 'bg-secondary text-muted-foreground'
                            }`}>
                              {lesson.completed ? (
                                <CheckCircle2 className="h-4 w-4" />
                              ) : (
                                <span className="text-sm font-mono">{index + 1}</span>
                              )}
                            </div>
                            <div className="text-left">
                              <h4 className="font-medium text-foreground">{lesson.title}</h4>
                              <span className="text-sm text-muted-foreground flex items-center gap-1">
                                <Clock className="h-3 w-3" />
                                {lesson.duration}
                              </span>
                            </div>
                          </div>
                          <Play className="h-5 w-5 text-primary" />
                        </button>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modules;
