import React from 'react'
import { BrowserRouter, Route, Routes} from 'react-router-dom';
import AppRouter from './router/AppRouter';
const App = () => {
  return (
    <div>
     <AppRouter/>
    </div>
  )
}

export default App