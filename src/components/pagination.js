import React from "react";

const Pagination = ({ next, prev, gotPaginate }) => {
  const paginate = (to) => {
    if(to === "prev" && prev) {
      gotPaginate(prev)
    } else if (to === "next" && next) {
      gotPaginate(next)
    }
  };

  return (
    <ul className="pagination">
      <li style={{ opacity: !prev ? 0.7 : 1 }} >
        <a href="#" onClick={(e) => {e.preventDefault(); paginate("prev")}}>
          Perv
        </a>
      </li>
      <li style={{ opacity: !next ? 0.7 : 1 }}>
        <a href="#" onClick={(e) => {e.preventDefault(); paginate("next")}}>
          Next
        </a>
      </li>
    </ul>
  );
};

export default Pagination;
