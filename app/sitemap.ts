import { MetadataRoute } from 'next'
 
export default function sitemap(): MetadataRoute.Sitemap {
  const staticPages = [
    '',
    '/about',
    '/contact',
    '/privacy',
    '/terms',
    '/careers',
    '/blog',
    '/case-studies',
    '/community',
    '/docs',
    '/help',
    '/tutorials'
  ];

  const baseUrl = 'https://agentsgang.xyz';

  const staticUrls = staticPages.map(page => ({
    url: `${baseUrl}${page}`,
    lastModified: new Date().toISOString(),
    changeFrequency: 'monthly',
    priority: page === '' ? 1.0 : 0.8,
  }));

  // In the future, you can add dynamic URLs for blog posts here
  // const blogPosts = ...
  // const blogUrls = blogPosts.map(post => ({ ... }));

  return [
    ...staticUrls,
    // ...blogUrls
  ];
}
