"use client"

import { useState } from "react"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Button } from "@/components/ui/button"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Brain, Shield, Code, Eye, FileText, Zap, Info, Star, CheckCircle, AlertCircle, TrendingUp, Award, Target } from "lucide-react"

interface QualityMetrics {
  codeQuality?: number
  visualAppeal?: number
  functionality: number
  originality: number
  documentation: number
  marketFit: number
  security?: number
  performance?: number
}

interface AIQualityData {
  overallScore: number
  metrics: QualityMetrics
  analysis: string
  confidence: number
  lastAnalyzed: string
  strengths: string[]
  improvements: string[]
  category: 'code' | 'image' | 'prompt' | 'dataset'
}

interface AIQualityBadgeProps {
  qualityData: AIQualityData
  productType: 'code' | 'image' | 'prompt' | 'dataset'
  size?: 'sm' | 'md' | 'lg'
  showDetails?: boolean
}

const getScoreColor = (score: number) => {
  if (score >= 95) return "bg-emerald-100 text-emerald-800 border-emerald-300"
  if (score >= 90) return "bg-green-100 text-green-800 border-green-300"
  if (score >= 80) return "bg-blue-100 text-blue-800 border-blue-300"
  if (score >= 70) return "bg-yellow-100 text-yellow-800 border-yellow-300"
  if (score >= 60) return "bg-orange-100 text-orange-800 border-orange-300"
  return "bg-red-100 text-red-800 border-red-300"
}

const getScoreIcon = (score: number) => {
  if (score >= 95) return <Award className="w-3 h-3" />
  if (score >= 90) return <CheckCircle className="w-3 h-3" />
  if (score >= 80) return <Star className="w-3 h-3" />
  if (score >= 70) return <TrendingUp className="w-3 h-3" />
  if (score >= 60) return <AlertCircle className="w-3 h-3" />
  return <Info className="w-3 h-3" />
}

const getScoreLabel = (score: number) => {
  if (score >= 95) return "Exceptional"
  if (score >= 90) return "Excellent"
  if (score >= 80) return "Very Good"
  if (score >= 70) return "Good"
  if (score >= 60) return "Fair"
  return "Needs Improvement"
}

const getMetricIcon = (metric: string) => {
  switch (metric) {
    case 'codeQuality': return <Code className="w-4 h-4" />
    case 'visualAppeal': return <Eye className="w-4 h-4" />
    case 'functionality': return <Zap className="w-4 h-4" />
    case 'originality': return <Brain className="w-4 h-4" />
    case 'documentation': return <FileText className="w-4 h-4" />
    case 'marketFit': return <Target className="w-4 h-4" />
    case 'security': return <Shield className="w-4 h-4" />
    case 'performance': return <TrendingUp className="w-4 h-4" />
    default: return <Info className="w-4 h-4" />
  }
}

const getMetricLabel = (metric: string) => {
  switch (metric) {
    case 'codeQuality': return 'Code Quality'
    case 'visualAppeal': return 'Visual Appeal'
    case 'functionality': return 'Functionality'
    case 'originality': return 'Originality'
    case 'documentation': return 'Documentation'
    case 'marketFit': return 'Market Fit'
    case 'security': return 'Security'
    case 'performance': return 'Performance'
    default: return metric.replace(/([A-Z])/g, ' $1').replace(/^./, str => str.toUpperCase())
  }
}

const getMetricDescription = (metric: string, productType: string) => {
  switch (metric) {
    case 'codeQuality':
      return 'Code structure, best practices, maintainability, and readability'
    case 'visualAppeal':
      return 'Aesthetic quality, composition, color harmony, and visual impact'
    case 'functionality':
      return 'How well the asset performs its intended purpose'
    case 'originality':
      return 'Uniqueness and creativity compared to existing solutions'
    case 'documentation':
      return 'Quality of instructions, examples, and support materials'
    case 'marketFit':
      return 'Relevance to current market needs and trends'
    case 'security':
      return 'Security best practices and vulnerability assessment'
    case 'performance':
      return 'Efficiency, speed, and resource optimization'
    default:
      return 'Assessment of this quality aspect'
  }
}

