//push a button and the complaint modal opens
//Value of the input gets sent to the db on submit
//modal closes, alery window pops up with submission note
//New complaint is put in the table

//-----Modal Buttons----- (for later)
const openComplaintModal = document.getElementById('openComplaintModal');
const closeModalBtn = document.getElementById('closeModalBtn');
//Warning for when people are closing modal and there is content in the field.

//-----Complaint Stuff-----
const complaintTextInput = document.getElementById('complaintInput');
const submitComplaintBtn = document.getElementById('submitComplaintBtn');

//-----functions:
//

document.addEventListener('submit', async (event) => {
  event.preventDefault();

  const description = complaintTextInput.value;
  const newComplaint = {
    id: 0,
    description,
    status: 'PENDING',
    priority: 'TBD',
    m_id: -1,
  };

  const httpResponse = await fetch('http://localhost:8080/complaints', {
    method: 'POST',
    body: JSON.stringify(newComplaint),
    headers: {
      'Content-Type': 'application/json',
    },
  });

  if (httpResponse.status == 201) {
    alert(
      'Your Complaint has been sent. A council person will review your complaint soon. Please check back in with the upcoming meetings to see if your complaint will be brought up at a future meeting. Thank you.'
    );
    complaintTextInput.value = '';
  } else {
    alert('Something went Wrong');
  }
  renderComplaintsTable();
});
