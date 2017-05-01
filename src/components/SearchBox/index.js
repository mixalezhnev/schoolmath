import React from 'react';
import Input from '../Input';
import styles from './SearchBox.css';
import search from './search.svg';

class SearchBox extends React.Component {
	// handleChange = (e) => {
	//   //
	// }

	render() {
		return (
			<div className={styles.searchForm}>
				<input
					type='text'
					className={styles.searchInput}
					placeholder={'Поиск'} />
				<div className={styles.searchIcon}></div>
			</div>
		);
	}
}

export default SearchBox;
