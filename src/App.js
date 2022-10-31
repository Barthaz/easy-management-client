import React, { useEffect } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { FiSettings } from 'react-icons/fi';
import { TooltipComponent } from '@syncfusion/ej2-react-popups';

import { Navbar, Footer, Sidebar, ThemeSettings } from './components'; 
import { Analytics, Calendar, Home, Kanban, Logs, Team, Login, Register, Projects }  from './pages';
import './App.css';

import { useStateContext } from './contexts/ContextProvider';

const App = () => {
    const { activeMenu } = useStateContext();

    return (
        <div>
            <BrowserRouter>
                <div className="flex relative dark:bg-main-dark-bg">
                    <div className="fixed right-4 bottom-4" style={{ zIndex: '1000' }}>
                        <TooltipComponent content="Settings" position="top">
                            <button type="button" className="text-3xl p-3 hover:drop-shadow-xl hover:bg-light-gray text-white" style={{ background: 'blue', borderRadius: '50%' }}>
                                <FiSettings />
                            </button>
                        </TooltipComponent>
                    </div>
                    {activeMenu ? (
                        <div className="w-72 fixed sidebar dark:bg-secondary-dark-bg bg-white">
                            <Sidebar />
                        </div>
                    ) : (
                        <div className="w-0 dark:bg-secondar-dark-bg">
                            <Sidebar />
                        </div>
                    )}
                    <div className={`dark:bg-main-bg bg-main-bg min-h-screen w-full ${activeMenu ? 'md:ml-72' : 'flex-2'}`}>

                        <div className="fixed md:static bg-main-bg dark:bg-main-dark-bg navbar w-full">
                            <Navbar />
                        </div>
                    
                        <div>
                            <Routes>
                                <Route path="/" element={<Home />} />
                                <Route path="/home" element={<Home />} />
                                
                                <Route path="/login" element={<Login />} />
                                <Route path="/register" element={<Register />} />
                                
                                <Route path="/projects" element={<Projects />} />
                                <Route path="/team" element={<Team />} />
                                <Route path="/calendar" element={<Calendar />} />
                                <Route path="/kanban" element={<Kanban />} />
                            
                                <Route path="/analytics" element={<Analytics />} />
                                <Route path="/logs" element={<Logs />} />
                            </Routes>
                        </div>
                        
                    </div>
                </div>
            </BrowserRouter>
        </div>
    )
}

export default App