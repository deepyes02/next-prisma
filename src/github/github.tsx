'use client';
// import GithubApi from "../api/api";
import { useEffect, useState } from "react";

export default function Github(){
	const [user , setUser] = useState([]);
	let fetchUserData = () => {
		fetch("https://api.github.com/users/deepyes02")
		.then(response => {
			return response.json()
		})
		.then(data => {
			setUser(data)
		})
	}
	useEffect( () => {
		fetchUserData()
	}, [])
	// console.log(user)
	return (
		<div>
			{user.bio}
		</div>
	)

}