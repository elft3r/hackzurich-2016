import React from 'react'
import BarometerChart from './BarometerChart'
import ElevatorBarChart from './ElevatorBarChart'
import FloorsPie from './FloorsPie'

class AppRoot extends React.Component {
	render() {
		return <div>
			<div className="mdl-grid">
				<FloorsPie/>
			</div>
			<div className="mdl-grid">
				<BarometerChart />
			</div>
			<div className="mdl-grid">
				<ElevatorBarChart />
			</div>
		</div>
	}
}

export default AppRoot
