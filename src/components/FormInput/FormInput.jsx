import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";

export const FormInput = (props) => {
    const [name, setName] = useState('')
    const [category, setCategory] = useState('')
    const [price, setPrice] = useState('')
    const [date, setDate] = useState('')

    const nameHandler = (e) => {
        setName(e.target.value)
    }
    const categoryHandler = (e) => {
        setCategory(e.target.value)
    }
    const priceHandler = (e) => {
        setPrice(e.target.value)
    }
    const dateHandler = (e) => {
        setDate(e.target.value)
    }
    const formHandler = (e) => {
        e.preventDefault()
        const expenseData = {
            name: name,
            category: category,
            price: price,
            date: date
        }
        console.log("ExpenseData:", expenseData)
        props.onSubmitForm(expenseData)
        setName('')
        setCategory('')
        setPrice('')
        setDate('')
    }
    return (
        <div>
            <Form onSubmit={formHandler}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Expense Name</Form.Label>
                    <Form.Control type="text" placeholder="Expense Name" value={name} onInput={nameHandler} />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formbasicSelect">
                    <Form.Label>Expense Category</Form.Label>
                    <Form.Select value={category} onInput={categoryHandler}>
                        <option>Select an option</option>
                        <option>Entertainment</option>
                        <option>Food</option>
                        <option>Shopping</option>
                    </Form.Select>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPrice">
                    <Form.Label>Expense Price</Form.Label>
                    <Form.Control type="text" placeholder="Expense Price" value={price} onInput={priceHandler} />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicDate">
                    <Form.Label>Date:</Form.Label>
                    <Form.Control type="date" value={date} onInput={dateHandler} />
                </Form.Group>
                <Button variant="primary" type="submit">
                    Add Expense
                </Button>
            </Form>
        </div>
    )
}


