import { type NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest): Promise<Response> {
	const body: unknown = await request.json();

	return NextResponse.json({ message: body });
}
