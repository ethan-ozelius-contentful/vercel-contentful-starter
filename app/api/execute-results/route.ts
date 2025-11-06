import { kv } from '@vercel/kv';
import { NextRequest, NextResponse } from 'next/server';

export const runtime = 'nodejs';

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const requestId = searchParams.get('requestId') || undefined;
  let runId = searchParams.get('runId') || undefined;

  if (!runId && requestId) {
    const rec = await kv.hgetall<Record<string, string>>(`req:${requestId}`);
    runId = rec?.runId;
    if (!runId) return Response.json({ status: 'starting', requestId }, {
    headers: {
      'Access-Control-Allow-Origin': 'https://c9e8fad6-9877-454f-8db8-ed9dcecd0809.ctfcloud.net'
    }
  });
  }

  const base = `https://api.github.com/repos/ethan-ozelius-contentful/vercel-contentful-starter`;
  const headers = { authorization: `Bearer ${process.env.GH_TOKEN}`, accept: 'application/vnd.github+json' };

  const run = await fetch(`${base}/actions/runs/${runId}`, { headers }).then(r => r.json());
  if (run?.status !== 'completed') {
    return Response.json({ status: run?.status ?? 'in_progress', runId, htmlUrl: run?.html_url ?? null }, {
    headers: {
      'Access-Control-Allow-Origin': 'https://c9e8fad6-9877-454f-8db8-ed9dcecd0809.ctfcloud.net'
    }
  });
  }

  // Optional: expose a summary artifact URL
  const arts = await fetch(`${base}/actions/runs/${runId}/artifacts`, { headers }).then(r => r.json());
  const summary = arts?.artifacts?.find((a: any) => a.name === 'cypress-summary');

  return Response.json({
    status: run.status,
    conclusion: run.conclusion,
    runId,
    htmlUrl: run.html_url,
    summaryArtifactUrl: summary?.archive_download_url || null
  }, {
    headers: {
      'Access-Control-Allow-Origin': 'https://c9e8fad6-9877-454f-8db8-ed9dcecd0809.ctfcloud.net'
    }
  });
}

export async function OPTIONS(request: NextRequest) {
  return new NextResponse(null, {
    status: 200,
    headers: {
      // 'Access-Control-Allow-Origin': 'https://app.contentful.com',
      'Access-Control-Allow-Origin': 'https://c9e8fad6-9877-454f-8db8-ed9dcecd0809.ctfcloud.net',
      'Access-Control-Allow-Methods': 'POST, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type, Authorization',
    },
  });
}
