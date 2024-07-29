import React, { useRef } from 'react';
import { Form, Button, Container, Row, Col, InputGroup } from 'react-bootstrap';

export default function Product() {
    const fileInputRef = useRef(null);

    const handleImageSelectClick = () => {
        fileInputRef.current.click();
    };

    return (
        <div className="invoice-main">
            <Container className="mt-4">
                <Form className="InvoiceGenerator">
                    <Row>
                        <Col md={9} className="border bg-white">
                            <div className="p-3">
                                <div className="InvoiceGenerator__Top mb-3">
                                    <Row>
                                        <Col md={4} className="mb-3 d-flex align-items-center justify-content-center">
                                            <div
                                                className="ImageSelect text-center p-3 border"
                                                style={{ cursor: 'pointer' }}
                                                onClick={handleImageSelectClick}
                                            >
                                                <Form.Control
                                                    type="file"
                                                    accept="image/png"
                                                    multiple
                                                    style={{ display: 'none' }}
                                                    ref={fileInputRef}
                                                />
                                                <p>
                                                    <span>Logo here</span>
                                                    <br />
                                                    <span>click or drag to select file </span>
                                                    <br />
                                                    <span>(120 x 120)</span>
                                                </p>
                                            </div>
                                            <Form.Control name="invoice.logo" type="hidden" />
                                        </Col>
                                        <Col md={4} className="mb-3">
                                            <div className="InvoiceGenerator__InvoiceNumber">
                                                <h1>Invoice</h1>
                                                <div>
                                                    <p>Invoice No #</p>
                                                    <Form.Control name="invoice.number" placeholder="Add Invoice No." />
                                                </div>
                                            </div>
                                        </Col>
                                        <Col md={4} className="mb-3">
                                            <div className="InvoiceGenerator__BillFrom">
                                                <Form.Group>
                                                    <Form.Control
                                                        name="sender.name"
                                                        placeholder="Bill from"
                                                        className="mb-2"
                                                    />
                                                    <Form.Control
                                                        as="textarea"
                                                        name="sender.address"
                                                        placeholder="Address"
                                                        rows={3}
                                                    />
                                                </Form.Group>
                                            </div>
                                        </Col>
                                    </Row>
                                </div>
                                <hr />
                                <div className="InvoiceGenerator__Body mb-3">
                                    <Row className="InvoiceGenerator__Recipient mb-3">
                                        <Col>
                                            <Form.Group>
                                                <Form.Label>Bill to</Form.Label>
                                                <Form.Control
                                                    name="receiver.name"
                                                    placeholder="Bill to"
                                                    className="mb-2"
                                                />
                                                <Form.Control
                                                    as="textarea"
                                                    name="receiver.address"
                                                    placeholder="Address"
                                                    rows={3}
                                                />
                                            </Form.Group>
                                        </Col>
                                        <Col>
                                            <Form.Group>
                                                <Form.Label>Invoice date</Form.Label>
                                                <Form.Control name="invoice.issueDate" placeholder="Invoice date" />
                                            </Form.Group>
                                            <Form.Group className="mt-3">
                                                <Form.Label>Due date</Form.Label>
                                                <Form.Control name="invoice.dueDate" placeholder="Due date" />
                                            </Form.Group>
                                        </Col>
                                    </Row>
                                    <div className="InvoiceGenerator__Items mb-3">
                                        <h3>Items</h3>
                                        <div className="InvoiceGenerator__ItemsHeader d-flex mb-2">
                                            <span className="flex-fill">Item</span>
                                            <span className="flex-fill">QTY</span>
                                            <span className="flex-fill">Price</span>
                                        </div>
                                        {[0].map((index) => (
                                            <div key={index} className="InvoiceGenerator__Item d-flex mb-2">
                                                <Form.Control
                                                    name={`items.${index}.name`}
                                                    placeholder="Item name"
                                                    className="flex-fill me-2"
                                                />
                                                <Form.Control
                                                    name={`items.${index}.qty`}
                                                    placeholder="0"
                                                    type="number"
                                                    className="flex-fill me-2"
                                                />
                                                <Form.Control
                                                    name={`items.${index}.price`}
                                                    placeholder="0.00"
                                                    type="number"
                                                    step="0.01"
                                                    className="flex-fill me-2"
                                                />
                                                <Button variant="danger" size="sm">
                                                    Remove
                                                </Button>
                                            </div>
                                        ))}
                                        <Button variant="primary" size="sm">
                                            Add item
                                        </Button>
                                    </div>
                                    <div className="InvoiceGenerator__Summary mb-3 text-end">
                                        <Row className="align-items-center justify-content-end">
                                            <Col md={6}>
                                                <Form.Label>Sub Total</Form.Label>
                                            </Col>
                                            <Col md={6}>
                                                <Form.Control
                                                    name="amount.subtotal"
                                                    placeholder="0.00"
                                                    type="number"
                                                    readOnly
                                                    className="text-end"
                                                />
                                            </Col>
                                        </Row>
                                        <Row className="align-items-center justify-content-end mt-3">
                                            <Col md={6}>
                                                <Form.Label>Tax</Form.Label>
                                            </Col>
                                            <Col md={6}>
                                                <Form.Control
                                                    name="amount.tax"
                                                    placeholder="0.00"
                                                    type="number"
                                                    step="0.01"
                                                    className="text-end"
                                                />
                                            </Col>
                                        </Row>
                                        <Row className="align-items-center justify-content-end mt-3">
                                            <Col md={6}>
                                                <Form.Label>Total</Form.Label>
                                            </Col>
                                            <Col md={6}>
                                                <Form.Control
                                                    name="amount.total"
                                                    placeholder="0.00"
                                                    className="text-end"
                                                />
                                            </Col>
                                        </Row>
                                    </div>
                                    <div className="InvoiceGenerator__Notes mb-3">
                                        <h3>Notes</h3>
                                        <Form.Control as="textarea" name="note" placeholder="Add a note" rows={3} />
                                    </div>
                                </div>
                                <div className="InvoiceGenerator__Footer d-flex justify-content-between">
                                    <div className="InvoiceGenerator__PoweredBy">
                                        <span>Generated by</span>
                                    </div>
                                    <div className="InvoiceGenerator__QrCode">
                                        <span>Scan to generate your invoice</span>
                                        <img
                                            src="https://assets.am-static.com/www-tools/qrcode/e27c4771ca264d6ee939413f132539ec"
                                            alt="qrcode"
                                        />
                                    </div>
                                </div>
                            </div>
                        </Col>
                        <Col md={3} className="InvoiceGenerator__Settings mt-3">
                            <h3>Settings</h3>
                            <Form.Group className="d-flex align-items-center mb-3">
                                <Form.Label className="me-2">Show tax</Form.Label>
                                <Form.Check type="switch" />
                            </Form.Group>
                            <Form.Group className="d-flex align-items-center mb-3">
                                <Form.Label className="me-2">Show notes</Form.Label>
                                <Form.Check type="switch" />
                            </Form.Group>
                            <div className="d-flex justify-content-between">
                                <Button variant="primary" size="md" id="preview">
                                    Preview
                                </Button>
                                <Button variant="primary" size="md" id="download">
                                    Download
                                </Button>
                            </div>
                        </Col>
                    </Row>
                </Form>
            </Container>
        </div>
    );
}
