import React from 'react';
import Barometer from'./../data/Barometer'
import {LineChart, XAxis, YAxis, Line, CartesianGrid, Tooltip, Legend } from 'recharts'

class BarometerChart extends React.Component {
	constructor() {
		super();
		this.state = {barometerData: [],
			replayDate: Barometer.getStartDate()};

		this.tick = this.tick.bind(this);
	}

	tick() {
		//replayDate.setSeconds(this.state.replayDate.getSeconds() + 1);
		var d = new Date(this.state.replayDate);
		this.setState({ barometerData: Barometer.streamData(this.state.replayDate),
			replayDate: d.setSeconds(d.getSeconds() + 2)});
	}

	componentDidMount() {
		this.tick();
		setInterval(this.tick, 2000);
	}

	render() {
		return (
			<div className="mdl-cell mdl-cell--6-col">
				<LineChart width={600} height={300} data={this.state.barometerData}
					margin={{top: 5, right: 30, left: 20, bottom: 5}}>
				<XAxis dataKey="dateLabel"/>
				<YAxis/>
				<CartesianGrid strokeDasharray="3 3"/>
				<Tooltip/>
				<Legend verticalAlign="top" height={36}/>
				<Line type="monotone" isAnimationActive={false} name="Air Pressure" dataKey="pressure" stroke="#8884d8" activeDot={{r: 8}}/>
				</LineChart>
			</div>
		);
	}
}

export default BarometerChart
