import React from 'react';
import { GraphContainer } from './graph.styles';
import ArrowDownSm from '../../assets/arrow-down-sm.svg';
import RightButton from '../../assets/right-button.svg';
import LeftButton from '../../assets/left-button.svg';

const Graph = () => (
	<GraphContainer>
		<div className="graph-header-section">
            <div className="left-section">
            Today: 5, Aug 2018
            </div>

            <div className="right-section">
             <div className="date-range">
                <div className="range">1 Jan - 1 Jun</div>
                <img src={ArrowDownSm} alt="" />
             </div>

             <div className="controls">
                <div className="left-direction">
                    <img className='left-btn' src={LeftButton} alt="" />
                </div>

                <div className="right-direction">
                <img className='right-btn' src={RightButton} alt="" />
                </div>

             </div>


            </div>
        </div>
	</GraphContainer>
);

export default Graph;
