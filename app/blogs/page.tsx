'use client';
import "./blogs.scss";

export default function Page() {
	return (
		<>
			<h1 className="__title">Add a new Blog</h1>
			<div className="blog_adder">
				<div className="wrapper">
					<label htmlFor="title">Title</label>
					<input type="text" name="title" placeholder="Add a title" />
				</div>
				<div className="wrapper">
					<label htmlFor="blog_content">Content</label>
					<textarea></textarea>
				</div>
				<div className="wrapper">
					<button>Upload</button>
				</div>
			</div>
		</>
	);
}