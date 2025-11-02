import { useState, useEffect } from "react";
import { ArrowRight, Sparkles, Zap, Shield, Globe, Star, Menu, X, Moon, Sun } from "lucide-react";
import { motion, useScroll, useTransform } from "motion/react";
import { Button } from "./components/ui/button";
import { Card } from "./components/ui/card";
import { ImageWithFallback } from "./components/figma/ImageWithFallback";

export default function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(false);
  const { scrollYProgress } = useScroll();
  const opacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.2], [1, 0.95]);

  // Initialize dark mode from localStorage
  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    
    if (savedTheme === 'dark' || (!savedTheme && prefersDark)) {
      setDarkMode(true);
      document.documentElement.classList.add('dark');
    }
  }, []);

  // Toggle dark mode
  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    if (!darkMode) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  };

  // Close mobile menu when window is resized
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768 && mobileMenuOpen) {
        setMobileMenuOpen(false);
      }
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [mobileMenuOpen]);

  // Prevent scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [mobileMenuOpen]);

  return (
    <div className="min-h-screen bg-background transition-colors duration-300">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-gradient-to-br from-[var(--color-blue)] to-[var(--color-green)] rounded-lg flex items-center justify-center">
              <Sparkles className="w-5 h-5 text-white" />
            </div>
            <span className="font-semibold text-foreground">Nexus</span>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <a href="#features" className="text-muted-foreground hover:text-foreground transition-colors">Features</a>
            <a href="#product" className="text-muted-foreground hover:text-foreground transition-colors">Product</a>
            <a href="#pricing" className="text-muted-foreground hover:text-foreground transition-colors">Pricing</a>
            <a href="#about" className="text-muted-foreground hover:text-foreground transition-colors">About</a>
          </div>

          {/* Desktop Buttons */}
          <div className="hidden md:flex items-center gap-4">
            <Button
              variant="ghost"
              size="icon"
              onClick={toggleDarkMode}
              className="text-foreground"
              aria-label="Toggle dark mode"
            >
              {darkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
            </Button>
            <Button variant="ghost" className="text-foreground">Sign In</Button>
            <Button className="bg-gradient-to-r from-[var(--color-blue)] to-[var(--color-green)] hover:opacity-90 transition-opacity">
              Get Started
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center gap-2">
            <Button
              variant="ghost"
              size="icon"
              onClick={toggleDarkMode}
              className="text-foreground"
              aria-label="Toggle dark mode"
            >
              {darkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
            </Button>
            <button
              className="p-2 text-foreground"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="md:hidden absolute top-full left-0 right-0 bg-background border-b border-border shadow-lg transition-colors duration-300"
          >
            <div className="px-6 py-4 space-y-4">
              <a
                href="#features"
                className="block py-2 text-muted-foreground hover:text-foreground transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                Features
              </a>
              <a
                href="#product"
                className="block py-2 text-muted-foreground hover:text-foreground transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                Product
              </a>
              <a
                href="#pricing"
                className="block py-2 text-muted-foreground hover:text-foreground transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                Pricing
              </a>
              <a
                href="#about"
                className="block py-2 text-muted-foreground hover:text-foreground transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                About
              </a>
              <div className="pt-4 space-y-2">
                <Button variant="ghost" className="w-full text-foreground">
                  Sign In
                </Button>
                <Button className="w-full bg-gradient-to-r from-[var(--color-blue)] to-[var(--color-green)] hover:opacity-90 transition-opacity">
                  Get Started
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </div>
            </div>
          </motion.div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6 overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-6"
                style={{ backgroundColor: 'rgba(157, 141, 241, 0.1)' }}
              >
                <Star className="w-4 h-4" style={{ color: 'var(--color-blue)' }} />
                <span className="text-sm" style={{ color: 'var(--color-blue)' }}>New: AI-Powered Features</span>
              </motion.div>
              
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="text-5xl lg:text-6xl mb-6"
                style={{ 
                  background: `linear-gradient(135deg, var(--color-black) 0%, var(--color-blue) 50%, var(--color-green) 100%)`,
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text'
                }}
              >
                Transform your digital experience
              </motion.h1>
              
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="text-xl text-muted-foreground mb-8 max-w-lg"
              >
                The modern platform designed to elevate your workflow, streamline collaboration, and unlock endless possibilities.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="flex flex-wrap gap-4"
              >
                <Button size="lg" className="bg-gradient-to-r from-[var(--color-blue)] to-[var(--color-green)] hover:opacity-90 transition-opacity">
                  Start Free Trial
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
                <Button size="lg" variant="outline" style={{ borderColor: 'var(--color-blue)', color: 'var(--color-blue)' }}>
                  Watch Demo
                </Button>
              </motion.div>

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6 }}
                className="flex items-center gap-8 mt-12"
              >
                <div>
                  <div className="flex items-center gap-1 mb-1">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <Star key={star} className="w-4 h-4 fill-[var(--color-green)] text-[var(--color-green)]" />
                    ))}
                  </div>
                  <p className="text-sm text-muted-foreground">5.0 from 2000+ reviews</p>
                </div>
                <div className="h-12 w-px bg-border"></div>
                <div>
                  <p className="text-2xl text-foreground">50K+</p>
                  <p className="text-sm text-muted-foreground">Active users</p>
                </div>
              </motion.div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div 
                className="absolute inset-0 rounded-3xl blur-3xl opacity-30"
                style={{ 
                  background: `linear-gradient(135deg, var(--color-semiblue) 0%, var(--color-semigreen) 100%)`
                }}
              ></div>
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1630283017802-785b7aff9aac?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjB3b3Jrc3BhY2UlMjBkZXNrfGVufDF8fHx8MTc2MjAyNzQ1Nnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                  alt="Hero"
                  className="w-full h-auto"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section id="features" className="py-20 px-6 bg-muted/30 transition-colors duration-300">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl mb-4 text-foreground">Powerful features for modern teams</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Everything you need to build, collaborate, and scale your business to new heights.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: <Zap className="w-6 h-6" />,
                title: "Lightning Fast",
                description: "Experience blazing fast performance with our optimized infrastructure built for speed.",
                color: "blue"
              },
              {
                icon: <Shield className="w-6 h-6" />,
                title: "Secure by Default",
                description: "Enterprise-grade security with end-to-end encryption to keep your data safe.",
                color: "green"
              },
              {
                icon: <Globe className="w-6 h-6" />,
                title: "Global Scale",
                description: "Deploy worldwide with our global CDN and reach users anywhere, instantly.",
                color: "blue"
              },
              {
                icon: <Sparkles className="w-6 h-6" />,
                title: "AI-Powered",
                description: "Leverage cutting-edge AI to automate workflows and boost productivity.",
                color: "green"
              },
              {
                icon: <Star className="w-6 h-6" />,
                title: "Premium Support",
                description: "Get 24/7 expert support from our dedicated team whenever you need help.",
                color: "blue"
              },
              {
                icon: <ArrowRight className="w-6 h-6" />,
                title: "Easy Integration",
                description: "Connect seamlessly with your existing tools and workflows in minutes.",
                color: "green"
              }
            ].map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -5, transition: { duration: 0.2 } }}
              >
                <Card className="p-8 border-0 shadow-lg hover:shadow-xl transition-all duration-300 bg-card h-full">
                  <div 
                    className="w-12 h-12 rounded-lg flex items-center justify-center text-white mb-4"
                    style={{ 
                      background: feature.color === 'blue' 
                        ? `linear-gradient(135deg, var(--color-blue) 0%, var(--color-semiblue) 100%)`
                        : `linear-gradient(135deg, var(--color-green) 0%, var(--color-semigreen) 100%)`
                    }}
                  >
                    {feature.icon}
                  </div>
                  <h3 className="text-xl mb-2 text-foreground">{feature.title}</h3>
                  <p className="text-muted-foreground">{feature.description}</p>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Product Showcase */}
      <section id="product" className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="order-2 lg:order-1"
            >
              <div className="rounded-2xl overflow-hidden shadow-2xl">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1646038572816-04ab3ff22b1f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhYnN0cmFjdCUyMGdyYWRpZW50JTIwY29sb3JmdWx8ZW58MXx8fHwxNzYyMDAwMzc3fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                  alt="Product showcase"
                  className="w-full h-auto"
                />
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="order-1 lg:order-2"
            >
              <h2 className="text-4xl mb-6 text-foreground">Built for creators, designed for everyone</h2>
              <p className="text-xl text-muted-foreground mb-8">
                Our intuitive interface makes it easy for anyone to create stunning results, while powerful features satisfy the needs of professionals.
              </p>
              
              <div className="space-y-4">
                {[
                  "Drag-and-drop interface that just works",
                  "Real-time collaboration with your team",
                  "Advanced customization options",
                  "Export in any format you need"
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-center gap-3"
                  >
                    <div 
                      className="w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0"
                      style={{ backgroundColor: 'rgba(28, 254, 186, 0.1)' }}
                    >
                      <ArrowRight className="w-4 h-4" style={{ color: 'var(--color-green)' }} />
                    </div>
                    <span className="text-card-foreground">{item}</span>
                  </motion.div>
                ))}
              </div>

              <Button className="mt-8 bg-gradient-to-r from-[var(--color-blue)] to-[var(--color-green)] hover:opacity-90 transition-opacity">
                Learn More
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </motion.div>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-4xl mb-6 text-foreground">Analytics that drive results</h2>
              <p className="text-xl text-muted-foreground mb-8">
                Make data-driven decisions with comprehensive analytics and insights. Track what matters and optimize for success.
              </p>
              
              <div className="grid grid-cols-2 gap-6">
                {[
                  { label: "Uptime", value: "99.9%" },
                  { label: "Response Time", value: "<100ms" },
                  { label: "Countries", value: "150+" },
                  { label: "API Calls", value: "1B+" }
                ].map((stat, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="bg-muted/50 rounded-xl p-6 transition-colors duration-300"
                  >
                    <p 
                      className="text-3xl mb-1"
                      style={{ 
                        background: `linear-gradient(135deg, var(--color-blue) 0%, var(--color-green) 100%)`,
                        WebkitBackgroundClip: 'text',
                        WebkitTextFillColor: 'transparent',
                        backgroundClip: 'text'
                      }}
                    >
                      {stat.value}
                    </p>
                    <p className="text-muted-foreground">{stat.label}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="rounded-2xl overflow-hidden shadow-2xl"
            >
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1744819181935-edb1c6924d0b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtaW5pbWFsaXN0JTIwZGVzaWdufGVufDF8fHx8MTc2MTk5OTI2NXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Analytics"
                className="w-full h-auto"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-20 px-6 bg-muted/30 transition-colors duration-300">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl mb-4 text-foreground">Simple, transparent pricing</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Choose the perfect plan for your needs. Always know what you'll pay.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[
              {
                name: "Starter",
                price: "$19",
                description: "Perfect for individuals and small projects",
                features: ["Up to 5 projects", "5GB storage", "Basic analytics", "Email support"]
              },
              {
                name: "Professional",
                price: "$49",
                description: "For growing teams and businesses",
                features: ["Unlimited projects", "50GB storage", "Advanced analytics", "Priority support", "Custom integrations"],
                featured: true
              },
              {
                name: "Enterprise",
                price: "$99",
                description: "For large organizations with advanced needs",
                features: ["Everything in Pro", "500GB storage", "Dedicated account manager", "Custom SLA", "Advanced security"]
              }
            ].map((plan, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -10, transition: { duration: 0.2 } }}
              >
                <Card 
                  className={`p-8 ${plan.featured ? 'border-2 shadow-xl' : 'border shadow-lg'} bg-card relative h-full transition-all duration-300`}
                  style={plan.featured ? { borderColor: 'var(--color-blue)' } : {}}
                >
                  {plan.featured && (
                    <div 
                      className="absolute -top-4 left-1/2 -translate-x-1/2 text-white px-4 py-1 rounded-full text-sm"
                      style={{ background: `linear-gradient(135deg, var(--color-blue) 0%, var(--color-green) 100%)` }}
                    >
                      Most Popular
                    </div>
                  )}
                  <h3 className="text-2xl mb-2 text-foreground">{plan.name}</h3>
                  <div className="mb-4">
                    <span 
                      className="text-4xl"
                      style={{ 
                        background: `linear-gradient(135deg, var(--color-blue) 0%, var(--color-green) 100%)`,
                        WebkitBackgroundClip: 'text',
                        WebkitTextFillColor: 'transparent',
                        backgroundClip: 'text'
                      }}
                    >
                      {plan.price}
                    </span>
                    <span className="text-muted-foreground">/month</span>
                  </div>
                  <p className="text-muted-foreground mb-6">{plan.description}</p>
                  
                  <Button 
                    className={`w-full mb-6 ${plan.featured ? 'bg-gradient-to-r from-[var(--color-blue)] to-[var(--color-green)] hover:opacity-90' : ''}`}
                    variant={plan.featured ? "default" : "outline"}
                    style={!plan.featured ? { borderColor: 'var(--color-blue)', color: 'var(--color-blue)' } : {}}
                  >
                    Get Started
                  </Button>

                  <div className="space-y-3">
                    {plan.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center gap-2">
                        <ArrowRight className="w-4 h-4" style={{ color: 'var(--color-green)' }} />
                        <span className="text-sm text-card-foreground">{feature}</span>
                      </div>
                    ))}
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="rounded-3xl p-12 text-white relative overflow-hidden"
            style={{ background: `linear-gradient(135deg, var(--color-blue) 0%, var(--color-green) 100%)` }}
          >
            <div className="absolute inset-0 opacity-10">
              <div className="absolute top-0 left-0 w-40 h-40 bg-white rounded-full -translate-x-1/2 -translate-y-1/2"></div>
              <div className="absolute bottom-0 right-0 w-60 h-60 bg-white rounded-full translate-x-1/3 translate-y-1/3"></div>
            </div>
            
            <div className="relative z-10">
              <h2 className="text-4xl mb-4">Ready to get started?</h2>
              <p className="text-xl opacity-90 mb-8 max-w-2xl mx-auto">
                Join thousands of teams already using Nexus to transform their workflow and achieve more.
              </p>
              
              <div className="flex flex-wrap gap-4 justify-center">
                <Button size="lg" className="bg-white text-[var(--color-blue)] hover:bg-white/90">
                  Start Free Trial
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                  Contact Sales
                </Button>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 bg-[var(--color-black)] text-gray-400 dark:bg-[#0a0f0d] transition-colors duration-300">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="w-8 h-8 rounded-lg flex items-center justify-center" style={{ background: `linear-gradient(135deg, var(--color-blue) 0%, var(--color-green) 100%)` }}>
                  <Sparkles className="w-5 h-5 text-white" />
                </div>
                <span className="text-white font-semibold">Nexus</span>
              </div>
              <p className="text-sm">
                Transform your digital experience with the power of modern technology.
              </p>
            </div>

            <div>
              <h4 className="text-white mb-4">Product</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="hover:text-[var(--color-green)] transition-colors">Features</a></li>
                <li><a href="#" className="hover:text-[var(--color-green)] transition-colors">Pricing</a></li>
                <li><a href="#" className="hover:text-[var(--color-green)] transition-colors">Security</a></li>
                <li><a href="#" className="hover:text-[var(--color-green)] transition-colors">Roadmap</a></li>
              </ul>
            </div>

            <div>
              <h4 className="text-white mb-4">Company</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="hover:text-[var(--color-green)] transition-colors">About</a></li>
                <li><a href="#" className="hover:text-[var(--color-green)] transition-colors">Blog</a></li>
                <li><a href="#" className="hover:text-[var(--color-green)] transition-colors">Careers</a></li>
                <li><a href="#" className="hover:text-[var(--color-green)] transition-colors">Contact</a></li>
              </ul>
            </div>

            <div>
              <h4 className="text-white mb-4">Legal</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="hover:text-[var(--color-green)] transition-colors">Privacy</a></li>
                <li><a href="#" className="hover:text-[var(--color-green)] transition-colors">Terms</a></li>
                <li><a href="#" className="hover:text-[var(--color-green)] transition-colors">Cookie Policy</a></li>
                <li><a href="#" className="hover:text-[var(--color-green)] transition-colors">Licenses</a></li>
              </ul>
            </div>
          </div>

          <div className="border-t pt-8 flex flex-col md:flex-row justify-between items-center gap-4" style={{ borderColor: 'rgba(255, 255, 255, 0.1)' }}>
            <p className="text-sm">© 2025 Nexus. All rights reserved.</p>
            <div className="flex gap-6">
              <a href="#" className="hover:text-[var(--color-green)] transition-colors">Twitter</a>
              <a href="#" className="hover:text-[var(--color-green)] transition-colors">LinkedIn</a>
              <a href="#" className="hover:text-[var(--color-green)] transition-colors">GitHub</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
