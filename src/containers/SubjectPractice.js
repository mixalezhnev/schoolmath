import {connect} from 'react-redux';
import SubjectPractice from '../components/SubjectPractice';

const mapStateToProps = ({ articles }) => ({
  articles: articles.data
})

export default connect(mapStateToProps)(SubjectPractice);
