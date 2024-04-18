// import React, { useState } from 'react';

// const WeaponFilters = () => {
//     const [searchQuery, setSearchQuery] = useState('');
//     const [weaponType, setWeaponType] = useState('All Weapons');
//     const [competitiveMode, setCompetitiveMode] = useState('Competitive');
//     const [map, setMap] = useState('All Maps');
//     const [rank, setRank] = useState('Platinum 3');
//     const [episode, setEpisode] = useState('Ep 8 - Act 2');

//     return (
//         <div data-open="false" className="⚡653396dc ⚡6f4c61a6 flex">
//             <div className="filter-controllers flex items-center space-x-4">
//                 <label className="⚡1963f4c1 type-callout--semi ⚡4ab5bef3" htmlFor="text-input-:r1j:">
//                     <input
//                         id="text-input-:r1j:"
//                         type="text"
//                         placeholder="Search weapons"
//                         autoComplete="off"
//                         value={searchQuery}
//                         onChange={(e) => setSearchQuery(e.target.value)}
//                         className="border border-gray-300 rounded-md px-2 py-1"
//                     />
//                 </label>
//                 <div className="⚡c794f56d">
//                     <button
//                         className="selectButton flex items-center justify-between px-2 py-1 border border-gray-300 rounded-md"
//                         id="headlessui-listbox-button-:r1k:"
//                         type="button"
//                         aria-haspopup="true"
//                         aria-expanded="false"
//                     >
//                         <span className="type-callout--semi text mr-2">{weaponType}</span>
//                         <svg viewBox="0 0 16 16" className="caret">
//                             <path fillRule="evenodd" clipRule="evenodd" d="M4 6L8 10L12 6H4Z" />
//                         </svg>
//                     </button>
//                 </div>
//                 <div className="⚡c794f56d">
//                     <button
//                         className="selectButton"
//                         id="headlessui-listbox-button-:r1l:"
//                         type="button"
//                         aria-haspopup="true"
//                         aria-expanded="false"
//                     >
//                         <span className="type-callout--semi text">{competitiveMode}</span>
//                         <svg viewBox="0 0 16 16" className="caret">
//                             <path fillRule="evenodd" clipRule="evenodd" d="M4 6L8 10L12 6H4Z" />
//                         </svg>
//                     </button>
//                 </div>
//                 <div className="⚡c794f56d">
//                     <button
//                         className="selectButton"
//                         id="headlessui-listbox-button-:r1m:"
//                         type="button"
//                         aria-haspopup="true"
//                         aria-expanded="false"
//                     >
//                         <span className="type-callout--semi text">{map}</span>
//                         <svg viewBox="0 0 16 16" className="caret">
//                             <path fillRule="evenodd" clipRule="evenodd" d="M4 6L8 10L12 6H4Z" />
//                         </svg>
//                     </button>
//                 </div>
//                 <div className="⚡c794f56d">
//                     <button
//                         className="selectButton"
//                         id="headlessui-listbox-button-:r1n:"
//                         type="button"
//                         aria-haspopup="true"
//                         aria-expanded="false"
//                     >
//                         <span className="type-callout--semi text">{rank}</span>
//                         <svg viewBox="0 0 16 16" className="caret">
//                             <path fillRule="evenodd" clipRule="evenodd" d="M4 6L8 10L12 6H4Z" />
//                         </svg>
//                     </button>
//                 </div>
//                 <div className="⚡c794f56d">
//                     <button
//                         className="selectButton"
//                         id="headlessui-listbox-button-:r1o:"
//                         type="button"
//                         aria-haspopup="true"
//                         aria-expanded="false"
//                     >
//                         <span className="type-callout--semi text">{episode}</span>
//                         <svg viewBox="0 0 16 16" className="caret">
//                             <path fillRule="evenodd" clipRule="evenodd" d="M4 6L8 10L12 6H4Z" />
//                         </svg>
//                     </button>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default WeaponFilters;