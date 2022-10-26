import React from "react";
import { suspend } from "suspend-react";

function Body(props) {
  const data = suspend(async () => {
    const res = await fetch(`https://jsonplaceholder.typicode.com/photos`);
    return res.json();
  }, []);
  return (
    <>
      <div className="mt-9 mb-24">
        <div className="flex md:flex-col-3 flex-wrap sm:flex-col-2 flex-col-1">
          {data.map((post) => (
            <div className="shrink md:w-1/3 sm:w-1/2 w-full p-1 ">
              <img src={post.url} className="" alt="Logo" />
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Body;
