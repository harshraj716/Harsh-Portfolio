"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/button"
import { Briefcase, Calendar } from "lucide-react"

type Experience = {
  company: string
  position: string
  duration: string
  description: string
  technologies: string[]
}

const experiences: Experience[] = [
  {
    company: "Unified Mentor",
    position: "Full Stack Developer",
    duration: "Aug 2024 – Present",
    description:
      "Building scalable full-stack solutions, contributing to client SaaS projects and developing core internal tools. Working closely with product teams and delivering features in agile sprints.",
    technologies: ["React.js", "Node.js", "Next.js", "TypeScript"],
  },
  {
    company: "Freelancing",
    position: "Web Developer & Consultant",
    duration: "2023 – 2024",
    description:
      "Worked with startups and founders to build MVPs, landing pages, and internal dashboards. Delivered optimized, responsive, and SEO-friendly web applications using modern stacks.",
    technologies: ["React", "Node.js", "Firebase", "Vercel"],
  },
]

export default function Experience() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.1 })

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
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
    <section id="experience" className="section-padding gradient-bg-section">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Experience</h2>
          <div className="h-1 w-20 bg-primary mx-auto mb-6 rounded-full"></div>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            My professional journey and work experience in the tech industry.
          </p>
        </div>

        <motion.div
          ref={ref}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={containerVariants}
          className="max-w-3xl mx-auto"
        >
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-border" />

            {/* Experience items */}
            {experiences.map((exp, index) => (
              <motion.div key={index} variants={itemVariants} className="mb-8 relative">
                <div className="flex">
                  {/* Timeline dot */}
                  <div className="absolute left-4 transform -translate-x-1/2 w-8 h-8 rounded-full bg-primary flex items-center justify-center">
                    <Briefcase className="h-4 w-4 text-primary-foreground" />
                  </div>

                  {/* Content */}
                  <div className="ml-12">
                    <Card>
                      <CardHeader>
                        <div className="flex items-center justify-between">
                          <CardTitle>{exp.position}</CardTitle>
                          <div className="flex items-center text-sm text-muted-foreground">
                            <Calendar className="h-4 w-4 mr-1" />
                            {exp.duration}
                          </div>
                        </div>
                        <CardDescription className="text-base font-medium">{exp.company}</CardDescription>
                      </CardHeader>
                      <CardContent>
                        <p className="mb-4">{exp.description}</p>
                        <div className="flex flex-wrap gap-2">
                          {exp.technologies.map((tech) => (
                            <Badge key={tech} variant="outline" className="text-xs">
                              {tech}
                            </Badge>
                          ))}
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
