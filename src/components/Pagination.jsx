import React from 'react';
import usePagination from '../hooks/usePagination';

const Pagination = ({ items, itemsPerPage, CardComponent }) => {
    const { next, prev, jump, currentItems, currentPage, startPage, endPage, totalPages } = usePagination(items, itemsPerPage);
    return (
        <>
            {/* Mostrar los elementos de la página actual */}
            <ul className="list-disc list-inside mb-4">
                {currentItems.map(item => (
                    <CardComponent key={item._id} items={item} />
                ))}
            </ul>

            {/* Mostrar botones para cambiar de página */}
            <div className="flex justify-center">
                <button
                    onClick={() => jump(1)}
                    className={`${currentPage === 1 ? 'bg-gray-50 text-gray-300 cursor-not-allowed' : ''} px-3 mx-1 py-1 border rounded-md`}
                    disabled={currentPage === 1}
                >
                    Primera
                </button>
                <button
                    onClick={prev}
                    className={`${currentPage === 1 ? 'bg-gray-50 text-gray-300 cursor-not-allowed' : ''} px-3 mx-1 py-1 border rounded-md `}
                    disabled={currentPage === 1}
                >
                    Anterior
                </button>

                {/* Agregar botones para cada página */}
                {[...Array(endPage - startPage)].map((_, index) => {
                    const pageNumber = startPage + index;
                    return (
                        <button
                            key={pageNumber}
                            onClick={() => jump(pageNumber)}
                            className={`px-3 mx-1 py-1 border rounded-md ${currentPage === pageNumber ? 'bg-blue-200' : ''}`}
                        >
                            {pageNumber}
                        </button>
                    );
                })}

                <button
                    onClick={next}
                    className={`${currentPage === totalPages ? 'bg-gray-50 text-gray-300 cursor-not-allowed' : ''} px-3 mx-1 py-1 border rounded-md`}
                    disabled={currentPage === totalPages}
                >
                    Siguiente
                </button>
                <button
                    onClick={() => jump(totalPages)}
                    className={`${currentPage === totalPages ? 'bg-gray-50 text-gray-300 cursor-not-allowed' : ''} px-3 mx-1 py-1 border rounded-md`}
                    disabled={currentPage === totalPages}
                >
                    Última
                </button>
            </div>
        </>
    );
};

export default Pagination;
