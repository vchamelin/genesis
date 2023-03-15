import { Row, Col } from 'react-bootstrap';
import CoursePrev from './cousre-preview';

const CourseList = ({courses}) => {
  return (
    <Row xs={1} md={2}>
      {courses.map(course => (
        <Col key={course.id}>
          <CoursePrev course={course} />
        </Col>
      ))}
    </Row>
  );
};

export default CourseList;