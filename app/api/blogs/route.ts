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
/*
model Post {
  id        Int      @id @default(autoincrement())
  createdAt DateTime @default(now())
  title     String   @db.VarChar(255)
  published Boolean  @default(false)
  slug String @db.VarChar(255)
}
*/

export async function POST(request : Request) {
	const json = await request.json()
	try{
		const post = await prisma.post.create({
			data: json
		})
		return NextResponse.json({post : post.id})
	}
	catch(error: any) {
	return NextResponse.json({error: error})		
	}
}