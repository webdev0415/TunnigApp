import React from 'react';
import {PowerGraphPanel, PowerGraphHeader, PowerGraphHeaderSpan, PowerGraphHeaderSpanImage, PowerGraphHeaderSpanHLTitle} from '../Elements/PowerGraphPanel';
import {PowerGraphContent, PowerGraphImage} from '../Elements/PowerGraphPanel';

function PowerGraph({imgsrc}) {
    console.log("--", imgsrc)
    return(
        <PowerGraphPanel>
            <PowerGraphHeader>
                <PowerGraphHeaderSpan>
                    <PowerGraphHeaderSpanImage src="/static/images/icon_graph.png" alt="Power Graph" /> Power Graph
                    <PowerGraphHeaderSpanHLTitle> stage 1</PowerGraphHeaderSpanHLTitle>
                </PowerGraphHeaderSpan>
            </PowerGraphHeader>
            <PowerGraphContent>
                <PowerGraphImage src={imgsrc} />
            </PowerGraphContent>
        </PowerGraphPanel>
    );
}
export default PowerGraph;