import React from 'react';
import { Card, ListGroup } from 'react-bootstrap';
import moment from 'moment';
export default function Activity() {
    const activities = [
        { id: 1, action: 'Đăng nhập', timestamp: '2/12/2024' },
        { id: 2, action: 'Tạo hóa đơn', timestamp: '2/11/2024' },
        { id: 3, action: 'Tạo hóa đơn', timestamp: '1/8/2024' },
    ];
    return (
        <Card className="mb-4">
            <Card.Body>
                <Card.Title>Hoạt động gần đây</Card.Title>
                <ListGroup variant="flush">
                    {activities.map((activity, index) => (
                        <ListGroup.Item key={index}>
                            <span>{activity.action}</span>
                            <span className="float-end"> {moment(activity.timestamp).format('DD/MM/YYYY HH:mm')}</span>
                        </ListGroup.Item>
                    ))}
                </ListGroup>
            </Card.Body>
        </Card>
    );
}
