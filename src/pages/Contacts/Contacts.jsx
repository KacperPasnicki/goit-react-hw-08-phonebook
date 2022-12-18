import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Helmet } from 'react-helmet';
import { ContactsList } from 'components/ContactsList/ContactsList';
import { Form } from "components/Form/Form";

import { Filter } from 'components/Filter';
import { Navbar } from 'components/Navbar/Navbar';


 import {getIsLoading, getError} from 'redux/selectors'
import { fetchContacts } from 'redux/operations';

const Contacts = () => {
    const dispatch = useDispatch()
    const isLoading = useSelector(getIsLoading);
    const error = useSelector(getError);

    useEffect(()=> {
        dispatch(fetchContacts())
        }, [dispatch]);
  

  return (
    
      
      <div className='phonebook'>
<Navbar/>
<h1>Phonebook</h1>
<Form />

<h2>Contacts:</h2>
<Filter />
{isLoading && !error && <b>Request in progress...</b>}
<ContactsList/>
</div>
   
  );
}
 export default Contacts