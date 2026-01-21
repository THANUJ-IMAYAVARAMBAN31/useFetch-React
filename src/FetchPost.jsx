// src/FetchPost.jsx
import React from "react";
import useFetch from "./useFetch";

const FetchPost = () => {
  const url = " https://api.escuelajs.co/api/v1/products";
  const { data, loading, error } = useFetch(url);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;
  if (!data || data.length === 0) return <div>No data found</div>;

  const items = data.slice(0, 10);

  return (
    <div style={styles.grid}>
      {items.map((item) => (
        <div key={item.id} style={styles.card}>
          <h3>{item.title}</h3>
          <p>{item.body}</p>
        </div>
      ))}
    </div>
  );
};

const styles = {
  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
    gap: "16px",
    padding: "16px",
  },
  card: {
    border: "1px solid #ccc",
    borderRadius: "8px",
    padding: "12px",
    background: "#fff",
  },
};

export default FetchPost;
