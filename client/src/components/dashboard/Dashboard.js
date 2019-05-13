import React, { Component } from "react";
import ReactTable from "react-table";
import "react-table/react-table.css";
import axios from "axios";

export default class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = { employees: [] };
    axios
      .get("http://localhost:5000/api/employees/employees")
      .then(employees => this.setState({ employees: employees.data }));
  }

  render() {
    const columns = [
      {
        Header: "#",
        accessor: "emp_no"
      },
      {
        Header: "Date of Birth",
        accessor: "birth_date"
      },
      {
        Header: "First Name",
        accessor: "first_name"
      },
      {
        Header: "Last Name",
        accessor: "last_name"
      },
      {
        Header: "Gender",
        accessor: "gender"
      },
      {
        Header: "Hire Date",
        accessor: "hire_date"
      }
    ];

    return (
      <div className="scrollable">
        <ReactTable
          data={this.state.employees}
          columns={columns}
          defaultPageSize={10}
          filterable={true}
        />
      </div>
    );
  }
}
