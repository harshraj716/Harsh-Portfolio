"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/button"
import { ExternalLink, Github } from "lucide-react"
import Image from "next/image"

type Project = {
  title: string
  description: string
  image: string
  tags: string[]
  demoLink: string
  githubLink: string
}


const projects: Project[] = [
  {
    title: "GitHub Profile Deck",
    description: "An interactive GitHub profile generator that turns your Git stats into a stylish portfolio card.",
    image: "/gitdeck.png",
    tags: ["HTML", "CSS", "JavaScript", "GitHub API"],
    demoLink: "https://git-profile-deck.vercel.app/",
    githubLink: "https://github.com/harshraj716/Git-Profile-Deck",
  },
  {
    title: "SoulWays – Travel Website",
    description: "A modern travel booking platform with destination browsing, filtering, and secure booking flow.",
    image: "/soulways.png",
    tags: ["React.js", "Tailwind", "PostgreSQL", "Node.js"],
    demoLink: "#",
    githubLink: "#",
  },
  {
    title: "RegisterKaro – Figma to Code",
    description: "Converted a full Figma design into a responsive, high-performance website with pixel-perfect accuracy.",
    image: "/registerkaro.png",
    tags: ["Next.js", "Tailwind CSS", "Figma", "Vercel"],
    demoLink: "https://practice-web-five.vercel.app/",
    githubLink: "https://practice-web-five.vercel.app/",
  },
  {
    title: "Reddit Clone",
    description: "A feature-rich clone of Reddit with post creation, voting, commenting, and community boards.",
    image: "/reddit.png",
    tags: ["React.js", "Chakra UI"],
    demoLink: "https://reddit-clone-eight-sigma.vercel.app/",
    githubLink: "https://reddit-clone-eight-sigma.vercel.app/",
  },
  {
    title: "Gaido AI (Company Project)",
    description: "An AI-powered assistant tool built for enterprise use — optimized for scalability and performance.",
    image: "/gaidoai.png",
    tags: ["Next.js", "Tailwind", "ShadCN"],
    demoLink: "https://gaido-ai-project.vercel.app/",
    githubLink: "https://github.com/harshraj716/GaidoAI-project",
  },
  {
    title: "Image Gallery",
    description: "A responsive and filterable image gallery with category tags and smooth animations.",
    image: "/gallery.png",
    tags: ["React", "Framer Motion", "Tailwind CSS"],
    demoLink: "#",
    githubLink: "#",
  },
]

export default function Projects() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.1 })

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  }

  return (
    <section id="projects" className="section-padding gradient-bg-section">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Projects</h2>
          <div className="h-1 w-20 bg-primary mx-auto mb-6 rounded-full"></div>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Explore my recent projects showcasing my skills and expertise in web development.
          </p>
        </div>

        <motion.div
          ref={ref}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={containerVariants}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {projects.map((project, index) => (
            <motion.div key={index} variants={itemVariants}>
              <Card className="overflow-hidden h-full transition-all duration-300 hover:shadow-lg hover:-translate-y-1 group">
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <CardHeader>
                  <CardTitle>{project.title}</CardTitle>
                  <div className="flex flex-wrap gap-2 mt-2">
                    {project.tags.map((tag) => (
                      <Badge key={tag} variant="secondary" className="text-xs">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-sm">{project.description}</CardDescription>
                </CardContent>
                <CardFooter className="flex justify-between">
                  <a
                    href={project.demoLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm flex items-center gap-1 hover:text-primary transition-colors"
                  >
                    <ExternalLink className="h-4 w-4" />
                    Live Demo
                  </a>
                  <a
                    href={project.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm flex items-center gap-1 hover:text-primary transition-colors"
                  >
                    <Github className="h-4 w-4" />
                    Source Code
                  </a>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
