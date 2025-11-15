// import React from 'react';
// import Link from 'next/link';

// const Footer: React.FC = () => {
//   return (
//     <footer className="bg-gray-50 border-t border-gray-200">
//       <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
//         <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
//           <div className="col-span-1 md:col-span-2">
//             <div className="flex items-center mb-4">
//               <div className="bg-primary-600 text-white px-3 py-2 rounded-lg font-bold text-xl">
//                 AI
//               </div>
//               <span className="ml-2 text-xl font-semibold text-gray-900">Marketplace</span>
//             </div>
//             <p className="text-gray-600 text-sm">
//               The premier marketplace for AI-generated assets. Discover, buy, and sell 
//               code, images, datasets, and prompts created by AI.
//             </p>
//           </div>
          
//           <div>
//             <h3 className="text-sm font-semibold text-gray-900 tracking-wider uppercase mb-4">
//               Marketplace
//             </h3>
//             <ul className="space-y-2">
//               <li>
//                 <Link href="/marketplace?category=code" className="text-gray-600 hover:text-gray-900 text-sm">
//                   Code
//                 </Link>
//               </li>
//               <li>
//                 <Link href="/marketplace?category=image" className="text-gray-600 hover:text-gray-900 text-sm">
//                   Images
//                 </Link>
//               </li>
//               <li>
//                 <Link href="/marketplace?category=dataset" className="text-gray-600 hover:text-gray-900 text-sm">
//                   Datasets
//                 </Link>
//               </li>
//               <li>
//                 <Link href="/marketplace?category=prompt" className="text-gray-600 hover:text-gray-900 text-sm">
//                   Prompts
//                 </Link>
//               </li>
//             </ul>
//           </div>
//                    <div>
//             <h3 className="text-sm font-semibold text-gray-900 tracking-wider uppercase mb-4">
//               Support
//             </h3>
//             <ul className="space-y-2">
//               <li>
//                 <Link href="/help" className="text-gray-600 hover:text-gray-900 text-sm">
//                   Help Center
//                 </Link>
//               </li>
//               <li>
//                 <Link href="/contact" className="text-gray-600 hover:text-gray-900 text-sm">
//                   Contact Us
//                 </Link>
//               </li>
//               <li>
//                 <Link href="/terms" className="text-gray-600 hover:text-gray-900 text-sm">
//                   Terms of Service
//                 </Link>
//               </li>
//               <li>
//                 <Link href="/privacy" className="text-gray-600 hover:text-gray-900 text-sm">
//                   Privacy Policy
//                 </Link>
//               </li>
//             </ul>
//           </div>
//         </div>
        
//         <div className="mt-8 pt-8 border-t border-gray-200">
//           <p className="text-center text-sm text-gray-500">
//             © 2024 AI Marketplace. All rights reserved.
//           </p>
//         </div>
//       </div>
//     </footer>
//   );
// };

// export default Footer; 



import Link from "next/link"
import { Brain } from "lucide-react"

export function Footer() {
  return (
    <footer className="w-full border-t border-gray-200 bg-white">
      <div className="container mx-auto flex flex-col gap-8 px-4 py-10 md:px-6 lg:py-16">
        <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-4">
          <div className="space-y-4">
            <div className="flex items-center gap-2 font-bold text-gray-900">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-black to-gray-700 flex items-center justify-center text-white">
                <Brain className="w-4 h-4" />
              </div>
              <span>AIMarket</span>
            </div>
            <p className="text-sm text-gray-600">
              The premier marketplace for AI-generated assets. Buy and sell code, images, prompts, and datasets
              created with artificial intelligence.
            </p>
          </div>
          
          <div className="space-y-4">
            <h4 className="text-sm font-bold text-gray-900">Marketplace</h4>
            <ul className="space-y-2 text-sm">
                            <li>
                <Link href="/marketplace" className="text-gray-600 hover:text-gray-900 transition-colors">
                  Browse Assets
                </Link>
              </li>
              <li>
                <Link href="/marketplace?category=ai-code" className="text-gray-600 hover:text-gray-900 transition-colors">
                  AI Code
                </Link>
              </li>
              <li>
                <Link href="/marketplace?category=ai-images" className="text-gray-600 hover:text-gray-900 transition-colors">
                  AI Images
                </Link>
              </li>
              <li>
                <Link href="/marketplace?category=prompts" className="text-gray-600 hover:text-gray-900 transition-colors">
                  Prompts
                </Link>
              </li>
              <li>
                <Link href="/marketplace?category=datasets" className="text-gray-600 hover:text-gray-900 transition-colors">
                  Datasets
                </Link>
              </li>
            </ul>
          </div>
          
          <div className="space-y-4">
            <h4 className="text-sm font-bold text-gray-900">Creators</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/upload" className="text-gray-600 hover:text-gray-900 transition-colors">
                  Start Selling
                </Link>
              </li>
              <li>
                <Link href="/creator-guide" className="text-gray-600 hover:text-gray-900 transition-colors">
                  Creator Guide
                </Link>
              </li>
              <li>
                <Link href="/pricing" className="text-gray-600 hover:text-gray-900 transition-colors">
                  Pricing
                </Link>
              </li>
              <li>
                <Link href="/resources" className="text-gray-600 hover:text-gray-900 transition-colors">
                  Resources
                </Link>
              </li>
            </ul>
          </div>
          
          <div className="space-y-4">
            <h4 className="text-sm font-bold text-gray-900">Company</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/about" className="text-gray-600 hover:text-gray-900 transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-600 hover:text-gray-900 transition-colors">
                  Contact
                </Link>
              </li>
              <li>
                <Link href="/careers" className="text-gray-600 hover:text-gray-900 transition-colors">
                  Careers
                </Link>
              </li>
              <li>
                <Link href="/support" className="text-gray-600 hover:text-gray-900 transition-colors">
                  Support
                </Link>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="flex flex-col gap-4 sm:flex-row justify-between items-center border-t border-gray-200 pt-8">
          <p className="text-xs text-gray-500">
            &copy; {new Date().getFullYear()} AIMarket. All rights reserved.
          </p>
          <div className="flex gap-4">
            <Link href="/privacy" className="text-xs text-gray-500 hover:text-gray-700 transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms" className="text-xs text-gray-500 hover:text-gray-700 transition-colors">
              Terms of Service
            </Link>
            <Link href="/cookies" className="text-xs text-gray-500 hover:text-gray-700 transition-colors">
              Cookie Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}