import React from 'react';
import AdminTableRow from './AdminTableRow';
import PropTypes from 'prop-types';

export default class AdminTable extends React.Component{
  constructor(props){
    super(props);
  }

  renderSites() {
    return this.props.admins.map(admin => {
      return (
        <AdminTableRow
          key = {admin.Id}
          Pavadinimas = {admin.Pavadinimas}
          Paveiksliukas = {admin.Paveiksliukas}
        />);
    });
  }
  render(){
    return (
      <table>
        <tbody>
          <tr>
            <th className="login-title">Pavadimas</th>
            <th className="remove"> Paveiksliukas</th>
            <th className="remove"> Kaina </th>
          </tr>
          {this.renderSites()}
        </tbody>
      </table >
    );
  }
}
AdminTable.propTypes = {
  admins : PropTypes.any,
};