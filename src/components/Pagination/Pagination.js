import React, { useContext } from "react";
import ReactPaginate from "react-paginate";
import { DataContext } from "../../context/DataContext";
import "./Pagination.scss";

const Pagination = () => {
  const { pages,setSelectedPage } = useContext(DataContext);

   const handlePageChange = ({ selected: selectedPage }) => {
        setSelectedPage(selectedPage+1);
      }

  return (
    <div>
      {pages !== undefined ? ( 
        <ReactPaginate
          pageCount={pages}
          initialPage={0}
          breakLabel="..."
          onPageChange={handlePageChange}
          breakClassName="pagination--li"
          containerClassName="pagination"
          pageClassName="pagination--li"
          activeClassName="pagination--li-active"
          previousLabel="<"
          nextLabel=">"
          previousClassName="pagination--li previous"
          nextClassName="pagination--li next"
          disabledClassName="disabled"
        />
       ) : (null)} 
    </div>
  );
};

export default Pagination;
