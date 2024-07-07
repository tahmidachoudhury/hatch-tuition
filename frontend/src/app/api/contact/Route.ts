// src/app/api/contact/route.js
export async function POST(req) {
  const { name, email, message } = await req.json()

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
