"use client"

import type React from "react"

interface SkillCategory {
  name: string
  icon: React.ReactNode
  skills: Array<{
    name: string
    level: number
    color: string
  }>
}

export function SkillsSection() {
  const skillCategories: SkillCategory[] = [
    {
      name: "Data Analysis & Analytics",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
          />
        </svg>
      ),
      skills: [
        { name: "Python", level: 95, color: "from-accent to-blue-500" },
        { name: "Pandas", level: 92, color: "from-accent to-cyan-400" },
        { name: "NumPy", level: 88, color: "from-blue-500 to-cyan-400" },
        { name: "Matplotlib", level: 90, color: "from-accent to-blue-500" },
        { name: "Data Visualization", level: 93, color: "from-cyan-400 to-blue-500" },
        { name: "SQL", level: 85, color: "from-accent to-green-500" },
        { name: "Power BI", level: 90, color: "from-yellow-500 to-accent" },
        { name: "Excel", level: 91, color: "from-green-600 to-accent" },
      ],
    },
    {
      name: "Backend Development",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01"
          />
        </svg>
      ),
      skills: [
        { name: "Django", level: 93, color: "from-green-500 to-accent" },
        { name: "Python Backend", level: 94, color: "from-accent to-green-400" },
        { name: "REST APIs", level: 91, color: "from-green-400 to-cyan-400" },
        { name: "PostgreSQL", level: 87, color: "from-accent to-blue-500" },
        { name: "Database Design", level: 89, color: "from-green-500 to-cyan-400" },
        { name: "API Development", level: 90, color: "from-accent to-green-500" },
      ],
    },
    {
      name: "Frontend & Web",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
      ),
      skills: [
        { name: "React", level: 89, color: "from-cyan-400 to-accent" },
        { name: "JavaScript", level: 91, color: "from-accent to-blue-500" },
        { name: "TypeScript", level: 86, color: "from-blue-500 to-cyan-400" },
        { name: "Tailwind CSS", level: 93, color: "from-cyan-400 to-accent" },
        { name: "Node.js", level: 87, color: "from-accent to-emerald-500" },
        { name: "Responsive Design", label: 94, color: "from-accent to-blue-400" },
      ],
    },
  ]

  return (
    <section id="skills" className="py-20 lg:py-32 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="space-y-4 mb-16 animate-slide-down">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 bg-accent rounded-lg flex items-center justify-center">
              <span className="text-2xl font-bold text-accent-foreground">Skills</span>
            </div>
            <div className="h-px w-12 bg-gradient-to-r from-accent to-transparent" />
          </div>
          <div className="space-y-2 max-w-2xl">
            <h2 className="text-4xl sm:text-5xl font-bold text-balance">Technical Expertise</h2>
            <p className="text-lg text-muted-foreground">
              A comprehensive toolkit spanning data science, backend development, and modern frontend technologies.
            </p>
          </div>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {skillCategories.map((category, idx) => (
            <div
              key={category.name}
              className="bg-card border border-border rounded-xl p-6 hover:border-accent/50 transition-all hover:shadow-lg hover:shadow-accent/10"
              style={{ animationDelay: `${idx * 0.1}s` }}
            >
              {/* Category Header */}
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 bg-accent/10 rounded-lg text-accent">{category.icon}</div>
                <h3 className="text-lg font-semibold text-foreground">{category.name}</h3>
              </div>

              {/* Skills List */}
              <div className="space-y-5">
                {category.skills.map((skill) => (
                  <div key={skill.name} className="space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-medium text-foreground">{skill.name}</span>
                    </div>
                    {/* Progress Bar */}
                    <div className="h-2 bg-secondary rounded-full overflow-hidden">
                      <div
                        className={`h-full rounded-full bg-gradient-to-r ${skill.color} transition-all duration-500`}
                        style={{ width: `${skill.level}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Section: Tech Stack */}
        <div className="mt-16 pt-16 border-t border-border">
          <div className="space-y-8">
            <div className="space-y-4">
              <h3 className="text-2xl font-bold">Core Technology Stack</h3>
              <p className="text-muted-foreground max-w-2xl">
                Leveraging the latest tools and frameworks to build scalable, maintainable solutions that excel across
                the full stack.
              </p>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
              {[
                { name: "Python", icon: "🐍" },
                { name: "Pandas", icon: "📊" },
                { name: "Power BI", icon: "📈" },
                { name: "Excel", icon: "📋" },
                { name: "Django", icon: "⚙️" },
                { name: "React", icon: "⚛️" },
                { name: "Node.js", icon: "📦" },
                { name: "PostgreSQL", icon: "🗄️" },
                { name: "Matplotlib", icon: "🎨" },
                { name: "Git", icon: "📡" },
              ].map((tech) => (
                <div
                  key={tech.name}
                  className="bg-secondary/50 border border-border rounded-lg p-4 flex flex-col items-center justify-center gap-2 hover:border-accent/50 hover:bg-secondary transition-all group"
                >
                  <span className="text-2xl group-hover:scale-110 transition-transform">{tech.icon}</span>
                  <span className="text-sm font-medium text-center text-foreground">{tech.name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
