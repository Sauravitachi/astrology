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

  return (
    <div className="max-w-4xl mx-auto px-6 py-20">
      <Link 
        href="/insights" 
        className="inline-flex items-center gap-2 text-gold-400 hover:text-gold-300 mb-12 transition-colors group"
      >
        <span className="group-hover:-translate-x-1 transition-transform">←</span> Back to Insights
      </Link>

      <div className="space-y-8 mb-16">
        <div className="flex gap-4">
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
          className="object-cover opacity-80"
        />
        <div className="absolute inset-0 bg-linear-to-t from-void via-transparent to-transparent"></div>
      </div>

      <div className="prose prose-invert prose-gold max-w-none">
        <div 
          className="text-white/70 text-lg leading-relaxed space-y-6 article-content"
          dangerouslySetInnerHTML={{ __html: article.content }}
        />
      </div>

      <div className="mt-20 pt-10 border-t border-white/5">
        <div className="flex items-center gap-6 p-8 rounded-3xl bg-white/5 border border-white/5">
          <div className="w-16 h-16 rounded-full bg-gold-500/20 flex items-center justify-center text-2xl">
            🕉️
          </div>
          <div>
            <h4 className="text-xl font-bold text-white mb-1">Written by {article.author}</h4>
            <p className="text-white/40 text-sm">Vedic Astrologer with 3+ years of experience in cosmic wisdom.</p>
          </div>
        </div>
      </div>
    </div>
  );
}
