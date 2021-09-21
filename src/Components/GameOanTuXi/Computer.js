import React, { Component } from 'react'
import { connect } from 'react-redux'
class Computer extends Component {
	render() {

		let keyframe = `@keyframes randomItem${Date.now()}{
			0% {top: -20px;}
			25% {top: 20px;}
			50% {top: -20px;}
			75% {top: 20px;}
			100% {top: 0px;}
		}`



		return (
			<div className="text-center player">
				<style>
					{keyframe}
				</style>
				<div className="playerThink" style={{ position: 'relative' }}>
					<img style={{ position: 'absolute', left: '30%', animation: `randomItem${Date.now()} 0.5s` }} className="mt-3" width="70" height="70" src={this.props.computer.pic} alt={this.props.computer.pic}></img>
				</div>
				<div className="speech-bubble"></div>
				<img style={{ width: 150, height: 150 }} src={"./img/playerComputer.png"} alt="./img/playerComputer.png"></img>

			</div >
		)
	}
}
const mapStateToProps = state => {
	return {
		computer: state.OanTuXiReducer.computer,
	}
}
export default connect(mapStateToProps)(Computer)