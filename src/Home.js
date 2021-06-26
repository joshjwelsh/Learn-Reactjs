import BlogList from './BlogList';
import { useState, useEffect } from 'react';

const Home = () => {
	const [blogs, setBlogs] = useState(null);
	const [isPending, setIsPending] = useState(true);
	const [error, setError] = useState(null);

	useEffect(() => {
		setTimeout(() =>{
				fetch("http://localhost:8001/blogss").then(res => {
				if (!res.ok){
					throw Error('could not fetch the data for that resources')
				}
				return res.json();
			}).then((data) => {
				console.log(data);
				setBlogs(data);
				setIsPending(false);
				setError(null);

			})
			.catch(err => {
				setIsPending(false);
				setError(err.message);
			})
		}, 1000 );
	},[])
	return (  
		<div className="home">	
			{error && <div> {error} </div>}
			{isPending && <div> Loading...</div>}
			{blogs && <BlogList blogs={blogs} title="All blogs" />}

		</div>
	);

}
 
export default Home;