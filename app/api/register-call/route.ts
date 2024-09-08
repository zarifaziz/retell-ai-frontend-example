import { NextResponse } from 'next/server';

const agentId = process.env.RETELL_AI_AGENT_ID;
const createWebCallUrl = String(process.env.CALL_BACKEND_URL);

export async function POST() {
  try {
    const response = await fetch(createWebCallUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        agent_id: agentId, // Pass the agentId as agent_id
        // You can optionally add metadata and retell_llm_dynamic_variables here if needed
        retell_llm_dynamic_variables: {
          name: "Matt" // hardcoded name as an example
        }
      }),
    });

    if (!response.ok) {
      throw new Error(`Error: ${response.status}`);
    }

    const data = await response.json();
    return NextResponse.json(data);
  } catch (err) {
    console.error(err);
    return NextResponse.json({ error: String(err) }, { status: 500 });
  }
}