"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { Progress } from "@/components/ui/progress"

type Skill = {
  name: string
  level: number
}

const frontendSkills: Skill[] = [
  { name: "React.Js", level: 90 },
  { name: "Next.js", level: 85 },
  { name: "TypeScript", level: 80 },
  { name: "JavaScript", level: 95 },
]

const backendSkills: Skill[] = [
  { name: "Node.js", level: 85 },
  { name: "Express", level: 80 },
  { name: "MongoDB", level: 75 },
  { name: "PostgreSQL", level: 70 },
]

const otherSkills: Skill[] = [
  { name: "Git", level: 85 },
  { name: "OOPS Concept", level: 70 },
  { name: "DBMS", level: 65 },
  { name: "Mac/windows", level: 85 },
]

export default function About() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.3 })

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
    <section id="about" className="section-padding gradient-bg-section">
      <div className="container mx-auto">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={containerVariants}
          className="max-w-4xl mx-auto"
        >
          <motion.div variants={itemVariants} className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">About Me</h2>
            <div className="h-1 w-20 bg-primary mx-auto mb-6 rounded-full"></div>
            <p className="text-lg text-muted-foreground">
              I’m a full-stack developer with a passion for building fast, clean, and user-focused web apps. I like writing code that not only works but feels good — smooth interfaces, smart logic, and solid performance. Whether it’s frontend polish or backend logic, I enjoy solving real problems with tech that scales.
            </p>
          </motion.div>

          <motion.div variants={itemVariants} className="mb-12">
            <h3 className="text-xl font-semibold mb-6">My Approach</h3>
            <p className="mb-4">
              I believe in solving problems through elegant code and thoughtful design. My development philosophy
              centers around these principles:
            </p>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
              <li className="bg-card p-4 rounded-lg border">
                <h4 className="font-medium mb-2">User-Centered Design</h4>
                <p className="text-sm text-muted-foreground">
                  Creating interfaces that are intuitive, accessible, and delightful to use.
                </p>
              </li>
              <li className="bg-card p-4 rounded-lg border">
                <h4 className="font-medium mb-2">Performance Optimization</h4>
                <p className="text-sm text-muted-foreground">
                  Building fast, responsive applications that provide a smooth experience.
                </p>
              </li>
              <li className="bg-card p-4 rounded-lg border">
                <h4 className="font-medium mb-2">Clean Architecture</h4>
                <p className="text-sm text-muted-foreground">
                  Writing maintainable code with clear separation of concerns.
                </p>
              </li>
              <li className="bg-card p-4 rounded-lg border">
                <h4 className="font-medium mb-2">Continuous Learning</h4>
                <p className="text-sm text-muted-foreground">
                  Staying updated with the latest technologies and best practices.
                </p>
              </li>
            </ul>
          </motion.div>

          <motion.div variants={itemVariants}>
            <h3 className="text-xl font-semibold mb-6">Skills & Expertise</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div>
                <h4 className="font-medium mb-4">Frontend</h4>
                <div className="space-y-4">
                  {frontendSkills.map((skill) => (
                    <div key={skill.name}>
                      <div className="flex justify-between mb-1">
                        <span className="text-sm font-medium">{skill.name}</span>
                        <span className="text-sm text-muted-foreground">{skill.level}%</span>
                      </div>
                      <Progress value={skill.level} className="h-2" />
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h4 className="font-medium mb-4">Backend</h4>
                <div className="space-y-4">
                  {backendSkills.map((skill) => (
                    <div key={skill.name}>
                      <div className="flex justify-between mb-1">
                        <span className="text-sm font-medium">{skill.name}</span>
                        <span className="text-sm text-muted-foreground">{skill.level}%</span>
                      </div>
                      <Progress value={skill.level} className="h-2" />
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h4 className="font-medium mb-4">Other</h4>
                <div className="space-y-4">
                  {otherSkills.map((skill) => (
                    <div key={skill.name}>
                      <div className="flex justify-between mb-1">
                        <span className="text-sm font-medium">{skill.name}</span>
                        <span className="text-sm text-muted-foreground">{skill.level}%</span>
                      </div>
                      <Progress value={skill.level} className="h-2" />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
