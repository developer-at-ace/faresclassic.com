export default function sitemap() {
  const baseUrl = "https://fareclassic.com";
  const routes = [
    "",
    "/about",
    "/assistance",
    "/contact",
    "/disclaimer",
    "/faq",
    "/privacy",
    "/refund-cancellation",
    "/terms",
  ];

  return routes.map((route) => ({ url: `${baseUrl}${route}` }));
}
