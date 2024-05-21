/** @type {import('next').NextConfig} */
const nextConfig = {
     experimental: {
        taint: true,
      },
      images: {
        remotePatterns: [
          {
            protocol: 'https',
            hostname: 'eqooziffvbtkqkpxkmcd.supabase.co',
            port: '',
            pathname: '/storage/v1/object/public/images/**',
          },
           {
            protocol: 'https',
            hostname: 'kxclciyfvlffosmwwgyn.supabase.co',
            port: '',
            pathname: '/storage/v1/object/public/images/**',

           },
           {
            protocol: 'https',
            hostname: 'lh3.googleusercontent.com',
            port: '',
            // pathname: '/account123/**',
           },
           {
            protocol: 'https',
            hostname: 'images.unsplash.com',
            port: '',
            // pathname: '/account123/**',
           },
           {
            protocol: 'https',
            hostname: 'via.placeholder.com',
            port: '',
            // pathname: '/account123/**',
           },
             {
            protocol: 'https',
            hostname: 'api.qrserver.com',
            port: '',
            // pathname: '/account123/**',
           },
        ],
      },
};

module.exports = nextConfig;
