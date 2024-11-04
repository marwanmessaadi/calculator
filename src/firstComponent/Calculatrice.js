import React, { useState } from "react";
import './Main.css';

function La_base() {
    const [value, setValue] = useState(""); 

   
    const handleClick = (val) => {
       
        if (val === "C") {
            setValue("");
        } 
     
        else 
        if (val === "=") {
            try {
               
                setValue(eval(value).toString());
            } catch (error) {
                setValue("Error");
            }
        } 
      
        else {
            setValue(value + val);
        }
    };

    return (
        <>
        <h1>Calculatrice</h1>
            <div className="container">
                <input type="text" value={value} readOnly placeholder="operator" />
                <div className="container-grid">
                    {[1, 2, 3, "/", 4, 5, 6, "*", 7, 8, 9, "-", "+", 0, "=", "C"].map((item) => (
                        <span key={item} onClick={() => handleClick(item.toString())}>
                            {item}
                        </span>
                    ))}
                </div>
            </div>
        </>
    );
}

export default La_base;
