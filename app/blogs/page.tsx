'use client';
import { useState } from "react";
import "./blogs.scss";

async function postBlog (formData: object){
	const url = "http://localhost/api/blogs";

	const response = await fetch(url, {
		method: "POST",
		mode: "cors",
		cache: "no-cache",
		credentials: "same-origin",
		headers: {
			"Content-Type" : "application/json"
		},
		redirect : "follow",
		referrerPolicy: "no-referrer",
		body: JSON.stringify(formData)
	});
	return response.json();
}

export default function Page() {
	const [slug, setSlug] = useState("");
	const [title, setTitle] = useState("");
	function onClickHandler(){
		setTitle(title);
		setSlug(slug);
		postBlog({title: title, slug: slug})
	}

	function onChangeTitleHandler(e: any){
		setTitle(e.target.value)
	}
	function onChangeSlugHandler(e: any){
		setSlug(e.target.value)
	}
	return (
		<div className="formWrapper">
			<h1 className="__title">Add a new Blog</h1>
			<div className="blog_adder">
				<div className="wrapper">
					<label htmlFor="title">Title</label>
					<input type="text" name="title" value={title} onChange={onChangeTitleHandler}/>
				</div>
				<div className="wrapper">
					<label htmlFor="blog_content">Slug</label>
					<input type="text" value={slug} onChange={onChangeSlugHandler}/>
				</div>
				<div className="wrapper">
					<button onClick={onClickHandler}>Upload</button>
				</div>
			</div>
		</div>
	);
}