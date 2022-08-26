// ----- Meetings Table Async Functions -----

// const meetingDetailsBtn = document.getElementById('meetingDetailsBtn'); //Get meeting by id, open in a modal

//-----Fetch Data-----

async function getAllMeetings() {
  const httpResponse = await fetch('http://localhost:8080/meetings');
  const meetings = await httpResponse.json();
  return meetings;
}

// -----Render Table-----

const renderMeetingDisplay = function () {
  console.log('step 2: display const dash');
  const html = `
  <div class="tempPadding">
  <h3>Upcoming Meetings</h3>
  <div id="meetingTable">
    <table class="table">
      <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">Date</th>
          <th scope="col">Time</th>
          <th scope="col">Location</th>
          <th scope="col">Summary</th>
          <th scope="col"></th>
        </tr>
      </thead>
      <tbody id="meetingTableBody">
        
      </tbody>
    </table>
  </div>
</div>
    `;
  console.log('step 3: pre-insertAdjacentHtml');
  constituentDisplay.insertAdjacentHTML('beforeend', html);
  console.log('step 4: post-insertAdjacentHtml');
};

async function renderMeetingTable() {
  const meetingList = await getAllMeetings();

  const meetingTableBody = document.getElementById('meetingTableBody');

  for (const meeting of meetingList) {
    const meetingRow = document.createElement('tr');

    const meetingIdData = document.createElement('th');
    meetingIdData.innerText = meeting.meetid;

    const meetingDateData = document.createElement('td');
    meetingDateData.innerText = meeting.time;

    const meetingTimeData = document.createElement('td');
    meetingTimeData.innerText = meeting.time;

    const meetingLocationData = document.createElement('td');
    meetingLocationData.innerText = meeting.location;

    const meetingSummaryData = document.createElement('td');
    meetingSummaryData.innerText = meeting.summary;

    meetingRow.appendChild(meetingIdData);
    meetingRow.appendChild(meetingDateData);
    meetingRow.appendChild(meetingTimeData);
    meetingRow.appendChild(meetingLocationData);
    meetingRow.appendChild(meetingSummaryData);
    meetingTableBody.appendChild(meetingRow);
  }
}
renderMeetingTable();

//-----Clear Table-----

async function clearMeetingTable() {
  const clearTableBody = document.getElementById('meetingTableBody');
  clearTableBody.innerHTML = '';
  renderMeetingDisplay();
}
