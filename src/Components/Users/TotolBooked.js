import { useEffect, useState } from "react";

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
        <div>
            <p>Total Booked: {totalBooked}</p>
        </div>
    );
}

export default TotalBooked;