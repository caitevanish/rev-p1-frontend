//-----Variables:
const complaintTextInput = document.getElementById('complaintInput');
const submitComplaintBtn = document.getElementById('submitComplaintBtn');

//-----Submit complaint button:
submitComplaintBtn.addEventListener('click', async (event) => {
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

    // option 1: switch back to home page
    window.location = './home.html';

    //option 2: original plan
    // clearComplaintsTable();
    // renderComplaintsTable();
  } else {
    alert('Something went Wrong');
  }
});
