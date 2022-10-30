import React from "react";
import { suspend } from "suspend-react";
import { useEffect, useState } from "react";

function Body(props) {
  let currentOffset = 12;
  const [image, setImage] = useState([]);

  const loadTenLine = () => {
    setImage((image) => [
      ...image,
      ...data.slice(currentOffset, currentOffset + 12),
    ]);
    currentOffset += 12;
  };

  const data = suspend(async () => {
    const res = await fetch(`https://jsonplaceholder.typicode.com/photos`);
    return res.json();
  }, []);

  const handleScroll = (e) => {
    const scrollHeight = e.target.documentElement.scrollHeight;
    const currentHeight = Math.ceil(
      e.target.documentElement.scrollTop + window.innerHeight
    );
    if (currentHeight + 1 >= scrollHeight) {
      loadTenLine();

      console.log("end of the page");
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
  });

  useEffect(() => {
    setImage(data.slice(0, 12));
  }, [data]);

  return (
    <>
      <div className="mt-9 mb-24">
        <div className="flex md:flex-col-3 flex-wrap sm:flex-col-2 flex-col-1">
          {image.map((post) => (
            <div key={post.id} className="shrink md:w-1/3 sm:w-1/2 w-full p-1">
              <img src={post.url} className="" alt="Logo" />
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Body;
