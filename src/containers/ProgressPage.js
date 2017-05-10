import ProgressPage from '../components/ProgressPage';

import {connect} from 'react-redux';

const mapStateTProps = ({ progress, articles }) => ({
  progress: progress.data,
  data: articles.data
})

export default connect(mapStateTProps)(ProgressPage);
