# LittleBigAdventure

Next.js + Supabase + Prisma starter.

Install:
```bash
npm install
```

Copy `.env.local.example` to `.env.local` and enter the real database password and publishable key.

Generate Prisma:
```bash
npx prisma generate
```

Create tables during development:
```bash
npx prisma migrate dev --name init
```

Run:
```bash
npm run dev
```

Render build:
```bash
npm install && npx prisma generate && npm run build
```

Render start:
```bash
npm start
```

Test `/api/health` and `/api/db-test`.

Never commit `.env.local` or expose database passwords/secret keys in frontend code.
