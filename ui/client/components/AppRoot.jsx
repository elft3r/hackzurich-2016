import React from 'react'
import BarometerChart from './BarometerChart'

class AppRoot extends React.Component {
	render() {
		return <div className="mdl-grid">
				<BarometerChart />
			</div>
	}
}

export default AppRoot
