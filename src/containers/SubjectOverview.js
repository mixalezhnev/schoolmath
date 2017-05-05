import {connect} from 'react-redux';
import SubjectOverview from '../components/SubjectOverview';

const mapStateToProps = ({articles}) => ({
  data: articles.data
})

export default connect(mapStateToProps)(SubjectOverview);
