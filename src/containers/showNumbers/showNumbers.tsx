import { useState } from "react";
import Number from "../../components/number/number";
import "./showNumbers.css";


const ShowNumbers: React.FC = () => {

    const [numbers, setNumbers] = useState([1, 2, 3, 4, 5])


    return (
        <div>
            {numbers.map(number => {
                return(
                    <Number number={number} />
                )
            })}
        </div>
    )
}

export default ShowNumbers;