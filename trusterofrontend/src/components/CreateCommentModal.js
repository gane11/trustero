import React, { useState } from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import { useSpring, animated } from "react-spring/web.cjs"; // web.cjs is required for IE 11 support
import { Button } from "@material-ui/core";
import { createComment, getAllComments, clearAllComments } from "../store/actions/commentActions";
import { useSelector, useDispatch } from "react-redux";
import "./CreateCommentModal.css";

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

export default function CreateCommentModal({ taskId }) {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const dispatch = useDispatch();

  const [description, setDescription] = useState("");


  const updateDescription = (e) => {
    setDescription(e.target.value);
  };

  const handleSubmit = async (e) => {
    const payload = {
      description,
      taskId
    };
    await dispatch(createComment(payload));
    setOpen(false)
    dispatch(clearAllComments());
    dispatch(getAllComments())
  };

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Button
        className={classes.shape}
        size="large"
        variant="contained"
        color="primary"
        type="button"
        onClick={handleOpen}
      >
        ADD COMMENT
      </Button>
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
            {/* <form onSubmit={handleSubmit}> */}
            <h2>Add Comment</h2>
            <div>
              <textarea
                required
                onChange={updateDescription}
                cols="17"
                rows="5"
                maxlength="150"
                className="comment-textarea"
              ></textarea>
            </div>
            <Button
              onClick={() => {
                handleSubmit();
              }}
              variant="contained"
              color="primary"
            >
              ADD
            </Button>
            {/* </form> */}
          </div>
        </Fade>
      </Modal>
    </div>
  );
}
