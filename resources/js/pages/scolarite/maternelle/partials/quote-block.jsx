export default function QuoteBlock({ text }) {
    return (
        <div className="my-8 rounded-2xl border-l-4 border-belgYellow bg-belgYellow/10 p-8 shadow-md">
            <blockquote className="m-0 text-center text-lg font-semibold italic text-belgBlack md:text-xl">
                {text}
            </blockquote>
        </div>
    );
}

