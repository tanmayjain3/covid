import React, { useState } from 'react';
import India from '@svg-maps/india';
import {SVGMap} from "react-svg-map";
import "../../styles/MapParent.css"
import "react-svg-map/lib/index.css";

class MapParent extends React.Component {

	constructor(props) {
		super(props);
		
		this.state = {
			pointedLocation: null,
			tooltipStyle: {
				display: 'none'
			},
			map:India
		};
		this.handleLocationMouseOver = this.handleLocationMouseOver.bind(this);
		this.handleLocationMouseOut = this.handleLocationMouseOut.bind(this);
		this.handleLocationMouseMove = this.handleLocationMouseMove.bind(this);
		this.getLocationName = this.getLocationName.bind(this);
		this.handleLocationClick = this.handleLocationClick.bind(this);
	}
	handleLocationMouseOver(event) {
		const pointedLocation = this.getLocationName(event);
		this.setState({ pointedLocation });
	}

	handleLocationClick(event){
		const newLoc = this.getLocationName(event);
		India.locations.forEach((location)=>{
		})
	}

	handleLocationMouseOut(event) {
		this.setState({ pointedLocation: null, tooltipStyle: { display: 'none' } });
	}

	getLocationName(event){
		return event.target.attributes.name.value
	}

	handleLocationMouseMove(event) {
		const tooltipStyle = {
			display: 'block',
			top: event.clientY + 10,
			left: event.clientX - 100
		};
		this.setState({ tooltipStyle });
		const pointedLocation = this.getLocationName(event);
		this.setState({ pointedLocation });
	}

	getLocationClassName(location, index) {
		// Generate random heat map
		return `svg-map__location svg-map__location--heat${index % 4}`;
	}

	render() {
		return (
			<div>
				<div>{this.state.pointedLocation?this.state.pointedLocation:"No name"}</div>
				<div className="svg-parent">
					<SVGMap
						map={this.state.map}
						locationClassName={this.getLocationClassName}
						onLocationMouseOver={this.handleLocationMouseOver}
						onLocationMouseOut={this.handleLocationMouseOut}
						onLocationMouseMove={this.handleLocationMouseMove}
						onLocationClick={this.handleLocationClick} />
				</div>

			</div>
		);
	}
}

export default MapParent;