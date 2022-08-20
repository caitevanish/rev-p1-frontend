const complaintTableBody = document.getElementById('complaintTableBody');

//-----Fetch Data-----

async function getAllComplaints() {
  const httpResponse = await fetch('http://localhost:8080/complaints');
  const complaints = await httpResponse.json();
  console.log(complaints);
  return complaints;
}

//-----Render Table-----

async function renderComplaintsTable() {
  const complaintList = await getAllComplaints();

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
renderComplaintsTable();

//-----Clear Table-----

async function clearComplaintsTable() {
  console.log('clearing table');
  const clearTableBody = document.getElementById('meetingTableBody');
  clearTableBody.innerHTML = '';
}
