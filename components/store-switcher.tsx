"use client"

import { PopoverTrigger } from "@/components/ui/popover"
import { useStoreModal } from "@/hooks/user-store-modal";
import { useParams, useRouter } from "next/navigation";

type PopoverTriggerProps = React.ComponentPropsWithRef<typeof PopoverTrigger>

interface StoreSwitcherProps extends PopoverTriggerProps {
    items: Record<string, any>[];
}

export default function StoreSwitcher({
    className,
    items = [],
}: StoreSwitcherProps) {
    const storeModal = useStoreModal();
    const params = useParams();
    const router = useRouter();

    return (
        <div className="">StoreSwitcher</div>
    )
}