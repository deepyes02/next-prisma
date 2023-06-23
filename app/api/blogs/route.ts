import {prisma} from "@src/api/prisma";
import { NextResponse } from "next/server";

export async function GET(
	request : Request
) {
	const posts = await prisma.post.findMany();

	if(!posts){
		return new NextResponse("Sorry there are no posts", {status: 200})
	}
	return NextResponse.json(posts)
}