import "./globals.css";

import Navbar from "@app/navbar";

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en">
            <head />
            <body className="bg-background h-vh">
                <Navbar />

                {children}
            </body>
        </html>
    );
}
