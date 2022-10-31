import React from 'react';
import { ScheduleComponent, Day, Week, WorkWeek, Month, Agenda, Inject, Resize, DragAndDrop } from '@syncfusion/ej2-react-schedule';
import { scheduleData } from '../data/data';
import { Header } from '../components';

const Calendar = () => {
  return (
    <div className="m-2 md:m-10 mt-24 p-2 mg:p-10 bg-white rounded-3xl">
      <Header title="Calendary"/>
      <ScheduleComponent height="75vh" eventSettings={{ dataSource: scheduleData}} selectedDate={new Date(2021, 0, 10)}>
        <Inject services={[Day, Week, WorkWeek, Month, Agenda, Resize, DragAndDrop]}/>
      </ScheduleComponent>
    </div>
  )
}

export default Calendar