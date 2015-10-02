const React 	= require('react');
const Select 	= require('react-select');
const $ 		= require('jquery');

class Neighborhood extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			options: [
				{ value: 'Savassi', label: 'Savassi' },
				{ value: 'Floresta', label: 'Floresta' },
				{ value: 'Pampulha', label: 'Pampulha' },
				{ value: 'Caiçara', label: 'Caiçara' },
				{ value: 'Santa Tereza', label: 'Santa Tereza' },
				{ value: 'Padre Eustaqui', label: 'Padre Eustaqui' },
				{ value: 'Serra', label: 'Serra' },
				{ value: 'Funcionarios', label: 'Funcionarios' },
			],
		};
	}

	onChange(val) {
		const element = React.findDOMNode(this);
		const values = val.split(',');

		(values.length > 3) ? $(element).addClass('max-limit') : $(element).removeClass('max-limit');
	}

	render() {
		return (
			<div className="o-filter">
				<span className="title">Vizinhança</span>
				<Select
					name="form-field-name"
					placeholder="Selecione uma vizinhança"
					multi={true}
					options={this.state.options}
					onChange={this.onChange.bind(this)}
					onFocus={this.onFocus}
				/>
			</div>
		);
	}
}

module.exports = Neighborhood;
