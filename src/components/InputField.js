import { useState } from "react";
import Input from "./Input";
import Note from "./Note";
function InputField() {

    const [item, setItem] = useState([]);

    const onAdd = (noteItem) => {
        setItem((prevItem) =>{ return [...prevItem, noteItem ]})
    }

    const onDelete = (id) => {
        setItem((prevItems) => {
            return prevItems.filter((item, index) => {
                return index !== id
            })
        })
    }

    return (
        <div className='inputField'>
            <Input btnClick={onAdd} />

            {item.map((toDoItem, index) => {
                return (
                <ul>
                    <Note
                        key={index}
                        id={index}
                        text={toDoItem}
                        remove={onDelete}
                    />
                </ul>
                )
            })}
            
        </div>
    )
}

export default InputField;
