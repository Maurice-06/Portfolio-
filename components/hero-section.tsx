export function HeroSection() {
  return (
    <section className="relative overflow-hidden pt-20 pb-32 lg:pt-32 lg:pb-48">
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 right-0 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-glow-pulse" />
        <div className="absolute bottom-20 left-20 w-72 h-72 bg-accent/5 rounded-full blur-3xl" />
        <div className="absolute top-1/3 left-1/4 w-80 h-80 bg-accent/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="space-y-6 animate-fade-in">
            <div className="space-y-4">
              <div className="inline-block">
                <span className="text-accent font-mono text-sm font-semibold">Data × Code</span>
              </div>
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-pretty text-balance leading-tight">
                Maurice Birame <span className="text-accent">DIOUF</span>
              </h1>
              <p className="text-xl sm:text-2xl text-muted-foreground italic">Data Analyst</p>
            </div>

            <p className="text-lg text-muted-foreground leading-relaxed max-w-lg">
              Transforming complex datasets into actionable insights. Full-stack developer combining data analysis
              expertise with backend and frontend development to build intelligent solutions.
            </p>

            <p className="text-sm text-muted-foreground">
              <span className="font-semibold text-accent">Motto:</span> "Turning data into decisive insights"
            </p>

            {/* Contact Info */}
            <div className="space-y-3 py-6 border-t border-border">
              <div className="flex items-center gap-3">
                <svg className="w-5 h-5 text-accent" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.894.894c.159.2.35.394.559.585a8.988 8.988 0 001.25 1.025l1.889-.894a1 1 0 011.06.54l.74 4.435a1 1 0 01-.836.986l-2.153.38A2 2 0 013.93 18.07C2.645 16.786 2 14.926 2 12.5V3z" />
                </svg>
                <a href="tel:+221778656961" className="text-foreground hover:text-accent transition-colors">
                  +221 77 865 69 61
                </a>
              </div>
              <div className="flex items-center gap-3">
                <svg className="w-5 h-5 text-accent" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                  <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                </svg>
                <a
                  href="mailto:mauricebiramed@gmail.com"
                  className="text-foreground hover:text-accent transition-colors"
                >
                  mauricebiramed@gmail.com
                </a>
              </div>
              <div className="flex items-center gap-3">
                <svg className="w-5 h-5 text-accent" fill="currentColor" viewBox="0 0 20 20">
                  <path
                    fillRule="evenodd"
                    d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                    clipRule="evenodd"
                  />
                </svg>
                <span className="text-foreground">Keur Massar, Senegal</span>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <a
                href="#case-study"
                className="px-8 py-3 bg-accent text-accent-foreground rounded-lg font-semibold hover:opacity-90 transition-opacity inline-block text-center"
              >
                View My Work
              </a>
              <a
                href="#contact"
                className="px-8 py-3 border-2 border-accent text-accent rounded-lg font-semibold hover:bg-accent/10 transition-colors inline-block text-center"
              >
                Let's Connect
              </a>
            </div>
          </div>

          {/* Profile Image */}
          <div
            className="relative flex justify-center lg:justify-end animate-fade-in"
            style={{ animationDelay: "0.2s" }}
          >
            <div className="relative w-full max-w-sm">
              {/* Glow background */}
              <div className="absolute inset-0 bg-gradient-to-br from-accent/20 to-transparent rounded-2xl blur-2xl" />

              {/* Image container */}
              <div className="relative rounded-2xl overflow-hidden border-2 border-accent/30">
                <img
                  src="/images/gemini-generated-image-d6b4dd6b4dd6b4dd.png"
                  alt="Maurice Birame DIOUF - Data Analyst"
                  className="w-full h-auto object-cover"
                />
              </div>

              {/* Floating badges */}
              <div className="absolute -bottom-4 -right-4 bg-accent text-accent-foreground px-4 py-2 rounded-lg font-bold shadow-lg">
                Junior Data Analyst
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
