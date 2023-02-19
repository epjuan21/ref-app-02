import React from 'react'
import ReactPaginate from 'react-paginate';
import { usePagination } from '../hooks/usePagination';
import EapbCard from './EapbCard';

const Pagination = ({ itemsPerPage, items }) => {

    const { endOffset, currentItems, pageCount, handlePageClick } = usePagination(items, itemsPerPage);

    return (
        <>

            <EapbCard eapb={currentItems} />

            <ReactPaginate
                breakLabel="..."
                nextLabel="Siguiente >"
                onPageChange={handlePageClick}
                pageRangeDisplayed={5}
                pageCount={pageCount}
                previousLabel="< Anterior"
                renderOnZeroPageCount={null}
                containerClassName="pagination"
                pageClassName='page-class'
                pageLinkClassName='page-link'
                activeLinkClassName='active'
                previousClassName='previous'
                nextClassName='next'
                breakClassName='page-link'
            />
        </>
    )
}

export default Pagination
