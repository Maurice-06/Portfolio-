export function AboutSection() {
  return (
    <section id="about" className="py-20 lg:py-32 bg-secondary/20 relative">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left: Text Content */}
          <div className="space-y-8 animate-slide-down">
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-accent rounded-lg flex items-center justify-center">
                  <span className="text-2xl font-bold text-accent-foreground">About</span>
                </div>
                <div className="h-px w-12 bg-gradient-to-r from-accent to-transparent" />
              </div>
              <h2 className="text-4xl sm:text-5xl font-bold text-balance">
                <span className="text-accent">Data Analyst</span> - Full-Stack Developer
              </h2>
            </div>

            <div className="space-y-4 text-lg leading-relaxed">
              <p>
                I'm <span className="text-accent font-semibold">Maurice Birame DIOUF</span>, a passionate{" "}
                <span className="text-accent font-semibold">Data Analyst</span> specialized in transforming complex
                datasets into actionable insights. As a full-stack developer, I combine analytical expertise with
                practical development skills to create intelligent, data-driven solutions.
              </p>

              <p>
                My philosophy is simple:{" "}
                <span className="text-accent font-semibold">
                  "Data without insights is just noise; insights without action are just observations."
                </span>
                I excel at discovering patterns, building analytical frameworks, and developing systems that turn data
                into competitive advantage.
              </p>

              <p>
                Specialized in <span className="text-accent font-semibold">Python-based data analysis</span> (Pandas,
                NumPy, Matplotlib), <span className="text-accent font-semibold">business intelligence tools</span>{" "}
                (Power BI, Excel), and <span className="text-accent font-semibold">full-stack development</span>{" "}
                (Django, React, Node.js), I bridge the gap between data science and practical application development. I
                excel at every layer of the stack—from processing millions of data points to building scalable backends
                and responsive frontends.
              </p>
            </div>

            {/* Key Stats */}
            <div className="grid grid-cols-3 gap-6 pt-8 border-t border-border">
              <div className="space-y-2">
                <div className="text-3xl font-bold text-accent">5+</div>
                <p className="text-sm text-muted-foreground">Projects Completed</p>
              </div>
              <div className="space-y-2">
                <div className="text-3xl font-bold text-accent">100%</div>
                <p className="text-sm text-muted-foreground">Commitment</p>
              </div>
              <div className="space-y-2">
                <div className="text-3xl font-bold text-accent">10+</div>
                <p className="text-sm text-muted-foreground">Technologies</p>
              </div>
            </div>
          </div>

          {/* Right: Feature Highlights */}
          <div className="space-y-6">
            <div className="bg-card border border-border rounded-xl p-6 hover:border-accent/50 transition-colors group">
              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-12 w-12 rounded-lg bg-accent/10 group-hover:bg-accent/20 transition-colors">
                    <svg className="h-6 w-6 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M13 10V3L4 14h7v7l9-11h-7z"
                      />
                    </svg>
                  </div>
                </div>
                <div className="space-y-2">
                  <h3 className="text-lg font-semibold">Data Analysis & Visualization</h3>
                  <p className="text-muted-foreground">
                    Expert in Pandas, NumPy, and Matplotlib for transforming raw data into compelling visual insights.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-card border border-border rounded-xl p-6 hover:border-accent/50 transition-colors group">
              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-12 w-12 rounded-lg bg-accent/10 group-hover:bg-accent/20 transition-colors">
                    <svg className="h-6 w-6 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
                      />
                    </svg>
                  </div>
                </div>
                <div className="space-y-2">
                  <h3 className="text-lg font-semibold">Full-Stack Development</h3>
                  <p className="text-muted-foreground">
                    Building complete solutions from database design to responsive frontends with Python, Django, React,
                    and Node.js.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-card border border-border rounded-xl p-6 hover:border-accent/50 transition-colors group">
              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-12 w-12 rounded-lg bg-accent/10 group-hover:bg-accent/20 transition-colors">
                    <svg className="h-6 w-6 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                  </div>
                </div>
                <div className="space-y-2">
                  <h3 className="text-lg font-semibold">Problem Solving</h3>
                  <p className="text-muted-foreground">
                    Tackling complex challenges with analytical thinking and innovative technical solutions.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