export function AIQualityBadge({ qualityData, productType, size = 'md', showDetails = false }: AIQualityBadgeProps) {
  const sizeClasses = {
    sm: "text-xs px-2 py-1",
    md: "text-sm px-3 py-1.5",
    lg: "text-base px-4 py-2"
  }

  const iconSizes = {
    sm: "w-3 h-3",
    md: "w-3 h-3", 
    lg: "w-4 h-4"
  }

  if (showDetails) {
    return (
      <Card className="border-2 border-blue-200 bg-gradient-to-br from-blue-50 to-indigo-50">
        <AIQualityDetails qualityData={qualityData} productType={productType} />
      </Card>
    )
  }

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Badge 
          className={`${getScoreColor(qualityData.overallScore)} ${sizeClasses[size]} cursor-pointer hover:scale-105 transition-all duration-200 flex items-center gap-1 shadow-sm hover:shadow-md`}
        >
          <Brain className={iconSizes[size]} />
          AI Score: {qualityData.overallScore}
          {getScoreIcon(qualityData.overallScore)}
        </Badge>
      </DialogTrigger>
      
      <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2">
            <Brain className="w-6 h-6 text-blue-600" />
            AI Quality Analysis
            <Badge className="bg-blue-100 text-blue-700 text-xs">
              Beta Feature
            </Badge>
            <Badge className={`${getScoreColor(qualityData.overallScore)} text-xs`}>
              {getScoreLabel(qualityData.overallScore)}
            </Badge>
          </DialogTitle>
        </DialogHeader>
        
        <AIQualityDetails qualityData={qualityData} productType={productType} />
      </DialogContent>
    </Dialog>
  )
}

