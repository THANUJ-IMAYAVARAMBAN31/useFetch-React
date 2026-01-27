import { useEffect, useState } from "react";


export default function UseFetch() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const url="https://api.escuelajs.co/api/v1/products"
  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((result) => {
        setData(result);
        setLoading(false);
      })
      .catch(() => {
        setError("Error fetching data");
        setLoading(false);
      });
  }, [url]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div style={styles.container}>
      {data.slice(0, 10).map((item) => (
        <div key={item.id} style={styles.box}>
          <p>{item.title}</p>
        </div>
      ))}
    </div>
  );
}

const styles = {
  container: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))",
    gap: "10px",
    padding: "10px",
  },
  box: {
    border: "1px solid #ccc",
    padding: "10px",
    borderRadius: "4px",
    backgroundColor: "#f9f9f9",
    textAlign: "center",
  },
};
