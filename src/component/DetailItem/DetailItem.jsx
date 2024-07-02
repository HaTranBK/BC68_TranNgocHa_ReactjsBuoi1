import React from "react";

const DetailItem = ({ value }) => {
  return (
    <div key={value} className="text-center border-solid border-2">
      <p className="w-100 p-14 bg-gray-500 mb-3">500 x 325</p>
      <h2>Card Title</h2>
      <p className="my-4">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Provident
        officia cum, expedita repellat delectus voluptatem.
      </p>
      <div className="bg-slate-300 text-center p-5">
        <button className="py-3 px-4 bg-blue-600 rounded-md hover:bg-blue-500 duration-500">
          Find Out More
        </button>
      </div>
    </div>
  );
};

export default DetailItem;
