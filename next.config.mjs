// // /** @type {import('next').NextConfig} */
// // const nextConfig = {};

// // export default nextConfig;






// /** @type {import('next').NextConfig} */
// const nextConfig = {
//   images: {
//     domains: ['3b1a0d61453f.ngrok-free.app'],
//   },
//   // Optionally, add CORS headers if you're calling an API hosted on ngrok from your app
//   async headers() {
//     return [
//       {
//         source: '/api/:path*',  // Adjust if your API path is different
//         headers: [
//           {
//             key: 'Access-Control-Allow-Origin',
//             value: 'https://3b1a0d61453f.ngrok-free.app',
//           },
//         ],
        
//       },
//     ];
//   },
// };

// export default nextConfig;




// /** @type {import('next').NextConfig} */
// const nextConfig = {};

// export default nextConfig;






/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['3b1a0d61453f.ngrok-free.app'],
  },
   rules: {
    'react/no-unescaped-entities': 'off',
  },

  // Optionally, add CORS headers if you're calling an API hosted on ngrok from your app
  async headers() {
    return [
      {
        source: '/api/:path*',  // Adjust if your API path is different
        headers: [
          {
            key: 'Access-Control-Allow-Origin',
            value: 'https://3b1a0d61453f.ngrok-free.app',
          },
        ],
        
      },
    ];
  },
};

export default nextConfig;
