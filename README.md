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

### Если в Pages не видно обновлений

1. Убедитесь, что в `Settings → Pages` выбран источник **GitHub Actions**.
2. Проверьте, что последний run workflow `Deploy static site to GitHub Pages` завершился статусом **Success**.
3. Откройте страницу в режиме инкогнито/с принудительным обновлением (`Ctrl+F5`) — браузер может кэшировать старую версию.

4. Если в Actions ошибка `Dependencies lock file is not found`, уберите `cache: npm` из `actions/setup-node` или добавьте `package-lock.json`.
