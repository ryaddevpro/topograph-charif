export default async function sitemap() {
  const routes = ["", "/about", "/contact"].map((route) => ({
    url: `https://topograph-charif.vercel.app${route}`,
    lastModified: new Date().toISOString(),
  }));

  return [...routes];
}
