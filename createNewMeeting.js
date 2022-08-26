//push a button and the complaint modal opens
// Value of the input gets sent to the db on submit
//modal closes, alert window pops up with submission note
//New meeting is put in the table

//-----Modal Buttons----- (for later)
const openMeetingModal = document.getElementById('');

//-----Meeting variables-----
const timeInput = document.getElementById('dateFieldInput');
const locationInput = document.getElementById('locationFieldInput');
const summaryInput = document.getElementById('meetingInput');

const submitMeetingBtn = document.getElementById('submitMeetingBtn');

//=========================
//-----ASYNC FUNCTIONS-----
//=========================

//-----Date/Time-----

flatpickr('#datepicker', {
  enableTime: true,
  minTime: '16:00',
  maxTime: '20:00',
  minDate: 'today',
  maxDate: new Date().fp_incr(31),
  altInput: true,
  altInput: true,
  dateFormat: 'Y-m-d H:i',
});

//-----Location-----
//User can type in a new location, or...
//when the user clicks the dropdown, they select one of the three usual spots and on click will populate the value of input field with that saved location.

const options = document.querySelectorAll('.dropdown-item');

options.forEach((option) => {
  option.addEventListener('click', () => {
    const str = option.getAttribute('value');
    console.log(option);
    document.getElementById('locationFieldInput').value = str;
    // console.log(document.getElementById('locationFieldInput').value);
  });
});

//-----Summary-----

//-----Submit Event-----
document.addEventListener('submit', async (event) => {
  event.preventDefault();

  // const time = timeInput.value; //convert to epoch time
  const location = locationInput.value;
  const summary = summaryInput.value;
  const newMeeting = {
    id: 0,
    // time,
    time: 1661034961, //temporary
    location,
    summary,
  };

  const httpResponse = await fetch('http://localhost:8080/meetings', {
    method: 'POST',
    body: JSON.stringify(newMeeting),
    headers: {
      'Content-Type': 'application/json',
    },
  });
  if (httpResponse.status == 201) {
    alert('A new meeting has been made.');
    timeInput.value = '';
    locationInput.value = '';
    summaryInput.value = '';
    clearMeetingTable();
    renderMeetingDisplay();
  } else {
    alert('Something went wrong.');
  }
});
