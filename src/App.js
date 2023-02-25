//import logo from './logo.svg';
import { RouterProvider } from 'react-router-dom';
import './App.css';
import { routes } from './Routes/Routes/Routes';

function App() {
  return (
    <div className='w-full lg:w-11/12 mx-auto'>
      <RouterProvider router={routes}/>
    </div>
  );
}

export default App;
