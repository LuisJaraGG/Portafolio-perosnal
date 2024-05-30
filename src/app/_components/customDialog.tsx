import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog";
import React from "react";

type DialogProps = {
    ContentComponent: React.ReactElement;
    TriggerComponent: React.ReactElement;
};

export function CustomDialog({ ContentComponent, TriggerComponent, ...props }: DialogProps) {
    return (
        <Dialog>
            <DialogTrigger asChild>
                {TriggerComponent}
            </DialogTrigger>
            <DialogContent>
                {ContentComponent}
            </DialogContent>
        </Dialog>
    );
}
