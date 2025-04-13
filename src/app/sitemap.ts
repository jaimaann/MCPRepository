import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://mcprepository.net';
  const currentDate = new Date().toISOString();
  
  // Define the site pages
  const routes = [
    {
      url: `${baseUrl}/`,
      lastModified: currentDate,
      changeFrequency: 'daily',
      priority: 1.0,
    },
    {
      url: `${baseUrl}/about`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/privacy`,
      lastModified: currentDate,
      changeFrequency: 'yearly',
      priority: 0.5,
    },
    {
      url: `${baseUrl}/terms`,
      lastModified: currentDate,
      changeFrequency: 'yearly',
      priority: 0.5,
    },
    {
      url: `${baseUrl}/sitemap`,
      lastModified: currentDate,
      changeFrequency: 'weekly',
      priority: 0.6,
    },
  ] as MetadataRoute.Sitemap;
  
  // When you add dynamic routes like server pages, you can add them here
  // const serverPages = getAllServerIds().map((id) => ({
  //   url: `${baseUrl}/servers/${id}`,
  //   lastModified: currentDate,
  //   changeFrequency: 'weekly',
  //   priority: 0.9,
  // }));
  
  // return [...routes, ...serverPages];
  return routes;
}
