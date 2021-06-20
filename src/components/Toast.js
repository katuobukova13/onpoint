import React, { useState } from "react";
import "../css/Toast.css";
import del from "../icons/delete.png";
import Pagination from "./Pagination";
import "../css/Pagination.css";

const PAGE_LIMIT = 3;

const ADVANTAGES = [
  { id: "01", text: "Самое важное и ключевое преимущество  нашего препарата" },
  { id: "02", text: "Второе по важности преимущество" },
  { id: "03", text: "Ещё одно важное преимущество препарата" },
  { id: "04", text: "Ещё одно не менее важное преимущество препарата" },
  { id: "05", text: "Ещё одно важное преимущество препарата" },
  { id: "06", text: "Ещё одно важное преимущество препарата" },
];

const Toast = ({ toastState, setToastState }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [advantagesPerPage] = useState(PAGE_LIMIT);

  const indexOfLastAdvantage = currentPage * PAGE_LIMIT;
  const indexOfFirstAdvantage = indexOfLastAdvantage - PAGE_LIMIT;
  const currentAdvantages = ADVANTAGES.slice(
    indexOfFirstAdvantage,
    indexOfLastAdvantage
  );

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  const closeToast = () => {
    setToastState(false);
  };

  return (
    <div className="toast">
      <button className="toast__btn" onClick={closeToast}>
        <img src={del} alt="delete" />
      </button>
      <div className="toast__titles">
        <h2 className="toast__title">ПРЕИМУЩЕСТВА</h2>
        <h2 className="toast__title">
          BREND<span>XY</span>
        </h2>
      </div>
      <ul className="toast__list">
        {currentAdvantages.map((advantage) => (
          <>
            <li className="toast__number">{advantage.id}</li>
            <li className="toast__advantage">{advantage.text}</li>
          </>
        ))}
      </ul>
      <Pagination
        advantagesPerPage={advantagesPerPage}
        totalAdvantages={ADVANTAGES.length}
        paginate={paginate}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
      />
    </div>
  );
};
export default Toast;
