import React, { useState } from 'react';
import { Card } from 'react-bootstrap';
import { Button, Col, Container, Form, Row } from 'react-bootstrap';

export default function Information() {
    const [formData, setFormData] = useState({
        firstName: 'Camila',
        company: 'Australia',
        birthday: '13 July 1983',
        role: 'UI Designer',
        mobile: '(12) 03 4567890',
        email: 'jsmith@flatlab.com',
        phone: '88 (02) 123456',
        address: 'HCM',
        gender: 'Male',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSave = () => {
        console.log('Data saved', formData);
    };

    return (
        <Card className="mb-4">
            <Card.Body>
                <Card.Title>Thông tin cá nhân</Card.Title>
                <Row>
                    <Col md={6}>
                        <Form.Group className="mb-3">
                            <Form.Label>Tên</Form.Label>
                            <Form.Control
                                type="text"
                                name="firstName"
                                value={formData.firstName}
                                onChange={handleChange}
                            />
                        </Form.Group>

                        <Form.Group className="mb-3">
                            <Form.Label>SĐT</Form.Label>
                            <Form.Control type="text" name="mobile" value={formData.mobile} onChange={handleChange} />
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Label>Công ty</Form.Label>
                            <Form.Control type="text" name="company" value={formData.company} onChange={handleChange} />
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Label>Chức danh</Form.Label>
                            <Form.Control type="text" name="role" value={formData.role} onChange={handleChange} />
                        </Form.Group>
                    </Col>
                    <Col md={6}>
                        <Form.Group className="mb-3">
                            <Form.Label>Ngày sinh</Form.Label>
                            <Form.Control
                                type="text"
                                name="birthday"
                                value={formData.birthday}
                                onChange={handleChange}
                            />
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Label>Địa chỉ</Form.Label>
                            <Form.Control type="text" name="address" value={formData.address} onChange={handleChange} />
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Label>Giới tính</Form.Label>
                            <Form.Control as="select" name="gender" value={formData.gender} onChange={handleChange}>
                                <option value="Male">Nam</option>
                                <option value="Female">Nữ</option>
                                <option value="Other">Khác</option>
                            </Form.Control>
                        </Form.Group>
                    </Col>
                </Row>
                <Button variant="primary" onClick={handleSave}>
                    Lưu
                </Button>
            </Card.Body>
        </Card>
    );
}
