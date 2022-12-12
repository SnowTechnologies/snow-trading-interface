import Link from "next/link";

export default function SavedTickerBar() {
    const tickerList = ["BTC-PERP", "ETH-PERP"];

    const tickers = tickerList.map((ticker) => {
        return (
            <Link
                key={ticker}
                href={`/${ticker}`}
                className="px-4 py-2 hover:bg-white/10"
            >
                <span className="text-base text-gray font-normal">
                    {ticker}
                </span>
            </Link>
        );
    });

    return (
        <>
            <div className="flex bg-background my-1">
                <div className="px-6 py-2">{tickers}</div>
            </div>
        </>
    );
}
