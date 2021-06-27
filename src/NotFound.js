import { Link } from "react-router-dom";
const NotFound = () => {
	return (  
		<div className="not-found">
		<h1>Not Found</h1>
		<p>The page cannot be found</p>
		<Link to="/">Get back home!</Link>
		</div>
	);
}
 
export default NotFound;