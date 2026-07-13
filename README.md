# Bitcoin Price Predictor Web

Personal and academic frontend for exploring historical asset prices and consuming an experimental Bitcoin price prediction API.

This is the current interface. The original HTML, CSS, and JavaScript implementation is preserved in [`Knust06/bitcoin-predictor-web-legacy`](https://github.com/Knust06/bitcoin-predictor-web-legacy).

## Features

- Query historical prices by asset symbol and date range
- Copy historical price series returned by the API
- Submit price series for an experimental prediction
- Display prediction results and API feedback
- Light and dark themes
- Responsive layout

## Technologies

- Next.js 15
- React 19
- TypeScript
- Tailwind CSS
- Radix UI and shadcn/ui
- Fetch API
- External FastAPI backend

## Requirements

- Node.js LTS compatible with Next.js 15
- pnpm

## Installation and local development

```bash
git clone https://github.com/Knust06/bitcoin-predictor-web.git
cd bitcoin-predictor-web
pnpm install
pnpm dev
```

Open `http://localhost:3000`.

For a production build:

```bash
pnpm build
pnpm start
```

## API configuration

Create `.env.local` in the project root to use a local or alternative API instance:

```dotenv
NEXT_PUBLIC_API_URL=http://127.0.0.1:8000
```

When `NEXT_PUBLIC_API_URL` is not set, the frontend falls back to the existing experimental hosted API at `https://bitcoinpreviewer.up.railway.app`. Because this is a public browser environment variable, do not store secrets in it.

The frontend consumes:

- `GET /get-prices`
- `POST /predict-bitcoin`

## Project structure

```text
app/          App Router pages, root layout, and global styles
components/   Page sections and reusable UI components
hooks/        Shared React hooks
lib/          Shared utilities
public/       Static assets
```

## Project scope

This repository contains only personal and academic code. The FastAPI backend and Machine Learning model are separate from this frontend. Professional source code is maintained in private Azure Repos and is not published here.

## Financial disclaimer

The prediction feature is experimental and does not constitute financial advice. It must not be used as the sole basis for investment decisions.

## Author

[Lucas Knust](https://www.linkedin.com/in/lucas-knust/)
