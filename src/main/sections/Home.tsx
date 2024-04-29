export default function Home({ shouldShow }: { shouldShow: boolean }) {
    return (
        shouldShow && (
            <div className='flex justify-center py-3 text-sm'>
                <img
                    src='/src/assets/trees.jpg'
                    className='h-2/3 w-2/3'
                />
            </div>
        )
    );
}
