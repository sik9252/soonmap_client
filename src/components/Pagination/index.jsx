import React, { useState, useEffect } from 'react';
import { PaginationContainer, PageNum, HiddenBtn } from './style';
import { ReactComponent as PagePrevBtn } from '../../assets/icons/PagePrevBtn.svg';
import { ReactComponent as PageNextBtn } from '../../assets/icons/PageNextBtn.svg';

function Pagination({ totalPosts, postPerPages }) {
  const [currentPage, setCurrentPage] = useState(1);
  const [isFirstPage, setIsFirstPage] = useState(false);
  const [isLastPage, setIsLastPage] = useState(false);
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

  const clickPagePrevBtn = (e) => {
    if (currentPage === 1) {
      e.preventDefault();
    } else {
      setCurrentPage(currentPage - 1);
    }
  };

  const clickPageNextBtn = (e) => {
    if (currentPage === Math.ceil(totalPosts / postPerPages)) {
      e.preventDefault();
    } else {
      setCurrentPage(currentPage + 1);
    }
  };

  useEffect(() => {
    if (currentPage === 1) {
      setIsFirstPage(true);
    } else {
      setIsFirstPage(false);
    }

    if (currentPage === Math.ceil(totalPosts / postPerPages)) {
      setIsLastPage(true);
    } else {
      setIsLastPage(false);
    }
  }, [currentPage]);

  const clickPageNum = (number) => {
    setCurrentPage(number);
  };

  return (
    <PaginationContainer>
      {isFirstPage ? <HiddenBtn /> : <PagePrevBtn onClick={(e) => clickPagePrevBtn(e)} />}
      {pageNumbers.map((number) => (
        <PageNum key={number} onClick={() => clickPageNum(number)} $currentPage={currentPage} $number={number}>
          {number}
        </PageNum>
      ))}
      {isLastPage ? <HiddenBtn /> : <PageNextBtn onClick={(e) => clickPageNextBtn(e)} />}
    </PaginationContainer>
  );
}

export default Pagination;
