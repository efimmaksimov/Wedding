# Wedding invitation site

Одностраничный сайт-приглашение на свадьбу, собранный на Astro.

## Локальный запуск

```bash
npm install
npm run dev
```

## Сборка

```bash
npm run build
npm run preview
```

## GitHub Pages

Публикация выполняется через GitHub Actions workflow `.github/workflows/deploy-pages.yml`.

После пуша в ветку `main`, `master` или `work` workflow:
1. устанавливает зависимости,
2. собирает сайт в `dist`,
3. деплоит результат в GitHub Pages.
