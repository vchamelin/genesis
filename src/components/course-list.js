import { Row, Col } from 'react-bootstrap';
import CoursePrev from './cousre-preview';

const CourseList = ({courses}) => {
  return (
    <Row xs={1} md={2} >
      {courses.map((course, ind) => (
        <Col key={ind} className="mb-4">
          <CoursePrev course={course}/>
        </Col>
      ))}
    </Row>
  );
};

export default CourseList;