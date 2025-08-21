# Frontend (React + Vite + TypeScript)

Bu klasör, projenin React tabanlı frontend uygulamasını içerir.

## Başlangıç

```bash
cd /workspace/frontend
npm install
npm run dev
```

- Geliştirme: `http://localhost:5173`
- Build: `npm run build`
- Preview: `npm run preview`

## Klasör Yapısı

```
frontend/
├─ public/
│  └─ favicon.svg
├─ src/
│  ├─ assets/
│  ├─ components/
│  ├─ contexts/
│  ├─ hooks/
│  ├─ pages/
│  │  ├─ HomePage.tsx
│  │  └─ NotFoundPage.tsx
│  ├─ routes/
│  │  └─ index.tsx
│  ├─ services/
│  │  └─ httpClient.ts
│  ├─ styles/
│  │  └─ index.css
│  ├─ types/
│  │  └─ index.ts
│  ├─ utils/
│  │  └─ index.ts
│  ├─ App.tsx
│  └─ main.tsx
├─ index.html
├─ package.json
├─ tsconfig.json
└─ vite.config.ts
```

## Notlar
- Router için `react-router-dom` kullanılmaktadır.
- HTTP istekleri için basit bir `httpClient.ts` yardımcı fonksiyonu eklendi.