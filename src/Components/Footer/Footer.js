// import React from "react";

// const Footer = () => {
//   return (
//     <div className="bg-white dark:bg-gray-800 flex justify-center items-center">
//       <footer className="bg-white text-gray-700 border-t border-gray-200 w-full">
//         <div className="container mx-auto px-4 sm:px-6 py-8">
//           <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
//             {/* Logo + App Prompt */}
//             <div>
//               <div className="w-[130px]">
//                 <img
//                   src="https://thechefkart.com/_next/image?url=https%3A%2F%2Fstorage.googleapis.com%2Fchefkart-strapi-media%2FLogo_black_9e78b44631.webp&w=1920&q=75"
//                   alt="ChefKart Logo"
//                 />
//               </div>
//               <p className="mt-4 text-sm font-bold">Get the app now!</p>
//               <div className="flex space-x-3 mt-3">
//                 <a href="#" className="text-blue-600" aria-label="Facebook">
//                   <i className="fab fa-facebook"></i>
//                 </a>
//                 <a href="#" className="text-red-600" aria-label="Reddit">
//                   <i className="fab fa-reddit"></i>
//                 </a>
//                 <a href="#" className="text-green-500" aria-label="WhatsApp">
//                   <i className="fab fa-whatsapp"></i>
//                 </a>
//                 <a href="#" className="text-pink-600" aria-label="Pinterest">
//                   <i className="fab fa-pinterest"></i>
//                 </a>
//               </div>
//             </div>

//             {/* Links Column 1 */}
//             <div>
//               <ul className="text-sm space-y-2">
//                 <li>
//                   <a href="#" className="hover:text-blue-600">Chefit: One-Time Cook</a>
//                 </li>
//                 <li>
//                   <a href="#" className="hover:text-blue-600">ChefKart से जुड़ें</a>
//                 </li>
//                 <li>
//                   <a href="#" className="hover:text-blue-600">Cooks Near Me</a>
//                 </li>
//               </ul>
//             </div>

//             {/* Links Column 2 */}
//             <div>
//               <ul className="text-sm space-y-2">
//                 <li>
//                   <a href="#" className="hover:text-blue-600">Chef for Party</a>
//                 </li>
//                 <li>
//                   <a href="#" className="hover:text-blue-600">Contact Us</a>
//                 </li>
//               </ul>
//             </div>

//             {/* Links Column 3 */}
//             <div>
//               <ul className="text-sm space-y-2">
//                 <li>
//                   <a href="#" className="hover:text-blue-600">Blog</a>
//                 </li>
//                 <li>
//                   <a href="#" className="hover:text-blue-600">About Us</a>
//                 </li>
//               </ul>
//             </div>

//             {/* Social Icons Column */}
//             <div>
//               <h3 className="text-base font-semibold mb-2">Follow Us</h3>
//               <ul className="flex gap-2 flex-wrap">
//                 <li>
//                   <a href="https://www.facebook.com/thechefkart" aria-label="Facebook">
//                     <img src="https://storage.googleapis.com/chefkart-strapi-media/Face_Book_4d600079e1.svg" alt="Facebook" className="h-6 w-6" />
//                   </a>
//                 </li>
//                 <li>
//                   <a href="https://x.com/i/flow/login?redirect_after_login=%2Fthechefkart" aria-label="Twitter">
//                     <img src="https://storage.googleapis.com/chefkart-strapi-media/Twitter_3843d729e2.svg" alt="Twitter" className="h-6 w-6" />
//                   </a>
//                 </li>
//                 <li>
//                   <a href="https://www.instagram.com/thechefkart/" aria-label="Instagram">
//                     <img src="https://storage.googleapis.com/chefkart-strapi-media/Instagram_92b5d73d9c.svg" alt="Instagram" className="h-6 w-6" />
//                   </a>
//                 </li>
//                 <li>
//                   <a href="https://www.linkedin.com/company/chefkart/" aria-label="LinkedIn">
//                     <img src="https://storage.googleapis.com/chefkart-strapi-media/Linkedin_d6f81af22f.svg" alt="LinkedIn" className="h-6 w-6" />
//                   </a>
//                 </li>
//               </ul>
//             </div>
//           </div>

//           {/* App download images */}
//           <div className="flex flex-col sm:flex-row justify-center sm:justify-between items-center mt-8 gap-4">
//             <div className="flex gap-3">
//               <img
//                 src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR-v52tLnvL3FEjfxjPvZWbvUMYvVUtAm9R6A&s"
//                 alt="Google Play"
//                 className="h-10"
//               />
//               <img
//                 src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJgk5tpxJC_1CAnsXwo2VvBGyQGI-o5c1PJw&s"
//                 alt="App Store"
//                 className="h-10"
//               />
//             </div>
//           </div>

//           {/* Footer bottom line */}
//           <div className="text-center text-sm text-gray-500 mt-6 border-t pt-4">
//             © 2025 ChefKart Hospitality Pvt Ltd.
//           </div>
//         </div>
//       </footer>
//     </div>
//   );
// };

