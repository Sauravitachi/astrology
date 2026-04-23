import { NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const type = searchParams.get('type');

  const fileMap: Record<string, { name: string; type: string }> = {
    wheel: { name: 'zodiaco.png', type: 'image/png' },
    bg: { name: 'page.jpeg', type: 'image/jpeg' },
    career: { name: 'page.jpeg', type: 'image/jpeg' },
    marriage: { name: 'page.jpeg', type: 'image/jpeg' },
    love: { name: 'page.jpeg', type: 'image/jpeg' },
    family: { name: 'page.jpeg', type: 'image/jpeg' },
    business: { name: 'page.jpeg', type: 'image/jpeg' },
    kundli: { name: 'page.jpeg', type: 'image/jpeg' },
    remedies: { name: 'page.jpeg', type: 'image/jpeg' },
    consultation: { name: 'page.jpeg', type: 'image/jpeg' },
  };

  const fileInfo = type ? fileMap[type] : fileMap.bg;

  const filePath = path.resolve(process.cwd(), 'public', fileInfo.name);

  if (!fs.existsSync(filePath)) {
    console.error(`Image not found: ${filePath}`);
    return new Response('Image not found', { status: 404 });
  }

  try {
    const fileBuffer = await fs.promises.readFile(filePath);
    return new Response(fileBuffer, {
      headers: {
        'Content-Type': fileInfo.type,
        'Cache-Control': 'no-store, no-cache, must-revalidate, proxy-revalidate',
        'Pragma': 'no-cache',
        'Expires': '0',
      },
    });
  } catch (error) {
    console.error('Error serving image:', error);
    return new Response('Internal server error', { status: 500 });
  }
}

