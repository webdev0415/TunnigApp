import React from 'react'
import {AvailableStage, AvailableStageHeader, AvailableStageH2, AvailableStageH3, AvailableStageContent} from '../Elements/CarsPanel';

const StageItem = ({src, title, subtitle, text}) => {
	return (
		<AvailableStage>
            <AvailableStageHeader>
                <AvailableStageH2><img src={src} alt={title} /> {title}</AvailableStageH2>
                    <AvailableStageH3>{subtitle}</AvailableStageH3>
                </AvailableStageHeader>
            <AvailableStageContent>
            	{text}
            </AvailableStageContent>
        </AvailableStage>
		)
}
export default StageItem