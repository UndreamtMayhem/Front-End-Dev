/*jshint esversion: 6 */
import React, {Component} from 'react';

class TableRow extends Component {

    render() {
        let tableData;

        if (this.props.recent) {
            console.log(this.props.recent);
            tableData = this
                .props
                .recent
                .map(data => {
                    return (
                        <tr>
                            <td>{data.recent}</td>
                            <td><img src={data.img} className="img-thumbnail float-left"/>
                                <h3>{data.username}</h3>
                            </td>
                            <td>{data.recent}
                            </td>
                            <td>{data.alltime}</td>
                        </tr>
                    )
                })
        }
        return ({tableData});
    }
}

export default TableRow;
