import React from 'react';
import './App.css'
import { FixedColumnTable } from './FixedColumnTable1'
const tableHeaders: any = [
    "Frozen First Column",
    "Frozen Second Column",
    "Reg First Column",
    "Reg Second Column",
    "Reg Third Column",
    "Reg Fourth Column",
    "Reg Fifth Column",
    "Reg Sixth Column"
]
const tableData: any = [
    [
        '1a',
        '2a',
        '3a',
        '4a',
        '5a',
        '6a',
        '7a',
        '8a',
    ],
    [
        '1b',
        '2b',
        '3b',
        '4b',
        '5b',
        '6b',
        '7b',
        '8b',
    ],
    [
        '1a',
        '2a',
        '3a',
        '4a',
        '5a',
        '6a',
        '7a',
        '8a',
    ],
    [
        '1b',
        '2b',
        '3b',
        '4b',
        '5b',
        '6b',
        '7b',
        '8b',
    ],
]
class App extends React.Component<any> {

    render(){
        return (
            <FixedColumnTable headers={tableHeaders} data={tableData} frozen={2} />
        );
    }
}

export default App;