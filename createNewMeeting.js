//push a button and the complaint modal opens
// Value of the input gets sent to the db on submit
//modal closes, alert window pops up with submission note
//New meeting is put in the table

//-----Date/Time-----

flatpickr('#datepicker', {
  enableTime: true,
  minTime: '16:00',
  maxTime: '20:00',
  minDate: 'today',
  maxDate: new Date().fp_incr(31),
  altInput: true,
  dateFormat: 'Y-m-d H:i',
});

//-----Modal Buttons----- (for later)
const openMeetingModal = document.getElementById('');

//-----Meeting variables-----
// const timeInput = document.getElementById('datepicker');
const timeInput = document.getElementsByClassName('dateFieldInput');
const locationInput = document.getElementById('locationFieldInput');
const summaryInput = document.getElementById('meetingInput');

const submitMeetingBtn = document.getElementById('submitMeetingBtn');

//=========================
//-----ASYNC FUNCTIONS-----
//=========================

//-----Location-----

const options = document.querySelectorAll('.dropdown-item');

options.forEach((option) => {
  option.addEventListener('click', () => {
    const str = option.getAttribute('value');
    console.log(option);
    document.getElementById('locationFieldInput').value = str;
  });
});

//-----Submit Event-----
submitMeetingBtn.addEventListener('click', async (event) => {
  event.preventDefault();

  // const preDate = timeInput.value;
  const fullDate = new Date(timeInput.value);
  const epochdate = fullDate.getTime();

  // const time = new Date(timeInput.value); //convert to epoch time
  const time = epochdate; //convert to epoch time
  const location = locationInput.value;
  const summary = summaryInput.value;
  const newMeeting = {
    id: 0,
    time,
    // time: 1661034961, //temporary
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
    console.log(time);
    alert('A new meeting has been made.');
    timeInput.value = '';
    locationInput.value = '';
    summaryInput.value = '';

    // option 1: switch back to home page
    window.location = './home.html';

    //option 2: original plan
    // clearMeetingTable();
    // renderMeetingDisplay();
  } else {
    alert('Something went wrong.');
  }
});
