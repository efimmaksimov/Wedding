# Wedding invitation site

Статический одностраничный сайт-приглашение на свадьбу.

## GitHub Pages

В репозиторий добавлен workflow `.github/workflows/deploy-pages.yml`.
После пуша в ветку `main`, `master` или `work` сайт автоматически публикуется в GitHub Pages.

Ожидаемый URL (если репозиторий называется `Wedding`):

- `https://<your-github-username>.github.io/Wedding/`

Если в настройках репозитория включён deploy из GitHub Actions, ссылка появится в:

- **Settings → Pages**
- либо в summary успешного workflow `Deploy static site to GitHub Pages`
