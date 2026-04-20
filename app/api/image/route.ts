import { NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const type = searchParams.get('type');

  const fileMap: Record<string, { name: string; type: string }> = {
    wheel: { name: 'zodiaco.png', type: 'image/png' },
    bg: { name: 'page.jpeg', type: 'image/jpeg' },
  };

  const fileInfo = type ? fileMap[type] : null;

  if (!fileInfo) {
    return new Response('Invalid image type', { status: 400 });
  }

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

