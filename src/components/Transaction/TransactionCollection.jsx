import React from "react";
import { Transaction } from "./Transaction";

export const TransactionCollection = (props) => {
    let appdata = props.data;
    return (
        <div>
            <div className="d-flex justify-content-around flex-wrap">
                {appdata.map((items) => {
                    return (
                        <Transaction name={items.name} category={items.category} price={items.price} date={(items.date)} />
                    )

                })}

            </div>
        </div>
    )
}