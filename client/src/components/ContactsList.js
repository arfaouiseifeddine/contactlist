import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getContacts } from '../redux/actions/contactActions';
import ContactsCard from './ContactsCard';


const ContactsList = () => {
    const dispatch = useDispatch();
    useEffect(()=>{
        dispatch(getContacts());
    }, []);
    const contacts = useSelector(state => state.contacts.contacts)
    return (
        <div style={{display:"flex", flexWrap:"wrap" , margin:"20 px" }}> 
            {
               contacts && contacts.map((contact) => (
                    <ContactsCard key= {contact._id} contact ={contact}/>
                ))
            }
        </div>
    )


}

export default ContactsList;