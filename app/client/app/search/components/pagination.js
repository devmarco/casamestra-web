import React from 'react';

class Pagination extends React.Component {
	render() {
		return (
			<div className="filter pagination pagination--text">
				<span className="js-result-stats">1 — 12 de 461 imóveis</span>
				<div className="pagination__buttons">
					<button data-type="p-prev" className="prev"></button>
					<button data-type="p-next" className="next"></button>
				</div>
			</div>
		);
	}
}

export { Pagination };
