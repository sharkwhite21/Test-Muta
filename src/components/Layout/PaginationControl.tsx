import React from 'react';

interface PaginationControlsProps {
  offset: number;
  limit: number;
  totalPokemons: number;
  handleNextPage: () => void;
  handlePrevPage: () => void;
  handleGoToPage: (page: number) => void; 
}

export const PaginationControls = ({
  offset,
  limit,
  totalPokemons,
  handleNextPage,
  handlePrevPage,
  handleGoToPage,
}: PaginationControlsProps) => {
  
  const totalPages = Math.ceil(totalPokemons / limit);
  const currentPage = Math.floor(offset / limit) + 1;
  const pageNumbers = Array.from({ length: totalPages }, (_, index) => index + 1);

  return (
    <nav className="pagination-controls" aria-label="Controles de paginación">
      <button 
        disabled={offset === 0} 
        onClick={handlePrevPage} 
        aria-label="Página anterior"
        className="px-4 py-2 bg-[#7fb0b8] text-white font-semibold rounded-md hover:bg-[#7fb0b8] focus:outline-none focus:ring-2 focus:ring-[#7fb0b8] disabled:bg-gray-400 disabled:cursor-not-allowed"
      >
        <span aria-hidden="true">{'<'}</span>
        <span className="sr-only">Página anterior</span>
      </button>

      <div className="page-numbers">
        {pageNumbers.map((page) => (
          <button
            key={page}
            onClick={() => handleGoToPage(page)}
            className={`page-number ${currentPage === page ? 'active' : ''}`}
            aria-label={`Ir a la página ${page}`}
            aria-current={currentPage === page ? 'page' : undefined}
          >
            {page}
          </button>
        ))}
      </div>

      <button 
        disabled={offset + limit >= totalPokemons} 
        onClick={handleNextPage} 
        aria-label="Página siguiente"
        className="px-4 py-2 bg-[#7fb0b8] text-white font-semibold rounded-md hover:bg-[#7fb0b8] focus:outline-none focus:ring-2 focus:ring-[#7fb0b8] disabled:cursor-not-allowed disabled:bg-gray-400"
      >
        <span aria-hidden="true">{'>'}</span>
        <span className="sr-only">Página siguiente</span>
      </button>
    </nav>
  );
};
