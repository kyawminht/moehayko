// app/sitemap.ts
import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://moehayko-love.vercel.app';
  
  const routes = [
    '',
    '#cover',
    '#preface',
    '#toc',
    '#chapter1',
    '#chapter2',
    '#chapter3',
    '#chapter4',
    '#chapter5',
    '#chapter6',
    '#chapter7',
    '#chapter8',
    '#chapter9',
    '#epilogue',
  ];

  return routes.map((route) => ({
    url: `${baseUrl}/${route}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: route === '' ? 1 : 0.8,
  }));
}