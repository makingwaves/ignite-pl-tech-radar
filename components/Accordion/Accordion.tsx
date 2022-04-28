import {FC, ReactNode} from "react";

export type AccordionProps = {
    children: ReactNode;
}

export const Accordion = ({ children }: AccordionProps) => {

    return (
        {children}
    )
}