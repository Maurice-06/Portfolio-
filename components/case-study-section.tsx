"use client"

import { useState } from "react"

export function CaseStudySection() {
  const [activeTab, setActiveTab] = useState<"overview" | "analysis" | "backend" | "results">("overview")

  const tabs = [
    { id: "overview", label: "Overview" },
    { id: "analysis", label: "Data Analysis" },
    { id: "backend", label: "Backend Dev" },
    { id: "results", label: "Results" },
  ]

  return (
    <section id="case-study" className="py-20 lg:py-32 bg-secondary/20 relative overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-20 right-10 w-72 h-72 bg-accent/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="space-y-4 mb-12 animate-slide-down">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 bg-accent rounded-lg flex items-center justify-center">
              <span className="text-xl font-bold text-accent-foreground">CS</span>
            </div>
            <div className="h-px w-12 bg-gradient-to-r from-accent to-transparent" />
          </div>
          <div className="space-y-2 max-w-3xl">
            <h2 className="text-4xl sm:text-5xl font-bold text-balance">
              Sales Management System <span className="text-accent">(SGVS)</span>
            </h2>
            <p className="text-lg text-muted-foreground">
              A comprehensive full-stack solution combining advanced data analysis with robust backend architecture to
              optimize sales operations.
            </p>
          </div>
        </div>

        {/* Tabs Navigation */}
        <div className="mb-12 flex overflow-x-auto gap-2 border-b border-border pb-4">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id as typeof activeTab)}
              className={`px-6 py-2 font-semibold text-sm whitespace-nowrap transition-all ${
                activeTab === tab.id
                  ? "text-accent border-b-2 border-accent pb-2 mb-[-4px]"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Tab Content */}
        <div className="space-y-8">
          {/* Overview Tab */}
          {activeTab === "overview" && (
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 animate-fade-in">
              <div className="space-y-6">
                <div className="space-y-4">
                  <h3 className="text-2xl font-bold">Project Scope</h3>
                  <div className="bg-card border border-border rounded-lg p-6 space-y-4">
                    <div className="flex gap-4">
                      <div className="flex-shrink-0">
                        <div className="flex items-center justify-center h-8 w-8 rounded bg-accent/10 text-accent font-semibold">
                          1
                        </div>
                      </div>
                      <div>
                        <h4 className="font-semibold">Problem Statement</h4>
                        <p className="text-sm text-muted-foreground mt-1">
                          Manual sales tracking led to data inconsistencies, delayed insights, and operational
                          inefficiencies.
                        </p>
                      </div>
                    </div>
                    <div className="flex gap-4">
                      <div className="flex-shrink-0">
                        <div className="flex items-center justify-center h-8 w-8 rounded bg-accent/10 text-accent font-semibold">
                          2
                        </div>
                      </div>
                      <div>
                        <h4 className="font-semibold">Solution Approach</h4>
                        <p className="text-sm text-muted-foreground mt-1">
                          Built an integrated system combining real-time data collection with advanced analytics and a
                          modern web interface.
                        </p>
                      </div>
                    </div>
                    <div className="flex gap-4">
                      <div className="flex-shrink-0">
                        <div className="flex items-center justify-center h-8 w-8 rounded bg-accent/10 text-accent font-semibold">
                          3
                        </div>
                      </div>
                      <div>
                        <h4 className="font-semibold">Business Impact</h4>
                        <p className="text-sm text-muted-foreground mt-1">
                          30% faster reporting, 40% reduction in data entry errors, and actionable insights in
                          real-time.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="space-y-6">
                <div className="space-y-4">
                  <h3 className="text-2xl font-bold">Tech Stack & Timeline</h3>
                  <div className="bg-card border border-border rounded-lg p-6 space-y-6">
                    {/* Frontend */}
                    <div>
                      <h4 className="text-sm font-semibold text-accent mb-3">Frontend</h4>
                      <div className="flex flex-wrap gap-2">
                        {["React", "TypeScript", "Tailwind CSS", "Recharts"].map((tech) => (
                          <span
                            key={tech}
                            className="px-3 py-1 bg-accent/10 text-accent rounded-full text-xs font-medium"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Backend */}
                    <div>
                      <h4 className="text-sm font-semibold text-accent mb-3">Backend</h4>
                      <div className="flex flex-wrap gap-2">
                        {["Django", "Python", "PostgreSQL", "REST API"].map((tech) => (
                          <span
                            key={tech}
                            className="px-3 py-1 bg-accent/10 text-accent rounded-full text-xs font-medium"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Timeline */}
                    <div>
                      <h4 className="text-sm font-semibold text-accent mb-3">Timeline</h4>
                      <p className="text-sm text-foreground">4-month development cycle</p>
                      <div className="mt-3 space-y-2 text-xs text-muted-foreground">
                        <p>Months 1-2: Architecture & Database Design</p>
                        <p>Months 2-3: API Development & Analysis Features</p>
                        <p>Month 4: Frontend Integration & Deployment</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Data Analysis Tab */}
          {activeTab === "analysis" && (
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 animate-fade-in">
              <div className="space-y-6">
                <h3 className="text-2xl font-bold">Data Analysis Implementation</h3>
                <div className="bg-card border border-border rounded-lg p-6 space-y-4">
                  <div>
                    <h4 className="font-semibold text-accent mb-2">Pandas Data Processing</h4>
                    <p className="text-sm text-muted-foreground mb-3">
                      Built robust ETL pipelines using Pandas for data cleaning, transformation, and aggregation.
                    </p>
                    <code className="text-xs bg-background/80 p-3 rounded block font-mono text-accent">
                      df.groupby(['date']).agg({"sales': 'sum"})
                    </code>
                  </div>

                  <div className="pt-4 border-t border-border">
                    <h4 className="font-semibold text-accent mb-2">Statistical Analysis</h4>
                    <p className="text-sm text-muted-foreground">
                      Implemented trend analysis, forecasting models, and anomaly detection to identify sales patterns
                      and predict future trends.
                    </p>
                  </div>

                  <div className="pt-4 border-t border-border">
                    <h4 className="font-semibold text-accent mb-2">Data Visualization</h4>
                    <p className="text-sm text-muted-foreground">
                      Created interactive visualizations using Matplotlib and Recharts for executive dashboards and
                      detailed reports.
                    </p>
                  </div>
                </div>
              </div>

              <div className="space-y-6">
                <div className="bg-card border border-border rounded-lg p-6 space-y-4">
                  <h4 className="text-lg font-semibold">Key Metrics Analyzed</h4>

                  <div className="space-y-4">
                    {[
                      { label: "Monthly Revenue Trend", value: "+45%" },
                      { label: "Sales by Product Category", value: "8 Categories" },
                      { label: "Customer Acquisition Rate", value: "+28%" },
                      { label: "Regional Performance", value: "5 Regions" },
                      { label: "Conversion Funnel", value: "7 Stages" },
                      { label: "Forecasting Accuracy", value: "94%" },
                    ].map((metric) => (
                      <div
                        key={metric.label}
                        className="flex items-center justify-between pb-3 border-b border-border last:border-0 last:pb-0"
                      >
                        <span className="text-sm text-muted-foreground">{metric.label}</span>
                        <span className="text-accent font-semibold">{metric.value}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="bg-accent/10 border border-accent/30 rounded-lg p-4">
                  <p className="text-sm text-foreground">
                    <span className="font-semibold text-accent">Impact:</span> Data-driven insights enabled sales team
                    to increase Q4 revenue by 35% through targeted strategies.
                  </p>
                </div>
              </div>
            </div>
          )}

          {/* Backend Development Tab */}
          {activeTab === "backend" && (
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 animate-fade-in">
              <div className="space-y-6">
                <h3 className="text-2xl font-bold">Backend Architecture</h3>

                <div className="bg-card border border-border rounded-lg p-6 space-y-4">
                  <div>
                    <h4 className="font-semibold text-accent mb-2">Django REST Framework</h4>
                    <p className="text-sm text-muted-foreground mb-3">
                      Developed scalable RESTful APIs with authentication, authorization, and comprehensive error
                      handling.
                    </p>
                    <code className="text-xs bg-background/80 p-3 rounded block font-mono text-accent overflow-x-auto">
                      GET /api/sales/analytics/monthly/?start_date=2024-01-01
                    </code>
                  </div>

                  <div className="pt-4 border-t border-border">
                    <h4 className="font-semibold text-accent mb-2">Database Design</h4>
                    <p className="text-sm text-muted-foreground">
                      PostgreSQL relational database with optimized queries for real-time reporting and historical
                      analysis.
                    </p>
                  </div>

                  <div className="pt-4 border-t border-border">
                    <h4 className="font-semibold text-accent mb-2">Authentication & Security</h4>
                    <p className="text-sm text-muted-foreground">
                      JWT-based authentication, role-based access control, and secure data encryption for sensitive
                      information.
                    </p>
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <div className="bg-card border border-border rounded-lg p-6">
                  <h4 className="text-lg font-semibold mb-4">System Architecture</h4>
                  <div className="space-y-3">
                    <div className="flex items-start gap-3">
                      <div className="text-accent font-bold">→</div>
                      <div>
                        <p className="font-semibold text-sm">Data Ingestion Layer</p>
                        <p className="text-xs text-muted-foreground">
                          Real-time sales data collection from multiple sources
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="text-accent font-bold">→</div>
                      <div>
                        <p className="font-semibold text-sm">Processing Layer</p>
                        <p className="text-xs text-muted-foreground">
                          Data validation, transformation, and aggregation
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="text-accent font-bold">→</div>
                      <div>
                        <p className="font-semibold text-sm">API Layer</p>
                        <p className="text-xs text-muted-foreground">RESTful endpoints for data access and analytics</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="text-accent font-bold">→</div>
                      <div>
                        <p className="font-semibold text-sm">Frontend Layer</p>
                        <p className="text-xs text-muted-foreground">Interactive dashboards and reporting interfaces</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-accent/10 border border-accent/30 rounded-lg p-4">
                  <p className="text-sm text-foreground">
                    <span className="font-semibold text-accent">Performance:</span> API response time averaging 200ms
                    with 99.9% uptime.
                  </p>
                </div>
              </div>
            </div>
          )}

          {/* Results Tab */}
          {activeTab === "results" && (
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 animate-fade-in">
              <div className="bg-gradient-to-br from-accent/20 to-accent/5 border border-accent/30 rounded-xl p-8 space-y-4">
                <div className="text-4xl font-bold text-accent">+40%</div>
                <h4 className="text-lg font-semibold">Efficiency Gain</h4>
                <p className="text-sm text-muted-foreground">
                  Automated reporting reduced manual work by 40%, freeing up the team for strategic initiatives.
                </p>
              </div>

              <div className="bg-gradient-to-br from-accent/20 to-accent/5 border border-accent/30 rounded-xl p-8 space-y-4">
                <div className="text-4xl font-bold text-accent">94%</div>
                <h4 className="text-lg font-semibold">Forecast Accuracy</h4>
                <p className="text-sm text-muted-foreground">
                  Predictive analytics model achieving 94% accuracy in sales forecasting, enabling better planning.
                </p>
              </div>

              <div className="bg-gradient-to-br from-accent/20 to-accent/5 border border-accent/30 rounded-xl p-8 space-y-4">
                <div className="text-4xl font-bold text-accent">30%</div>
                <h4 className="text-lg font-semibold">Error Reduction</h4>
                <p className="text-sm text-muted-foreground">
                  Data validation and automated checks eliminated 30% of previously manual data entry errors.
                </p>
              </div>

              {/* Summary */}
              <div className="lg:col-span-3 bg-card border border-border rounded-xl p-8 space-y-6">
                <div>
                  <h4 className="text-xl font-bold mb-4">Project Outcomes</h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <h5 className="font-semibold text-accent">Business Metrics</h5>
                      <ul className="text-sm text-muted-foreground space-y-2">
                        <li>• Revenue tracking improved from weekly to real-time</li>
                        <li>• Sales insights available within hours, not days</li>
                        <li>• Data consistency across all departments at 99%</li>
                        <li>• 35% increase in Q4 revenue through data-driven decisions</li>
                      </ul>
                    </div>
                    <div className="space-y-2">
                      <h5 className="font-semibold text-accent">Technical Achievement</h5>
                      <ul className="text-sm text-muted-foreground space-y-2">
                        <li>• Processed 1M+ sales transactions monthly</li>
                        <li>• 99.9% system uptime and reliability</li>
                        <li>• Scalable architecture handling 10x growth</li>
                        <li>• Fully automated data pipeline with zero manual intervention</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="pt-6 border-t border-border">
                  <p className="text-foreground">
                    <span className="font-semibold text-accent">Lesson Learned:</span> Combining data analysis with
                    robust backend architecture creates transformative solutions that drive measurable business value.
                    This project demonstrates how technical excellence translates directly to organizational success.
                  </p>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  )
}
