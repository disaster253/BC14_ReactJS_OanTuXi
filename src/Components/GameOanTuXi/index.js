import React, { Component } from 'react'
import "./index.css"
import Player from './Player'
import Computer from './Computer'
import Result from './Result'
import { connect } from 'react-redux'
class OanTuXi extends Component {
	render() {
		return (
			<div className="bg-game">
				<div className="row text-center mt-5">
					<div className="col-4 mt-3">
						<Player />
					</div>
					<div className="col-4 mt-3">
						<Result />
						<button onClick={() => { this.props.playgame() }} className="btn btn-success display-4 mt-3 p-2">Play game</button>
					</div>
					<div className="col-4 mt-3">
						<Computer />
					</div>
				</div>
			</div>
		)
	}
}
const mapDispatchToProps = (dispatch) => {
	return {
		playgame: () => {
			let count = 0
			let randomComputerItem = setInterval(() => {
				dispatch({
					type: 'RANDOM'
				})
				count++;
				if (count >= 10) {
					clearInterval(randomComputerItem)
					dispatch({
						type: 'RESULT'
					})
				}
			}, 100)

		}
	}
}


export default connect(null, mapDispatchToProps)(OanTuXi)
