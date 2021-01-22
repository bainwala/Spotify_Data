import './frame.css';
import React, {useRef, useEffect, useState} from 'react';
import * as d3 from "d3";

function Frame() {
    const [data, setData] = useState({nodes:[1, 2, 3, 4, 5], links:[{"target": 0, "source": 1}, {"target": 3, "source": 1}, {"target": 2, "source": 0}]});
    const margin = {top: 10, right: 5, bottom : 10, left: 100}
    const width = 1400 - margin.left - margin.right;
    const height = 900 - margin.top - margin.bottom;

    const bodyRef = useRef();
    useEffect(() => {
        const body = d3.select(bodyRef.current);
        const svg = body.append('svg')
        .attr('width', width)
        .attr('height', height)

        const tooltip = d3.select(bodyRef.current)
        .append('div')
        .attr('class', 'tooltip')
        .style({
            'background' : 'orangered',
            'color': 'white',
            'width' : '90px'
        })

        var force = d3.layout.force()
        .size([width, height])
        .nodes(d3.values(data.nodes))
        .links(d3.values(data.links))
        .on("tick", tick)
        .linkDistance(300)
        .start()

        var link = d3.selectAll('.link')
        .data(data.links)
        .enter().append('line')
        .attr('class', 'link')

        
    },[]);
    return (
        <React.Fragment>
            <body ref={bodyRef}></body>
        </React.Fragment>
    )
}

export default Frame;