// export default Footer;
import React from "react";

const Footer = () => {
  return (
    <div className="bg-white dark:bg-gray-800 flex justify-center items-center">
      <footer className="bg-white text-gray-700 border-t border-gray-200 w-full">
        <div className="container mx-auto px-4 sm:px-6 py-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 text-center sm:text-left">
            {/* Logo + App Prompt */}
            <div className="flex flex-col items-center sm:items-start">
              <div className="w-[130px]">
                <img
                  src="https://thechefkart.com/_next/image?url=https%3A%2F%2Fstorage.googleapis.com%2Fchefkart-strapi-media%2FLogo_black_9e78b44631.webp&w=1920&q=75"
                  alt="ChefKart Logo"
                />
              </div>
              <p className="mt-4 text-sm font-bold">Get the app now!</p>
              <div className="flex space-x-3 mt-3 justify-center sm:justify-start">
                <a href="#" className="text-blue-600" aria-label="Facebook">
                  <i className="fab fa-facebook"></i>
                </a>
                <a href="#" className="text-red-600" aria-label="Reddit">
                  <i className="fab fa-reddit"></i>
                </a>
                <a href="#" className="text-green-500" aria-label="WhatsApp">
                  <i className="fab fa-whatsapp"></i>
                </a>
                <a href="#" className="text-pink-600" aria-label="Pinterest">
                  <i className="fab fa-pinterest"></i>
                </a>
              </div>
            </div>

            {/* Links Column 1 */}
            <div className="flex flex-col items-center sm:items-start">
              <ul className="text-sm space-y-2">
                <li>
                  <a href="#" className="hover:text-blue-600">Chefit: One-Time Cook</a>
                </li>
                <li>
                  <a href="#" className="hover:text-blue-600">Connect with ChefKart</a>
                </li>
                <li>
                  <a href="#" className="hover:text-blue-600">Cooks Near Me</a>
                </li>
              </ul>
            </div>

            {/* Links Column 2 */}
            <div className="flex flex-col items-center sm:items-start">
              <ul className="text-sm space-y-2">
                <li>
                  <a href="#" className="hover:text-blue-600">Chef for Party</a>
                </li>
                <li>
                  <a href="#" className="hover:text-blue-600">Contact Us</a>
                </li>
              </ul>
            </div>

            {/* Links Column 3 */}
            <div className="flex flex-col items-center sm:items-start">
              <ul className="text-sm space-y-2">
                <li>
                  <a href="#" className="hover:text-blue-600">Blog</a>
                </li>
                <li>
                  <a href="#" className="hover:text-blue-600">About Us</a>
                </li>
              </ul>
            </div>

            {/* Social Icons Column */}
            <div className="flex flex-col items-center sm:items-start">
              <h3 className="text-base font-semibold mb-2">Follow Us</h3>
              <ul className="flex gap-2 flex-wrap justify-center sm:justify-start">
                <li>
                  <a href="https://www.facebook.com/thechefkart" aria-label="Facebook">
                    <img src="https://storage.googleapis.com/chefkart-strapi-media/Face_Book_4d600079e1.svg" alt="Facebook" className="h-6 w-6" />
                  </a>
                </li>
                <li>
                  <a href="https://x.com/i/flow/login?redirect_after_login=%2Fthechefkart" aria-label="Twitter">
                    <img src="https://storage.googleapis.com/chefkart-strapi-media/Twitter_3843d729e2.svg" alt="Twitter" className="h-6 w-6" />
                  </a>
                </li>
                <li>
                  <a href="https://www.instagram.com/thechefkart/" aria-label="Instagram">
                    <img src="https://storage.googleapis.com/chefkart-strapi-media/Instagram_92b5d73d9c.svg" alt="Instagram" className="h-6 w-6" />
                  </a>
                </li>
                <li>
                  <a href="https://www.linkedin.com/company/chefkart/" aria-label="LinkedIn">
                    <img src="https://storage.googleapis.com/chefkart-strapi-media/Linkedin_d6f81af22f.svg" alt="LinkedIn" className="h-6 w-6" />
                  </a>
                </li>
              </ul>
            </div>
          </div>

          {/* App download images */}
          <div className="flex flex-col sm:flex-row justify-center sm:justify-between items-center mt-8 gap-4">
            <div className="flex gap-3">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR-v52tLnvL3FEjfxjPvZWbvUMYvVUtAm9R6A&s"
                alt="Google Play"
                className="h-10"
              />
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJgk5tpxJC_1CAnsXwo2VvBGyQGI-o5c1PJw&s"
                alt="App Store"
                className="h-10"
              />
            </div>
          </div>

          {/* Footer bottom line */}
          <div className="text-center text-sm text-gray-500 mt-6 border-t pt-4">
            © 2025 ChefKart Hospitality Pvt Ltd.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
