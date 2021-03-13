import React from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import { useSpring, animated } from "react-spring/web.cjs"; // web.cjs is required for IE 11 support
import { Button } from "@material-ui/core";
import { createList } from "../store/actions/createListAction";
import { useSelector, useDispatch } from "react-redux";
import CreateListForm from "./CreateListForm";

const useStyles = makeStyles((theme) => ({
  shape: {
    borderRadius: "2rem",
  },
  modal: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    // borderRadius: '2rem',
    // '&:focus': {
    //     outline: "none",
    //     borderColor: 'blue',
    //     boxShadow: 'none'

    // },
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

export default function BuyModal({ party, user_id }) {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const dispatch = useDispatch();

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
        BUY
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
            {/* <h2 id="spring-modal-title">1015 Folsom</h2>
                        <h4>10/20/2020</h4>
                        <p>San Francisco</p>
                        <p>Priec: Free </p>
                        <Button variant="contained" color="primary">Buy</Button> */}
            <BuyTicketForm
              party={party}
              user_id={user_id}
              partyStart={party.start_date}
            />
          </div>
        </Fade>
      </Modal>
    </div>
  );
}
