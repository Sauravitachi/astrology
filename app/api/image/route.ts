import { NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const type = searchParams.get('type');

  let filePath = '';
  
  if (type === 'wheel') {
    filePath = 'C:/Users/pc/.gemini/antigravity/brain/0dfca895-cb0a-44ff-9fd4-680ce8d62e27/zodiac_wheel_1776405981432.png';
  } else if (type === 'bg') {
    filePath = 'C:/Users/pc/.gemini/antigravity/brain/0dfca895-cb0a-44ff-9fd4-680ce8d62e27/cosmic_background_1776406001385.png';
  } else {
    return new NextResponse('Not found', { status: 404 });
  }

  try {
    const fileBuffer = fs.readFileSync(filePath);
    return new NextResponse(fileBuffer, {
      headers: {
        'Content-Type': 'image/png',
        'Cache-Control': 'public, max-age=31536000, immutable',
      },
    });
  } catch (error) {
    return new NextResponse('File read error', { status: 500 });
  }
}
