// import React, { useState } from 'react';
// import { User } from '@/types';
// import Button from '../common/Button';
// import Rating from '../common/Rating';

// interface UserProfileProps {
//   user: User;
//   isOwnProfile?: boolean;
//   totalSales?: number;
//   averageRating?: number;
//   totalAssets?: number;
// }

// const UserProfile: React.FC<UserProfileProps> = ({
//   user,
//   isOwnProfile = false,
//   totalSales = 0,
//   averageRating = 0,
//   totalAssets = 0
// }) => {
//   const [isEditing, setIsEditing] = useState(false);
//   const [editData, setEditData] = useState({
//     username: user.username,
//     bio: user.bio || ''
//   });

//   const handleSave = () => {
//     // TODO: Implement profile update
//     setIsEditing(false);
//   };

//   return (
//     <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
//       <div className="flex items-start space-x-6">
//         <div className="flex-shrink-0">
//           <div className="h-24 w-24 bg-gray-300 rounded-full flex items-center justify-center">
//             {user.profilePic ? (
//               <img 
//                 src={user.profilePic} 
//                 alt={user.username}
//                 className="h-24 w-24 rounded-full object-cover"
//               />
//             ) : (
//               <span className="text-2xl font-bold text-gray-600">
//                 {user.username.charAt(0).toUpperCase()}
//               </span>
//             )}
//           </div>
//         </div>

//         <div className="flex-grow">
//           {isEditing ? (
//             <div className="space-y-4">
//               <input
//                 type="text"
//                 value={editData.username}
//                 onChange={(e) => setEditData({ ...editData, username: e.target.value })}
//                 className="input-field text-xl font-bold"
//               />
//               <textarea
//                 value={editData.bio}
//                 onChange={(e) => setEditData({ ...editData, bio: e.target.value })}
//                 className="input-field"
//                 rows={3}
//                 placeholder="Tell others about yourself..."
//               />
//               <div className="flex space-x-2">
//                 <Button onClick={handleSave} size="sm">Save</Button>
//                 <Button variant="secondary" onClick={() => setIsEditing(false)} size="sm">
//                   Cancel
//                 </Button>
//               </div>
//             </div>
//           ) : (
//             <>
//               <div className="flex items-center justify-between">
//                 <h1 className="text-2xl font-bold text-gray-900">{user.username}</h1>
//                 {isOwnProfile && (
//                   <Button 
//                     variant="outline" 
//                     size="sm"
//                     onClick={() => setIsEditing(true)}
//                   >
//                     Edit Profile
//                   </Button>
//                 )}
//               </div>
              
//               <p className="text-gray-600 mt-2">
//                 {user.bio || 'No bio available'}
//               </p>
              
//               <div className="flex items-center mt-4">
//                 <Rating rating={averageRating} size="sm" />
//                 <span className="ml-2 text-sm text-gray-600">
//                   ({totalSales} sales)
//                 </span>
//               </div>
//             </>
//           )}
//         </div>
//       </div>

//       <div className="mt-6 grid grid-cols-3 gap-6 pt-6 border-t border-gray-200">
//         <div className="text-center">
//           <div className="text-2xl font-bold text-gray-900">{totalAssets}</div>
//           <div className="text-sm text-gray-600">Assets</div>
//         </div>
//         <div className="text-center">
//           <div className="text-2xl font-bold text-gray-900">{totalSales}</div>
//           <div className="text-sm text-gray-600">Sales</div>
//         </div>
//         <div className="text-center">
//           <div className="text-2xl font-bold text-gray-900">{averageRating.toFixed(1)}</div>
//           <div className="text-sm text-gray-600">Rating</div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default UserProfile;