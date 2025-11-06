import { kv } from '@vercel/kv';

export const runtime = 'nodejs';

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const requestId = searchParams.get('requestId') || undefined;
  let runId = searchParams.get('runId') || undefined;

  if (!runId && requestId) {
    const rec = await kv.hgetall<Record<string, string>>(`req:${requestId}`);
    runId = rec?.runId;
    if (!runId) return Response.json({ status: 'starting', requestId });
  }

  const base = `https://api.github.com/repos/ethan-ozelius-contentful/vercel-contentful-starter`;
  const headers = { authorization: `Bearer ${process.env.GH_TOKEN}`, accept: 'application/vnd.github+json' };

  const run = await fetch(`${base}/actions/runs/${runId}`, { headers }).then(r => r.json());
  if (run?.status !== 'completed') {
    return Response.json({ status: run?.status ?? 'in_progress', runId, htmlUrl: run?.html_url ?? null });
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
