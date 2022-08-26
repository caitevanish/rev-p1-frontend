// const complaintTableBody = document.getElementById('complaintTableBody');

//-----Fetch Data-----

async function getAllComplaints() {
  const httpResponse = await fetch('http://localhost:8080/complaints');
  const complaints = await httpResponse.json();
  return complaints;
}

//-----Render Table-----

const renderComplaintDisplay = function () {
  // console.log('step 2: display complaint table');
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
  memberDisplay.insertAdjacentHTML('beforeend', html);
};

async function renderComplaintsTable() {
  const complaintList = await getAllComplaints();

  const complaintTableBody = document.getElementById('complaintTableBody');

  for (const complaint of complaintList) {
    const compRow = document.createElement('tr');

    const compIdData = document.createElement('th');
    compIdData.innerText = complaint.complaintid;

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

    //Update Complaint button
    const compUpdateBtn = document.createElement('td'); //create table data placeholder

    compUpdateBtn.innerHTML = `
    <button type="button" class="btn btn-info btn-sm">Update</button>
    `;
    compUpdateBtn.addEventListener('click', async (event) => {
      event.preventDefault();
      console.log('in the button');
      //open up a modal with the form and input in it...
    });

    compRow.appendChild(compUpdateBtn);

    complaintTableBody.appendChild(compRow);
  }
}
renderComplaintsTable();

//-----Clear Table-----

async function clearComplaintsTable() {
  console.log('clearing table');
  const clearTableBody = document.getElementById('complaintTableBody');
  clearTableBody.innerHTML = '';
  // renderComplaintDisplay();
}
