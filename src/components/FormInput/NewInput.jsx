import React from "react"
import { FormInput } from "./FormInput"
export const NewInput = (props) => {

    const getSubmitData = (expenseData) => {
        props.onSubmitNewData(expenseData)

    }
    return (
        <div>
            <FormInput onSubmitForm={getSubmitData} />
        </div>
    )
}