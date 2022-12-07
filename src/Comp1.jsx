import React, { useEffect, useState } from "react";

const Comp1 = () => {
  const [data, setdata] = useState([]);

  const handleScroll = (e) => {
    const bottom =
      e.target.scrollHeight - e.target.scrollTop === e.target.clientHeight;
    // console.log(bottom);
    console.log("scrollHeight", e.target.scrollHeight);
    console.log("scrollTop", e.target.scrollTop);
    console.log("clientHeight", e.target.clientHeight);
    if (bottom) {
      fetchApi();
    }
  };

  const fetchApi = async () => {
    let response = await fetch(
      "https://jsonplaceholder.typicode.com/photos?_limit=7"
    );
    let result = await response.json();
    setdata([...data, ...result]);
  };

  useEffect(() => {
    fetchApi();
  }, []);

  return (
    <div
      onScroll={handleScroll}
      style={{ overflowY: "scroll", maxHeight: "638px"}}
    >
      {data.map((i, index) => {
        return (
          <div key={index} style={{ margin: "20px" }}>
            <img src={i.thumbnailUrl} alt="product-img" />
          </div>
        );
      })}
    </div>
  );
};
export default Comp1;
