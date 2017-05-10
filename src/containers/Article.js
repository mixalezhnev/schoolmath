import Article from '../components/Article';

import { connect } from 'react-redux';

const mapStateToProps = ({ progress }) => ({
	progress: progress.data.subjects
})

export default connect(mapStateToProps)(Article);
