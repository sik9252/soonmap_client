import React, { useState, useEffect } from 'react';
import { PaginationContainer, PageNum } from './style';

function Pagination({ currentPage, setCurrentPage, totalPosts, postPerPages }) {
  const [pageNumbers, setPageNumbers] = useState([]);
  const totalPages = Math.ceil(totalPosts / postPerPages);

  useEffect(() => {
    const getPageList = () => {
      const start = 1 + Math.floor((currentPage - 1) / 3) * 3;
      const end = Math.min(start + 2, totalPages);
      const pageNumbers = Array.from({ length: end - start + 1 }, (_, i) => i + start);
      return pageNumbers;
    };

    setPageNumbers(getPageList());
  }, [currentPage, totalPages]);

  const clickPageNum = (number) => {
    setCurrentPage(number);
  };

  return (
    <PaginationContainer>
      {pageNumbers.map((number) => (
        <PageNum key={number} onClick={() => clickPageNum(number)} $currentPage={currentPage} $number={number}>
          {number}
        </PageNum>
      ))}
    </PaginationContainer>
  );
}

export default Pagination;
