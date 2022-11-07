import { useState, useEffect } from "react";
import { useParams, useNavigate, useLocation } from "react-router-dom";

const LayoutBlog = () => {
  const [post, setPost] = useState(null);
  const { id } = useParams();
  const navigate = useNavigate();
  const location = useLocation();
  const goBack = () => {
    navigate(-1);
  };

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
      .then((res) => res.json())
      .then((data) => setPost(data));
  }, [id]);

  console.log(location);
  return (
    <div>
      <button onClick={goBack}>Go Back</button>
      <button
        onClick={() => {
          navigate("/");
        }}
      >
        Go Home
      </button>
      {post ? (
        <>
          <h1>{post.title}</h1>
          <p>{post.body}</p>
        </>
      ) : (
        "No data"
      )}
    </div>
  );
};

export default LayoutBlog;
