import type { Metadata } from "next";
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { articles } from "../../data/articles";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const article = articles.find((a) => a.slug === slug);
  
  if (!article) return { title: "Article Not Found" };

  return {
    title: `${article.title} | Sashtravani`,
    description: article.excerpt,
    openGraph: {
      title: article.title,
      description: article.excerpt,
      images: [article.image],
    },
  };
}

export async function generateStaticParams() {
  return articles.map((article) => ({
    slug: article.slug,
  }));
}

export default async function ArticlePage({ params }: Props) {
  const { slug } = await params;
  const article = articles.find((a) => a.slug === slug);

  if (!article) {
    notFound();
  }

  const relatedArticles = articles
    .filter((a) => a.slug !== slug)
    .slice(0, 2);

  // JSON-LD for Search Engines
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "headline": article.title,
    "image": [`https://sashtravani.com${article.image}`],
    "datePublished": new Date(article.date).toISOString(),
    "author": [{
        "@type": "Person",
        "name": article.author,
        "url": "https://sashtravani.com/about"
      }]
  };

  return (
    <div className="max-w-7xl mx-auto px-6 py-20">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      
      <div className="max-w-4xl mx-auto">
        <Link 
          href="/insights" 
          className="inline-flex items-center gap-2 text-gold-400 hover:text-gold-300 mb-12 transition-colors group"
        >
          <span className="group-hover:-translate-x-1 transition-transform">←</span> Back to Insights
        </Link>

        <div className="space-y-8 mb-16">
          <div className="flex flex-wrap gap-4 items-center">
            <span className="px-4 py-1 rounded-full bg-gold-400/10 border border-gold-400/20 text-[10px] font-bold text-gold-400 uppercase tracking-widest">
              {article.category}
            </span>
            <span className="text-[10px] font-bold text-white/30 uppercase tracking-widest self-center">
              {article.date} • By {article.author}
            </span>
          </div>
          
          <h1 className="text-4xl md:text-6xl font-display font-bold text-white leading-tight">
            {article.title}
          </h1>
        </div>

        <div className="relative aspect-video rounded-[3rem] overflow-hidden border border-white/5 mb-16">
          <Image 
            src={article.image}
            alt={article.title}
            fill
            priority
            className="object-cover opacity-80"
          />
          <div className="absolute inset-0 bg-linear-to-t from-void via-transparent to-transparent"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-[1fr_80px] gap-12">
          <div className="prose prose-invert prose-gold max-w-none">
            <div 
              className="text-white/70 text-lg leading-relaxed space-y-6 article-content"
              dangerouslySetInnerHTML={{ __html: article.content }}
            />
          </div>

          {/* Social Share Sidebar */}
          <div className="lg:sticky lg:top-32 h-fit flex lg:flex-col gap-4 justify-center">
            {['𝕏', 'f', 'in', '🔗'].map((icon) => (
              <button 
                key={icon}
                className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white/40 hover:text-gold-400 hover:border-gold-500/50 hover:bg-gold-500/5 transition-all"
                title={`Share on ${icon}`}
              >
                {icon}
              </button>
            ))}
          </div>
        </div>

        {/* Enhanced Author Bio */}
        <div className="mt-24 p-10 rounded-[2.5rem] bg-linear-to-br from-white/5 to-transparent border border-white/5 relative overflow-hidden group">
          <div className="absolute top-0 right-0 w-64 h-64 bg-gold-500/5 rounded-full blur-[100px] -z-10 group-hover:bg-gold-500/10 transition-colors"></div>
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="w-24 h-24 rounded-full bg-gold-500/20 border-2 border-gold-500/30 flex items-center justify-center text-4xl shrink-0">
              🕉️
            </div>
            <div className="text-center md:text-left space-y-3">
              <h4 className="text-2xl font-display font-bold text-white">About {article.author}</h4>
              <p className="text-white/50 leading-relaxed">
                Acharya Ankit is a distinguished Vedic astrologer with over 3 years of experience. Specializing in Kundli analysis and karmic healing, he has guided thousands towards their true cosmic purpose.
              </p>
              <Link href="/about" className="inline-block text-gold-400 font-bold text-sm hover:text-gold-300 transition-colors">
                View Full Profile →
              </Link>
            </div>
          </div>
        </div>

        {/* Related Articles */}
        {relatedArticles.length > 0 && (
          <div className="mt-32">
            <h3 className="text-3xl font-display font-bold text-white mb-12">Related <span className="text-gradient-gold">Wisdom</span></h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {relatedArticles.map((rel) => (
                <Link href={`/insights/${rel.slug}`} key={rel.slug} className="group">
                  <div className="relative aspect-video rounded-3xl overflow-hidden mb-6 border border-white/5">
                    <Image src={rel.image} alt={rel.title} fill className="object-cover opacity-50 group-hover:scale-105 transition-transform duration-700" />
                    <div className="absolute inset-0 bg-linear-to-t from-void to-transparent"></div>
                  </div>
                  <h4 className="text-xl font-bold text-white group-hover:text-gold-400 transition-colors line-clamp-2">{rel.title}</h4>
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
