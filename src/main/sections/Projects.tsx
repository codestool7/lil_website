export default function Projects({ shouldShow }: { shouldShow: boolean }) {
    return (
        shouldShow && (
            <div className='py-3 text-sm'>
                <p>PROJECTS</p>
            </div>
        )
    );
}
