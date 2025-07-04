"use client"

import { useState, useRef } from "react"
import { useNavigate } from "react-router-dom"
import { UploadIcon, FileText, AlertCircle, CheckCircle } from "lucide-react"
import Button from "../components/UI/Button"
import Card from "../components/UI/Card"

const Upload = () => {
  const [file, setFile] = useState(null)
  const [dragActive, setDragActive] = useState(false)
  const [uploading, setUploading] = useState(false)
  const [error, setError] = useState("")
  const fileInputRef = useRef(null)
  const navigate = useNavigate()

  const handleDrag = (e) => {
    e.preventDefault()
    e.stopPropagation()
    if (e.type === "dragenter" || e.type === "dragover") {
      setDragActive(true)
    } else if (e.type === "dragleave") {
      setDragActive(false)
    }
  }

  const handleDrop = (e) => {
    e.preventDefault()
    e.stopPropagation()
    setDragActive(false)

    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      handleFile(e.dataTransfer.files[0])
    }
  }

  const handleChange = (e) => {
    e.preventDefault()
    if (e.target.files && e.target.files[0]) {
      handleFile(e.target.files[0])
    }
  }

  const handleFile = (selectedFile) => {
    setError("")

    // Validate file type
    const allowedTypes = [
      "application/pdf",
      "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
      "application/msword",
    ]
    if (!allowedTypes.includes(selectedFile.type)) {
      setError("Please upload a PDF or DOCX file only.")
      return
    }

    // Validate file size (5MB limit)
    if (selectedFile.size > 5 * 1024 * 1024) {
      setError("File size must be less than 5MB.")
      return
    }

    setFile(selectedFile)
  }

  const handleUpload = async () => {
    if (!file) {
      setError("Please select a file to upload.")
      return
    }

    setUploading(true)

    // Simulate upload process
    try {
      // Mock API call
      await new Promise((resolve) => setTimeout(resolve, 2000))

      // Navigate to results page with mock data
      navigate("/results", {
        state: {
          fileName: file.name,
          uploadTime: new Date().toISOString(),
        },
      })
    } catch (err) {
      setError("Upload failed. Please try again.")
    } finally {
      setUploading(false)
    }
  }

  const onButtonClick = () => {
    fileInputRef.current?.click()
  }

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Upload Your Resume</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Upload your resume in PDF or DOCX format to get instant AI-powered analysis and feedback.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Upload Area */}
          <div className="lg:col-span-2">
            <Card>
              <div
                className={`border-2 border-dashed rounded-lg p-8 text-center transition-colors ${
                  dragActive
                    ? "border-blue-400 bg-blue-50"
                    : file
                      ? "border-green-400 bg-green-50"
                      : "border-gray-300 hover:border-gray-400"
                }`}
                onDragEnter={handleDrag}
                onDragLeave={handleDrag}
                onDragOver={handleDrag}
                onDrop={handleDrop}
              >
                <input
                  ref={fileInputRef}
                  type="file"
                  className="hidden"
                  accept=".pdf,.docx,.doc"
                  onChange={handleChange}
                />

                {file ? (
                  <div className="space-y-4">
                    <CheckCircle className="h-16 w-16 text-green-500 mx-auto" />
                    <div>
                      <p className="text-lg font-medium text-gray-900">File Selected</p>
                      <p className="text-gray-600">{file.name}</p>
                      <p className="text-sm text-gray-500">{(file.size / 1024 / 1024).toFixed(2)} MB</p>
                    </div>
                    <Button variant="outline" onClick={onButtonClick}>
                      Choose Different File
                    </Button>
                  </div>
                ) : (
                  <div className="space-y-4">
                    <UploadIcon className="h-16 w-16 text-gray-400 mx-auto" />
                    <div>
                      <p className="text-lg font-medium text-gray-900">Drag and drop your resume here</p>
                      <p className="text-gray-600">or</p>
                    </div>
                    <Button onClick={onButtonClick}>Choose File</Button>
                  </div>
                )}
              </div>

              {error && (
                <div className="mt-4 p-4 bg-red-50 border border-red-200 rounded-md flex items-center space-x-2">
                  <AlertCircle className="h-5 w-5 text-red-500" />
                  <p className="text-red-700">{error}</p>
                </div>
              )}

              <div className="mt-6">
                <Button onClick={handleUpload} disabled={!file || uploading} size="lg" className="w-full">
                  {uploading ? "Analyzing Resume..." : "Analyze Resume"}
                </Button>
              </div>
            </Card>
          </div>

          {/* Instructions */}
          <div className="space-y-6">
            <Card>
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Upload Requirements</h3>
              <ul className="space-y-2 text-sm text-gray-600">
                <li className="flex items-center space-x-2">
                  <FileText className="h-4 w-4 text-blue-500" />
                  <span>PDF or DOCX format only</span>
                </li>
                <li className="flex items-center space-x-2">
                  <FileText className="h-4 w-4 text-blue-500" />
                  <span>Maximum file size: 5MB</span>
                </li>
                <li className="flex items-center space-x-2">
                  <FileText className="h-4 w-4 text-blue-500" />
                  <span>Text-based documents only</span>
                </li>
              </ul>
            </Card>

            <Card>
              <h3 className="text-lg font-semibold text-gray-900 mb-4">What We Analyze</h3>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>• Grammar and spelling</li>
                <li>• ATS compatibility</li>
                <li>• Keyword optimization</li>
                <li>• Structure and formatting</li>
                <li>• Industry-specific recommendations</li>
              </ul>
            </Card>

            <Card>
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Privacy & Security</h3>
              <p className="text-sm text-gray-600">
                Your resume is processed securely and deleted after analysis. We never store or share your personal
                information.
              </p>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Upload
