const stateDefault = {
	arrayData: [
		{
			type: 'keo',
			pic: './img/keo.png',
			bet: false,
		},
		{
			type: 'bua',
			pic: './img/bua.png',
			bet: true,
		},
		{
			type: 'bao',
			pic: './img/bao.png',
			bet: false,
		}
	],
	result: "Tro choi Oan Tu Xi",
	matchPlay: 0,
	matchWin: 0,
	computer: {
		type: 'keo',
		pic: './img/keo.png',
		bet: false,
	},
}
const OanTuXiReducer = (state = stateDefault, action) => {
	switch (action.type) {
		case 'CHOSEN': {
			let temp = [...state.arrayData];
			temp = temp.map((item) => {
				if (item.type === action.chose) {
					return { ...item, bet: true }
				}
				return { ...item, bet: false }

			})
			state.arrayData = temp;
			return { ...state };
		}
		case 'RANDOM': {
			let numRandom = Math.floor(Math.random() * 3);
			let computerRandom = state.arrayData[numRandom];
			state.computer = computerRandom;
			return { ...state }
		}
		case 'RESULT': {
			state.matchPlay += 1;
			let player = state.arrayData.find(item => item.bet === true);
			let computer = state.computer;
			switch (player.type) {
				case 'keo':
					if (computer.type === 'keo') {
						state.result = "Draw!!!";
					}
					else if (computer.type === 'bua') {
						state.result = "Lose!!!";
					}
					else {
						state.matchWin += 1;
						state.result = "Winn!!!";
					}
					break;
				case 'bua':
					if (computer.type === 'keo') {
						state.matchWin += 1;
						state.result = "Winn!!!";
					}
					else if (computer.type === 'bua') {
						state.result = "Draw!!!";
					}
					else {
						state.result = "Lose!!!";
					}
					break;
				case 'bao':
					if (computer.type === 'keo') {
						state.result = "Lose!!!";
					}
					else if (computer.type === 'bua') {
						state.matchWin += 1;
						state.result = "Winn!!!";
					} else {
						state.result = "Draw!!!";
					}
					break;
				default:
					state.matchWin += 1;
					state.result = "Winn!!!";
			}
			return { ...state }
		}
		default: return { ...state }

	}
}
export default OanTuXiReducer;