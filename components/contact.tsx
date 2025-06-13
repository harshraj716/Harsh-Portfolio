"use client"

import type React from "react"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef, useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent } from "@/components/ui/card"
import { Github, Linkedin, Mail, Send } from "lucide-react"

export default function Contact() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.1 })

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    const { name, email, message } = formData

    if (!name || !email || !message) return

    const mailto = `mailto:harshraj07167@gmail.com?subject=${encodeURIComponent(
      `New message from ${name}`
    )}&body=${encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\n${message}`)}`

    window.location.href = mailto

    setFormData({ name: "", email: "", message: "" })
  }

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
    <section id="contact" className="section-padding gradient-bg-section">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Contact Me</h2>
          <div className="h-1 w-20 bg-primary mx-auto mb-6 rounded-full"></div>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Whether you're looking to hire for a full-time role or collaborate on a freelance project, I'm open to both! Let's discuss how we can work together.
          </p>
        </div>

        <motion.div
          ref={ref}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={containerVariants}
          className="max-w-5xl mx-auto"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <motion.div variants={itemVariants}>
              <Card className="h-full">
                <CardContent className="pt-6">
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium mb-1">
                        Name
                      </label>
                      <Input
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Your name"
                        required
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium mb-1">
                        Email
                      </label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="Your email"
                        required
                      />
                    </div>
                    <div>
                      <label htmlFor="message" className="block text-sm font-medium mb-1">
                        Message
                      </label>
                      <Textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="Your message"
                        rows={5}
                        required
                      />
                    </div>
                    <Button type="submit" className="w-full gap-2">
                      Send Message
                      <Send className="h-4 w-4" />
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div variants={itemVariants}>
              <Card className="h-full">
                <CardContent className="pt-6">
                  <h3 className="text-xl font-semibold mb-4">Let's Connect</h3>
                  <p className="text-muted-foreground mb-6">
                    Looking for a reliable developer for a full-time role or freelance collaboration? I'm excited to take on new challenges—let's connect and build something great.
                  </p>
                  <div className="flex items-center gap-3">
                    <div className="bg-primary/10 p-3 rounded-full">
                     <Send className="h-5 w-5 text-primary" />
                     </div>
                      <div>
                        <h4 className="font-medium">Phone</h4>
                        <a href="tel:+918936897141" className="text-sm text-muted-foreground hover:text-primary">
                            +91 89368 97141
                            </a>
                            </div>
                            </div>
                  
                  <div className="space-y-4 mt-4">
                    <div className="flex items-center gap-3">
                      <div className="bg-primary/10 p-3 rounded-full">
                        <Mail className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <h4 className="font-medium">Email</h4>
                        <a href="mailto:harshraj07167@gmail.com" className="text-sm text-muted-foreground hover:text-primary">
                          harshraj07167@gmail.com
                        </a>
                      </div>
                    </div>

                    <div className="flex items-center gap-3">
                      <div className="bg-primary/10 p-3 rounded-full">
                        <Linkedin className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <h4 className="font-medium">LinkedIn</h4>
                        <a
                          href="https://www.linkedin.com/in/harsh-raj-97b3401b8/"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-sm text-muted-foreground hover:text-primary"
                        >
                          linkedin.com/in/harsh-raj
                        </a>
                      </div>
                    </div>

                    <div className="flex items-center gap-3">
                      <div className="bg-primary/10 p-3 rounded-full">
                        <Github className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <h4 className="font-medium">GitHub</h4>
                        <a
                          href="https://github.com/harshraj716"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-sm text-muted-foreground hover:text-primary"
                        >
                          github.com/harshraj716
                        </a>
                      </div>
                    </div>
                  </div>
                  

                  <div className="mt-8 pt-6 border-t">
                    <h4 className="font-medium mb-4">Follow Me</h4>
                    <div className="flex gap-4">
                      <a
                        href="https://github.com/harshraj716"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-card hover:bg-muted p-2 rounded-full transition-colors"
                      >
                        <Github className="h-5 w-5" />
                        <span className="sr-only">GitHub</span>
                      </a>
                      <a
                        href="https://www.linkedin.com/in/harsh-raj-97b3401b8/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-card hover:bg-muted p-2 rounded-full transition-colors"
                      >
                        <Linkedin className="h-5 w-5" />
                        <span className="sr-only">LinkedIn</span>
                      </a>
                      <a
                        href="mailto:harshraj07167@gmail.com"
                        className="bg-card hover:bg-muted p-2 rounded-full transition-colors"
                      >
                        <Mail className="h-5 w-5" />
                        <span className="sr-only">Email</span>
                      </a>
                    </div>
                    
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}


// "use client"

// import type React from "react"

// import { motion } from "framer-motion"
// import { useInView } from "framer-motion"
// import { useRef, useState } from "react"
// import { Button } from "@/components/ui/button"
// import { Input } from "@/components/ui/input"
// import { Textarea } from "@/components/ui/textarea"
// import { Card, CardContent } from "@/components/ui/card"
// import { Github, Linkedin, Mail, Send } from "lucide-react"
// import { useToast } from "@/hooks/use-toast"

// export default function Contact() {
//   const ref = useRef(null)
//   const isInView = useInView(ref, { once: true, amount: 0.1 })
//   const { toast } = useToast()
//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     message: "",
//   })
//   const [isSubmitting, setIsSubmitting] = useState(false)

//   const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
//     const { name, value } = e.target
//     setFormData((prev) => ({ ...prev, [name]: value }))
//   }

//   const handleSubmit = async (e: React.FormEvent) => {
//     e.preventDefault()
//     setIsSubmitting(true)

//     // Simulate form submission
//     await new Promise((resolve) => setTimeout(resolve, 1000))

//     toast({
//       title: "Message sent!",
//       description: "Thank you for your message. I'll get back to you soon.",
//     })

//     setFormData({ name: "", email: "", message: "" })
//     setIsSubmitting(false)
//   }

//   const containerVariants = {
//     hidden: { opacity: 0 },
//     visible: {
//       opacity: 1,
//       transition: {
//         staggerChildren: 0.2,
//       },
//     },
//   }

//   const itemVariants = {
//     hidden: { opacity: 0, y: 20 },
//     visible: {
//       opacity: 1,
//       y: 0,
//       transition: { duration: 0.5 },
//     },
//   }

//   return (
//     <section id="contact" className="section-padding gradient-bg-section">
//       <div className="container mx-auto">
//         <div className="text-center mb-12">
//           <h2 className="text-3xl font-bold mb-4">Contact Me</h2>
//           <div className="h-1 w-20 bg-primary mx-auto mb-6 rounded-full"></div>
//           <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
//             Whether you're looking to hire for a full-time role or collaborate on a freelance project, I'm open to both! Let's discuss how we can work together.
//           </p>
//         </div>

//         <motion.div
//           ref={ref}
//           initial="hidden"
//           animate={isInView ? "visible" : "hidden"}
//           variants={containerVariants}
//           className="max-w-5xl mx-auto"
//         >
//           <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
//             <motion.div variants={itemVariants}>
//               <Card className="h-full">
//                 <CardContent className="pt-6">
//                   <form onSubmit={handleSubmit} className="space-y-4">
//                     <div>
//                       <label htmlFor="name" className="block text-sm font-medium mb-1">
//                         Name
//                       </label>
//                       <Input
//                         id="name"
//                         name="name"
//                         value={formData.name}
//                         onChange={handleChange}
//                         placeholder="Your name"
//                         required
//                       />
//                     </div>
//                     <div>
//                       <label htmlFor="email" className="block text-sm font-medium mb-1">
//                         Email
//                       </label>
//                       <Input
//                         id="email"
//                         name="email"
//                         type="email"
//                         value={formData.email}
//                         onChange={handleChange}
//                         placeholder="Your email"
//                         required
//                       />
//                     </div>
//                     <div>
//                       <label htmlFor="message" className="block text-sm font-medium mb-1">
//                         Message
//                       </label>
//                       <Textarea
//                         id="message"
//                         name="message"
//                         value={formData.message}
//                         onChange={handleChange}
//                         placeholder="Your message"
//                         rows={5}
//                         required
//                       />
//                     </div>
//                     <Button type="submit" className="w-full gap-2" disabled={isSubmitting}>
//                       {isSubmitting ? "Sending..." : "Send Message"}
//                       <Send className="h-4 w-4" />
//                     </Button>
//                   </form>
//                 </CardContent>
//               </Card>
//             </motion.div>

//             <motion.div variants={itemVariants}>
//               <Card className="h-full">
//                 <CardContent className="pt-6">
//                   <h3 className="text-xl font-semibold mb-4">Let's Connect</h3>
//                   <p className="text-muted-foreground mb-6">
//                    Looking for a reliable developer for a full-time role or freelance collaboration? I'm excited to take on new challenges—let's connect and build something great.
//                   </p>

//                   <div className="space-y-4">
//                     <div className="flex items-center gap-3">
//                       <div className="bg-primary/10 p-3 rounded-full">
//                         <Mail className="h-5 w-5 text-primary" />
//                       </div>
//                       <div>
//                         <h4 className="font-medium">Email</h4>
//                         <a href="mailto:harshraj07167@gmail.com" className="text-sm text-muted-foreground hover:text-primary">
//                           harshraj07167@gmail.com
//                         </a>
//                       </div>
//                     </div>

//                     <div className="flex items-center gap-3">
//                       <div className="bg-primary/10 p-3 rounded-full">
//                         <Linkedin className="h-5 w-5 text-primary" />
//                       </div>
//                       <div>
//                         <h4 className="font-medium">LinkedIn</h4>
//                         <a
//                           href="https://linkedin.com"
//                           target="_blank"
//                           rel="noopener noreferrer"
//                           className="text-sm text-muted-foreground hover:text-primary"
//                         >
//                           linkedin.com/in/
//                         </a>
//                       </div>
//                     </div>

//                     <div className="flex items-center gap-3">
//                       <div className="bg-primary/10 p-3 rounded-full">
//                         <Github className="h-5 w-5 text-primary" />
//                       </div>
//                       <div>
//                         <h4 className="font-medium">GitHub</h4>
//                         <a
//                           href="https://github.com/harshraj716"
//                           target="_blank"
//                           rel="noopener noreferrer"
//                           className="text-sm text-muted-foreground hover:text-primary"
//                         >
//                           github.com/harshraj716
//                         </a>
//                       </div>
//                     </div>
//                   </div>

//                   <div className="mt-8 pt-6 border-t">
//                     <h4 className="font-medium mb-4">Follow Me</h4>
//                     <div className="flex gap-4">
//                       <a
//                         href="https://github.com/harshraj716"
//                         target="_blank"
//                         rel="noopener noreferrer"
//                         className="bg-card hover:bg-muted p-2 rounded-full transition-colors"
//                       >
//                         <Github className="h-5 w-5" />
//                         <span className="sr-only">GitHub</span>
//                       </a>
//                       <a
//                         href="https://www.linkedin.com/in/harsh-raj-97b3401b8/"
//                         target="_blank"
//                         rel="noopener noreferrer"
//                         className="bg-card hover:bg-muted p-2 rounded-full transition-colors"
//                       >
//                         <Linkedin className="h-5 w-5" />
//                         <span className="sr-only">LinkedIn</span>
//                       </a>
//                       <a
//                         href="mailto:harshraj07167@gmail.com"
//                         className="bg-card hover:bg-muted p-2 rounded-full transition-colors"
//                       >
//                         <Mail className="h-5 w-5" />
//                         <span className="sr-only">Email</span>
//                       </a>
//                     </div>
//                   </div>
//                 </CardContent>
//               </Card>
//             </motion.div>
//           </div>
//         </motion.div>
//       </div>
//     </section>
//   )
// }
