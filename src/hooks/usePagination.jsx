import { useState } from "react";

function usePagination(items, itemsPerPage) {
	const [currentPage, setCurrentPage] = useState(1);

	const maxPage = Math.ceil(items.length / itemsPerPage);
	const begin = (currentPage - 1) * itemsPerPage;
	const end = begin + itemsPerPage;
	const currentItems = items.slice(begin, end);

	const maxButtons = 10;
    const startPage = Math.max(1, currentPage - Math.floor(maxButtons / 2));
    const endPage = Math.min(maxPage + 1, startPage + maxButtons);
	const totalPages = Math.ceil(items.length / itemsPerPage);

	function next() {
		setCurrentPage((currentPage) => Math.min(currentPage + 1, maxPage));
	}

	function prev() {
		setCurrentPage((currentPage) => Math.max(currentPage - 1, 1));
	}

	function jump(page) {
		const pageNumber = Math.max(1, page);
		setCurrentPage((currentPage) => Math.min(pageNumber, maxPage));
	}

	return { next, prev, jump, currentItems, currentPage, startPage, endPage, totalPages };
}

export default usePagination;