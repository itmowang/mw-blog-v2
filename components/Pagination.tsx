import React from "react";

function Pagination({ currentPage, totalPages, onPageChange }) {
    const pageNumbers = [];
    for (let i = 1; i <= totalPages; i++) {
        pageNumbers.push(i);
    }

    const visiblePageNumbers = [];
    let startPage = 1;
    let endPage = totalPages;
    const maxVisiblePages = 4;

    if (totalPages > maxVisiblePages) {
        const halfMaxVisiblePages = Math.floor(maxVisiblePages / 2);
        startPage = currentPage - halfMaxVisiblePages;
        endPage = currentPage + halfMaxVisiblePages;

        if (startPage < 1) {
            endPage += Math.abs(startPage) + 1;
            startPage = 1;
        }

        if (endPage > totalPages) {
            startPage -= endPage - totalPages;
            endPage = totalPages;
        }
    }

    for (let i = startPage; i <= endPage; i++) {
        visiblePageNumbers.push(i);
    }

    return (
        <div className="flex justify-center">
            <nav className="inline-flex">
                <button
                    className={`px-3 py-1 bg-gray-200 rounded-l-md ${currentPage === 1 ? "opacity-50 cursor-not-allowed" : ""
                        }`}
                    onClick={() => onPageChange(currentPage - 1)}
                    disabled={currentPage === 1}
                >
                    &laquo;
                </button>
                {startPage > 1 && (
                    <>
                        <button
                            className="px-3 py-1 bg-gray-200"
                            onClick={() => onPageChange(1)}
                        >
                            1
                        </button>
                        {startPage > 2 && <span className="px-3 py-1">...</span>}
                    </>
                )}
                {visiblePageNumbers.map((number) => (
                    <button
                        key={number}
                        className={`px-3 py-1 bg-gray-200 ${currentPage === number ? "font-bold" : ""
                            }`}
                        onClick={() => onPageChange(number)}
                    >
                        {number}
                    </button>
                ))}
                {endPage < totalPages && (
                    <>
                        {endPage < totalPages - 1 && <span className="px-3 py-1">...</span>}
                        <button
                            className="px-3 py-1 bg-gray-200"
                            onClick={() => onPageChange(totalPages)}
                        >
                            {totalPages}
                        </button>
                    </>
                )}
                <button
                    className={`px-3 py-1 bg-gray-200 rounded-r-md ${currentPage === totalPages ? "opacity-50 cursor-not-allowed" : ""
                        }`}
                    onClick={() => onPageChange(currentPage + 1)}
                    disabled={currentPage === totalPages}
                >
                    &raquo;
                </button>
            </nav>
            <form className="ml-4" onSubmit={(e) => e.preventDefault()}>
                <label htmlFor="page" className="sr-only">
                    Page
                </label>
                <input
                    type="number"
                    name="page"
                    id="page"
                    className="px-3 py-1 border rounded-md"
                    placeholder="Page"
                    min="1"
                    max={totalPages}
                    value={currentPage}
                    onChange={(e) => onPageChange(Number(e.target.value))}
                />
                <button type="submit" className="px-3 py-1 bg-gray-200 rounded-md">
                    Go
                </button>
            </form>
        </div>
    );
}

export default Pagination;