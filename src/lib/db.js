import { PrismaClient } from '@prisma/client'

const db = globalThis.prisma || new PrismaClient({
  log: ['query', 'info', 'warn', 'error'], 
})

if (process.env.NODE_ENV === 'development') {
  globalThis.prisma = db
}

export default db

/*NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=pk_test_d29ydGh5LWJ1bm55LTIyLmNsZXJrLmFjY291bnRzLmRldiQ
CLERK_SECRET_KEY=sk_test_ja1V4GrWA3oolYLHuW3oqlbTvMmYtgnEHYjFnQDAl4 */