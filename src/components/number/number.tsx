import "./number.css"

export interface INumberProps {
    number: number;
}

const Number: React.FC<INumberProps> = (props) => {
    return(
        <div className="number" >
            {props.number}
        </div>
    )
}

export default Number;