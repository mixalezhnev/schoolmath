import OverviewPage from '../components/OverviewPage';

import { connect } from 'react-redux';

const mapStateToProps = ({ articles }) => ({
	data: articles.data
})

export default connect(mapStateToProps)(OverviewPage);
