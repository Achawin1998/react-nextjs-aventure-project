'use client'
 import { Route , Switch} from 'wouter'
 import { Navbar } from "./components/Navbar";
 import HomePage from './pages/HomePage';
 import Heroes from './pages/Heroes';
 import HeoresDetail from './pages/HeoresDetail';

export default function Home() {
  return (
    <div>
   
        <Navbar/>
        <Switch>
            <Route path='/' component={HomePage} />
            <Route path='/heroes' component={Heroes} />
            <Route path='/heroes/:heroesName' component={HeoresDetail} />
        </Switch>
 
      
 
          
     
    </div>
  );
}
