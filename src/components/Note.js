import React from 'react'

function Note( { text, id, remove } ) {
    return (
        <div className='item' onClick={()=> remove(id)}  >
           <li>{ text }</li> 
        </div>
    )
}

export default Note;
