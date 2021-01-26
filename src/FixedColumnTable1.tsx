import React from "react";
import './FixedColumnTable.css'

export function FixedColumnTable(props: any) {
    const fixedHeaders:any = props.headers.slice( 0, props.frozen);
    const regularHeaders:any = props.headers.slice( props.frozen, props.headers.length);

    function addTd(arr: any) {
        return arr.map((e: any,index: any) => (
            <td key={index}>{e}</td>
        ))
    }

    function renderFrozenTd (arr: any) {
        const sliceArr = arr.slice(0, fixedHeaders.length)
        return sliceArr.map((e: any,index: any) => (
            <td key={index}>{e}</td>
        ))
    }

    function renderFrozen(arr: any) {
        return arr.map((e: any,index: any) => {
            return <tr key={index}>{renderFrozenTd(e)}</tr>
        })
    }

    function renderReularTd(arr: any) {
        const sliceArr = arr.slice(fixedHeaders.length, arr.length)
        return sliceArr.map((e: any,index: any) => (
            <td key={index}>{e}</td>
        ))
    }

    function renderReular(arr: any) {
        return arr.map((e: any,index: any) => {
            return <tr key={index}>{renderReularTd(e)}</tr>
        })
    }

    return(
        <div className="container">
            <table className="fixed">
                <thead>
                <tr>
                    { addTd(fixedHeaders) }
                </tr>
                </thead>
                <tbody>
                { renderFrozen(props.data) }
                </tbody>
            </table>
            <div className="scroll">
                <table className="scrollable">
                    <thead>
                    <tr>
                        { addTd(regularHeaders) }
                    </tr>
                    </thead>
                    <tbody>
                    { renderReular(props.data) }
                    </tbody>
                </table>
            </div>
        </div>
    )
}