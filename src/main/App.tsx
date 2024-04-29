import { useState } from 'react';
import Footer from './Footer';
import Header from './Header';
import About from './sections/About';
import Comedy from './sections/Comedy';
import Contact from './sections/Contact';
import Editing from './sections/Editing';
import Home from './sections/Home';
import Projects from './sections/Projects';
import Teaching from './sections/Teaching';

export default function App() {
    const [shownSection, setShownSection] = useState<string>('home');

    function onSectionSelect(section: string) {
        setShownSection(section);
    }

    return (
        <div className='min-h-screen'>
            <div className='m-20 mx-40 flex flex-col border border-gray-300 bg-white p-20'>
                <Header
                    shownSection={shownSection}
                    onSectionSelect={onSectionSelect}
                />
                <div className='m-3'>
                    <Home shouldShow={shownSection == 'home'} />
                    <About shouldShow={shownSection == 'about'} />
                    <Editing shouldShow={shownSection == 'editing'} />
                    <Teaching shouldShow={shownSection == 'teaching'} />
                    <Comedy shouldShow={shownSection == 'comedy'} />
                    <Projects shouldShow={shownSection == 'projects'} />
                    <Contact shouldShow={shownSection == 'contact'} />
                </div>
                <Footer />
            </div>
        </div>
    );
}
