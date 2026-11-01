import type { NextConfig } from "next";
import path from "path";

const nextConfig: NextConfig = {
  // the parent folder has its own package-lock.json; pin the project root here
  outputFileTracingRoot: path.join(__dirname),
};

export default nextConfig;
