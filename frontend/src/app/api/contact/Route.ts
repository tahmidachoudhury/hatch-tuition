import { NextApiRequest, NextApiResponse } from "next"

// src/app/api/contact/route.js
export async function POST(req: NextApiRequest, res: NextApiResponse) {
  const { name, email, message } = await req.body()

  // Integrate with email or SMS service here
  // For example, using SendGrid or Twilio

  return new Response(
    JSON.stringify({ message: "Message sent successfully" }),
    {
      status: 200,
      headers: {
        "Content-Type": "application/json",
      },
    }
  )
}
