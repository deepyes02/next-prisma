import {PrismaClient} from '@prisma/client';

export async function getInitialProps(){
	const prisma = new PrismaClient();
	const menu = await prisma.menu.findMany()

	return {
		props : {menu}
	}
}

export default function Page(menu) {
	
	return (
		<ul>
			{
				menu.map(item=>(
					<li key={item.id}>{item.name}</li>
				))
			}
		</ul>
	)
}