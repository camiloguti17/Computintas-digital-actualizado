'use client'

import { Button } from '@/components/ui/button'
import Link from 'next/link'
import { useEffect, useState } from 'react'

export function Hero() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  return (
    <section className="relative w-full min-h-[90vh] flex items-center overflow-hidden bg-[#0a0a0a]">
      {/* Subtle gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#0a0a0a] via-[#111111] to-[#0a0a0a]" />

      {/* Decorative gradient orbs */}
      <div className="absolute top-20 right-[15%] w-[500px] h-[500px] bg-primary/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-10 left-[10%] w-[400px] h-[400px] bg-accent/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28 lg:py-32 w-full">
        <div className="max-w-3xl">
          {/* Headline */}
          <h1
            className={`text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-foreground leading-[1.1] tracking-tight mb-6 transition-all duration-700 delay-100 ${
              mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}
          >
            <span className="text-balance">
              Software que{' '}
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                impulsa tu negocio
              </span>
            </span>
          </h1>

          {/* Subheadline */}
          <p
            className={`text-lg md:text-xl text-muted-foreground leading-relaxed mb-8 max-w-2xl transition-all duration-700 delay-200 ${
              mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}
          >
            Desarrollamos soluciones a la medida que automatizan procesos, reducen costos operativos y 
            te dan el control total de tu operación. Desde facturación electrónica hasta ERP completos.
          </p>

          {/* CTAs */}
          <div
            className={`flex flex-col sm:flex-row gap-4 mb-10 transition-all duration-700 delay-300 ${
              mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}
          >
            <Link href="#contacto">
              <Button
                size="lg"
                className="w-full sm:w-auto bg-primary hover:bg-primary/90 text-primary-foreground font-semibold px-8 py-6 text-lg shadow-lg shadow-primary/25 transition-all duration-300 hover:shadow-xl hover:shadow-primary/30 hover:scale-[1.02]"
              >
                Solicitar Demo Gratis
              </Button>
            </Link>
            <Link href="#servicios">
              <Button
                size="lg"
                variant="outline"
                className="w-full sm:w-auto border-border hover:border-primary/50 text-foreground font-medium px-8 py-6 text-lg transition-all duration-300 hover:bg-primary/5"
              >
                Ver Soluciones
              </Button>
            </Link>
          </div>

          {/* Social proof */}
          <div
            className={`flex flex-wrap items-center gap-6 text-sm text-muted-foreground transition-all duration-700 delay-[400ms] ${
              mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}
          >
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-accent" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span>Sin compromisos</span>
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-accent" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span>Soporte incluido</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
