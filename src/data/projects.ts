export type Project = {
  id: string;
  title: string;
  description: string;
  technologies: string[];
  liveUrl?: string;
  githubUrl?: string;
  downloadUrl?: string;
  status: "completed" | "in-progress" | "planned";
  category: "web" | "mobile" | "coming soon";
  tags: string[];
};

export const projects: Project[] = [
  {
    id: "1",
    title: "balanch App",
    description: "Track Your Spending Habits : easy to monitoring & Offline Usage. The Data purely lives & isolated on your Device",
    technologies: ["React Native", "Expo", "Firebase", "Zustand"],
    downloadUrl: "/files/balanch-release.apk",
    githubUrl: "https://github.com",
    status: "completed",
    category: "mobile",
    tags: ["Cross-platform", "Sync", "Utility"],
  },
  {
    id: "2",
    title: "Auto Post Discord",
    description: "A Self-Hosting Discord bot for automatic post Message on Different Server & Channels",
    technologies: ["Next.js", "Discord.py", "TypeScript", "Tailwind CSS", "Framer Motion"],
    liveUrl: "https://example.com",
    githubUrl: "https://github.com",
    status: "in-progress",
    category: "web",
    tags: ["Auto Post", "Discord Bot"],
  }
];
