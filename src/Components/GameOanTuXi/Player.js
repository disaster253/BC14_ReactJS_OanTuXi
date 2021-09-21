import React, { Component } from 'react'
import { connect } from 'react-redux'
class Player extends Component {
	render() {
		return (
			<div className="text-center player">
				<div className="playerThink">
					<img className="mt-3" width="70" height="70" src={this.props.arrayData.find(item => item.bet === true).pic} alt={this.props.arrayData.find(item => item.bet === true).pic}></img>
				</div>
				<div className="speech-bubble"></div>
				<img style={{ width: 150, height: 150 }} src="./img/player.png" alt="./img/player.png"></img>
				<div className="row">
					{this.props.arrayData.map((item) => {

						let border = {};
						if (item.bet) {
							border = {
								border: '3px solid red'
							};
						}

						return (<div className="col-4">
							<button onClick={() => {
								this.props.betChoose(item.type);
							}} style={border} className="btnItem">
								<img width="40" height="40" src={item.pic} alt={item.pic}></img>
							</button>
						</div>)
					})}

				</div>
			</div >
		)
	}
}
const mapStateToProps = state => {
	return {
		arrayData: state.OanTuXiReducer.arrayData
	}
}
const mapDispatchToProps = dispatch => {
	return {
		betChoose: (chose) => {
			dispatch({
				type: 'CHOSEN',
				chose
			})
		}
	}
}
export default connect(mapStateToProps, mapDispatchToProps)(Player);