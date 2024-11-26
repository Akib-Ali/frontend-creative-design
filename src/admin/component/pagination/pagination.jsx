import React from 'react';
import ReactPaginate from 'react-paginate';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa'; // Import arrow icons

const Pagination = ({ pageCount, onPageChange }) => {
  return (
    <ReactPaginate
      breakLabel="..."
      nextLabel={<FaArrowRight />} // Right arrow icon for Next
      previousLabel={<FaArrowLeft />} // Left arrow icon for Previous
      onPageChange={onPageChange}
      pageRangeDisplayed={5}
      pageCount={pageCount}
      containerClassName="custom-pagination"
      pageClassName="custom-page-item"
      pageLinkClassName="custom-page-link"
      previousClassName="custom-page-item"
      previousLinkClassName="custom-page-link"
      nextClassName="custom-page-item"
      nextLinkClassName="custom-page-link"
      breakClassName="custom-page-item"
      breakLinkClassName="custom-page-link"
      activeClassName="custom-active"
    />
  );
};

export default Pagination;

