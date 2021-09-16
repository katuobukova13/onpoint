import React from "react";
import left_arrow from "../../icons/left_arrow.png";
import right_arrow from "../../icons/right_arrow.png";
import "./Pagination.css";

const Pagination = ({
  advantagesPerPage,
  totalAdvantages,
  paginate,
  currentpage,
  setCurrentPage,
}) => {
  const pages = [];

  for (let i = 1; i <= Math.ceil(totalAdvantages / advantagesPerPage); i++) {
    pages.push(i);
  }

  return (
    <nav>
      <div className="pagination">
        <button className="page__arrow" onClick={() => paginate(1)}>
          <img src={left_arrow} alt="arrow" />
        </button>
        {pages.map((page, key) => (
          <button
            onClick={() => paginate(page)}
            className={
              currentpage === page
                ? "page__link page__link-active"
                : "page__link"
            }
            key={key}
          ></button>
        ))}
        <button className="page__arrow" onClick={() => paginate(2)}>
          <img src={right_arrow} alt="arrow" />
        </button>
      </div>
    </nav>
  );
};

export default Pagination;
