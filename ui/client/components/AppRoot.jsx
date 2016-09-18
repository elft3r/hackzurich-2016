import React from 'react'
import BarometerChart from './BarometerChart'
import ElevatorBarChart from './ElevatorBarChart'
import FloorsPie from './FloorsPie'

class AppRoot extends React.Component {
	render() {
		var center = {
			textAlign: "center"
		}

		var marginSmall = {
			marginTop: "150px"
		}

		var marginLarge = {
			marginTop: "280px"
		}

		return <div>
			<div style={marginSmall} className="mdl-grid">
				<h1 style={center} className="mdl-cell mdl-cell--6-col">People</h1>
			</div>
			<div className="mdl-grid">
				<BarometerChart />
			</div>
			<div style={marginLarge} className="mdl-grid">
				<h1 style={center} className="mdl-cell mdl-cell--6-col">Elevators</h1>
			</div>
			<div className="mdl-grid">
				<ElevatorBarChart />
			</div>
		</div>
	}
}

export default AppRoot
