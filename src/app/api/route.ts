import { NextResponse } from "next/server";

export async function GET(): Promise<Response> {
	// console.log(request);

	return NextResponse.json({ message: "Hello world" });
}
