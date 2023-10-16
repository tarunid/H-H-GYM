const sitemapData = {
  urlset: {
    loc: ['https://hhfitnessstudio.com/', 'https://hhfitnessstudio.com/about', 'https://hhfitnessstudio.com/contact', 'https://hhfitnessstudio.com/gallery'],
    lastmod: ['2023-10-12', '2023-10-10', '2023-10-11', '2023-10-11'],
    changefreq: ['daily', 'weekly', 'monthly', 'monthly'],
    priority: [1.0, 0.8, 0.7, 0.7],
  },
};

const Sitemap = () => {
  return (
    <>
      <div className="flex flex-col justify-start items-start py-8">
        <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
          <url>
            <loc>https://hhfitnessstudio.com/</loc>
            <lastmod>2023-10-12</lastmod>
            <changefreq>daily</changefreq>
            <priority>1.0</priority>
          </url>
          <url>
            <loc>https://hhfitnessstudio.com/about</loc>
            <lastmod>2023-10-10</lastmod>
            <changefreq>weekly</changefreq>
            <priority>0.8</priority>
          </url>
          <url>
            <loc>https://hhfitnessstudio.com/contact</loc>
            <lastmod>2023-10-11</lastmod>
            <changefreq>monthly</changefreq>
            <priority>0.7</priority>
          </url>
          <url>
            <loc>https://hhfitnessstudio.com/gallery</loc>
            <lastmod>2023-10-11</lastmod>
            <changefreq>monthly</changefreq>
            <priority>0.7</priority>
          </url>
        </urlset>
        <pre>{JSON.stringify(sitemapData, null, 2)}</pre>
      </div>
    </>
  )
}

export default Sitemap
