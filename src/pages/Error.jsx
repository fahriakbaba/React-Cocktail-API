import { Link } from "react-router-dom";

function Error() {
  return (
    <section className="error--page">
        <h3 className="error-title">404 error</h3>
        <p className="error--info">This page doesn't exist.</p>
        <button className="btn btn-details"><Link to="/" className="cocktail--link">Back Home</Link></button>
    </section>
  )
}

export default Error;