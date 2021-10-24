import React, {useState, useEffect} from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { DeleteAllAction, ResetAllAction, searchAction, SelectAllAction } from '../redux/actions/ContactAction'
import Contact from './Contact'
import { BsSearch } from "react-icons/bs";


const Contacts = () => {
    const [sort, setsort] = useState("active")
    const [selectAll, setselectAll] = useState(false)
    const {contacts, selectAllId} = useSelector(state =>  state.contactReducer)
    const [input, setInput] = useState("")
    //useDispatch
    const dispatch = useDispatch()
    //useEffect
    useEffect(() => {
        if(selectAll){
       dispatch(SelectAllAction(contacts.map((contact) => contact.id)))
        }else{
            dispatch(ResetAllAction())
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [selectAll])
    const onhandleChange = (e) => {
        e.preventDefault()
        setInput(e.target.value)
    }

    //console.log(selectAllId)

    //input Search
    const searchhandle = (e) => {
        e.preventDefault()
        dispatch(searchAction(input))
    }
     
    return (
        <div>
       
        <div className="input__seracr mb-3">
        {
            selectAllId.length > 0 ? <button className="btn btn-outline-ligthDanger input__btnd" onClick={() => dispatch(DeleteAllAction(contacts))}>Delete All</button> : null
        }
       
        
            
            {/* btn */}
                <div className="btn-group" role="group" aria-label="Basic example">
                    <button type="button" className="btn  btn-outline-lightDark" onClick={() => setsort("active")}>Active</button>
                    <button type="button" className="btn btn-outline-lightDark" onClick={() => setsort("completed")}>Completed</button>
                    <button type="button" className="btn  btn-outline-lightDark" onClick={() => setsort("all")}>ALL </button>
                </div>
            {/* btn */}

            <form onSubmit={searchhandle}>
        
            <div className="input-group mt-Search">
            <input 
            type="text" 
            className="form-control bg-light border-0  form-gg" 
            value = {input}
            onChange = {onhandleChange}
            placeholder="Search any name..."

            />
            <button className="btn btn-outline-secondary searc__btn" type="submit" id="button-addon2"><BsSearch/></button>
        </div>
        
        </form>

        </div>
        
            <table className="table shadow">
                <thead>
                    <tr>
                        <th>
                       
                            <div className="custom-control custom-checkbox">
                                    <input onClick={() => setselectAll(!selectAll)} type="checkbox" id="firts" value={selectAll}/>
                                    <label  htmlFor="firts" className="custom-control-label"></label>
                                    
                            </div>
                        </th>
                        <th>
                        Toggle
                        </th>
                        <th>Name</th>
                        <th>Phone</th>
                        <th>Email</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                {/* active */}
                    { contacts.length > 0 && sort === "active"  ? contacts.map(contact => {
                        return (
                            contact.completed === false &&
                        <Contact contact={contact} key={contact.id} selectAll={selectAll}/>
                        )
                    }) :null
                    
                    
                    
                    }
                {/* active */}
                 {/* complete */}
                 { contacts.length > 0 && sort === "completed"  ? contacts.map(contact => {
                        return (
                            contact.completed === true &&
                        <Contact contact={contact} key={contact.id} selectAll={selectAll}/>
                        )
                    }) : null
                    
                    
                    
                    }
                {/* complete */}
                {/* All */}
                { contacts.length > 0 && sort === "all"  ? contacts.map(contact => {
                        return (
                             
                        <Contact contact={contact} key={contact.id} selectAll={selectAll}/>
                        )
                    }) : null
                    
                    
                    
                    }
                {/* All */}
                     
                </tbody>
            </table>
        </div>
    )
}

export default Contacts
