import StateStar from '../components/StateStar';

import { connect } from 'react-redux';

const mapStateToProps = ({ progress }) => ({
  progress: progress.data.subjects
})

export default connect(mapStateToProps)(StateStar);
