import React from 'react'
import BarometerChart from './BarometerChart'
import ElevatorBarChart from './ElevatorBarChart'

class AppRoot extends React.Component {
	render() {
		return <div><div className="mdl-grid">
				<BarometerChart />
			</div>
			<div className="mdl-grid">
				<ElevatorBarChart />
			</div>
			</div>
	}
}

export default AppRoot
