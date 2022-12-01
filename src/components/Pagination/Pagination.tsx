import React from "react";
import PaginationProps from "./Pagination.types";

export const Pagination = ({ previous, next, items, landmarkLabel }: PaginationProps) => {
  return (
    <>
      <nav className="govuk-pagination" role="navigation" aria-label="results">
        <div className="govuk-pagination__prev">
          <a className="govuk-link govuk-pagination__link" href="/previous" rel="prev">
            <svg
              className="govuk-pagination__icon govuk-pagination__icon--prev"
              xmlns="http://www.w3.org/2000/svg"
              height="13"
              width="15"
              aria-hidden="true"
              focusable="false"
              viewBox="0 0 15 13"
            >
              <path d="m6.5938-0.0078125-6.7266 6.7266 6.7441 6.4062 1.377-1.449-4.1856-3.9768h12.896v-2h-12.984l4.2931-4.293-1.414-1.414z"></path>
            </svg>
            <span className="govuk-pagination__link-title">Previous</span>
          </a>
        </div>
        <ul className="govuk-pagination__list">
          <li className="govuk-pagination__item">
            <a className="govuk-link govuk-pagination__link" href="/page/1" aria-label="Page 1">
              1
            </a>
          </li>
          <li className="govuk-pagination__item govuk-pagination__item--current">
            <a className="govuk-link govuk-pagination__link" href="/page/2" aria-label="Page 2" aria-current="page">
              2
            </a>
          </li>
          <li className="govuk-pagination__item">
            <a className="govuk-link govuk-pagination__link" href="/page/3" aria-label="Page 3">
              3
            </a>
          </li>
        </ul>
        <div className="govuk-pagination__next">
          <a className="govuk-link govuk-pagination__link" href="/next" rel="next">
            <span className="govuk-pagination__link-title">Next</span>
            <svg
              className="govuk-pagination__icon govuk-pagination__icon--next"
              xmlns="http://www.w3.org/2000/svg"
              height="13"
              width="15"
              aria-hidden="true"
              focusable="false"
              viewBox="0 0 15 13"
            >
              <path d="m8.107-0.0078125-1.4136 1.414 4.2926 4.293h-12.986v2h12.896l-4.1855 3.9766 1.377 1.4492 6.7441-6.4062-6.7246-6.7266z"></path>
            </svg>
          </a>
        </div>
      </nav>
    </>
  );
};

export default Pagination;
