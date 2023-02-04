import React from 'react';

function List (props){
  return(
    <>
      <div className='listbox'> 
          {props.item}
      </div>
    </>
  )
}

export default List;