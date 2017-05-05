import {connect} from 'react-redux';
import SubjectPractice from '../components/SubjectPractice';

const mapStateToProps = ({data}) => ({
  data
})

export default connect(mapStateToProps)(SubjectPractice);
