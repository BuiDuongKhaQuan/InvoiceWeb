import { faCalendar, faEdit, faPlus, faUser } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useState } from 'react';
import { Card, Col, Container, ListGroup, Row } from 'react-bootstrap';
import Information from '~/layouts/User/components/InnerProfile/Information';
import '../../assets/css/styles.css';
import ResetPass from '~/layouts/User/components/InnerProfile/ResetPass';
import Activity from '~/layouts/User/components/InnerProfile/Activity';
export default function Profile() {
    const [selectedOption, setSelectedOption] = useState('profile');
    const handleOptionChange = (option) => {
        setSelectedOption(option);
    };
    const renderOption = () => {
        switch (selectedOption) {
            case 'profile':
                return <Information />;
            case 'history':
                return <Information />;
            case 'resetpass':
                return <ResetPass />;
            case 'activity':
                return <Activity />;
            case 'logout':
                return <ResetPass />;
            default:
                return <Information />;
        }
    };
    return (
        <Container className="bootstrap snippets bootdey">
            <Row>
                <Col md={3}>
                    <Card className="profile-nav">
                        <div className="avatar-container">
                            <Card.Img
                                variant="top"
                                src="https://bootdey.com/img/Content/avatar/avatar3.png"
                                className="rounded-circle"
                            />
                            <div className="edit-icon p-3">
                                <FontAwesomeIcon icon={faPlus} />
                            </div>
                        </div>
                        <Card.Body className="text-center">
                            <Card.Title>Camila Smith</Card.Title>
                            <Card.Text>deydey@theEmail.com</Card.Text>
                        </Card.Body>
                        <ListGroup variant="flush">
                            <ListGroup.Item active onClick={() => handleOptionChange('profile')}>
                                <FontAwesomeIcon icon={faUser} /> Thông tin
                            </ListGroup.Item>
                            <ListGroup.Item onClick={() => handleOptionChange('activity')}>
                                <FontAwesomeIcon icon={faCalendar} /> Hoạt động gần đây
                                <span className="badge bg-warning float-end">9</span>
                            </ListGroup.Item>
                            <ListGroup.Item onClick={() => handleOptionChange('resetpass')}>
                                <FontAwesomeIcon icon={faEdit} /> Đổi mật khẩu
                            </ListGroup.Item>
                            <ListGroup.Item onClick={() => handleOptionChange('resetpass')}>
                                <FontAwesomeIcon icon={faEdit} /> Đăng xuất
                            </ListGroup.Item>
                        </ListGroup>
                    </Card>
                </Col>
                <Col md={9}>{renderOption()}</Col>
            </Row>
        </Container>
    );
}
