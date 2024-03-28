import Card from "../UI/Card/Card";
import classes from './FindUsers.module.css'
import { Fragment } from "react";

const FindUsers = props =>{

    const slotHandler=(event)=>{
        props.onChangeFilter(event.target.value);
    }

    return (
        <Fragment>
            <Card className={classes.input}>
            <label htmlFor="search">Find Seat:</label>
            <input value={props.selected} type='number' id="search" onChange={slotHandler}></input>
            </Card>
        </Fragment>
    );
}

export default FindUsers