import { Route, Routes, Navigate } from 'react-router-dom';

import { lazy } from 'react'
import './App.css'

const HomePage = lazy(() => import('../pages/Home/Home'));
const TweetsPage = lazy(() => import('../pages/Tweets/Tweets'))

function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path='tweets' element={<TweetsPage />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </>
  )
}

export default App