function AIQualityDetails({ qualityData, productType }: { 
  qualityData: AIQualityData
  productType: string 
}) {
  return (
    <div className="space-y-8">
      {/* Overall Score */}
      <Card className="border-2 border-blue-200 bg-gradient-to-r from-blue-50 to-indigo-50">
        <CardContent className="p-8 text-center">
          <div className="flex items-center justify-center gap-4 mb-4">
            <div className="text-6xl font-bold text-blue-600">
              {qualityData.overallScore}
            </div>
            <div className="text-left">
              <div className="text-2xl font-bold text-gray-700">/100</div>
              <div className="text-lg font-medium text-gray-600">{getScoreLabel(qualityData.overallScore)}</div>
            </div>
            <div className="text-blue-600">
              {getScoreIcon(qualityData.overallScore)}
            </div>
          </div>
          <div className="text-lg font-medium text-gray-700 mb-2">Overall AI Quality Score</div>
          <div className="text-sm text-gray-600 mb-4">
            {qualityData.confidence}% confidence • Analyzed {qualityData.lastAnalyzed}
          </div>
          <div className="w-full max-w-md mx-auto">
            <Progress value={qualityData.overallScore} className="h-3 mb-2" />
            <div className="text-xs text-gray-500">
              Based on {Object.keys(qualityData.metrics).length} quality metrics
            </div>
          </div>
        </CardContent>
      </Card>

      <div className="grid lg:grid-cols-2 gap-8">
        {/* Detailed Metrics */}
        <div className="space-y-6">
          <div>
            <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
              <TrendingUp className="w-5 h-5 text-blue-600" />
              Quality Metrics
            </h3>
            <div className="grid gap-4">
              {Object.entries(qualityData.metrics).map(([metric, score]) => (
                score !== undefined && (
                  <Card key={metric} className="hover:shadow-md transition-shadow">
                    <CardContent className="p-4">
                      <div className="flex items-center gap-3 mb-3">
                        <div className="p-2 rounded-lg bg-blue-100">
                          {getMetricIcon(metric)}
                        </div>
                        <div className="flex-1">
                          <div className="flex items-center justify-between">
                            <span className="font-medium text-gray-900">{getMetricLabel(metric)}</span>
                            <div className="flex items-center gap-2">
                              <span className="font-bold text-lg">{score}%</span>
                              <Badge 
                                className={`${getScoreColor(score)} text-xs`}
                                variant="outline"
                              >
                                {getScoreLabel(score)}
                              </Badge>
                            </div>
                          </div>
                          <div className="text-xs text-gray-500 mt-1">
                            {getMetricDescription(metric, productType)}
                          </div>
                        </div>
                      </div>
                      <Progress value={score} className="h-2" />
                    </CardContent>
                  </Card>
                )
              ))}
            </div>
          </div>
        </div>

        {/* Analysis and Insights */}
        <div className="space-y-6">
          {/* AI Analysis Summary */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-lg">
                <Brain className="w-5 h-5 text-purple-600" />
                AI Analysis Summary
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700 leading-relaxed mb-4">
                {qualityData.analysis}
              </p>
              <div className="p-3 bg-blue-50 border border-blue-200 rounded-lg">
                <div className="text-sm text-blue-800">
                  <strong>Confidence Level:</strong> {qualityData.confidence}% - This analysis is based on 
                  multiple AI models trained on quality assessment patterns.
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Strengths */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-lg text-green-700">
                <CheckCircle className="w-5 h-5" />
                Key Strengths
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2">
                {qualityData.strengths.map((strength, index) => (
                  <li key={index} className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                    <span className="text-sm text-gray-700">{strength}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>

          {/* Improvement Areas */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-lg text-orange-700">
                <TrendingUp className="w-5 h-5" />
                Areas for Improvement
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2">
                {qualityData.improvements.map((improvement, index) => (
                  <li key={index} className="flex items-start gap-2">
                    <AlertCircle className="w-4 h-4 text-orange-600 mt-0.5 flex-shrink-0" />
                    <span className="text-sm text-gray-700">{improvement}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Score Breakdown */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Award className="w-5 h-5 text-yellow-600" />
            Score Breakdown & Comparison
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center p-4 bg-blue-50 rounded-lg">
              <div className="text-2xl font-bold text-blue-600 mb-1">
                {Math.round((Object.values(qualityData.metrics).reduce((a, b) => (a || 0) + (b || 0), 0) / Object.values(qualityData.metrics).filter(v => v !== undefined).length))}%
              </div>
              <div className="text-sm text-gray-600">Average Score</div>
            </div>
            <div className="text-center p-4 bg-green-50 rounded-lg">
              <div className="text-2xl font-bold text-green-600 mb-1">
                {Math.max(...Object.values(qualityData.metrics).filter(v => v !== undefined) as number[])}%
              </div>
              <div className="text-sm text-gray-600">Highest Metric</div>
            </div>
            <div className="text-center p-4 bg-purple-50 rounded-lg">
              <div className="text-2xl font-bold text-purple-600 mb-1">Top 15%</div>
              <div className="text-sm text-gray-600">Marketplace Rank</div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Methodology */}
      <Card className="bg-gray-50">
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-lg">
            <Info className="w-5 h-5 text-gray-600" />
            How We Calculate Quality Scores
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h4 className="font-medium text-gray-900 mb-2">AI Analysis Process</h4>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Multiple AI models analyze the asset</li>
                <li>• Code/content structure evaluation</li>
                <li>• Market relevance assessment</li>
                <li>• Quality benchmarking against standards</li>
                <li>• Human expert validation</li>
              </ul>
            </div>
            <div>
              <h4 className="font-medium text-gray-900 mb-2">Scoring Methodology</h4>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Each metric weighted by importance</li>
                <li>• Industry best practices considered</li>
                <li>• Continuous learning from user feedback</li>
                <li>• Regular model updates and improvements</li>
                <li>• Confidence levels indicate reliability</li>
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>

            {/* Disclaimer */}
      <div className="p-4 bg-yellow-50 border border-yellow-200 rounded-lg">
        <div className="flex items-start gap-3">
          <Info className="w-5 h-5 text-yellow-600 mt-0.5 flex-shrink-0" />
          <div className="text-sm text-yellow-800">
            <strong>Important Note:</strong> This AI-powered quality analysis is in beta and provided for guidance only. 
            Scores are generated using advanced machine learning models trained on quality assessment patterns, 
            but may not capture all nuances of quality. We recommend using this as one factor in your 
            evaluation alongside your own assessment and user reviews. The analysis is continuously 
            improved based on user feedback and market data.
          </div>
        </div>
      </div>

      {/* Action Buttons */}
      <div className="flex flex-wrap gap-3 justify-center">
        <Button variant="outline" className="flex items-center gap-2">
          <FileText className="w-4 h-4" />
          Download Quality Report
        </Button>
        <Button variant="outline" className="flex items-center gap-2">
          <TrendingUp className="w-4 h-4" />
          Compare with Similar Assets
        </Button>
        <Button variant="outline" className="flex items-center gap-2">
          <Brain className="w-4 h-4" />
          How AI Scoring Works
        </Button>
      </div>
    </div>
  )
}

// Quick inline version for product cards
export function AIQualityQuickBadge({ 
  score, 
  size = 'sm', 
  showLabel = false 
}: { 
  score: number
  size?: 'xs' | 'sm' | 'md' | 'lg'
  showLabel?: boolean 
}) {
  const sizeClasses = {
    xs: "text-xs px-1.5 py-0.5",
    sm: "text-xs px-2 py-1",
    md: "text-sm px-3 py-1.5", 
    lg: "text-base px-4 py-2"
  }

  const iconSizes = {
    xs: "w-2 h-2",
    sm: "w-3 h-3",
    md: "w-3 h-3",
    lg: "w-4 h-4"
  }

  return (
    <Badge 
      className={`${getScoreColor(score)} ${sizeClasses[size]} flex items-center gap-1 font-medium`}
      title={`AI Quality Score: ${score}/100 - ${getScoreLabel(score)}`}
    >
      <Brain className={iconSizes[size]} />
      {score}
      {showLabel && size !== 'xs' && (
        <span className="ml-1">{getScoreLabel(score)}</span>
      )}
    </Badge>
  )
}

// Compact version for list views
export function AIQualityCompactBadge({ 
  score, 
  confidence 
}: { 
  score: number
  confidence: number 
}) {
  return (
    <div className="flex items-center gap-1">
      <Badge className={`${getScoreColor(score)} text-xs px-2 py-0.5`}>
        <Brain className="w-2 h-2 mr-1" />
        {score}
      </Badge>
      <span className="text-xs text-gray-500">({confidence}%)</span>
    </div>
  )
}

// Score trend indicator
export function AIQualityTrend({ 
  currentScore, 
  previousScore 
}: { 
  currentScore: number
  previousScore?: number 
}) {
  if (!previousScore) return <AIQualityQuickBadge score={currentScore} />
  
  const trend = currentScore - previousScore
  const isImproving = trend > 0
  const isStable = Math.abs(trend) < 2
  
  return (
    <div className="flex items-center gap-2">
      <AIQualityQuickBadge score={currentScore} />
      {!isStable && (
        <Badge 
          variant="outline" 
          className={`text-xs ${
            isImproving 
              ? 'text-green-600 border-green-300' 
              : 'text-red-600 border-red-300'
          }`}
        >
          {isImproving ? '+' : ''}{trend}
        </Badge>
      )}
    </div>
  )
}

// Loading state for AI analysis
export function AIQualityLoading() {
  return (
    <Badge className="bg-gray-100 text-gray-600 border-gray-300 text-sm px-3 py-1.5 flex items-center gap-2">
      <Brain className="w-3 h-3 animate-pulse" />
      <div className="flex gap-1">
        <div className="w-1 h-1 bg-gray-400 rounded-full animate-bounce"></div>
        <div className="w-1 h-1 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
        <div className="w-1 h-1 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
      </div>
      Analyzing...
    </Badge>
  )
}