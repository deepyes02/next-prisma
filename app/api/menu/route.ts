import {prisma} from "@src/api/prisma";
import { NextResponse } from "next/server";

export async function GET(
	request : Request
) {
	const menu = await prisma.menu.findMany();

	if(!menu){
		return new NextResponse("Sorry there are no menu", {status: 200})
	}

	return NextResponse.json(menu)
}