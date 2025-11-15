// Sample AI Quality data for testing your components
export const sampleAIQualityData = {
  highQuality: {
    overallScore: 94,
    metrics: {
      codeQuality: 96,
      functionality: 98,
      originality: 91,
      documentation: 92,
      marketFit: 89,
      security: 95,
      performance: 93
    },
    analysis: "This is an exceptional implementation that demonstrates advanced understanding of the problem domain. The code follows industry best practices with comprehensive error handling and clear documentation. The solution is highly original and addresses a genuine market need. Minor improvements could be made in market positioning and user onboarding documentation.",
    confidence: 96,
    lastAnalyzed: "2024-01-15",
    strengths: [
      "Excellent code architecture following SOLID principles",
      "Comprehensive error handling and validation",
      "Clear and detailed documentation with examples",
      "High performance optimization implemented",
      "Strong security measures in place",
      "Unique approach to solving the problem",
      "Production-ready with proper testing"
    ],
    improvements: [
      "Could benefit from more market research data",
      "Additional usage examples for edge cases",
      "Performance benchmarks could be more detailed"
    ],
    category: 'code' as const
  },

  mediumQuality: {
    overallScore: 78,
    metrics: {
      visualAppeal: 82,
      functionality: 79,
      originality: 75,
      documentation: 73,
      marketFit: 81,
      performance: 77
    },
    analysis: "This asset shows good quality with solid fundamentals. The visual appeal is strong and functionality meets expectations. However, there are opportunities for improvement in documentation and originality. The market fit is reasonable but could be enhanced with more targeted positioning.",
    confidence: 85,
    lastAnalyzed: "2024-01-14",
    strengths: [
      "Good visual design and composition",
      "Functional and meets basic requirements",
      "Reasonable market appeal",
      "Decent performance characteristics"
    ],
    improvements: [
      "Documentation could be more comprehensive",
      "More unique features would improve originality",
      "Performance optimization opportunities exist",
      "Market positioning could be clearer"
    ],
    category: 'image' as const
  },

  lowQuality: {
    overallScore: 61,
    metrics: {
      functionality: 65,
      originality: 58,
      documentation: 52,
      marketFit: 63,
      performance: 59
    },
    analysis: "This asset has basic functionality but significant room for improvement. The documentation is minimal and originality is limited. While it addresses a market need, the execution could be substantially better. Recommend significant revisions before market release.",
    confidence: 78,
    lastAnalyzed: "2024-01-13",
    strengths: [
      "Basic functionality works as intended",
      "Addresses a valid market need",
      "Simple to understand and use"
    ],
    improvements: [
      "Documentation needs major expansion",
      "More original approach required",
      "Performance optimization needed",
      "Better error handling implementation",
      "Market research and positioning work needed"
    ],
    category: 'prompt' as const
  }
}