// This file is intentionally left blank to avoid build errors with 'output: export'.
// All horoscope logic has been moved to client-side fetching in Horoscopes.tsx.
export const dynamic = 'force-static';
export async function GET() {
  return Response.json({ message: "API moved to client-side" });
}
