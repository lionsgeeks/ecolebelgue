import { type ReactNode } from 'react';
import Navbar from '@/components/navbar';
import Footer from '@/components/footer';

interface AppLayoutProps {
    children: ReactNode;
}

export default function AppLayout({ children }: AppLayoutProps) {
    return (
        <div className="flex min-h-screen flex-col bg-white">
            <Navbar />
            <main className="flex-1 w-full pt-20">{children}</main>
            <Footer />
        </div>
    );
}
