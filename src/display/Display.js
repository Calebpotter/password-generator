import './Display.css'
export const Display = ({password}) =>{
    return(
        <>
            <display className = "displayColor">
                {password}
            </display>
            
        </>
    )
}