import { seedTransactions } from "@/actions/seed";

export async function GET(request) {
  const result = await seedTransactions();
  return new Response(JSON.stringify(result), {
    headers: { "Content-Type": "application/json" },
  });
}