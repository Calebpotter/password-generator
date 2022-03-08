import './Button.css'
export const Button = ({buttonName}) => { 
    return (
        <>

            <button className = "buttonColor" >
                {buttonName}
            </button>
        </>
    )
}