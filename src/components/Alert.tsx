import { ReactNode } from "react";

interface Props {
    children: ReactNode
}

function Alert({children}: Props) {
    return (
        <button className="alert alert-primary">{children}</button>
    )
}

export default Alert;