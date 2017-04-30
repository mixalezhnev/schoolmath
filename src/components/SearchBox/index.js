import React from 'react';
import Input from '../Input';

class SearchBox extends React.Component {
	// handleChange = (e) => {
	//   //
	// }

	render() {
		return (
			<div className="search-form">
				<Input
					type='search'
					className='search-form__input header__input'
					placeholder={'Поиск'} />
				<div className='search-form__search-icon'></div>
			</div>
		);
	}
}

export default SearchBox;
