import React from 'react';
import Header from './components/header/Index';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Video from './pages/Video';
function App() {
    return (
        <div className='bg-gray-900'>
            <Header />
            <div className='h-[90vh] overflow-y-scroll'>
                <Router>
                    <Routes>
                        <Route index path='/' element={<Home />} />
                        <Route path='/:id' element={<Video/>}></Route>
                        <Route path='*'></Route>
                    </Routes>
                </Router>
            </div>
        </div>
    );
}

export default App;
