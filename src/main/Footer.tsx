import { FaInstagram } from 'react-icons/fa';
import { copywrite } from '../constants/constants';

export default function Footer() {
    return (
        <footer className='m-3 flex flex-col'>
            <hr className='border-1 mt-3 w-full border-gray-300' />
            <div className='mb-3 mt-7'>
                <span className='text-sm text-gray-800'>{copywrite}</span>
                <a
                    href='https://www.instagram.com/lilgellman/'
                    className='float-right text-2xl text-gray-600'
                    target='_blank'
                >
                    <FaInstagram />
                </a>
            </div>
            <hr className='border-1 mt-3 w-full border-gray-300' />
        </footer>
    );
}
