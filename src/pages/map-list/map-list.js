import React, {useEffect, useState} from "react";
import styled from 'styled-components'

const fakeData = [
    {name:'Luna', owner:'Andrew', time:52.26},
    {name:'Luna', owner:'Andrew', time:52.26},
    {name:'Luna', owner:'Andrew', time:52.26},
    {name:'Luna', owner:'Andrew', time:52.26},
    {name:'Luna', owner:'Andrew', time:52.26},
    {name:'Luna', owner:'Andrew', time:52.26},
    {name:'Luna', owner:'Andrew', time:52.26},
    {name:'Luna', owner:'Andrew', time:52.26},
    {name:'Luna', owner:'Andrew', time:52.26},
    {name:'Luna', owner:'Andrew', time:52.26},
    {name:'Luna', owner:'Andrew', time:52.26},
]

function Maps(){
    const fetchMaps = () => {
        return fakeData
    }

    const [mapData, setMapData] = useState([]) 

    useEffect(()=>{
        setMapData(fetchMaps())
    }, [])

const renderTableRow = (element, index) => {
    return <StyledStyledRow key={index}>
        <td>{element.name}</td>
        <td>{element.owner}</td>
        <td>{element.time}</td>
            </StyledStyledRow>
}

    return (<div>
        <h1>Maps</h1>
        <table>
            <tr>

            <th>Map Names</th>
            <th>Best Run Owner</th>
            <th>Fastest Time</th>
            
            </tr>
            {mapData.map(renderTableRow)}



        </table>
    </div>)
}

const StyledRow = styled.tr`
    color: tomato;    
`
const StyledStyledRow = styled(StyledRow)`
    font-size: 6rem;
    color: blue;

`

export default Maps
/** 
 * Title
 * Table
 *      Map Name, Best Run Owner, Time
 * Linkable Row
 * Linkable Profile Link
 */