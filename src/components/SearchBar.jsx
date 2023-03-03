import React from 'react'

const SearchBar = ({value, handleChange}) => {
    return (
        <div className='flex items-center mb-5 -z-10'>
            <div className='relative w-full'>
                <div className='absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none'>
                    <svg aria-hidden="true" className="w-5 h-5 text-gray-500 " fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd">
                        </path>
                    </svg>
                </div>
                <input
                    value={value}
                    onChange={handleChange}
                    type="search"
                    className="block p-4 pl-10 w-full text-sm border-2 outline-none focus:ring-blue-500 focus:border-blue-500 text-gray-900 bg-gray-50 rounded-lg"
                    placeholder="Buscar"
                    required
                />
            </div>
        </div>
    )
}

export default SearchBar
