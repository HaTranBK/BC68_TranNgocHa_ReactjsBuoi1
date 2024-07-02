import React from "react";

const Banner = () => {
  return (
    <div className="container mx-auto p-16 bg-slate-300 my-4">
      <h1 className="text-4xl">A Warm Welcome!</h1>
      <p className="my-5">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Corporis ab
        eveniet quidem, incidunt qui dicta accusantium nobis. Eius veniam
        similique vero consequuntur. Aspernatur delectus odio, iste eveniet,
        tempore consequuntur, dolorem non quae corrupti illum doloribus. Ipsa,
        sapiente quod veniam minus delectus illum iste a laborum eum magnam
        repellendus consectetur architecto.
      </p>
      <button className="px-3 py-2 bg-blue-500 rounded-md text-white hover:bg-blue-400 duration-300">
        Call to action!
      </button>
    </div>
  );
};

export default Banner;
