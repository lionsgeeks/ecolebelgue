
export default function InstagramSection() {



    return (
        <section className="border-t  border-gray-200  py-24 md:py-32">
            <div className="mx-auto max-w-7xl px-4 md:px-6 lg:px-8">
                <a href="https://www.instagram.com/ecolesbelgesaumaroc/" target="_blank" rel="noopener noreferrer">

                    <iframe
                        scrolling="no"
                        aria-label="Instagram"
                        className="w-full"
                        height="1054"
                        src="https://www.instagram.com/ecolesbelgesaumaroc/embed"
                        style={{ pointerEvents: 'none' }}>
                    </iframe>
                </a>
            </div>
        </section>
    );
}
