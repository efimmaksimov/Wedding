import { defineConfig } from 'astro/config';

const repository = process.env.GITHUB_REPOSITORY?.split('/')[1] ?? '';
const isGitHubActions = process.env.GITHUB_ACTIONS === 'true';

export default defineConfig({
  site: 'https://example.com',
  base: isGitHubActions && repository ? `/${repository}/` : '/'
});
