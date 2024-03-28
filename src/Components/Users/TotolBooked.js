import { useEffect, useState,Fragment } from "react";
import Card from "../UI/Card/Card";
import classes from './TotalBooked.module.css'

const TotalBooked = (props)=>{
    const [totalBooked,setTotalBooked] = useState(0);

    useEffect(()=>{
        
            let count=0;
            for(const obj of props.users){
                if(obj.status===0)
                    count++;
                
            }
            setTotalBooked(count);
        
    },[props.users])

    return (
        <Fragment>
            <Card className={classes.p}>
            <p>Total Booked: {totalBooked}</p>
            </Card>
        </Fragment>
    );
}

export default TotalBooked;