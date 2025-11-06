import { kv } from '@vercel/kv';
import { NextRequest, NextResponse } from 'next/server';

export async function POST(req: NextRequest) {
  const auth = req.headers.get('authorization') || '';
  // TODO: make sure this is configured in vercel and github
  if (auth !== `Bearer ${process.env.RESULTS_TOKEN}`) {
    return NextResponse.json({ ok: false, error: 'unauthorized' }, { status: 401 });
  }

  const { phase, requestId, runId, status } = await req.json();
  // keep both directions handy
  if (requestId) await kv.hset(`req:${requestId}`, { runId, phase, status, updatedAt: Date.now() });
  if (runId)     await kv.hset(`run:${runId}`,     { requestId, phase, status, updatedAt: Date.now() });

  return NextResponse.json({ ok: true });
}
