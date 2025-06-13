"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ArrowRight, Download, Code, Sparkles } from "lucide-react"
import { useEffect, useState } from "react"
import Image from "next/image"


export default function Hero() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  return (
    <section id="home" className="section-padding min-h-screen flex items-center pt-16 gradient-bg-section">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left side - Text content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="order-2 lg:order-1"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="mb-6 inline-block"
            >
              <div className="px-4 py-2 rounded-full bg-primary/10 text-primary flex items-center gap-2 text-sm font-medium">
                <Sparkles className="h-4 w-4" />
                <span>Available for new opportunities</span>
              </div>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight"
            >
              Hi, I'm <span className="gradient-text animate-gradient-x">Harsh Raj</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="text-xl md:text-2xl text-muted-foreground mb-4 font-medium"
            >
              Full Stack Developer
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.8 }}
              className="text-lg text-muted-foreground mb-8"
            >
             Transforming caffeine into clean code and meaningful user experiences.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 1 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <Button
                size="lg"
                className="gap-2 group"
                onClick={() => {
                  const link = document.createElement("a")
                  link.href = "/Harsh.pdf"
                  link.download = "Harsh.pdf"
                  link.click()
                }}
              >
                <Download className="h-4 w-4" />
                Download CV
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="gap-2 group"
                onClick={() => {
                  const element = document.querySelector("#contact")
                  if (element) {
                    const offsetTop = element.getBoundingClientRect().top + window.pageYOffset
                    window.scrollTo({
                      top: offsetTop,
                      behavior: "smooth",
                    })
                  }
                }}
              >
                Let's Connect
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
            </motion.div>
          </motion.div>

          {/* Right side - Profile Image */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="order-1 lg:order-2 flex justify-center"
          >
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 via-violet-500/20 to-pink-500/20 blur-3xl rounded-full scale-110" />
              <div className="relative bg-gradient-to-r from-purple-500 via-violet-500 to-pink-500 p-1 rounded-full">
                <div className="bg-background rounded-full p-2">
                  <Image
                    src="/harsh-raj-profile.png"
                    alt="Harsh Raj - Full Stack Developer"
                    width={300}
                    height={300}
                    className="rounded-full object-cover w-64 h-64 md:w-80 md:h-80"
                    priority
                  />
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Bottom section */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.2 }}
          className="mt-16 text-center"
        >
          <div className="relative bg-card border rounded-xl p-6 shadow-lg max-w-2xl mx-auto">
            <div className="flex items-center justify-center">
              <Code className="h-6 w-6 text-primary mr-2" />
              <span className="text-sm font-mono">Passionate about clean code and modern design</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
