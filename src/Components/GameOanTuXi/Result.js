import React, { Component } from 'react'
import { connect } from 'react-redux'
class Result extends Component {
	render() {
		return (
			<div>
				<div className="display-4 text-danger">{this.props.result}</div>
				<div className="display-4 text-success">Match Win: <span className="text-warning">{this.props.matchWin}</span></div>
				<div className="display-4 text-success">Match Play: <span className="text-warning">{this.props.matchPlay}</span></div>
			</div>
		)
	}
}
const mapStateToProps = state => {
	return {
		result: state.OanTuXiReducer.result,
		matchWin: state.OanTuXiReducer.matchWin,
		matchPlay: state.OanTuXiReducer.matchPlay,
	}
}
export default connect(mapStateToProps)(Result)