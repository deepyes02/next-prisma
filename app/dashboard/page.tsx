import {prisma} from "../../src/api/prisma";

export default async function Page() {
	const menu = prisma.menu.findMany();
	return (
		<ul>
			{
				(await menu).map(item=>(
					<li key={item.id}>{item.name}</li>
				))
			}
		</ul>
	)
}