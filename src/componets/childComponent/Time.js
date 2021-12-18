import React, { useState } from "react";
import './Time.css'
import { rip, time } from '../../utils/ArrayTest'
import { useSelector } from "react-redux";

function Time() {
    const timeRedux = useSelector(state => state.timeReducer)
    const ripRedux = useSelector(state => state.ripReducer)
    const [valore, setValore] = useState([{}])

    React.useEffect(() => {

        if (timeRedux && !ripRedux) {
            setValore(time)
        }
        else {
            setValore(rip)
        }


    }, [timeRedux, ripRedux])


    return (
        <div className="time">
            <label>tempo / numero</label>
            <select>
                <option value="0"></option>
                {
                    valore.map((item, index) => {
                        return (
                            <option value={item.descrizione}>{item.descrizione}</option>
                        )
                    })
                }

            </select>
        </div>
    )
}

export default Time