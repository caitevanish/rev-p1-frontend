// ----- Meetings Table Async Functions -----

const meetingTableBody = document.getElementById('meetingTableBody'); //shows upcoming meetings
const meetingDetailsBtn = document.getElementById('meetingDetailsBtn'); //Get meeting by id, open in a modal

async function getAllMeetings() {
  const httpResponse = await fetch('http://localhost:8080/meetings'); //url for the meetings table here
  const meetings = await httpResponse.json();
  console.log(meetings);
  return meetings;
}

async function renderMeetingTable() {
  const meetingList = await getAllMeetings();

  for (const meeting of meetingList) {
    const meetingRow = document.createElement('tr'); //making the row

    const meetingIdData = document.createElement('th');
    meetingIdData.innerText = meeting.meet_id;

    const meetingTimeData = document.createElement('td');
    meetingTimeData.innerText = meeting.time;

    const meetingLocationData = document.createElement('td');
    meetingLocationData.innerText = meeting.location;

    const meetingSummaryData = document.createElement('td');
    meetingSummaryData.innerText = meeting.summary;

    meetingRow.appendChild(meetingIdData);
    meetingRow.appendChild(meetingTimeData);
    meetingRow.appendChild(meetingLocationData);
    meetingRow.appendChild(meetingSummaryData);
    meetingTableBody.appendChild(meetingRow);
  }
}
renderMeetingTable();