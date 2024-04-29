export default function Teaching({ shouldShow }: { shouldShow: boolean }) {
    return (
        shouldShow && (
            <div className='py-3 text-sm'>
                <p>TEACHING</p>
            </div>
        )
    );
}
