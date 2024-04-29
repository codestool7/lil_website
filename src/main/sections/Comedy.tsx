export default function Comedy({ shouldShow }: { shouldShow: boolean }) {
    return (
        shouldShow && (
            <div className='flex justify-center py-3 text-sm'>
                <img
                    src='/src/assets/comedy.jpg'
                    className='h-3/4 w-3/4'
                />
            </div>
        )
    );
}
