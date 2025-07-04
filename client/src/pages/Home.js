import { Link } from "react-router-dom"
import { Upload, CheckCircle, BarChart3, Target, ArrowRight } from "lucide-react"
import Button from "../components/UI/Button"
import Card from "../components/UI/Card"

const Home = () => {
  const features = [
    {
      icon: <CheckCircle className="h-8 w-8 text-green-500" />,
      title: "Grammar & Structure Analysis",
      description:
        "Get detailed feedback on grammar, spelling, and overall resume structure to make a professional impression.",
    },
    {
      icon: <Target className="h-8 w-8 text-blue-500" />,
      title: "ATS Optimization",
      description:
        "Ensure your resume passes Applicant Tracking Systems with keyword optimization and formatting suggestions.",
    },
    {
      icon: <BarChart3 className="h-8 w-8 text-purple-500" />,
      title: "Industry-Specific Insights",
      description: "Receive tailored recommendations based on your target industry and role requirements.",
    },
  ]

  const steps = [
    {
      step: "1",
      title: "Upload Your Resume",
      description: "Simply upload your resume in PDF or DOCX format",
    },
    {
      step: "2",
      title: "AI Analysis",
      description: "Our AI analyzes your resume for ATS compatibility, grammar, and structure",
    },
    {
      step: "3",
      title: "Get Results",
      description: "Receive detailed feedback and actionable recommendations",
    },
  ]

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 to-indigo-100 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Transform Your Resume with
              <span className="text-blue-600"> AI Power</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Get instant, AI-powered feedback on your resume. Optimize for ATS systems, improve grammar and structure,
              and increase your chances of landing interviews.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/upload">
                <Button size="xl" className="w-full sm:w-auto">
                  Analyze My Resume
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Link to="/about">
                <Button variant="outline" size="xl" className="w-full sm:w-auto bg-transparent">
                  Learn More
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Why Choose ResumeAI?</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Our advanced AI technology provides comprehensive resume analysis to help you stand out in today's
              competitive job market.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <div className="flex justify-center mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">How It Works</h2>
            <p className="text-xl text-gray-600">Get professional resume feedback in just three simple steps</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {steps.map((step, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                  {step.step}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-blue-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Ready to Optimize Your Resume?</h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Join thousands of job seekers who have improved their resumes with our AI-powered analysis.
          </p>
          <Link to="/upload">
            <Button variant="secondary" size="xl">
              Get Started Now
              <Upload className="ml-2 h-5 w-5" />
            </Button>
          </Link>
        </div>
      </section>
    </div>
  )
}

export default Home
