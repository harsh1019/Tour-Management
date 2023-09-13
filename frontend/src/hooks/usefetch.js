import { useState, useEffect } from "react";

const useFetch = (url) => {
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const res = await fetch(url);
        if (!res.ok) {
          setError("Failed to fetch");
          alert("failed to fetch");
        }

        const result = await res.json();
        setData(result.data);
        setLoading(false);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    };
    fetchData();
  }, [url]);

  return {
    data,
    error,
    loading,
  };
};

export default useFetch;

// ********************************
// import { useState, useEffect } from "react";

// const useFetch = (url) => {
//   const [data, setData] = useState([]);
//   const [error, setError] = useState(null);
//   const [loading, setLoading] = useState(false);
//   console.log(url);
//   useEffect(() => {
//     console.log("inside useEffect");
//     const fetchData = async () => {
//       setLoading(true);
//       // console.log("before try");
//       try {
//         console.log("try");
//         const res = await fetch(url);
//         if (!res.ok) {
//           setError("failed to fetch");
//           alert('failed to fetch')
//         }
//         const result = await res.json();
//         setData(result.data);
//         console.log(result.data);
//         setLoading(false);
//       } catch (err) {
//         // console.log(err.message);
//         setError(err.message);
//         setLoading(false);
//       }
//     }
//     fetchData();
//   }, [url]);

//   return {
//     data,
//     error,
//     loading,
//   };
// };

// export default useFetch;
