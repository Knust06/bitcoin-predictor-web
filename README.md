# Bitcoin Price Predictor Web

Frontend pessoal e acadêmico em Next.js e TypeScript para consultar preços históricos de ativos e consumir uma API experimental de previsão de preço do Bitcoin.

Esta é a versão atual da interface. A implementação anterior em HTML, CSS e JavaScript foi mantida no repositório [`bitcoin_site`](https://github.com/Knust06/bitcoin_site) como histórico de evolução do projeto.

## Funcionalidades

- consulta de preços históricos por símbolo e intervalo de datas;
- cópia dos dados retornados pela API;
- envio de séries de preços para o endpoint de previsão;
- apresentação do resultado previsto;
- temas claro e escuro;
- layout responsivo.

## Tecnologias

- Next.js 15
- React 19
- TypeScript
- Tailwind CSS
- Radix UI
- shadcn/ui
- Fetch API

O backend é uma API em FastAPI desenvolvida em uma etapa acadêmica da pós-graduação em Machine Learning Engineering.

## Executando localmente

Requisitos:

- Node.js em versão LTS compatível com o Next.js 15
- npm, pnpm ou outro gerenciador compatível

Com npm:

```bash
git clone https://github.com/Knust06/novo_bitcoin_site.git
cd novo_bitcoin_site
npm install
npm run dev
```

Acesse `http://localhost:3000`.

## Configuração da API

O frontend usa a variável pública `NEXT_PUBLIC_API_URL`. Quando ela não é informada, a aplicação utiliza a instância experimental configurada no código.

Exemplo de `.env.local`:

```env
NEXT_PUBLIC_API_URL=http://127.0.0.1:8000
```

Endpoints consumidos:

- `GET /get-prices`
- `POST /predict-bitcoin`

## Estrutura principal

```text
app/          App Router, layout and global styles
components/   Page sections and reusable UI components
hooks/        Shared React hooks
lib/          Shared utilities
public/       Static assets
```

## Escopo

Este repositório contém somente código pessoal e acadêmico. Código profissional desenvolvido no trabalho é mantido em Azure Repos privados e não é publicado aqui.

## Aviso

O modelo e as previsões são experimentais e não constituem recomendação financeira. O projeto não deve ser usado como única fonte para decisões de investimento.

## Autor

[Lucas Knust](https://www.linkedin.com/in/lucas-knust/)
