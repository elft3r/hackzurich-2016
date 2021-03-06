import React from 'react';
import Elevators from'./../data/Elevators'
import {BarChart, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ReferenceLine, Bar } from 'recharts'

class ElevatorBarChart extends React.Component {
	constructor() {
		super();
		this.state = {elevatorData: [],
			replayDate: Elevators.getStartDate()};

		this.tick = this.tick.bind(this);
	}

	tick() {
		//replayDate.setSeconds(this.state.replayDate.getSeconds() + 1);
		var d = new Date(this.state.replayDate);
		if (d > Elevators.getEndDate()) {
			d = new Date(Elevators.getStartDate());
		}
		this.setState({ elevatorData: Elevators.streamData(this.state.replayDate),
			replayDate: d.setSeconds(d.getSeconds() + 10)});
	}

	componentDidMount() {
		this.tick();
		setInterval(this.tick, 2000);
	}

	render() {
		var center = {
			textAlign: "center"
		}

		return (
			<div className="mdl-cell mdl-cell--6-col" >
				<p style={center}>The current position of the elevators</p>
				<BarChart width={800} height={400} data={this.state.elevatorData}
					margin={{top: 5, right: 30, left: 20, bottom: 5}}>
					<XAxis dataKey="name"/>
					<YAxis/>
					<CartesianGrid strokeDasharray="1 1"/>
					<Tooltip/>
					<Legend />
					<ReferenceLine y={0} stroke='#000'/>
					<Bar isAnimationActive={false}  dataKey="floor" fill="#8884d8" />
				</BarChart>
			</div>
		);
	}
}

export default ElevatorBarChart
