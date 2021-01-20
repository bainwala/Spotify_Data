import './frame.css';
import React, {useRef, useEffect, useState} from 'react';
import {select} from "d3";

function Frame() {
    const [data, setData] = useState([10, 73, 24, 45]);
    const svgRef = useRef();
    useEffect(() => {
        const svg = select(svgRef.current)
        svg
        .selectAll('circle')
        .data(data)
        .join("circle")
        .attr('class', 'new')
            .attr("r", value => value)
            .attr("cx", val => val * 2)
            .attr("cy", val => val * 2)
            .attr("stroke", "red")
    },[data]);
    return (
        <React.Fragment>
            <svg ref={svgRef}></svg>
            <br/>
            <button onClick={() => setData(data.map(val => val+5))}>Update Data</button>
            <button onClick={() => setData(data.filter(val => val < 50))}>Filter Data</button>
        </React.Fragment>
    )
}

export default Frame;