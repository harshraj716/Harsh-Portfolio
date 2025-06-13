"use client"

import { useState, useEffect } from "react"
import { Menu, X } from "lucide-react"
import { motion } from "framer-motion"

const navItems = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Projects", href: "#projects" },
  { name: "Experience", href: "#experience" },
  { name: "Contact", href: "#contact" },
]

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToSection = (sectionId: string) => {
    console.log("Scrolling to:", sectionId) // Debug log
    setIsOpen(false) // Close mobile menu

    // Add a small delay to ensure menu closes first
    setTimeout(() => {
      const element = document.querySelector(sectionId)
      console.log("Found element:", element) // Debug log

      if (element) {
        const headerHeight = 64 // Account for fixed header
        const offsetTop = element.getBoundingClientRect().top + window.pageYOffset - headerHeight

        window.scrollTo({
          top: offsetTop,
          behavior: "smooth",
        })
      }
    }, 100)
  }

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? "bg-background/80 backdrop-blur-md shadow-sm" : "bg-transparent"}`}
    >
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="font-bold text-xl"
        >
          <span className="gradient-text">Portfolio</span>
        </motion.div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-6">
          {navItems.map((item) => (
            <motion.button
              key={item.name}
              onClick={() => scrollToSection(item.href)}
              className="text-sm font-medium hover:text-primary transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {item.name}
            </motion.button>
          ))}
        </nav>

        {/* Mobile Navigation Toggle */}
        <div className="md:hidden">
          <button
            onClick={() => {
              console.log("Menu button clicked, current state:", isOpen) // Debug log
              setIsOpen(!isOpen)
            }}
            className="relative z-[60] p-2 rounded-md hover:bg-accent focus:outline-none focus:ring-2 focus:ring-primary"
            aria-label="Toggle menu"
            type="button"
          >
            <div className="w-6 h-6 flex items-center justify-center">
              {isOpen ? <X className="h-5 w-5 text-foreground" /> : <Menu className="h-5 w-5 text-foreground" />}
            </div>
          </button>
        </div>

        {/* Mobile Navigation Menu */}
        {isOpen && (
          <div className="absolute top-16 left-0 right-0 bg-background/95 backdrop-blur-md border-t md:hidden z-[55]">
            <div className="container mx-auto px-4 py-4 flex flex-col space-y-4">
              {navItems.map((item) => (
                <button
                  key={item.name}
                  onClick={() => {
                    console.log("Mobile menu item clicked:", item.name, item.href) // Debug log
                    scrollToSection(item.href)
                  }}
                  className="py-3 px-2 text-left hover:text-primary transition-colors text-base font-medium border-b border-border/20 last:border-b-0"
                >
                  {item.name}
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
    </header>
  )
}




// "use client"

// import { useState, useEffect } from "react"
// import { Menu, X } from "lucide-react"
// import { motion, AnimatePresence } from "framer-motion"
// import { Button } from "@/components/ui/button"

// const navItems = [
//   { name: "Home", href: "#home" },
//   { name: "About", href: "#about" },
//   { name: "Projects", href: "#projects" },
//   { name: "Experience", href: "#experience" },
//   { name: "Contact", href: "#contact" },
// ]

// export default function Navbar() {
//   const [isOpen, setIsOpen] = useState(false)
//   const [scrolled, setScrolled] = useState(false)

//   useEffect(() => {
//     const handleScroll = () => {
//       setScrolled(window.scrollY > 10)
//     }
//     window.addEventListener("scroll", handleScroll)
//     return () => window.removeEventListener("scroll", handleScroll)
//   }, [])

//   const scrollToSection = (sectionId: string) => {
//     setIsOpen(false)
//     const element = document.querySelector(sectionId)
//     if (element) {
//       const offsetTop = element.getBoundingClientRect().top + window.pageYOffset
//       window.scrollTo({
//         top: offsetTop,
//         behavior: "smooth",
//       })
//     }
//   }

//   return (
//     <header
//       className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? "bg-background/80 backdrop-blur-md shadow-sm" : "bg-transparent"}`}
//     >
//       <div className="container mx-auto px-4 h-16 flex items-center justify-between">
//         <motion.div
//           initial={{ opacity: 0 }}
//           animate={{ opacity: 1 }}
//           transition={{ duration: 0.5 }}
//           className="font-bold text-xl"
//         >
//           <span className="gradient-text">Harsh </span>
//           <span className="">☕️ + 👨🏻‍💻</span>
//         </motion.div>

//         {/* Desktop Navigation */}
//         <nav className="hidden md:flex items-center space-x-6">
//           {navItems.map((item) => (
//             <motion.button
//               key={item.name}
//               onClick={() => scrollToSection(item.href)}
//               className="text-sm font-medium hover:text-primary transition-colors"
//               whileHover={{ scale: 1.05 }}
//               whileTap={{ scale: 0.95 }}
//             >
//               {item.name}
//             </motion.button>
//           ))}
//         </nav>

//         {/* Mobile Navigation Toggle */}
//         <div className="flex items-center md:hidden">
//           <Button variant="ghost" size="icon" onClick={() => setIsOpen(!isOpen)} aria-label="Toggle menu">
//             {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
//           </Button>
//         </div>
//       </div>

//       {/* Mobile Navigation Menu */}
//       <AnimatePresence>
//         {isOpen && (
//           <motion.div
//             initial={{ opacity: 0, height: 0 }}
//             animate={{ opacity: 1, height: "auto" }}
//             exit={{ opacity: 0, height: 0 }}
//             className="md:hidden bg-background/95 backdrop-blur-md"
//           >
//             <div className="container mx-auto px-4 py-4 flex flex-col space-y-4">
//               {navItems.map((item) => (
//                 <motion.button
//                   key={item.name}
//                   onClick={() => scrollToSection(item.href)}
//                   className="py-2 text-left hover:text-primary transition-colors"
//                   whileTap={{ scale: 0.95 }}
//                 >
//                   {item.name}
//                 </motion.button>
//               ))}
//             </div>
//           </motion.div>
//         )}
//       </AnimatePresence>
//     </header>
//   )
// }
