import { Link } from '@inertiajs/react';
import { ChevronDown, Menu } from 'lucide-react';
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import {
    Sheet,
    SheetContent,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from '@/components/ui/sheet';

interface NavItem {
    label: string;
    href?: string;
    items?: { label: string; href: string }[];
}

export default function Navbar() {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const navItems: NavItem[] = [
        { label: 'Accueil', href: '/' },
        { label: 'L’excellence belge', href: '/lexcellence-belge' },
        {
            label: 'Scolarité',
            items: [
                { label: 'Maternelle', href: '/maternelle' },
                {
                    label: 'Parcours scolaire (2-18 ans)',
                    href: '/parcours-scolaire-2-18-ans',
                },
            ],
        },
        {
            label: 'Admissions',
            items: [
                { label: "Conditions de L'admissions", href: '/admissions/conditions' },
                { label: "Demande de L'admissions", href: '/admissions/demande' },
                { label: 'Frais de scolarité', href: '/admissions/frais' },
            ],
        },
        {
            label: 'Nos Ecoles',
            items: [
                { label: 'Casablanca', href: '/ecoles/casablanca' },
                { label: 'Rabat', href: '/ecoles/rabat' },
            ],
        },
        { label: 'Contact', href: '/contact' },
        { label: 'FAQ', href: '/faq' },
    ];

    return (
        <nav className="fixed top-0 z-50 w-full border-b border-belgBlack/20 bg-white shadow-sm">
            <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-4 md:px-6 lg:px-8">
                {/* Logo */}
                <Link href="/" className="flex items-center space-x-3">
                    <div className="flex items-center space-x-2">
                        {/* EBM Logo with Belgian colors */}
                        <div className="flex items-center space-x-1">
                            {/* <div className="flex h-10 w-10 items-center justify-center rounded-full bg-belgBlack text-lg font-bold text-white">
                                E
                            </div>
                            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-belgYellow text-lg font-bold text-belgBlack">
                                B
                            </div>
                            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-belgRed text-lg font-bold text-white">
                                M
                            </div> */}
                            <img src="/logo.png" alt="EBM Logo" className=" w-40" />
                        </div>
                        {/* <div className="hidden flex-col sm:flex">
                            <span className="text-sm font-semibold text-belgBlack">
                                ÉCOLE BELGE
                            </span>
                            <span className="text-xs text-belgBlack/70">
                                Maroc
                            </span>
                        </div> */}
                    </div>
                </Link>

                {/* Desktop Navigation */}
                <div className="hidden items-center space-x-1 md:flex">
                    {navItems.map((item) => {
                        if (item.items && item.items.length > 0) {
                            return (
                                <DropdownMenu key={item.label}>
                                    <DropdownMenuTrigger asChild>
                                        <Button
                                            variant="ghost"
                                            className="relative px-4 py-2 text-sm font-medium text-belgBlack transition-colors hover:text-belgBlack/80 hover:bg-belgYellow/10"
                                        >
                                            {item.label}
                                            <ChevronDown className="ml-1 h-4 w-4" />
                                        </Button>
                                    </DropdownMenuTrigger>
                                    <DropdownMenuContent align="start">
                                        {item.items.map((subItem) => (
                                            <DropdownMenuItem
                                                key={subItem.href}
                                                asChild
                                            >
                                                <Link href={subItem.href}>
                                                    {subItem.label}
                                                </Link>
                                            </DropdownMenuItem>
                                        ))}
                                    </DropdownMenuContent>
                                </DropdownMenu>
                            );
                        }

                        return (
                            <Link
                                key={item.label}
                                href={item.href || '#'}
                                className="group relative px-4 py-2 text-sm font-medium text-belgBlack transition-colors hover:text-belgBlack/80 hover:bg-belgYellow/10"
                            >
                                {item.label}
                                <span className="absolute bottom-0 left-0 h-0.5 w-0 bg-belgYellow transition-all group-hover:w-full"></span>
                            </Link>
                        );
                    })}
                </div>

                {/* Mobile Menu Button */}
                <div className="md:hidden">
                    <Sheet
                        open={isMobileMenuOpen}
                        onOpenChange={setIsMobileMenuOpen}
                    >
                        <SheetTrigger asChild>
                            <Button
                                variant="ghost"
                                size="icon"
                                className="h-10 w-10 text-belgBlack"
                            >
                                <Menu className="h-6 w-6" />
                            </Button>
                        </SheetTrigger>
                        <SheetContent
                            side="right"
                            className="w-[300px] bg-white"
                        >
                            <SheetHeader>
                                <SheetTitle className="flex items-center space-x-2 text-left">
                                    <img
                                        src="/logo.png"
                                        alt="EBM Logo"
                                        className="h-10 w-auto"
                                    />
                                    <span className="text-belgBlack">
                                        Menu
                                    </span>
                                </SheetTitle>
                            </SheetHeader>
                            <div className="mt-8 flex flex-col space-y-2">
                                {navItems.map((item) => (
                                    <div key={item.label}>
                                        {item.items && item.items.length > 0 ? (
                                            <div className="space-y-1">
                                                <div className="px-4 py-2 text-base font-semibold text-belgBlack">
                                                    {item.label}
                                                </div>
                                                {item.items.map((subItem) => (
                                                    <Link
                                                        key={subItem.href}
                                                        href={subItem.href}
                                                        onClick={() =>
                                                            setIsMobileMenuOpen(
                                                                false,
                                                            )
                                                        }
                                                        className="block px-6 py-2 text-sm text-belgBlack/80 transition-colors hover:bg-belgYellow/10 hover:text-belgBlack"
                                                    >
                                                        {subItem.label}
                                                    </Link>
                                                ))}
                                            </div>
                                        ) : (
                                            <Link
                                                href={item.href || '#'}
                                                onClick={() =>
                                                    setIsMobileMenuOpen(false)
                                                }
                                                className="block px-4 py-3 text-base font-medium text-belgBlack transition-colors hover:bg-belgYellow/10 hover:text-belgBlack"
                                            >
                                                {item.label}
                                            </Link>
                                        )}
                                    </div>
                                ))}
                            </div>
                        </SheetContent>
                    </Sheet>
                </div>
            </div>

            {/* Belgian Flag Colors Stripe */}
            <div className="flex h-1 w-full">
                <div className="h-full flex-1 bg-belgBlack"></div>
                <div className="h-full flex-1 bg-belgYellow"></div>
                <div className="h-full flex-1 bg-belgRed"></div>
            </div>
        </nav>
    );
}
