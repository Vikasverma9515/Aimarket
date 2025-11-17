"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import {
  Shield,
  Globe,
  CheckCircle,
  AlertTriangle,
  Clock,
  Download,
  ExternalLink,
  Info
} from "lucide-react"

interface ComplianceStatus {
  status: 'compliant' | 'non-compliant' | 'pending-review' | 'not-applicable' | 'verified'
  confidence: number
  lastChecked: string
  issues?: string[]
  recommendations?: string[]
}

interface ComplianceData {
  'GDPR (EU)': ComplianceStatus
  'CCPA (California)': ComplianceStatus
  'AI Act (EU)': ComplianceStatus
  'COPPA (US)': ComplianceStatus
  'Copyright Laws': ComplianceStatus
  'Data Privacy': ComplianceStatus
}

interface ComplianceCheckerProps {
  size?: 'sm' | 'lg'
}

const mockComplianceData: ComplianceData = {
  'GDPR (EU)': { 
    status: 'compliant', 
    confidence: 95, 
    lastChecked: '2024-01-15',
    recommendations: ['Ensure data processing documentation is included']
  },
  'CCPA (California)': { 
    status: 'compliant', 
    confidence: 88, 
    lastChecked: '2024-01-15' 
  },
  'AI Act (EU)': { 
    status: 'pending-review', 
    confidence: 72, 
    lastChecked: '2024-01-14',
    issues: ['AI system classification pending', 'Risk assessment needed']
  },
  'COPPA (US)': { 
    status: 'not-applicable', 
    confidence: 100, 
    lastChecked: '2024-01-15' 
  },
  'Copyright Laws': { 
    status: 'verified', 
    confidence: 94, 
    lastChecked: '2024-01-15' 
  },
  'Data Privacy': { 
    status: 'compliant', 
    confidence: 91, 
    lastChecked: '2024-01-15' 
  }
}

const getStatusColor = (status: string) => {
  switch (status) {
    case 'compliant':
    case 'verified':
      return 'bg-green-100 text-green-800 border-green-300'
    case 'pending-review':
      return 'bg-yellow-100 text-yellow-800 border-yellow-300'
    case 'non-compliant':
      return 'bg-red-100 text-red-800 border-red-300'
    case 'not-applicable':
      return 'bg-gray-100 text-gray-800 border-gray-300'
    default:
      return 'bg-gray-100 text-gray-800 border-gray-300'
  }
}

const getStatusIcon = (status: string) => {
  switch (status) {
    case 'compliant':
    case 'verified':
      return <CheckCircle className="w-4 h-4 text-green-600" />
    case 'pending-review':
      return <Clock className="w-4 h-4 text-yellow-600" />
    case 'non-compliant':
      return <AlertTriangle className="w-4 h-4 text-red-600" />
    case 'not-applicable':
      return <Info className="w-4 h-4 text-gray-600" />
    default:
      return <Info className="w-4 h-4 text-gray-600" />
  }
}

const getOverallScore = (data: ComplianceData) => {
  const applicable = Object.values(data).filter(item => item.status !== 'not-applicable')
  const compliant = applicable.filter(item => 
    item.status === 'compliant' || item.status === 'verified'
  )
  return Math.round((compliant.length / applicable.length) * 100)
}

export function ComplianceChecker({ size = 'sm' }: ComplianceCheckerProps) {
  const [complianceData] = useState<ComplianceData>(mockComplianceData)
  
  const overallScore = getOverallScore(complianceData)
  const totalApplicable = Object.values(complianceData).filter(
    item => item.status !== 'not-applicable'
  ).length

  if (size === 'sm') {
    return (
      <Dialog>
        <DialogTrigger asChild>
          <Badge 
            className={`${getStatusColor('compliant')} cursor-pointer hover:scale-105 transition-transform flex items-center gap-1`}
          >
            <Shield className="w-3 h-3" />
            {overallScore}% Compliant
          </Badge>
        </DialogTrigger>
        
        <DialogContent className="max-w-2xl">
          <DialogHeader>
            <DialogTitle className="flex items-center gap-2">
              <Globe className="w-5 h-5 text-purple-600" />
              Global Compliance Report
              <Badge className="bg-purple-100 text-purple-700">Enterprise</Badge>
            </DialogTitle>
          </DialogHeader>
          
          <ComplianceDetails data={complianceData} overallScore={overallScore} totalApplicable={totalApplicable} />
        </DialogContent>
      </Dialog>
    )
  }

  return (
    <Card className="border-purple-200">
      <CardHeader>
        <CardTitle className="flex items-center gap-2 text-lg">
          <Globe className="w-5 h-5 text-purple-600" />
          Global Compliance
          <Badge className="bg-purple-100 text-purple-700 text-xs">Enterprise</Badge>
        </CardTitle>
      </CardHeader>
      <ComplianceDetails data={complianceData} overallScore={overallScore} totalApplicable={totalApplicable} />
    </Card>
  )
}

