export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-secondary/50 border-t border-border">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-accent rounded-lg flex items-center justify-center font-bold text-accent-foreground text-sm">
                MB
              </div>
              <span className="font-semibold">Maurice Birame</span>
            </div>
            <p className="text-sm text-muted-foreground">
              Turning data into decisive insights through full-stack development and data analysis.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="font-semibold">Navigation</h3>
            <ul className="space-y-2">
              <li>
                <a href="#about" className="text-sm text-muted-foreground hover:text-accent transition-colors">
                  About
                </a>
              </li>
              <li>
                <a href="#skills" className="text-sm text-muted-foreground hover:text-accent transition-colors">
                  Skills
                </a>
              </li>
              <li>
                <a href="#case-study" className="text-sm text-muted-foreground hover:text-accent transition-colors">
                  Case Study
                </a>
              </li>
              <li>
                <a href="#contact" className="text-sm text-muted-foreground hover:text-accent transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Technologies */}
          <div className="space-y-4">
            <h3 className="font-semibold">Technologies</h3>
            <ul className="space-y-2">
              <li className="text-sm text-muted-foreground">Python & Django</li>
              <li className="text-sm text-muted-foreground">React & TypeScript</li>
              <li className="text-sm text-muted-foreground">Data Analysis</li>
              <li className="text-sm text-muted-foreground">Full-Stack Dev</li>
            </ul>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h3 className="font-semibold">Contact</h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="mailto:mauricebiramed@gmail.com"
                  className="text-sm text-muted-foreground hover:text-accent transition-colors"
                >
                  Email
                </a>
              </li>
              <li>
                <a
                  href="tel:+221778656961"
                  className="text-sm text-muted-foreground hover:text-accent transition-colors"
                >
                  Phone
                </a>
              </li>
              <li className="text-sm text-muted-foreground">Keur Massar, SN</li>
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-border pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-muted-foreground">© {currentYear} Maurice Birame DIOUF. All rights reserved.</p>

          <div className="flex items-center gap-4">
            <div className="flex flex-col items-center gap-2">
              
            
            </div>
            <div className="flex items-center gap-6">
              <a href="#" className="text-xs text-muted-foreground hover:text-accent transition-colors">
                Privacy
              </a>
              <a href="#" className="text-xs text-muted-foreground hover:text-accent transition-colors">
                Terms
              </a>
              <p className="text-xs text-muted-foreground">Built with Next.js & React</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
