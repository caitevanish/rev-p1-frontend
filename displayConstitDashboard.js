//check for user

// console.log(localStorage.getItem('user'));

//check for account type

// ------------ Fetching page ----------------
async function getAllMeetings() {
  const httpResponse = await fetch('http://localhost:8080/meetings'); //url for the meetings table here
  const meetings = await httpResponse.json();
  // console.log(meetings);
  return meetings;
}

// ------------ Render Data ----------------
const displayConsDashboard = async function (data) {
  console.log('display const dash');
  const html = `
  <h4>I'm here!!</h4>

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
};