function ComplianceDetails({ 
  data, 
  overallScore, 
  totalApplicable 
}: { 
  data: ComplianceData
  overallScore: number
  totalApplicable: number
}) {
  return (
    <CardContent className="space-y-6">
      {/* Overall Score */}
      <Card className="bg-gradient-to-r from-purple-50 to-indigo-50 border-purple-200">
        <CardContent className="p-4">
          <div className="flex items-center justify-between mb-2">
            <span className="font-medium">Overall Compliance Score</span>
            <span className="text-2xl font-bold text-purple-700">{overallScore}%</span>
          </div>
          <Progress value={overallScore} className="h-2 mb-2" />
          <div className="text-sm text-gray-600">
            {totalApplicable} regulations checked • Last updated today
          </div>
        </CardContent>
      </Card>

      {/* Individual Compliance Items */}
      <div className="space-y-3">
        <h4 className="font-medium">Regulation Compliance</h4>
        {Object.entries(data).map(([regulation, status]) => (
          <Card key={regulation} className="bg-gray-50">
                        <CardContent className="p-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  {getStatusIcon(status.status)}
                  <div>
                    <div className="font-medium">{regulation}</div>
                    <div className="text-sm text-gray-500">
                      {status.confidence}% confidence • Checked {status.lastChecked}
                    </div>
                  </div>
                </div>
                <Badge className={getStatusColor(status.status)}>
                  {status.status.replace('-', ' ')}
                </Badge>
              </div>
              
              {/* Issues */}
              {status.issues && status.issues.length > 0 && (
                <div className="mt-3 p-3 bg-yellow-50 border border-yellow-200 rounded-lg">
                  <div className="text-sm font-medium text-yellow-800 mb-1">Issues Found:</div>
                  <ul className="text-sm text-yellow-700 space-y-1">
                    {status.issues.map((issue: string, index: number) => (
                      <li key={index}>• {issue}</li>
                    ))}
                  </ul>
                </div>
              )}
              
              {/* Recommendations */}
              {status.recommendations && status.recommendations.length > 0 && (
                <div className="mt-3 p-3 bg-blue-50 border border-blue-200 rounded-lg">
                  <div className="text-sm font-medium text-blue-800 mb-1">Recommendations:</div>
                  <ul className="text-sm text-blue-700 space-y-1">
                    {status.recommendations.map((rec: string, index: number) => (
                      <li key={index}>• {rec}</li>
                    ))}
                  </ul>
                </div>
              )}
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Actions */}
      <div className="flex gap-3">
        <Button className="flex-1" variant="outline">
          <Download className="w-4 h-4 mr-2" />
          Download Full Report
        </Button>
        <Button className="flex-1" variant="outline">
          <ExternalLink className="w-4 h-4 mr-2" />
          Legal Resources
        </Button>
      </div>

      {/* Disclaimer */}
      <div className="p-3 bg-yellow-50 border border-yellow-200 rounded-lg">
        <div className="flex items-start gap-2">
          <Info className="w-4 h-4 text-yellow-600 mt-0.5 flex-shrink-0" />
          <div className="text-sm text-yellow-800">
            <strong>Disclaimer:</strong> This compliance analysis is automated and for informational purposes only. 
            Always consult with legal professionals for official compliance verification.
          </div>
        </div>
      </div>
    </CardContent>
  )
}