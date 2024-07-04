/** @type {import('next').NextConfig} */
const nextConfig = {
    typescript: {
    ignoreBuildErrors: true,
},
    images: {
        domains: ['fedskillstest.ct.digital'],
      },
};

export default nextConfig;
