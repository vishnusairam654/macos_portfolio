import React from 'react';
import { Navbar, Welcome, Dock, Home } from '#/components';
import { Finder, Resume, Terminal, Contact } from '#/windows';

import gsap from 'gsap';
import { Draggable } from 'gsap/Draggable';

gsap.registerPlugin(Draggable);


const App = () => {
    return (
        <main>
            <Navbar />
            <Welcome />
            <Dock />

            <Terminal />
            <Resume />
            <Finder />
            <Contact />

            <Home />
        </main>
    );
};

export default App;