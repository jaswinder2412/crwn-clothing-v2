import {  useEffect } from 'react';
import { useDispatch } from 'react-redux';
import {
  onAuthStateChangedListner,
  createUserDocumentFromAuth,
} from './utils/firebase/firebase.utils';
import { createAction } from './utils/reducers/reducers';
import {Routes, Route} from 'react-router-dom';
import Home from './routes/home/home.component';
import Navigation from './routes/navigation/navigation.component';
import SignIn from './routes/authentication/authentication.component';
import Shop from './routes/shop/shop.component';
import Checkout from './routes/checkout/checkout.component';




import { setCurrentUser } from './store/user/user.action';


function App() {

  console.log("ffff")

  const dispatch = useDispatch()
 
  useEffect(() => {
    const unsubscribe = onAuthStateChangedListner((user) => {
      if (user) {
        createUserDocumentFromAuth(user);
      }
      
      dispatch(setCurrentUser(user));
    });
   
    return unsubscribe;
  }, [dispatch]);

  return (


    
    <Routes>
      <Route path='/' element={<Navigation/>} >
        <Route index  element={  <Home/> } />
        <Route path='shop/*'  element={   <Shop /> } />
        <Route path='auth'  element={   <SignIn/> } />
        <Route path='checkout'  element={   <Checkout/> } />
      </Route>
    </Routes>
   
  );
}
 
export default App;
