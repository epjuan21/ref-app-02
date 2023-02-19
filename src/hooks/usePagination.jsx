import { useState } from 'react';

export function usePagination(items, itemsPerPage) {

	const [itemOffset, setItemOffset] = useState(0);

	const endOffset = itemOffset + itemsPerPage;
	const currentItems = items.slice(itemOffset, endOffset);
	const totalPages = Math.ceil(items.length / itemsPerPage);

	function handlePageClick(event) {
		const newOffset = (event.selected * itemsPerPage) % items.length;
		setItemOffset(newOffset);
	}

	return { currentItems, totalPages, handlePageClick };
}