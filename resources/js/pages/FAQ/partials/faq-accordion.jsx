import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import {
    Collapsible,
    CollapsibleContent,
    CollapsibleTrigger,
} from '@/components/ui/collapsible';

export default function FAQAccordion({ items }) {
    return (
        <div className="space-y-4">
            {items.map((item, index) => {
                const [isOpen, setIsOpen] = useState(false);
                return (
                    <Collapsible
                        key={index}
                        open={isOpen}
                        onOpenChange={setIsOpen}
                    >
                        <div className="overflow-hidden rounded-xl border-2 border-gray-200 bg-white transition-all hover:border-belgYellow/50 hover:shadow-lg">
                            <CollapsibleTrigger className="flex w-full items-center justify-between p-6 text-left transition-colors hover:bg-gray-50">
                                <span className="flex-1 text-lg font-semibold text-belgBlack">
                                    {item.question}
                                </span>
                                <ChevronDown
                                    className={`ml-4 h-5 w-5 shrink-0 text-belgBlack transition-transform duration-200 ${
                                        isOpen ? 'rotate-180' : ''
                                    }`}
                                />
                            </CollapsibleTrigger>
                            <CollapsibleContent className="overflow-hidden data-[state=closed]:animate-collapsible-up data-[state=open]:animate-collapsible-down">
                                <div className="border-t border-gray-100 bg-gray-50/50 p-6">
                                    <div
                                        className="prose prose-sm max-w-none text-gray-700"
                                        dangerouslySetInnerHTML={{
                                            __html: item.answer,
                                        }}
                                    />
                                </div>
                            </CollapsibleContent>
                        </div>
                    </Collapsible>
                );
            })}
        </div>
    );
}

