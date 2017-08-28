import React from 'react'
import { Table, TableBody, TableHeader, TableHeaderColumn, TableRow, TableRowColumn } from 'material-ui/Table'

export default class ViewTable extends React.Component {

  constructor(props) {
    super(props);
    this.header = props.header;
    this.data = props.data;
  }

  makeNewRow(oneFlight, rowNumber, header) {
    return (<TableRow key={`tr-${rowNumber}`}>
      {header.map((column, columnNumber) =>
        <TableRowColumn key={`trc-${columnNumber}`}>
          {oneFlight[column.prop]}
        </TableRowColumn>
      )}
    </TableRow>);
  }


  render () {
    return (
      <div>
        <Table>
          <TableHeader 
            displaySelectAll={false}
            adjustForCheckbox={false}
          >
            <TableRow>
              {this.header.map((column, columnNumber) => 
                <TableHeaderColumn key={`thc-${columnNumber}`}>
                  {column.name}
                </TableHeaderColumn>
               )}
            </TableRow>
          </TableHeader>
          <TableBody
            displayRowCheckbox={false}
          >
            {this.props.data.map((oneFlight, i) => this.makeNewRow(oneFlight, i, this.header))}
          </TableBody>
        </Table>
      </div> )
  }
}
