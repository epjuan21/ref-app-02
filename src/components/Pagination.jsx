import React from 'react';
import usePagination from '../hooks/usePagination';

const Pagination = ({ items, itemsPerPage, CardComponent }) => {
    const { next, prev, jump, currentItems, currentPage, startPage, endPage, totalPages } = usePagination(items, itemsPerPage);

    const chevronLeft = <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
    </svg>

    const chevronDoubleLeft = <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M18.75 19.5l-7.5-7.5 7.5-7.5m-6 15L5.25 12l7.5-7.5" />
    </svg>

    const chevronRight = <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
    </svg>

    const chevronDoubleRight = <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M11.25 4.5l7.5 7.5-7.5 7.5m-6-15l7.5 7.5-7.5 7.5" />
    </svg>


    return (
        <>
            {/* Mostrar los elementos de la página actual */}
            <ul className="list-disc list-inside mb-4">
                {currentItems.map(item => (
                    <CardComponent key={item._id} items={item} />
                ))}
            </ul>

            {/* Mostrar botones para cambiar de página */}
            <div className="flex justify-center py-10">
                <button
                    onClick={() => jump(1)}
                    className={`${currentPage === 1 ? 'bg-gray-50 text-slate-400 cursor-not-allowed' : ''} text-slate-600 font-semibold px-3 mx-1 py-1 border rounded-md`}
                    disabled={currentPage === 1}
                >
                    {chevronDoubleLeft}
                </button>
                <button
                    onClick={prev}
                    className={`${currentPage === 1 ? 'bg-gray-50 text-slate-400 cursor-not-allowed' : ''} text-slate-600 font-semibold px-3 mx-1 py-1 border rounded-md `}
                    disabled={currentPage === 1}
                >
                    {chevronLeft}
                </button>

                {/* Agregar botones para cada página */}
                {[...Array(endPage - startPage)].map((_, index) => {
                    const pageNumber = startPage + index;
                    return (
                        <button
                            key={pageNumber}
                            onClick={() => jump(pageNumber)}
                            className={`h-8 w-8 mx-1 rounded-md font-semibold ${currentPage === pageNumber ? 'bg-blue-400 text-white' : 'text-slate-400 '}`}
                        >
                            {pageNumber}
                        </button>
                    );
                })}

                <button
                    onClick={next}
                    className={`${currentPage === totalPages ? 'bg-gray-50 text-slate-400 cursor-not-allowed' : ''} text-slate-600 font-semibold px-3 mx-1 py-1 border rounded-md`}
                    disabled={currentPage === totalPages}
                >
                    {chevronRight}
                </button>
                <button
                    onClick={() => jump(totalPages)}
                    className={`${currentPage === totalPages ? 'bg-gray-50 text-slate-400 cursor-not-allowed' : ''} text-slate-600 font-semibold px-3 mx-1 py-1 border rounded-md`}
                    disabled={currentPage === totalPages}
                >
                    {chevronDoubleRight}
                </button>
            </div>
        </>
    );
};

export default Pagination;
