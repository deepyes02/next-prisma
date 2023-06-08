async function getGithubPage(){
	const res = await fetch("https://api.github.com/users/deepyes02");
	return res.json();
}

export default async function GithubApi(){
	const githubData = getGithubPage();
	const res = await Promise.all([githubData])
	return res;
}