export default function Editing({ shouldShow }: { shouldShow: boolean }) {
    return (
        shouldShow && (
            <div className='py-3 text-sm'>
                <p>EDITING</p>
            </div>
        )
    );
}
