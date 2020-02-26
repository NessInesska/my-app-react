import React from 'react';
import './news-page-component.scss';
import {makeStyles} from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

const useStyles = makeStyles(theme => ({
    root: {
        '& > *': {
            margin: theme.spacing(1),
            width: 200,
        },
    },
}));

const NewsPageComponent = (db) => {
    const css = useStyles();

    console.log(db);
    // getNewsHeadings(this.props.db.default);
    return (
        <div className="main-layout">
            <div className="text-wrap">
                <p className="text-inner">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                    incididunt ut labore
                    et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                    aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
                    cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                    culpa qui officia deserunt mollit anim id est laborum.
                </p>

                <form className={css.root} noValidate autoComplete="off">
                    <TextField id="outlined-basic"
                               className="code-input"
                               label="Ваш код, пожалуйста (:"
                               variant="outlined"
                               onChange={(name, e) => {
                                   this.setState({name: "n"});
                                   console.log(e);
                               }} // Required.[Func].Default: () => {}. Will return the value.
                               onBlur={(e) => {
                                   console.log(e.target.value)
                               }}
                    />
                </form>
            </div>
        </div>
    );
};

export default NewsPageComponent;

// TextFieldProps={{
//     onChange: (e) => {
//         props.onChange && props.onChange(props.field.name, e.target.value);
//     },
//         onBlur: (e) => {
//     },
//         error: !!error,
//         helperText: error
// }}