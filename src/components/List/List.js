import React from 'react';
import { List, ListItem } from 'material-ui/List';
import Divider from 'material-ui/Divider';
import Subheader from 'material-ui/Subheader';
import Avatar from 'material-ui/Avatar';
import avatarPhoto from '../../assets/img/teacup.jpg';
import { grey400, darkBlack } from 'material-ui/styles/colors';
import IconButton from 'material-ui/IconButton';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';
import IconMenu from 'material-ui/IconMenu';
import MenuItem from 'material-ui/MenuItem';

const iconButtonElement = (
  <IconButton
    touch={true}
    tooltip="more"
    tooltipPosition="bottom-left"
  >
    <MoreVertIcon color={grey400} />
  </IconButton>
);

const rightIconMenu = (
  <IconMenu iconButtonElement={iconButtonElement}>
    <MenuItem>Share</MenuItem>
    <MenuItem>Website</MenuItem>
  </IconMenu>
);

const ShopList = ({ locations }) => (
  <List style={{ width: '50%' }}>
    <Subheader>Tea Shops and Locations</Subheader>
    {locations.map(location  => {
      return <div key={location.name}>
        <ListItem
          leftAvatar={<Avatar src={avatarPhoto} />}
          rightIconButton={rightIconMenu}
          primaryText={location.name}
          secondaryText={
            <p>
              <span style={{ color: darkBlack }}>{location.street} {location.city} {location.state}</span> | {location.description}
              {location.shopUrl}
            </p>
          }
          secondaryTextLines={2}
        />
        <Divider inset={true} />
      </div>;
    })}
  </List>
);

export default ShopList;