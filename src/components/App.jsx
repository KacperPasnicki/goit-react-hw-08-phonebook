import React, { useEffect, lazy} from 'react';
import { Routes, Route } from 'react-router-dom';
// import { ContactsList } from './ContactsList/ContactsList';
// import { Form } from "./Form/Form";

// import { Filter } from './Filter';
import { Navbar } from './Navbar/Navbar';
import { useDispatch, useSelector } from 'react-redux';

 import {getIsLoading, getError} from 'redux/selectors'
import { fetchContacts } from 'redux/operations';
import { PrivateRoute } from './PrivateRoute';
import { RestrictedRoute } from './RestrictedRoute';
import { useAuth } from 'hooks';
import { Layout } from './Layout';

const StartPage = lazy(() => import('pages/StartPage/StartPage'));
const Register = lazy(()=> import('pages/Register/Register'))
const Login = lazy(()=> import('pages/Login/Login'))
const Contacts = lazy (()=> import('pages/Contacts/Contacts'))

export const App =() => {
  const dispatch = useDispatch()
  const { isRefreshing } = useAuth();
  // const isLoading = useSelector(getIsLoading);
  // const error = useSelector(getError);
  // const {items, isLoading, filter, error} = useSelector(getContact)

useEffect(()=> {
dispatch(fetchContacts())
}, [dispatch]);


    
  
  return isRefreshing ? (
    <b>Refreshing user...</b>
  ) :(
   <Routes>
      <Route path='/' element={<Layout/>}>
        <Route index element={<StartPage/>}/>
        <Route path="/goit-react-hw-08-phonebook" element={<StartPage/>}/>
        <Route path='/Register' 
        element={<RestrictedRoute redirectTo='/contacts' component={<Register/>}/>
        }
        />
        <Route path='/Login' 
        element={<RestrictedRoute redirectTo='/contacts' component={<Login/> }/>
      }
      />

<Route path='/Contacts' 
element={<PrivateRoute redirectTo='/login' component={<Contacts/>}/>}/>

      </Route>
      


   </Routes>
    );
  
}


{/* <div className='phonebook'>
<Navbar/>
<h1>Phonebook</h1>
<Form />

<h2>Contacts:</h2>
<Filter />
{isLoading && !error && <b>Request in progress...</b>}
<ContactsList

/>
</div> */}