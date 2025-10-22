// --- Checkout API Route ---
import Stripe from "stripe";
import { NextResponse } from "next/server";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: "2024-06-20",
});

export async function POST(req: Request) {
  try {
    const { tier } = await req.json();

    const priceMap: Record<string, string> = {
      Free: "price_FREE", // placeholder
      Pro: "price_PRO", // replace with your real Stripe Price ID
      Corporate: "price_CORP",
    };

    const session = await stripe.checkout.sessions.create({
      mode: "subscription",
      payment_method_types: ["card"],
      line_items: [
        {
          price: priceMap[tier] || priceMap["Pro"],
          quantity: 1,
        },
      ],
      success_url: `${process.env.NEXT_PUBLIC_SUPABASE_URL}/?success=true`,
      cancel_url: `${process.env.NEXT_PUBLIC_SUPABASE_URL}/?canceled=true`,
    });

    return NextResponse.json({ url: session.url });
  } catch (error: any) {
    console.error("Stripe checkout error:", error.message);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}