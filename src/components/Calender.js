import React, { useEffect, useState } from "react";
import axios from "axios";
import "../assets/css/calender.css";

const Calender = () => {
  const [apiD, useapiD] = useState();

  useEffect(() => {
    const fetches = async () => {
      try {
        const res = await axios.get(
          "https://www.googleapis.com/calendar/v3/calendars/event.rctcet@gmail.com/events?key=AIzaSyAjSip5-JVa1-YsOQRvITLerylDASrh6Gc"
        );
        useapiD(res.data);
      } catch (error) {
        alert(error);
      }
    };
    fetches();
  }, []);
  const months = [
    "January",
    "February",
    "March",
    "April",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  return (
    <div className="max">
      <div className="iframe">
        <iframe
          src="https://calendar.google.com/calendar/embed?height=600&wkst=1&bgcolor=%23ffffff&ctz=Asia%2FKolkata&showCalendars=1&showPrint=0&showDate=1&showTz=0&showTitle=1&title=Rotaract%20Event%20Tracker&src=ZXZlbnQucmN0Y2V0QGdtYWlsLmNvbQ&color=%23039BE5"
          style={{ border: "solid 1px #777", width: "100%", height: "100%" }}
        ></iframe>
      </div>
      <div className="events">
        <div className="img">
          <img src={apiD?.items[0]?.attachments[0].fileUrl} alt="event-image" />
        </div>
        <div className="info">
          <div className="title">
            <strong> {apiD?.items[0].summary}</strong>
          </div>
          <div className="desc">
            About : {apiD?.items[0].description?.slice(0, 100)}...
          </div>
          <div className="date">
            <strong>Date : </strong>
            {months[parseInt(apiD?.items[0].end.dateTime?.split("-")[1]) - 1] +
              " " +
              parseInt(apiD?.items[0].end.dateTime?.split("-")[2]) +
              " " +
              " " +
              parseInt(apiD?.items[0].end.dateTime)}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Calender;
