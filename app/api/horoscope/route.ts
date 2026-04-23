import { NextResponse } from 'next/server';

export const dynamic = 'force-static';
export const revalidate = false;

export async function POST(request: Request) {
  const { searchParams } = new URL(request.url);
  const sign = searchParams.get('sign');
  const day = searchParams.get('day') || 'today';

  if (!sign) {
    return NextResponse.json({ error: 'Sign is required' }, { status: 400 });
  }

  // Helper to generate deterministic but "random" looking values for a sign and day
  const getFallbackValue = (sign: string, type: string) => {
    const today = new Date().toISOString().split('T')[0];
    const seed = sign + today + type;
    let hash = 0;
    for (let i = 0; i < seed.length; i++) {
      hash = (hash << 5) - hash + seed.charCodeAt(i);
      hash |= 0;
    }
    const index = Math.abs(hash);

    const values: Record<string, string[]> = {
      mood: ['Confident', 'Thoughtful', 'Energetic', 'Romantic', 'Productive', 'Creative', 'Patient', 'Ambitious'],
      compatibility: ['Aries', 'Taurus', 'Gemini', 'Cancer', 'Leo', 'Virgo', 'Libra', 'Scorpio', 'Sagittarius', 'Capricorn', 'Aquarius', 'Pisces'],
      color: ['Crimson', 'Azure', 'Golden', 'Emerald', 'Violet', 'Rose', 'Silver', 'Amber'],
      lucky_number: ['7', '11', '22', '3', '9', '18', '45', '77'],
      lucky_time: ['10:00 AM', '2:00 PM', '6:00 PM', '9:00 PM', '7:00 AM', '11:30 PM']
    };

    const list = values[type] || ['N/A'];
    return list[index % list.length];
  };

  

  try {
    // Try the fallback API
    const response = await fetch(`https://horoscope-app-api.vercel.app/api/v1/get-horoscope/daily?sign=${sign.toLowerCase()}&day=${day}`);
    const rawData = await response.json();

    if (rawData && rawData.data) {
      return NextResponse.json({
        description: rawData.data.horoscope,
        current_date: rawData.data.date,
        mood: getFallbackValue(sign, 'mood'),
        compatibility: getFallbackValue(sign, 'compatibility'),
        color: getFallbackValue(sign, 'color'),
        lucky_number: getFallbackValue(sign, 'lucky_number'),
        lucky_time: getFallbackValue(sign, 'lucky_time')
      });
    }

    throw new Error('Invalid response from fallback API');
  } catch (error: any) {
    console.error('Horoscope API Proxy Error:', error);
    return NextResponse.json({ error: 'Celestial connection lost. Try again later.' }, { status: 500 });
  }
}
