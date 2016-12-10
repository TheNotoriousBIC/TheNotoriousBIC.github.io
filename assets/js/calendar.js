$(document).ready(function() {

    // page is now ready, initialize the calendar...

    $('#calendar').fullCalendar({
      googleCalendarApiKey: 'AIzaSyDOydzEDTAa-pSVdmbBjpTjbOdGFTvfUQc',
       events: {
           googleCalendarId: 'f9fo83frggb18uvbrqki780acs@group.calendar.google.com'
       }
    });
});
