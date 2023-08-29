import React from 'react'
import ReactPaginate from 'react-paginate'

const Pagination = ({pagecount,getpages}) => {

  const onclick = (data)=>{
    getpages(data.selected+1);
    console.log(getpages);
  }

  return (
    <div className='d-flex justify-content-center align-items-center'>
      <ReactPaginate
                breakLabel="."
                nextLabel="next >"
                onPageChange={onclick}
                marginPagesDisplayed={4}
                pageRangeDisplayed={4}
                pageCount={pagecount}
                previousLabel="< previous"
                containerClassName={'pagination'}
                pageClassName={'page-item'}
                pageLinkClassName= {'page-link'}
                nextClassName= {'page-item'}
                nextLinkClassName =  {'page-link'}
                previousClassName= {'page-item'}
                previousLinkClassName =  {'page-link'}
                breakClassName =  {'page-item'}
                breakLinkClassName = {'page-link'}
                activeClassName = {"active"}
                renderOnZeroPageCount={null}



      />

    </div>
  )
}

export default Pagination
