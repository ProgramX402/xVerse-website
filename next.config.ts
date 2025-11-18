import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Enables Netlify's build process to recognize and build serverless functions
  // for all routes, which the Netlify plugin uses to route requests correctly.
  output: "standalone", 
  
  // Optional: If you use the Image component, ensure this is configured
  // to prevent potential issues with Netlify's CDN.
  images: {
    // Allows Netlify to optimize images using its specialized CDN
    unoptimized: true, 
  },
};

export default nextConfig;