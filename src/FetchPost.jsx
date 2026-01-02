import useFetch from "./useFetch";
import "./FetchPost.css";

function FetchPosts() {
  const { data, loading, error } = useFetch(
    "https://api.escuelajs.co/api/v1/products"
  );

  if (loading) {
    return <h2 className="status">Loading...</h2>;
  }

  if (error) {
    return <h2 className="status error">Error: {error}</h2>;
  }

  return (
    <div className="container">
      <h1>Posts</h1>
      <div className="posts">
        {data.slice(0, 10).map((post) => (
          <div key={post.id} className="card">
            <h3>{post.title}</h3>
            <p>{post.body}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default FetchPosts;
