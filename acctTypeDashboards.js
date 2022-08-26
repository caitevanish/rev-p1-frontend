//check for user
const meetingDetailsBtn = document.getElementById('meetingDetailsBtn');

//============================================
// ------------ Fetching Data ----------------
//============================================

async function getAllMeetings() {
  const httpResponse = await fetch('http://localhost:8080/meetings');
  const meetings = await httpResponse.json();
  return meetings;
}

// -------------------------------------------

async function getAllComplaints() {
  const httpResponse = await fetch('http://localhost:8080/complaints');
  const complaints = await httpResponse.json();
  // console.log(complaints);
  return complaints;
}

//============================================
// ------------ Render Data ----------------
//============================================

const renderConstitMeetingTable = function () {
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

// async function renderMeetingTable() {
async function renderMeetingTable() {
  console.log('step 5:');
  const meetingList = await getAllMeetings();

  const meetingTableBody = document.getElementById('meetingTableBody');

  for (const meeting of meetingList) {
    const meetingRow = document.createElement('tr'); //making the row

    const meetingIdData = document.createElement('th');
    meetingIdData.innerText = meeting.meet_id;

    const meetingDateData = document.createElement('td');
    meetingDateData.innerText = meeting.time;

    const meetingTimeData = document.createElement('td');
    meetingTimeData.innerText = meeting.time;

    const meetingLocationData = document.createElement('td');
    meetingLocationData.innerText = meeting.location;

    const meetingSummaryData = document.createElement('td');
    meetingSummaryData.innerText = meeting.summary;

    // const editMeetingButton

    meetingRow.appendChild(meetingIdData);
    meetingRow.appendChild(meetingDateData);
    meetingRow.appendChild(meetingTimeData);
    meetingRow.appendChild(meetingLocationData);
    meetingRow.appendChild(meetingSummaryData);
    meetingTableBody.appendChild(meetingRow);
    // }
    // if( accountType == "MEMBER"){
    //   const editMeetingButton = document.createElement('button');
    //   editMeetingButton.innerText =

    // }
  }
  // renderMembersComplaintTable();

  //-----Clear Table-----

  async function clearMeetingTable() {
    const clearTableBody = document.getElementById('complaintTableBody');
    clearTableBody.innerHTML = '';
  }

  // -------------- Render Data ----------------

  const renderMembersComplaintTable = function () {
    console.log('step 2: display complaint table');
    const html = `
  <div class="tempPadding">
  <h3>Complaints</h3>
  <div id="complaintTable">
    <table class="table">
      <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">Description</th>
          <th scope="col">Status</th>
          <th scope="col">Priority</th>
          <th scope="col">Meeting</th>
          <th scope="col"></th>
        </tr>
      </thead>
      <tbody id="complaintTableBody"></tbody>
    </table>
  </div>
</div>
    `;
    console.log(html);
    memberDisplay.insertAdjacentHTML('beforeend', html);
  };

  async function renderComplaintsTable() {
    const complaintList = await getAllComplaints();

    const complaintTableBody = document.getElementById('complaintTableBody');

    for (const complaint of complaintList) {
      const compRow = document.createElement('tr'); //making the row

      const compIdData = document.createElement('th');
      compIdData.innerText = complaint.complaint_id;

      const compDescripData = document.createElement('td');
      compDescripData.innerText = complaint.description;

      const compStatusData = document.createElement('td');
      compStatusData.innerText = complaint.status;

      const compPriorityData = document.createElement('td');
      compPriorityData.innerText = complaint.priority;

      const compMeetingData = document.createElement('td');
      compMeetingData.innerText = complaint.m_id;

      compRow.appendChild(compIdData);
      compRow.appendChild(compDescripData);
      compRow.appendChild(compStatusData);
      compRow.appendChild(compPriorityData);
      compRow.appendChild(compMeetingData);
      complaintTableBody.appendChild(compRow);
    }
  }

  //-----Clear Table-----

  async function clearComplaintsTable() {
    console.log('clearing table');
    const clearTableBody = document.getElementById('complaintTableBody');
    clearTableBody.innerHTML = '';
  }
}

renderMeetingTable();
renderComplaintsTable();
