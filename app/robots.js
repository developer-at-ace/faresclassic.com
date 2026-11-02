export default function robots() {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: ["/api/", "/flight-results"],
    },
    sitemap: "https://fareclassic.com/sitemap.xml",
  };
}
