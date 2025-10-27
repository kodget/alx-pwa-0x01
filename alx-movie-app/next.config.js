import withPWAInit from "next-pwa";

const withPWA = withPWAInit({
  dest: "public",
});

const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["m.media-amazon.com"],
  },
  output: "export",
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
};

export default withPWA(nextConfig);
