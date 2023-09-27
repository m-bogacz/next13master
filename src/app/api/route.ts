import { type NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest): Promise<Response> {
	console.log(request);

	return NextResponse.json({ message: "Hello world" });
}
