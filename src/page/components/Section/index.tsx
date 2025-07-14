import { ReactNode } from "react"
import { LevelContext } from "../LevelContext"
import { useContext } from "react"
interface SectionProps {
    children: ReactNode[]
}
export default function Section({children}:SectionProps) {
    const level = useContext(LevelContext);        
    return(
        <section>
            <LevelContext.Provider value={level + 1}>
            {children}
            </LevelContext.Provider>
        </section>
    )
}