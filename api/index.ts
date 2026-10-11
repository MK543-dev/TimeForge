import type { VercelRequest, VercelResponse } from '@vercel/node';
import app from '../server.js';

export default function handler(
  req: VercelRequest,
  res: VercelResponse
) {
  const matchedPath =
    req.headers['x-matched-path'] ||
    req.headers['x-vercel-matched-path'];

  if (
    typeof matchedPath === 'string' &&
    matchedPath.startsWith('/api') &&
    (req.url === '/api' || req.url === '/api/')
  ) {
    req.url = matchedPath;
  }

  return app(req, res);
}