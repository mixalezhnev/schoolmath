import TrainingBlock from '../components/TrainingBlock';

import { connect } from 'react-redux';

import { bindActionCreators } from 'redux';
import { listenToExercise } from '../store/actions/practice';

const mapStateToProps = ({ articles }) => ({
	data: articles.data
})

const mapDispatchToProps = dispatch => ({
  ...bindActionCreators({
    getExercise: listenToExercise,
  }, dispatch)
})

export default connect(mapStateToProps, mapDispatchToProps)(TrainingBlock);
