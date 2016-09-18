import React from 'react'
import FloorData from '../data/Floors'
import {PieChart, Pie, Legend, Tooltip} from 'recharts'

class FloorChart extends React.Component {
	constructor() {
		super()
		this.state = { pieData: [] }

		this.setData = this.setData.bind(this)
	}

	setData() {
		this.setState({ pieData: FloorData.streamData() })
	}

	componentDidMount() {
		this.setData()
		setInterval(this.setData, 2000)
	}

	render() {
		return (
			<div className="mdl-cell mdl-cell--6-col">
				<PieChart width={800} height={400}>
					<Pie isAnimationActive={false} data={this.state.pieData} cx={200} cy={200} innerRadius={40} outerRadius={80} fill="#8884d8" label/>
					<Tooltip/>
				</PieChart>
			</div>
		);
	}
}

export default FloorChart
