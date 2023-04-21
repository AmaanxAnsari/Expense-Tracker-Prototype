import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { NewInput } from "../FormInput/NewInput";
import { TransactionCollection } from "../Transaction/TransactionCollection";


const Display = (props) => {

    const getNewData = (expenseData) => {
        props.addNewExpense(expenseData)
    }
    return (
        <>
            <Container className="mt-5 p-5 bg-warning rounded">
                <Row className="text-center gx-5">
                    <Col lg={4} md={4}>
                        <div>
                            <NewInput onSubmitNewData={getNewData} />
                        </div>
                    </Col>
                    <Col lg={8} md={8} >
                        <TransactionCollection data={props.data} />
                    </Col>
                </Row>
            </Container>
        </>
    )
}

export default Display