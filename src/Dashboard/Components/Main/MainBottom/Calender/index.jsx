import React,{useState} from 'react';
import "./Calender.scss"
import dayjs from 'dayjs';
import { DemoContainer, DemoItem } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DateCalendar } from '@mui/x-date-pickers/DateCalendar';


export default function Calender() {
    const [value, setValue] = useState(dayjs(new Date().now));
  
    return (
        <div className="Calender">
        <LocalizationProvider dateAdapter={AdapterDayjs} >
            <DemoContainer components={['DateCalendar', 'DateCalendar']}>
                <DateCalendar value={value} onChange={(newValue) => setValue(newValue)} />
            </DemoContainer>
        </LocalizationProvider>
        </div>
    );
  }