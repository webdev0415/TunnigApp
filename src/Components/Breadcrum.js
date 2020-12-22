import React from "react";
import { ChipTuningHeader, ChipTuningH1, ChipTuningH2, ChipTuningH3, ChipTuningH4, ChipTuningH5, ChipTuningH6} from '../Elements/ChipTuningPanel';
import {Link} from 'react-router-dom'
import {Spacer} from '../Elements/Common';

const BreadCrum = ({items}) => {
	return(
		<ChipTuningHeader>
		{

			items && items.map((item, index)=>{
				switch(index) {
					case 0:
						return <Link to={item.url}><ChipTuningH1 as="h1">{item.text}</ChipTuningH1></Link>
					case 1:
						return <Link to={item.url}><ChipTuningH2 as="h2">{item.text}</ChipTuningH2></Link>
					case 2:
						return <Link to={item.url}><ChipTuningH3 as="h2">{item.text}</ChipTuningH3></Link>
					case 3:
						return <Link to={item.url}><ChipTuningH4 as="h2">{item.text}</ChipTuningH4></Link>
					case 4:
						return <Link to={item.url}><ChipTuningH5 as="h2">{item.text}</ChipTuningH5></Link>
					case 5:
						return <Link to={item.url}><ChipTuningH6 as="h2">{item.text}</ChipTuningH6></Link>
					default:
						return ""
				}
				
			})
		}
           <Spacer /> 
        </ChipTuningHeader>
		)
}

export default BreadCrum