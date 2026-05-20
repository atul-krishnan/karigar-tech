# Karigar

Procurement OS for Indian textile MSMEs.

The app is built as a free-tier-friendly Next.js full-stack product with Supabase Auth, Supabase Postgres, Prisma, invite-only RFQs, live buyer bid visibility, supplier verification, purchase orders, invoice tracking, and a future finance placeholder.

## Stack

- Next.js App Router, React, TypeScript, Tailwind CSS
- Supabase Auth for login/session identity
- Supabase Postgres with Prisma ORM
- Supabase Storage or Cloudflare R2-ready document storage
- Zod validation for API payloads
- Modular service layer under `src/lib/domain`

## Key Paths

- `/` product entry and role switcher
- `/buyer` buyer dashboard
- `/buyer/rfqs/new` RFQ creation
- `/buyer/rfqs/rfq-tx-1042/compare` live bid comparison
- `/buyer/purchase-orders/po-tx-9021` purchase order tracking
- `/supplier` supplier dashboard
- `/supplier/verification` supplier document workflow
- `/supplier/rfqs/rfq-tx-1042` supplier bid submission
- `/admin` admin operations dashboard
- `/admin/suppliers` supplier verification queue
- `/admin/rfqs/new` admin-created RFQ on behalf of buyer
- `/finance` future embedded finance placeholder

## Setup

```bash
npm install
npm run db:generate
npm run dev
```

Copy `.env.example` into `.env` and replace the Supabase values before connecting to a real project.

```bash
DATABASE_URL="postgresql://..."
NEXT_PUBLIC_SUPABASE_URL="https://your-project.supabase.co"
NEXT_PUBLIC_SUPABASE_ANON_KEY="..."
SUPABASE_SERVICE_ROLE_KEY="..."
```

## Database

The Prisma schema is in `prisma/schema.prisma`.

It includes:

- Multi-tenant organizations and organization users
- Supplier verification and documents
- Textile category and item master
- RFQs, invited suppliers, closed bids, bid revisions
- Purchase orders, order status events, delivery proof
- Invoices, invoice attachments, payments
- Audit logs and notification events
- Finance-ready credit profiles, risk scores, and underwriting snapshots

## API Boundaries

The first API routes are:

- `POST /api/rfqs`
- `POST /api/bids`
- `POST /api/purchase-orders`
- `POST /api/invoices`

They use Supabase session context, RBAC checks, Zod validation, Prisma transactions, audit logs, and notification events.

## Free-Tier Notes

This MVP is intentionally deployment-light. It starts as one Next.js app so it can run on free-tier hosting while preserving module boundaries that can later be extracted to a NestJS API.
