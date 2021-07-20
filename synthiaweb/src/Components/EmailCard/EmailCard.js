import React from "react";
import PropTypes from "prop-types";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import { TextField } from "@material-ui/core";
import { FormControl } from "@material-ui/core";
import { Button } from "@material-ui/core";
import { useForm } from "react-hook-form";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "90%",
    maxWidth: 600,
    background: "rgba(255,255,255,0.5)",
    margin: "20px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  cardContent: {
    width: "100%",
  },
  form: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    marginLeft: theme.spacing(2),
    marginRight: theme.spacing(2),
  },
  field: {
    width: "100%",
  },
  button: {
    marginTop: theme.spacing(2),
    width: "100%",
    background: "rgba(140,217,234,0.5)",
    color: "white",
    "&:hover": {
      backgroundColor: "darkGrey",
      color: "white",
    },
  },
}));

const CssTextField = withStyles({
  root: {
    "& .MuiFormLabel-root": {
      color: "white",
    },
    "& .MuiInput-underline:after": {
      borderBottomColor: "white",
    },
    "& .MuiInput-underline:before": {
      borderBottomColor: "white",
    },
    "& .MuiInput-underline:hover:before":
      {
        borderBottomColor: "white",
      },
    "& .MuiInputBase-root": {
      color: "white",
    },
  },
})(TextField);

const EmailCard = (props) => {
  const classes = useStyles();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    props.pushMail(data);
  };

  return (
    <Card className={classes.root}>
      <CardContent className={classes.cardContent}>
        <form onSubmit={handleSubmit(onSubmit)} className={classes.form}>
          <FormControl className={classes.field}>
            <CssTextField
              id="email"
              label="Email"
              type="text"
              fullWidth
              {...register("email", { required: true })}
            />
            {errors.name && <span>This field is required</span>}
          </FormControl>
          <Button type="submit" color="primary" className={classes.button}>
            Submit
          </Button>
        </form>
      </CardContent>
    </Card>
  );
};

EmailCard.propTypes = {
  pushMail: PropTypes.func.isRequired,
};

export default EmailCard;
