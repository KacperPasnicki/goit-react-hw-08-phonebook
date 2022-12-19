import { useDispatch } from "react-redux"

import PropTypes from 'prop-types';
import {deleteContacts} from 'redux/operations'
import css from './ContactItem.module.css'


export const ContactsItem = ({contact}) => {
const dispatch = useDispatch()
    const removeContacts = () =>dispatch(deleteContacts(contact.id))

return (
    <>
    <span className={css.contact}>{contact.name} : {contact.number}</span>
    <button type="button" className={css.btn}
             onClick={removeContacts}>
              Remove Contact

             </button>
    </>
)

}

ContactsItem.propTypes = {
    contact: PropTypes.object.isRequired,
    
      }