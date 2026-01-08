import { type ReactNode } from 'react';
import Navbar from '@/components/navbar';

interface AppLayoutProps {
    children: ReactNode;
}

export default function AppLayout({ children }: AppLayoutProps) {
    return (
        <div className="min-h-screen bg-white">
            <Navbar />
            <main className="w-full pt-20">{children}</main>
        </div>
    );
}
