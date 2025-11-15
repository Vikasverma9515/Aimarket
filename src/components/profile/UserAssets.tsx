// import React, { useState } from 'react';
// import { Asset } from '@/types';
// import AssetGrid from '../marketplace/AssetGrid';
// import Button from '../common/Button';

// interface UserAssetsProps {
//   assets: Asset[];
//   isOwnProfile?: boolean;
// }

// const UserAssets: React.FC<UserAssetsProps> = ({ assets, isOwnProfile = false }) => {
//   const [activeTab, setActiveTab] = useState<'published' | 'drafts'>('published');

//   const publishedAssets = assets.filter(asset => asset.id); // Assuming all fetched assets are published
//   const draftAssets: Asset[] = []; // TODO: Filter draft assets

//   const currentAssets = activeTab === 'published' ? publishedAssets : draftAssets;

//   return (
//     <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
//       <div className="flex items-center justify-between mb-6">
//         <h2 className="text-xl font-semibold text-gray-900">
//           {isOwnProfile ? 'My Assets' : 'Assets'}
//         </h2>
        
//         {isOwnProfile && (
//           <div className="flex space-x-1 bg-gray-100 p-1 rounded-lg">
//             <button
//               onClick={() => setActiveTab('published')}
//               className={`px-3 py-1 text-sm rounded-md transition-colors ${
//                 activeTab === 'published'
//                   ? 'bg-white text-gray-900 shadow-sm'
//                   : 'text-gray-600 hover:text-gray-900'
//               }`}
//             >
//               Published ({publishedAssets.length})
//             </button>
//             <button
//               onClick={() => setActiveTab('drafts')}
//               className={`px-3 py-1 text-sm rounded-md transition-colors ${
//                 activeTab === 'drafts'
//                   ? 'bg-white text-gray-900 shadow-sm'
//                   : 'text-gray-600 hover:text-gray-900'
//               }`}
//             >
//               Drafts ({draftAssets.length})
//             </button>
//           </div>
//         )}
//       </div>

//       {currentAssets.length > 0 ? (
//         <AssetGrid assets={currentAssets} />
//       ) : (
//         <div className="text-center py-12">
//           <div className="text-gray-400 text-6xl mb-4">📝</div>
//           <h3 className="text-lg font-medium text-gray-900 mb-2">
//             {activeTab === 'published' ? 'No published assets yet' : 'No drafts yet'}
//           </h3>
//           <p className="text-gray-600 mb-4">
//             {isOwnProfile 
//               ? `Start ${activeTab === 'published' ? 'selling' : 'creating'} your first AI asset!`
//               : 'This user hasn\'t published any assets yet.'
//             }
//           </p>
//           {isOwnProfile && (
//             <Button onClick={() => window.location.href = '/upload'}>
//               Upload New Asset
//             </Button>
//           )}
//         </div>
//       )}
//     </div>
//   );
// };

// export default UserAssets;