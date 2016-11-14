import React from 'react';
import {observer} from 'mobx-react';

@observer
class CardItem extends React.Component {
  render() {
    let taskStyle = {
      width: "50px",
      height: "50px"
    };

    let margin = {
      marginLeft: "10px"
    };

    return (
        <tbody>
          <tr>
           <td>
             <img style={taskStyle} src={this.props.profile.avatar_url} alt=""/>
           </td>
            <td>
              <p style={margin}>{this.props.profile.name}</p>
            </td>
            <td>
              <p style={margin}>{this.props.profile.login}</p>
            </td>
          </tr>
        </tbody>
    )
  }
}

export default CardItem;