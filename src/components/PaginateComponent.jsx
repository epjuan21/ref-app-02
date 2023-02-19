import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import ReactPaginate from 'react-paginate'

const PaginateComponent = ({ totalPages, handlePageClick }) => {

    return (
        <>
            <ReactPaginate
                breakLabel={<span className='mr-4'>...</span>}
                nextLabel={
                    <span className='flex items-center justify-center rounded-md'>
                        <FontAwesomeIcon icon={faChevronRight} size="lg" />
                    </span>
                }
                onPageChange={handlePageClick}
                pageRangeDisplayed={5}
                pageCount={totalPages}
                previousLabel={
                    <span className='flex items-center justify-center rounded-md'>
                        <FontAwesomeIcon icon={faChevronLeft} size="lg" />
                    </span>
                }
                containerClassName='flex items-center justify-center gap-2 mt-8 mb-4'
                pageClassName='block border border-gray-100  rounded-md'
                activeClassName='bg-blue-600 text-white'
                pageLinkClassName='flex items-center justify-center h-10 w-10'
            />
        </>
    )
}

export default PaginateComponent
