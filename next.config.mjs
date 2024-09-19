/** @type {import('next').NextConfig} */
const nextConfig = {
  redirects() {
    return [
      {
        source: "/",
        destination: "/shadcn",
        permanent: false,
      },
    ];
  },
};

export default nextConfig;
