import { useState } from 'react'

function Input({ btnClick }) {

    const [noteItem, setNoteItem] = useState('')

    return (
        <div className='center'>
            <input type="text" placeholder='Add Item.....' onChange={(e) => {setNoteItem(e.target.value) }} value={noteItem} />
            <button onClick={() => {
               if(noteItem == '') {
                    alert('Please Enter an Item')
               }else{
                btnClick(noteItem)
               }
                
                setNoteItem('')}
                
                } >Add Note</button>         
        </div>
    )
}

export default Input;
