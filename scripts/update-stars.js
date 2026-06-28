import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const repos = [
  { name: 'FTXUI', path: 'ArthurSonzogni/FTXUI' },
  { name: 'Diagon', path: 'ArthurSonzogni/Diagon' },
  { name: 'json-tui', path: 'ArthurSonzogni/json-tui' },
  { name: 'git-tui', path: 'ArthurSonzogni/git-tui' }
];

async function updateStars() {
  console.log('Fetching GitHub star counts...');
  const stars = {};

  for (const repo of repos) {
    try {
      const response = await fetch(`https://api.github.com/repos/${repo.path}`, {
        headers: {
          'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64)'
        }
      });
      if (!response.ok) {
        throw new Error(`HTTP status: ${response.status}`);
      }
      const data = await response.json();
      stars[repo.name] = data.stargazers_count;
      console.log(`- ${repo.name}: ${data.stargazers_count} stars`);
    } catch (error) {
      console.error(`Failed to fetch stars for ${repo.name}:`, error.message);
      // Fallback: load existing cached data if available
      try {
        const existingPath = path.join(__dirname, '../data/stars.json');
        if (fs.existsSync(existingPath)) {
          const existing = JSON.parse(fs.readFileSync(existingPath, 'utf8'));
          if (existing[repo.name]) {
            stars[repo.name] = existing[repo.name];
            console.log(`- ${repo.name}: using cached ${existing[repo.name]} stars`);
          }
        }
      } catch (e) {
        // Ignore fallback errors
      }
    }
  }

  const dataDir = path.join(__dirname, '../data');
  if (!fs.existsSync(dataDir)) {
    fs.mkdirSync(dataDir, { recursive: true });
  }

  const outputPath = path.join(dataDir, 'stars.json');
  fs.writeFileSync(outputPath, JSON.stringify(stars, null, 2));
  console.log(`Successfully wrote star counts to ${outputPath}`);
}

updateStars();
