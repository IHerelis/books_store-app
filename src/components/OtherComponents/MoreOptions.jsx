import { IconButton, Menu, MenuItem } from '@mui/material';
import MoreIcon from '@mui/icons-material/MoreVert';
import React from 'react';
import './MoreOptions.css';
import { useDispatch } from 'react-redux';
import { deleteBook } from '../../thunks/booksThunks';



const MoreOptions = ({product}) => {

  const dispatch = useDispatch();

  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleDelete = () => {
    handleClose();
    const userSure = confirm("Confirm deletion");

    if (userSure) {
      dispatch(deleteBook(product));
      console.log("product", product);
    }
  };

  const handleUpdate = () => {
    handleClose();

  };

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };


  return (
    <div className='product-options__wrapper'>
      <div className='product-options'>
        <IconButton
          size="large"
          aria-label="display more actions"
          aria-controls="menu-appbar"
          aria-haspopup="true"
          onClick={handleMenu}
          color="inherit"
        >
          <MoreIcon />
        </IconButton>
        <Menu
          id="menu-appbar"
          anchorEl={anchorEl}
          anchorOrigin={{
            vertical: 'top',
            horizontal: 'right',
          }}
          keepMounted
          transformOrigin={{
            vertical: 'top',
            horizontal: 'right',
          }}
          open={Boolean(anchorEl)}
          onClose={handleClose}
        >
          <MenuItem onClick={handleDelete}>Delete</MenuItem>
          <MenuItem onClick={handleUpdate}>Update</MenuItem>
          <MenuItem onClick={handleClose}>Cancel</MenuItem>
        </Menu>
      </div>
    </div>
  );
}

export default MoreOptions;
