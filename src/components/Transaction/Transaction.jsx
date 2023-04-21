import React from "react";
import { Card } from "react-bootstrap";

export const Transaction = (props) => {
    const name = props.name
    const category = props.category
    const price = props.price
    const date = props.date
    return (
        <div>
            <Card className="mt-3" border="light" style={{ width: '15rem' }}>
                <Card.Header>{name}</Card.Header>
                <Card.Body>
                    <Card.Title>{category}</Card.Title>
                    <Card.Text>
                        ₹{price}
                    </Card.Text>
                </Card.Body>
                <Card.Footer>
                    {date}
                </Card.Footer>
            </Card>

        </div>
    )
}