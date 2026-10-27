import assert from 'node:assert/strict';
import { mkdir, mkdtemp, readFile, writeFile } from 'node:fs/promises';
import { tmpdir } from 'node:os';
import { join, resolve } from 'node:path';
import { execFile } from 'node:child_process';
import { promisify } from 'node:util';
import test from 'node:test';

const execFileAsync = promisify(execFile);
const projectRoot = resolve(import.meta.dirname, '..');

test('preserves the custom domain in the published files', async () => {
  const cname = await readFile(join(projectRoot, 'public', 'CNAME'), 'utf8');
  assert.equal(cname.trim(), 'www.visualblack.es');
});

test('creates a GitHub Pages SPA fallback from the built index', async () => {
  const fixture = await mkdtemp(join(tmpdir(), 'visualblack-spa-'));
  const dist = join(fixture, 'dist');
  const index = join(dist, 'index.html');
  await mkdir(dist, { recursive: true });
  await writeFile(index, '<!doctype html><div id="root"></div>');

  await execFileAsync(process.execPath, [
    join(projectRoot, 'scripts', 'create-spa-fallback.mjs'),
  ], { cwd: fixture });

  assert.equal(await readFile(join(dist, '404.html'), 'utf8'), await readFile(index, 'utf8'));
});
