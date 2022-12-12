import SavedTickerBar from "@app/futures/saved-ticker-bar";

export default function FuturesLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <section>
            <div className="w-screen bg-dark h-[1px] block"></div>

            <SavedTickerBar />

            <div className="w-screen bg-dark h-[1px] block"></div>

            {children}
        </section>
    );
}
