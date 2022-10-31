import { useState, useEffect } from "react";

function DataDispFunc(props) {
  const [data, setData] = useState(null);
  const [count, setCount] = useState(0);

  useEffect(() => {
    const getData = async () => {
      const response = await fetch(`https://swapi.dev/api/people/${props.id}/`);
      const newData = await response.json();
      setData(newData);
    };
    getData();
  }, [props.id]);

  if (data) {
    return (
      <>
        <div>{data.name}</div>
        <p>{props.text}</p>
        <button
          onClick={() => {
            setCount(count + 1);
          }}
        >
          {count}
        </button>
      </>
    );
  } else {
    return "No data";
  }
}

export default DataDispFunc;
