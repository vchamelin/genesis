const Pagination = ({ currentPage, maxPage, onPageChange }) => {
  const pageNumbers = Array.from({ length: maxPage }, (_, i) => i + 1);

  const handleClick = (pageNumber) => {
    onPageChange(pageNumber);
  };

  const nextPage = () => {
    onPageChange(currentPage + 1);
  };

  const prevPage = () => {
    onPageChange(currentPage - 1);
  };

  return (
    <nav aria-label="Page navigation example">
      <ul className="pagination">
        <li className="page-item"><button
                                className="page-link"
                                onClick={prevPage}
                                disabled={currentPage === 1}
                                >Previous</button></li>
        {pageNumbers.map((pageNumber) => (
          <li className="page-item">
            <button
              key={pageNumber}
              onClick={() => handleClick(pageNumber)}
              className={pageNumber === currentPage ? "active page-link" : "page-link"}
            >
              {pageNumber}
            </button>
          </li>
        ))}
        <li className="page-item"><button
                                className="page-link"
                                onClick={nextPage}
                                disabled={currentPage === maxPage}
                                >Previous</button></li>
      </ul>
    </nav>
  );
};

export default Pagination;
