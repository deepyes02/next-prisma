'use client';
import {Menu} from "@prisma/client";
import {useEffect, useState} from 'react';


async function getMenu (setData : any){
	await fetch("http://localhost/api/menu").then(res => res.json())
	.then(data => {
		setData(data)
	})
	.catch(error => {
		console.log(error)
	})
	return;
}

export default async function Page() {
	const [data, setData] = useState([]);
	useEffect(()=>{
		getMenu(setData)
	}, [])

	return (
		<>
		{data.map(item => 
			(
				<div key={item.id}>{item.name}</div>
			)
			)}
		</>
	)
}