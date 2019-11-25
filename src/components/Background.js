import React from 'react';
import background from '../Assets/images/background.jpg'

const Background =()=>{
	return(<div style={{
		position: 'absolute',
		top: 0,
		left: 0,
		height: '100%',
		width: '60%',
		zIndex: -1,
		overflow: 'hidden'}}>
		<img style={{height: "100%", width: '100%', objectFit: 'cover'}} src={background} alt="#"/>
	</div>)
}

export default Background;
