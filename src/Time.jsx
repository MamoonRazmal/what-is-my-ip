import{DateTime} from "luxon";
export default function Time(){
    const dt=DateTime.local();
    console.log("this isthe time",dt.year)
    return(
        <>
        <h4>Your timezone is :{dt.zoneName} </h4>
        <h4>Today Date is  :{dt.year} /{dt.month} /{dt.day}</h4>
        <h4>Today Time is  :{dt.hour} /{dt.minute} /{dt.second}</h4>
        </>
    )
}