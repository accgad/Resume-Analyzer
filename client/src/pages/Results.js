import { useLocation, Link } from "react-router-dom"
import { CheckCircle, AlertTriangle, XCircle, BarChart3, FileText, Target, ArrowLeft, Download } from "lucide-react"
import Button from "../components/UI/Button"
import Card from "../components/UI/Card"

const Results = () => {
  const location = useLocation()
  const { fileName } = location.state || { fileName: "resume.pdf" }

  // Mock analysis results
  const analysisResults = {
    overallScore: 78,
    atsScore: 85,
    grammarScore: 72,
    keywordScore: 80,
    sections: {
      grammar: {
        score: 72,
        issues: [
          { type: "error", message: "Missing period at the end of bullet point in Experience section", line: 15 },
          { type: "warning", message: 'Consider using action verbs instead of "Responsible for"', line: 8 },
          { type: "suggestion", message: "Use consistent tense throughout experience descriptions", line: 12 },
        ],
      },
      ats: {
        score: 85,
        keywords: {
          found: ["JavaScript", "React", "Node.js", "MongoDB", "Git"],
          missing: ["TypeScript", "AWS", "Docker", "Kubernetes"],
          density: "Good",
        },
        formatting: {
          status: "Good",
          issues: ["Consider using standard section headers"],
        },
      },
      structure: {
        score: 80,
        feedback: [
          "Strong professional summary",
          "Well-organized experience section",
          "Consider adding a skills section",
          "Education section could be more detailed",
        ],
      },
    },
    recommendations: [
      "Add missing keywords: TypeScript, AWS, Docker to improve ATS compatibility",
      "Use more action verbs in experience descriptions",
      "Quantify achievements with specific numbers and percentages",
      "Consider adding a dedicated skills section",
      "Ensure consistent formatting throughout the document",
    ],
  }

  const getScoreColor = (score) => {
    if (score >= 80) return "text-green-600"
    if (score >= 60) return "text-yellow-600"
    return "text-red-600"
  }

  const getScoreBg = (score) => {
    if (score >= 80) return "bg-green-100"
    if (score >= 60) return "bg-yellow-100"
    return "bg-red-100"
  }

  const getIssueIcon = (type) => {
    switch (type) {
      case "error":
        return <XCircle className="h-4 w-4 text-red-500" />
      case "warning":
        return <AlertTriangle className="h-4 w-4 text-yellow-500" />
      case "suggestion":
        return <CheckCircle className="h-4 w-4 text-blue-500" />
      default:
        return <CheckCircle className="h-4 w-4 text-gray-500" />
    }
  }

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-8">
          <Link to="/upload" className="inline-flex items-center text-blue-600 hover:text-blue-700 mb-4">
            <ArrowLeft className="h-4 w-4 mr-2" />
            Upload Another Resume
          </Link>
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
            <div>
              <h1 className="text-3xl font-bold text-gray-900">Resume Analysis Results</h1>
              <p className="text-gray-600 mt-1">Analysis for: {fileName}</p>
            </div>
            <div className="mt-4 sm:mt-0">
              <Button variant="outline">
                <Download className="h-4 w-4 mr-2" />
                Download Report
              </Button>
            </div>
          </div>
        </div>

        {/* Overall Scores */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <Card className="text-center">
            <div
              className={`w-16 h-16 rounded-full ${getScoreBg(analysisResults.overallScore)} flex items-center justify-center mx-auto mb-3`}
            >
              <span className={`text-2xl font-bold ${getScoreColor(analysisResults.overallScore)}`}>
                {analysisResults.overallScore}
              </span>
            </div>
            <h3 className="font-semibold text-gray-900">Overall Score</h3>
            <p className="text-sm text-gray-600">General resume quality</p>
          </Card>

          <Card className="text-center">
            <div
              className={`w-16 h-16 rounded-full ${getScoreBg(analysisResults.atsScore)} flex items-center justify-center mx-auto mb-3`}
            >
              <span className={`text-2xl font-bold ${getScoreColor(analysisResults.atsScore)}`}>
                {analysisResults.atsScore}
              </span>
            </div>
            <h3 className="font-semibold text-gray-900">ATS Score</h3>
            <p className="text-sm text-gray-600">Applicant tracking system</p>
          </Card>

          <Card className="text-center">
            <div
              className={`w-16 h-16 rounded-full ${getScoreBg(analysisResults.grammarScore)} flex items-center justify-center mx-auto mb-3`}
            >
              <span className={`text-2xl font-bold ${getScoreColor(analysisResults.grammarScore)}`}>
                {analysisResults.grammarScore}
              </span>
            </div>
            <h3 className="font-semibold text-gray-900">Grammar Score</h3>
            <p className="text-sm text-gray-600">Language and structure</p>
          </Card>

          <Card className="text-center">
            <div
              className={`w-16 h-16 rounded-full ${getScoreBg(analysisResults.keywordScore)} flex items-center justify-center mx-auto mb-3`}
            >
              <span className={`text-2xl font-bold ${getScoreColor(analysisResults.keywordScore)}`}>
                {analysisResults.keywordScore}
              </span>
            </div>
            <h3 className="font-semibold text-gray-900">Keyword Score</h3>
            <p className="text-sm text-gray-600">Relevant keywords</p>
          </Card>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Grammar Analysis */}
          <Card>
            <div className="flex items-center mb-4">
              <FileText className="h-6 w-6 text-blue-600 mr-2" />
              <h2 className="text-xl font-semibold text-gray-900">Grammar & Structure</h2>
            </div>
            <div className="space-y-3">
              {analysisResults.sections.grammar.issues.map((issue, index) => (
                <div key={index} className="flex items-start space-x-3 p-3 bg-gray-50 rounded-md">
                  {getIssueIcon(issue.type)}
                  <div className="flex-1">
                    <p className="text-sm text-gray-900">{issue.message}</p>
                    <p className="text-xs text-gray-500">Line {issue.line}</p>
                  </div>
                </div>
              ))}
            </div>
          </Card>

          {/* ATS Analysis */}
          <Card>
            <div className="flex items-center mb-4">
              <Target className="h-6 w-6 text-green-600 mr-2" />
              <h2 className="text-xl font-semibold text-gray-900">ATS Compatibility</h2>
            </div>

            <div className="space-y-4">
              <div>
                <h4 className="font-medium text-gray-900 mb-2">Keywords Found</h4>
                <div className="flex flex-wrap gap-2">
                  {analysisResults.sections.ats.keywords.found.map((keyword, index) => (
                    <span key={index} className="px-2 py-1 bg-green-100 text-green-800 text-xs rounded-full">
                      {keyword}
                    </span>
                  ))}
                </div>
              </div>

              <div>
                <h4 className="font-medium text-gray-900 mb-2">Missing Keywords</h4>
                <div className="flex flex-wrap gap-2">
                  {analysisResults.sections.ats.keywords.missing.map((keyword, index) => (
                    <span key={index} className="px-2 py-1 bg-red-100 text-red-800 text-xs rounded-full">
                      {keyword}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </Card>

          {/* Structure Analysis */}
          <Card>
            <div className="flex items-center mb-4">
              <BarChart3 className="h-6 w-6 text-purple-600 mr-2" />
              <h2 className="text-xl font-semibold text-gray-900">Structure Analysis</h2>
            </div>
            <ul className="space-y-2">
              {analysisResults.sections.structure.feedback.map((feedback, index) => (
                <li key={index} className="flex items-start space-x-2">
                  <CheckCircle className="h-4 w-4 text-green-500 mt-0.5" />
                  <span className="text-sm text-gray-700">{feedback}</span>
                </li>
              ))}
            </ul>
          </Card>

          {/* Recommendations */}
          <Card>
            <div className="flex items-center mb-4">
              <Target className="h-6 w-6 text-blue-600 mr-2" />
              <h2 className="text-xl font-semibold text-gray-900">Recommendations</h2>
            </div>
            <ul className="space-y-3">
              {analysisResults.recommendations.map((recommendation, index) => (
                <li key={index} className="flex items-start space-x-2">
                  <div className="w-6 h-6 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center text-xs font-bold mt-0.5">
                    {index + 1}
                  </div>
                  <span className="text-sm text-gray-700">{recommendation}</span>
                </li>
              ))}
            </ul>
          </Card>
        </div>

        {/* Action Buttons */}
        <div className="mt-8 text-center space-y-4 sm:space-y-0 sm:space-x-4 sm:flex sm:justify-center">
          <Link to="/upload">
            <Button size="lg">Analyze Another Resume</Button>
          </Link>
          <Button variant="outline" size="lg">
            Save Results
          </Button>
        </div>
      </div>
    </div>
  )
}

export default Results
