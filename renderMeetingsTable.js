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
  // console.log('step 2: display const dash');
  const html = `
  <div class="tempPadding">
  <h3>Upcoming Meetings</h3>

  <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#openMeetingModal">
  Create Meeting
</button>

  <!-- -----------------Modal----------------------- -->
  <div class="modal fade" id="openMeetingModal" data-bs-backdrop="static" tabindex="-1" data-bs-keyboard="false"  aria-labelledby="staticBackdropLabel" aria-hidden="true" data-bs-whatever="@fat">
  <div class="modal-dialog modal-dialog-centered">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title-center" id="exampleModalLabel">Create Meeting</h5>   
      </div>
  <!-- ----------------Meeting Form---------------- -->
  
  <div class="">    
  <div class="modal-body">
      <form action="" method="post">
      <fieldset>
        <legend>Create a Meeting</legend>
        
        <!-- Date/time -->

      <div class="input-group mb-3">
                <div class="input-group date">
                  <span class="input-group-append" >
                  <span class="input-group-text">
                  <i class="fa fa-calendar"></i></span>
                  
                    <input id="datepicker" class="form-control bg-white">
                  
                    </span>
                </div>
            </div>

<!-- Location -->
        
      <div class="input-group mb-3">
        <span class="input-group-text">Location</span>

<!-- input -->
        <!-- <input id="locationFieldInput" type="text" class="form-control" aria-label="Text input with dropdown button"> -->
        <input id="locationFieldInput" type="text" class="form-control" aria-label="Text input with dropdown button" required="required">

<!-- drop down button -->
        <button  class="btn btn-outline-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false" >Dropdown</button>

  <!-- drop down list -->

        <ul id="selection" class="dropdown-menu dropdown-menu-end" ;">
          <li><a value="The Silent Banshee" name="sb" class="dropdown-item">The Silent Banshee</a></li>

          <li><a value="The Poisoned Pen" class="dropdown-item">The Poisoned Pen</a></li>
          
          <li><a value="Sleepy Hollow Civic Center" class="dropdown-item" >Sleepy Hollow Civic Center</a></li>
    
          <li><hr class="dropdown-divider"></li>
          <li><a value="Location TBD" class="dropdown-item">Location TBD</a></li>
        </ul>

      </div>
      </form>
        
  <!-- Summary -->
      <div class="input-group">
        <span class="input-group-text">Meeting Topics</span>
        <textarea name="meetingText" id="meetingInput" 
        placeholder="On the docket this week..."
        class="form-control" 
        aria-label="With textarea" required="required"></textarea>
      </div>
    </fieldset>
    </form>
      </div>
  <!-- ----------------Modal Footer---------------- -->
  <div class="modal-footer">
        <button type="button" class="btn btn-danger" data-bs-dismiss="modal">Close</button>

        <button id="submitComplaintBtn" class="btn btn-primary" type="submit" name="submit_complaint" value="complaint" data-bs-dismiss="modal" >
          Submit
        </button>  
      </div>
      </div>
        </div>
      </div>
    </div>
  <!-- ---------------End Modal----------------------- -->
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
    <div></div>
  </div>
</div>
    `;
  // console.log('step 3: pre-insertAdjacentHtml');
  constituentDisplay.insertAdjacentHTML('beforeend', html);
  // console.log('step 4: post-insertAdjacentHtml');
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
