import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Ideas from: AI-Powered Screenshot to Text',
  description: '[
  {
    "title": "Vision to Action",
    "one_liner": "Transform screenshots into actionable task lists powered by AI.",
    "why_now": "With remote work surging, teams need better ways to manage information overload.",
    "novel_mechanism": "Combining OCR with natural language processing to generate contextual task items.",
    "ai_stack": [
      "Claude/GPT",
      "RAG",
      "Vision",
      "Agents",
      "Embeddings"
    ],
    "edge_use_cases": [
      "Collaborative project management",
      "Instant meeting notes creation"
    ],
    "blue_ocean": true,
    "execution_72h": {
      "mvp_scope": [
        "Basic OCR capability",
        "Task generation feature",
        "User authentication"
      ],
      "tools": [
        "Next.js",
        "Supabase",
        "Stripe",
        "n8n"
      ],
      "data_bootstrap": [
        "Scrape task management best practices",
        "Public dataset of project management guidelines"
      ],
      "risk": [
        "Limited accuracy in task extraction",
        "User adoption rate may be low"
      ],
      "mitigation": [
        "Iterate based on user feedback",
        "Offer invitations or free trials for first users"
      ]
    },
    "go_to_market": {
      "hooks": [
        "Before/After productivity comparison",
        "User testimonials as early adopters"
      ],
      "channels": [
        "ProductHunt",
        "X",
        "LinkedIn"
      ],
      "pricing": {
        "free": "Basic features",
        "pro": "$9.99/month for advanced features",
        "business": "$29.99/month for team collaboration tools"
      }
    },
    "moat": [
      "User-generated task templates",
      "Integration with popular project management tools",
      "Community-driven feature requests"
    ],
    "scores": {
      "novelty": 8,
      "72h_feasibility": 7,
      "revenue_potential": 6,
      "defensibility": 7
    },
    "total_score": 28,
    "reasoning": "This approach is not just replicating OCR; it's about enhancing productivity through contextual understanding, which is rare in the market."
  }
]',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ar" dir="rtl">
      <body className={inter.className}>{children}</body>
    </html>
  )
}