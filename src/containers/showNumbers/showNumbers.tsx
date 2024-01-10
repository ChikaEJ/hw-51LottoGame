import { useState } from "react";
import Number from "../../components/number/number";
import "./showNumbers.css";


const ShowNumbers: React.FC = () => {

    let [numbers, setNumbers] = useState<number[]>([0, 0, 0, 0, 0])

    const randomInteger = (min: number, max: number) => {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }
    const newRanNumber = () => randomInteger(1, 36);

    const getNewNumbers = () => {
        const newNumbers: number[] = [];
        for (let i = 0; i < numbers.length; i++) {
            do {
                let num = newRanNumber();
                if (!newNumbers.includes(num)) {
                    newNumbers[i] = num;
                    break;
                }
            } while (true)
        }
        newNumbers.sort((a, b) => a - b);
        setNumbers(newNumbers);
    }
    return (
        <div className="lotto">
            <button onClick={getNewNumbers}>New Numbers</button>
            <div className="showNumbers">
                {numbers.map((number, key) => {
                    return (
                        <Number number={number} key={key} />
                    )
                })}
            </div>
        </div>
    )
}

export default ShowNumbers;