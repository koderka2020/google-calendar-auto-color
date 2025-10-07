/**
 * Automatically color events you created vs. invited ones.
 * - Your own events → Blue
 * - Invited events → Default color
 */

function colorMyEvents() {
  const calendar = CalendarApp.getDefaultCalendar();
  const now = new Date();
  const nextMonth = new Date();
  nextMonth.setMonth(now.getMonth() + 1);

  // Fetch events in the next 30 days (adjust as needed)
  const events = calendar.getEvents(now, nextMonth);

  const MY_COLOR = CalendarApp.EventColor.BLUE;   // change color here
  const DEFAULT_COLOR = CalendarApp.EventColor.GRAY; // for others

  for (let event of events) {
    try {
      if (event.isOwnedByMe()) {
        event.setColor(MY_COLOR);
      } else {
        event.setColor(DEFAULT_COLOR);
      }
    } catch (e) {
      Logger.log('Error coloring event: ' + event.getTitle() + ' → ' + e);
    }
  }
}
