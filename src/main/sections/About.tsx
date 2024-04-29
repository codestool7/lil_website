import { about } from '../../constants/constants';

export default function About({ shouldShow }: { shouldShow: boolean }) {
    return (
        shouldShow && (
            <div className='flex py-3 text-sm'>
                <img
                    src='/src/assets/lil.png'
                    className='h-1/4 w-1/4'
                />
                <div className='flex flex-col gap-5'>
                    <p className='m-2 ml-5'>{about}</p>
                    <p className='m-2 ml-5'>{about}</p>
                    <p className='m-2 ml-5'>{about}</p>
                </div>
            </div>
        )
    );
}
