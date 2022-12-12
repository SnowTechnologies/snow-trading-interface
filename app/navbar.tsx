import Link from "next/link";

export default function Navbar() {
    return (
        <>
            <div className="block bg-background py-3.5">
                <div className="px-6 flex flex-wrap justify-between items-center mx-auto">
                    <Link href="/" className="">
                        <span className="pl-2 self-center text-3xl text-accent font-semibold whitespace-nowrap">
                            {"Snow Trading"}
                        </span>
                    </Link>
                </div>
            </div>
        </>
    );
}
