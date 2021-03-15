import React, { useState } from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import { useSpring, animated } from "react-spring/web.cjs"; // web.cjs is required for IE 11 support
import { Button } from "@material-ui/core";
import { createList } from "../store/actions/listActions";
import { useSelector, useDispatch } from "react-redux";
import {
  clearAllLists,
  editList,
  getAllLists,
} from "../store/actions/listActions";
import EditIcon from "@material-ui/icons/Edit";

const useStyles = makeStyles((theme) => ({
  shape: {
    borderRadius: "2rem",
  },
  modal: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: "2rem",
    "&:focus": {
      outline: "none",
      borderColor: "blue",
      boxShadow: "none",
    },
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    border: "0.3rem solid #000",
    boxShadow: theme.shadows["5rem"],
    padding: theme.spacing(2, 4, 3),
  },
}));

const Fade = React.forwardRef(function Fade(props, ref) {
  const { in: open, children, onEnter, onExited, ...other } = props;
  const style = useSpring({
    from: { opacity: 0 },
    to: { opacity: open ? 1 : 0 },
    onStart: () => {
      if (open && onEnter) {
        onEnter();
      }
    },
    onRest: () => {
      if (!open && onExited) {
        onExited();
      }
    },
  });

  return (
    <animated.div ref={ref} style={style} {...other}>
      {children}
    </animated.div>
  );
});

Fade.propTypes = {
  children: PropTypes.element,
  in: PropTypes.bool.isRequired,
  onEnter: PropTypes.func,
  onExited: PropTypes.func,
};

export default function EditListModal({listId}) {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const dispatch = useDispatch();

  const [title, setTitle] = useState("");

  const updateTitle = (e) => {
    setTitle(e.target.value);
  };

  const handleSubmit = async (e) => {
     e.preventDefault();
    const payload = {
      title,
    };
    await dispatch(editList(payload,listId));
    dispatch(clearAllLists());
    dispatch(getAllLists());
  };

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <EditIcon color="primary" onClick={handleOpen} className="delete-icon" />
      <Modal
        aria-labelledby="spring-modal-title"
        aria-describedby="spring-modal-description"
        className={classes.modal}
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <div className={classes.paper}>
            <form onSubmit={handleSubmit}>
              <h2>Edit a List</h2>
              <div>
                <h3>Name</h3>
                <input
                  required
                  onChange={updateTitle}
                  className="list-input"
                  maxlength="20"
                ></input>
              </div>
              <div className="edit-list__button">
                <Button type="submit" variant="contained" color="primary">
                  Confirm
                </Button>
              </div>
            </form>
          </div>
        </Fade>
      </Modal>
    </div>
  );
}
