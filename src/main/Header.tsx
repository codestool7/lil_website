import { name, subhead } from '../constants/constants';

export default function Header({
    shownSection,
    onSectionSelect,
}: {
    shownSection: string;
    onSectionSelect: Function;
}) {
    return (
        <header className='m-3 flex flex-col items-center font-display'>
            <h1
                className='cursor-pointer text-xl font-semibold tracking-widest text-gray-800'
                onClick={() => onSectionSelect('home')}
            >
                {name}
            </h1>
            <p className='mb-8 mt-4 text-sm font-medium tracking-wider text-gray-400'>
                {subhead}
            </p>
            <div className='flex gap-8'>
                <hr className='mt-3 w-full border border-gray-300' />
                <nav className='flex gap-5 text-sm font-medium tracking-wider'>
                    <a
                        className={
                            shownSection == 'about'
                                ? 'cursor-pointer border-b-2 border-gray-300 text-gray-800'
                                : 'cursor-pointer border-b-2 border-white text-gray-400 hover:border-gray-300 hover:text-gray-800'
                        }
                        onClick={() => onSectionSelect('about')}
                    >
                        ABOUT
                    </a>
                    <a
                        className={
                            shownSection == 'editing'
                                ? 'cursor-pointer border-b-2 border-gray-300 text-gray-800'
                                : 'cursor-pointer border-b-2 border-white text-gray-400 hover:border-gray-300 hover:text-gray-800'
                        }
                        onClick={() => onSectionSelect('editing')}
                    >
                        EDITING
                    </a>
                    <a
                        className={
                            shownSection == 'teaching'
                                ? 'cursor-pointer border-b-2 border-gray-300 text-gray-800'
                                : 'cursor-pointer border-b-2 border-white text-gray-400 hover:border-gray-300 hover:text-gray-800'
                        }
                        onClick={() => onSectionSelect('teaching')}
                    >
                        TEACHING
                    </a>
                    <a
                        className={
                            shownSection == 'comedy'
                                ? 'cursor-pointer border-b-2 border-gray-300 text-gray-800'
                                : 'cursor-pointer border-b-2 border-white text-gray-400 hover:border-gray-300 hover:text-gray-800'
                        }
                        onClick={() => onSectionSelect('comedy')}
                    >
                        COMEDY
                    </a>
                    <a
                        className={
                            shownSection == 'projects'
                                ? 'cursor-pointer border-b-2 border-gray-300 text-gray-800'
                                : 'cursor-pointer border-b-2 border-white text-gray-400 hover:border-gray-300 hover:text-gray-800'
                        }
                        onClick={() => onSectionSelect('projects')}
                    >
                        PROJECTS
                    </a>
                    <a
                        className={
                            shownSection == 'contact'
                                ? 'cursor-pointer border-b-2 border-gray-300 text-gray-800'
                                : 'cursor-pointer border-b-2 border-white text-gray-400 hover:border-gray-300 hover:text-gray-800'
                        }
                        onClick={() => onSectionSelect('contact')}
                    >
                        CONTACT
                    </a>
                </nav>
                <hr className='mt-3 w-full border border-gray-300' />
            </div>
        </header>
    );
}
