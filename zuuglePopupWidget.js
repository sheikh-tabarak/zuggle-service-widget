const modalStyles = `
  .open-modal-btn {
    padding: 10px 20px;
    background-color: #4285f4;
    color: white;
    border: none;
    border-radius: 4px;
    font-size: 16px;
  }

  .search-icon{
    cursor: pointer;
  }

  .modal {
  font-family: dm-sans, sans-serif;
    display: none; !important;
    position: fixed;
    z-index: 1;
    left: 0;
    top: 0;
    width: 100vw;
    height: 100vh;
    overflow: hidden;
    justify-content: center;
    align-items: center;
    background-color: rgba(0, 0, 0, 0.4);
    font-family: dm-sans, sans-serif;

    @media (max-width: 768px) {
      // background-color: #fff;
    }
  }
  #activityModal{
      justify-content: flex-start;

  }
  .modal.visible {
    display: flex; !important;
    justify-content: center; !important;
    align-items: center; !important;
  }

  .modal-content {
    background-color: #fefefe;
    padding: 5px ;
    border: none;
    width: 100%;
    height: 100%;
    max-width: 500px;
    max-height: none;
    overflow-y: hidden; 
    box-sizing: border-box;
    transform: translateX(-550px);
    transition: all .3s ease-in-out ;


    @media (max-width: 768px) {
      width: 100%;
      height: 100%;
      max-width: 500px;
      border-radius: 0;
      padding: 15px 15px;
    }
  }
  
  .modal-content::-webkit-scrollbar,
  .middle-box::-webkit-scrollbar, slider::-webkit-scrollbar {
    display: none;
  }

  .modal-content, middle-box, slider {
    -ms-overflow-style: none;
    scrollbar-width: none;
  }

  .modal-page {
    display: none;
  }

  .modal-page.active {
    display: flex;
    flex-direction: column;
  }

  .modal-header {
    display: flex;
    flex-direction: row;
    justify-content: start;
    align-items: center;
    margin-bottom: 40px;
    border: 1.5px solid #ccc;
    border-left: none;
    border-right: none;
    

    @media (max-width: 768px) {
      margin-top: -15px;
      margin-bottom: 0px;
      padding-bottom: 0px;
    }
  }
  .modal-header p {
    padding: 10px 0 7px 10px;
    font-size: 15px;
    margin: 0px;

    @media (max-width: 768px) {
      font-size: 18px;
    }
  }


.modal-header1st {
    display: flex;
    flex-direction: row;
    justify-content: start;
    align-items: center;
    margin-bottom: 40px;
    border: 1.5px solid #ccc;
    border-left: none;
    border-right: none;
    

    @media (max-width: 768px) {
      margin-top: -15px;
      margin-bottom: 0px;
      padding-bottom: 0px;
    }
  }
  .modal-header1st p {
    padding: 10px 0 7px 10px;
    font-size: 15px;
    margin: 0px;

    @media (max-width: 768px) {
      font-size: 18px;
    }
  }

  .modal-body {
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin-top: -40px;
    overflow: visible;

    @media (max-width: 768px) {
      margin-top: -25px;
    }
  }

  .modal-body-result {
    display: flex;
    flex-direction: column;
    justify-content: flex-start; 
    margin-top: -18px; 
    overflow: visible;
    overflow-y: auto ;
    overflow-x: hidden !important;
    max-height: calc(100vh - 100px);
    padding-bottom: 20px; 

    @media (max-width: 768px) {
      margin-top: 0; /* Reset margin on mobile */
      max-height: calc(100vh - 150px); /* Adjusted for mobile */
      overflow-y: auto; /* Enable scrolling if content is too long */
    }
  }

  .close {
    color: #aaa;
    font-size: 28px;
    font-weight: bold;
    cursor: pointer;
  }

  .close:hover {
    color: black;
  }

  .form-section {
    margin-bottom: 0px;
    color: #888;

    @media (max-width: 768px) {
      margin-top: 30px;
      margin-bottom: 0px;
    }
  }

  .input-container {
    position: relative;
  }

  .input-field {
    width: 100%;
    padding: 12px 40px;
    border-radius: 5px;
    border: 1px solid #e0e0e0;
    box-sizing: border-box;
    font-size: 14px;

    @media (max-width: 768px) {
    
      padding: 10px 36px;
    }
  }

  .input-field.disabled {
    background-color: #f5f5f5;
    color: #666;
    cursor: not-allowed;
    pointer-events: none;
    user-select: none;
    --webkit-user-select: none;
    --moz-user-select: none;
    --ms-user-select: none;
  }

  .input-icon {
    position: absolute;
    left: 12px;
    top: 50%;
    transform: translateY(-50%);
    color: #999;
  }

  .input-icon-right {
    position: absolute;
    right: 12px;
    top: 50%;
    transform: translateY(-50%);
    color: #999;
  }

  .date-input-container {
    margin-top: 10px;
    position: relative;
    cursor: pointer;
  }
  #activity-time{
    background: #0060ff1f;
    padding: 12px;  
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
    border-radius: 8px ;
    margin:7px 0px;
    
  }
  #activity-time div:nth-child(3){
    display: none;
  }
  .date-input {
    padding: 12px 40px;
    border-radius: 5px;
    border: 1px solid #e0e0e0;
    width: 100%;
    box-sizing: border-box;
    cursor: pointer;
    background-color: white;
    display: flex;
    align-items: center;

    @media (max-width: 768px) {
      padding: 10px 36px;
    }

  }
  
  .date-input-display {
    color: #333;
    font-size: 16px;
    pointer-events: none;
  }
  
  .date-input-display.placeholder {
    color: #999;
  }
  
  .date-input-icon {
    position: absolute;
    left: 12px;
    top: 50%;
    transform: translateY(-50%);
    color: #999;
    pointer-events: none;
  }

  .date-input-arrow {
    position: absolute;
    right: 12px;
    top: 50%;
    transform: translateY(-50%);
    color: #999;
    pointer-events: none;
  }
  
  input[type="date"] {
    opacity: 0;
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    cursor: pointer;
  }

  .form-footer {
    display: flex;
    justify-content: flex-end;
    gap: 10px;
    margin-top: 20px;
  }

  .form-footer button {
    width: 100%;
  }

  .btn {
    padding: 10px 20px;
    border: none;
    border-radius: 4px;
    cursor: pointer;

    @media (max-width: 768px) {
      padding: 12px 16px;
    }
  }

  .cancel-btn {
    background-color: #f1f1f1;
  }

  .apply-btn {
    background-color: #4285f4;
    color: white;
  }

  button.calendar-footer-btn.calendar-apply-btn{
  background-color: #4285f4;
    color: white;
  }

  .back-btn {
    background: none;
    border: none;
    font-size: 18px;
    cursor: pointer;
    color: darkgray;
    order:-1;
    padding: 0 20px;
    padding-top:4px;
    margin-right: 10px;
    border-right: 2px solid #ccc;
    font-weight: bold;
  }

  
  .powered-by {
    text-align: center;
    color: #999;
    font-size: 12px;
    margin-top: 20px;
  }

  hr {
    border: none;
    border-top: 1px solid #eee;
    margin: 20px 0;
  }

  .error-message {
    color: red;
    text-align: center;
    padding: 20px;
  }

  #activity-time div div:nth-child(1){
    display: flex;
    flex-direction: column;
    height: auto;
    align-content: space-around;
    justify-content: space-between;
    align-items: flex-start;
  }


  /* Custom Calendar Style */
.calendar-container {
    display: none;
    position: absolute;
    top: 100%;
    left: 0;
    width: 100%;
    z-index: 10;
    background: white;
    border-radius: 8px;
    box-shadow: 0 4px 12px rgba(0,0,0,0.15);
    margin-top: 5px;

    @media (max-width: 768px) {
      position: fixed;
      top: 341px;
      bottom: 0;
      left: 0;
      width: 100%;
      border-radius: 15px 15px 0 0;
      max-height: 85vh;
      overflow-y: auto;
      box-shadow: none;
    }    
  }

  @media (min-width: 769px) and (max-height: 599px) {
    .calendar-container {
        top: -50px !important;
    }
}


  @media (max-width: 768px) and (max-height: 599px) {
    .calendar-container {
        top: 0px !important;
    }
}


  .calendar-container.active {
    display: block;
  }

  .calendar-header {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0 5px; /* Reduced from 10px */
    border-bottom: 1px solid #f0f0f0;
  }

  .calendar-title {
    font-size: 16px; /* Reduced from 18px */
    font-weight: 500;
    color: #000;
  }

  .calendar-nav {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 5px 40px; /* Reduced from 20px 50px */
  }
    .calendar-month-year {
    font-size: 14px;
}
    .form-section p {
    margin: 10px 0;
}

  .calendar-nav-btn {
    background: none;
    border: none;
    cursor: pointer;
    font-size: 16px; /* Reduced from 18px */
    color: #666;
  }

  .calendar-grid {
    display: grid;
    grid-template-columns: repeat(7, 1fr);
    gap: 3px; /* Reduced from 5px */
    padding: 5px 10px; /* Reduced from 10px 15px */
  }

  .calendar-day-header {
    text-align: center;
    font-size: 12px; /* Reduced from 14px */
    font-weight: 500;
    color: #999;
    padding: 3px 0; /* Reduced from 5px 0 */
  }

  .calendar-day {
    text-align: center;
    border-radius: 50%;
    cursor: pointer;
    width: 30px; /* Reduced from 36px */
    height: 30px; /* Reduced from 36px */
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0 auto;
    font-size: 12px; /* Added to ensure day numbers are smaller */
  }

  .calendar-day:hover {
    background-color: #f0f0f0;
  }

  .calendar-day.today {
    border: 1px solid #4285f4;
  }

  .calendar-day.selected {
    background-color: #4285f4;
    color: white;
  }

  .calendar-day.disabled {
    color: #ccc;
    cursor: not-allowed;
  }

  .calendar-footer {
    display: flex;
    justify-content: space-between;
    padding: 10px; /* Reduced from 15px */
    border-top: 1px solid #f0f0f0;
  }

  .calendar-footer-btn {
    padding: 8px 15px; /* Reduced from 10px 20px */
    border: none;
    border-radius: 4px;
    cursor: pointer;
    font-size: 12px; /* Added to make button text smaller */
  }

  /* Slider Styles */

  .slider-wrapper {
    display: flex;
    align-items: center;
    margin: 5px 0;
  }

  .slider-wrapper p {
    margin: -10px 10px 0 0;
  }
    

  .etc{
    position: fixed;
    top: 36px;
    background: #fff;
    width: 100%;
    max-width: 490px;
    z-index: 99;
  }

 
    @media (max-width: 768px) and (min-width: 0px) {
    .etc{
    width: 97%;
    top:35px
    }
    .middle-box .connection-header:first-child{
    margin-top: 47px !important;
     }
  
    }

    .slider-wrap-fixed{
     position: fixed;
    background: #fff;
    bottom: 10px;
    margin: 0 !important;
    padding: 5px 0;
    z-index: 99;
    width: 100%;
    max-width: 490px;
    }

  
    @media (max-width: 768px) and (min-width: 0px) {
    .slider-wrap-fixed{
    width: 97%;
    }
    }
    
  #responseBox-bottom{
    margin-bottom:35px !important;
  }
  .slider {
    overflow-x: auto;
    white-space: nowrap;
    flex: 1;
    scroll-behavior: smooth;
    -webkit-overflow-scrolling: touch;
    scroll-snap-type: x mandatory;
  }

  .slider::-webkit-scrollbar, .modal-body-result::-webkit-scrollbar {
    display: none;
  }

  

  .slider button {
        display: inline-block;
        margin: 5px 2px;
        padding: 5px 5px;
        background: #fff;
        box-shadow: none;
        border: 1px solid #ccc;
        border-radius: 8px;
        color: #000;
        white-space: nowrap;
        scroll-snap-align: start;
        min-width: 95px;
  }

  .slider button.active-time {
       background: #4285f41f;
       box-shadow: none;
       color: #000;
       border-color:  #4285f4;
       border-width: 2px;
  }

  .nav-arrow {
        font-size: 20px;
        padding: 5px 10px;
        cursor: pointer;
        background: #ddd;
        border-radius: 50%;
        border: none;
        margin: 0 5px;
  }

  
.middle-box {
  background: #fafafa;
  padding: 12px;
  border-radius: 8px;
  font-size: 14px;
  line-height: 1.5;
  color: #333;
  overflow-y: auto;
  min-height:max-content;
  border: 1px solid #e0e0e0;
  box-shadow: 0 1px 3px rgba(0,0,0,0.1);
  @media (max-width: 768px) {
   max-height: 350px;
   padding: 15px;
  }
}

.middle-box > div {
  margin-bottom: 15px;
}

.middle-box .connection-header {
  font-size: 16px;
  font-weight: bold;
  margin-bottom: 10px;
  color: #000;
  margin-top: 30px;
}

.middle-box .connection-meta {
  display: none;
  gap: 15px;
  color: #666;
  margin-bottom: 20px;
  font-size: 14px;
}

.middle-box .connection-elements {
  border-left: 5px solid #eee;
  padding-left: 15px;
  margin-left: 7px;
}
  input[type=date]::-webkit-calendar-picker-indicator{
  pointer-events:none;
}
.middle-box .connection-element {
  margin-bottom: 15px;
  position: relative;
}

.middle-box .element-time {
  color: black;
  margin-bottom: 3px;
  font-size: 14px;
}

.middle-box .element-duration {
  color: #666;
  font-size: 13px;
  margin-bottom: 5px;
}

.middle-box .element-vehicle {
  color: #4285f4;
  font-size: 13px;
}

.middle-box .element-crcl {
  width: 5px;
  height: 5px;
  border-radius: 50%;
  background-color: #4285f4;
  position: absolute;
  top: 5px;
  left: -20px;
  z-index: 1;
}

div#eleCont {
    display: flex;
    gap: 7px;
    background-color: rgba(128, 128, 128, 0.05);
    width: 92px;
    height: 29px;
    justify-content: center;
    align-items: flex-end;
    border-radius: 9px;
    align-content: center;
}

.middle-box .element-time span{
  color: #888888;
}`;

const styleTag = document.createElement("style");
styleTag.textContent = modalStyles;
document.head.appendChild(styleTag);

document.addEventListener("DOMContentLoaded", () => {
  const modalHTML = `
  <div id="activityModal" class="modal">
    <div class="modal-content">

      <div id="formPage" class="modal-page active">
        <div class="modal-header1st">
        <p>Activity Name</p>
        <button id="backBtn1st cancel-btn" class="back-btn">&#9776;</button>
        </div>
        <div class="modal-body">
          <div class="form-section">
            <p>Origin</p>
            <div class="input-container">
              <svg class="input-icon" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <circle cx="12" cy="12" r="10"></circle>
              </svg>
              <input type="text" class="input-field " id="originInput" placeholder="Enter origin" value="">
              <svg class="input-icon-right" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <circle cx="12" cy="12" r="7"></circle>
                <circle cx="12" cy="12" r="3"></circle>
                <line x1="12" y1="0" x2="12" y2="5"></line>
                <line x1="-80" y1="10" x2="5" y2="12"></line>
                <line x1="12" y1="20" x2="12" y2="50"></line>
                <line x1="50" y1="10" x2="20" y2="12"></line>
              </svg>
            </div>
          </div>
          <div class="form-section">
            <p>Destination</p>
            <div class="input-container">
              <svg class="input-icon" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                <circle cx="12" cy="10" r="3"></circle>
              </svg>
              <input type="text" class="input-field disabled " id="destinationInput" placeholder="Destination" value="Pre filled" readonly >
            </div>
          </div>
          <div class="form-section">
            <p>Activity date</p>
            <div class="date-input-container">
              <div class="date-input">
                <svg class="date-input-icon" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
                  <line x1="16" y1="2" x2="16" y2="6"></line>
                  <line x1="8" y1="2" x2="8" y2="6"></line>
                  <line x1="3" y1="10" x2="21" y2="10"></line>
                </svg>
                <span id="dateDisplay" class="date-input-display placeholder">Select</span>
                <svg class="date-input-arrow" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <polyline points="6 9 12 15 18 9"></polyline>
                </svg>
              </div>
              <input type="date" id="activityDate">
            </div>
          </div>
          <div class="form-footer">
            <button class="btn cancel-btn">Cancel</button>
            <button class="btn apply-btn" id="searchBtn">Search</button>
          </div>
        </div>
      </div>


      <div id="resultsPage" class="modal-page">
        <div class="modal-header">
        <p>Activity Name</p>
        <button id="backBtn" class="back-btn">&#9776;</button>
        </div>
        <div class="modal-body-result">
          <div id="errorContainer" class="error-message" style="display: none"></div>
          <div class="slider-wrapper etc">
              <p>Date: </p>
              <div class="slider" id="topSlider">
                  <!-- Timestamp buttons will be dynamically inserted here -->
              </div>
          </div>

          <div class="middle-box" id="responseBox">
              API response will appear here...
          </div>
          <div id="activity-time" >
              API response will appear here...
              </div>

          <div class="middle-box" id="responseBox-bottom">
              API response will appear here...
          </div>
          <div class="slider-wrapper slider-wrap-fixed">
            <p>Date: </p>
            <div class="slider" id="bottomSlider"></div>
          </div>
        </div>
      </div>

    </div>
  </div>
  `;

  document.getElementById("modalContainer").innerHTML = modalHTML;
  const openModalBtn = document.getElementById("openModalBtn");
  const activityModal = document.getElementById("activityModal");
  const closeButtons = activityModal.getElementsByClassName("close");
  const formPage = document.getElementById("formPage");
  const resultsPage = document.getElementById("resultsPage");
  const searchBtn = document.getElementById("searchBtn");
  const backBtn = document.getElementById("backBtn");
  const cancelBtn = document.querySelector(".cancel-btn");
  const originInput = document.getElementById("originInput");
  const activityDate = document.getElementById("activityDate");
  const dateDisplay = document.getElementById("dateDisplay");
  const errorContainer = document.getElementById("errorContainer");

  let fromConnections = [];
  let toConnections = [];

  const responseBox = document.getElementById("responseBox");
  const responseBoxbtm = document.getElementById("responseBox-bottom");
  const page1 = document.getElementById("formPage");
  const page2 = document.getElementById("resultsPage");
  const modalcontent = document.querySelector(".modal-content");

  activityModal.style.display = "none";

  openModalBtn.addEventListener("click", () => {
    activityModal.style.display = "flex";
    modalcontent.style.transform = "unset";

    formPage.classList.add("active");
    errorContainer.style.display = "none";
  });

  Array.from(closeButtons).forEach((btn) => {
    btn.addEventListener("click", () => {
      activityModal.style.display = "none";
    });
  });

  cancelBtn.addEventListener("click", () => {
    activityModal.style.display = "none";
  });

  backBtn.addEventListener("click", () => {
    formPage.classList.add("active");
    resultsPage.classList.remove("active");
  });

  document.addEventListener("click", (event) => {
    if (
      activityModal.style.display === "flex" && // Check if modal is open
      !modalcontent.contains(event.target) && // Check if click is outside modal content
      !openModalBtn.contains(event.target) // Ensure the click is not on the open button
    ) {
      activityModal.style.display = "none"; // Close the modal
    }
  });

  searchBtn.addEventListener("click", () => {
    const selectedDate = activityDate.value;
    if (!selectedDate) {
      alert("Please select a date");
      return;
    }

    searchBtn.disabled = true;
    searchBtn.textContent = "Searching...";

    fetchActivityData(originInput, selectedDate);
  });

  //**
  //** Custom Calendar
  //**

  const today = new Date();
  activityDate.value = today.toISOString().split("T")[0];
  updateDateDisplay(today);

  function initCustomDatePicker() {
    const dateInputContainer = document.querySelector(".date-input-container");

    // Create calendar container
    const calendarContainer = document.createElement("div");
    calendarContainer.className = "calendar-container";
    dateInputContainer.appendChild(calendarContainer);

    // Track selected date
    let selectedDate = new Date();
    let currentViewMonth = selectedDate.getMonth();
    let currentViewYear = selectedDate.getFullYear();

    // Initialize calendar
    function renderCalendar() {
      const daysInMonth = new Date(
        currentViewYear,
        currentViewMonth + 1,
        0
      ).getDate();
      const firstDayOfMonth = new Date(
        currentViewYear,
        currentViewMonth,
        1
      ).getDay();

      // Header
      calendarContainer.innerHTML = `
    <div class="calendar-header">
      <p class="calendar-title">Select Activity Date</p>
    </div>
    <div class="calendar-nav">
      <button class="calendar-nav-btn prev-month">&lt;</button>
      <div class="calendar-month-year">${getMonthName(
        currentViewMonth
      )} ${currentViewYear}</div>
      <button class="calendar-nav-btn next-month">&gt;</button>
    </div>
    <div class="calendar-grid">
      <div class="calendar-day-header">S</div>
      <div class="calendar-day-header">M</div>
      <div class="calendar-day-header">T</div>
      <div class="calendar-day-header">W</div>
      <div class="calendar-day-header">T</div>
      <div class="calendar-day-header">F</div>
      <div class="calendar-day-header">S</div>
      ${generateDaysHTML(daysInMonth, firstDayOfMonth)}
    </div>
    <div class="calendar-footer">
      <button class="calendar-footer-btn calendar-cancel-btn">Cancel</button>
      <button class="calendar-footer-btn calendar-apply-btn">Apply</button>
    </div>
  `;

      // Add event listeners
      calendarContainer
        .querySelector(".prev-month")
        .addEventListener("click", (e) => {
          e.stopPropagation(); // Prevent event from bubbling up
          currentViewMonth--;
          if (currentViewMonth < 0) {
            currentViewMonth = 11;
            currentViewYear--;
          }
          renderCalendar();
        });

      calendarContainer
        .querySelector(".next-month")
        .addEventListener("click", (e) => {
          e.stopPropagation(); // Prevent event from bubbling up
          currentViewMonth++;
          if (currentViewMonth > 11) {
            currentViewMonth = 0;
            currentViewYear++;
          }
          renderCalendar();
        });

      calendarContainer
        .querySelector(".calendar-cancel-btn")
        .addEventListener("click", (e) => {
          e.stopPropagation(); // Prevent event from bubbling up
          calendarContainer.classList.remove("active");
        });

      calendarContainer
        .querySelector(".calendar-apply-btn")
        .addEventListener("click", (e) => {
          e.stopPropagation(); // Prevent event from bubbling up
          // Format date for the hidden input
          const formattedDate = selectedDate.toISOString().split("T")[0];
          activityDate.value = formattedDate;

          // Update display
          updateDateDisplay(selectedDate);
          calendarContainer.classList.remove("active");
        });

      // Add event listeners to day cells
      const dayElements = calendarContainer.querySelectorAll(
        ".calendar-day:not(.disabled)"
      );
      dayElements.forEach((day) => {
        day.addEventListener("click", (e) => {
          e.stopPropagation(); // Prevent event from bubbling up

          // Remove selected class from all days
          dayElements.forEach((d) => d.classList.remove("selected"));

          // Add selected class to clicked day
          day.classList.add("selected");

          // Update selected date
          selectedDate = new Date(
            currentViewYear,
            currentViewMonth,
            parseInt(day.textContent)
          );
        });
      });

      // Prevent clicks within calendar from bubbling up
      calendarContainer.addEventListener("click", (e) => {
        e.stopPropagation();
      });
    }

    function generateDaysHTML(daysInMonth, firstDayOfMonth) {
      let html = "";
      const today = new Date();

      // Add empty cells for days before the first day of the month
      for (let i = 0; i < firstDayOfMonth; i++) {
        html += "<div></div>";
      }

      // Add days of the month
      for (let day = 1; day <= daysInMonth; day++) {
        const date = new Date(currentViewYear, currentViewMonth, day);
        const isToday = date.toDateString() === today.toDateString();
        const isSelected = date.toDateString() === selectedDate.toDateString();

        html += `<div class="calendar-day${isToday ? " today" : ""}${isSelected ? " selected" : ""
          }">${day}</div>`;
      }

      return html;
    }

    function getMonthName(month) {
      const months = [
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "May",
        "Jun",
        "Jul",
        "Aug",
        "Sep",
        "Oct",
        "Nov",
        "Dec",
      ];
      return months[month];
    }

    // Toggle calendar on date input click
    dateInputContainer.addEventListener("click", (e) => {
      e.stopPropagation(); // Stop event from bubbling up to document

      calendarContainer.classList.toggle("active");

      // Only render if becoming visible
      if (calendarContainer.classList.contains("active")) {
        renderCalendar();
      }
    });

    // Hide calendar when clicking outside, but NOT when clicking inside the calendar or date input
    document.addEventListener("click", (event) => {
      // If calendar is open and the click is outside both the date input and the calendar
      if (calendarContainer.classList.contains("active")) {
        // Only close if click is outside dateInputContainer AND outside calendarContainer
        if (
          !dateInputContainer.contains(event.target) &&
          !calendarContainer.contains(event.target)
        ) {
          calendarContainer.classList.remove("active");
        }
      }
    });

    // Initialize with today's date
    updateDateDisplay(selectedDate);
    renderCalendar();
  }

  // Update date display function
  function updateDateDisplay(date) {
    if (date && !isNaN(date.getTime())) {
      const options = { day: "numeric", month: "short", year: "numeric" };
      dateDisplay.textContent = date.toLocaleDateString("en-US", options);
      dateDisplay.classList.remove("placeholder");
    } else {
      dateDisplay.textContent = "Select";
      dateDisplay.classList.add("placeholder");
    }
  }

  initCustomDatePicker();

  //**
  //** Second Page
  //**

  function scrollSlider(id, offset) {
    document.getElementById(id).scrollLeft += offset;
  }

  function addSwipeBehavior(sliderId) {
    const slider = document.getElementById(sliderId);
    let startX,
      scrollLeft,
      isDown = false;

    slider.addEventListener("mousedown", (e) => {
      isDown = true;
      startX = e.pageX - slider.offsetLeft;
      scrollLeft = slider.scrollLeft;
    });

    slider.addEventListener("mouseleave", () => {
      isDown = false;
    });

    slider.addEventListener("mouseup", () => {
      isDown = false;
    });

    slider.addEventListener("mousemove", (e) => {
      if (!isDown) return;
      e.preventDefault();
      const x = e.pageX - slider.offsetLeft;
      const walk = (x - startX) * 2;
      slider.scrollLeft = scrollLeft - walk;
    });

    // Touch events for mobile
    slider.addEventListener("touchstart", (e) => {
      isDown = true;
      startX = e.touches[0].pageX - slider.offsetLeft;
      scrollLeft = slider.scrollLeft;
    });

    slider.addEventListener("touchend", () => {
      isDown = false;
    });

    slider.addEventListener("touchmove", (e) => {
      if (!isDown) return;
      e.preventDefault();
      const x = e.touches[0].pageX - slider.offsetLeft;
      const walk = (x - startX) * 2;
      slider.scrollLeft = scrollLeft - walk;
    });
  }

  function calculateTimeDifference(startTime, endTime) {
    const start = new Date(startTime);
    const end = new Date(endTime);
    const diff = end - start;

    const hours = Math.floor(diff / (1000 * 60 * 60));
    const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    return `${hours} hours and ${minutes} minutes`;
  }

  function scrollSlider(id, offset) {
    document.getElementById(id).scrollLeft += offset;
  }

  function calculateTimeDifference(startTime, endTime) {
    const start = new Date(startTime);
    const end = new Date(endTime);
    const diff = end - start;

    const hours = Math.floor(diff / (1000 * 60 * 60));
    const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));

    const totalHours = (diff / (1000 * 60 * 60)).toFixed(1);
    return `${totalHours} hrs`;
  }

  function filterDataByTimestamp(type, startTimestamp, endTimestamp) {
    let filteredConnections = type === "from" ? fromConnections : toConnections;
    const sliderId = type === "from" ? "topSlider" : "bottomSlider";
    let connectionType = [];

    const slider = document.getElementById(
      type === "from" ? "topSlider" : "bottomSlider"
    );
    const buttons = slider.querySelectorAll("button");
    buttons.forEach((btn) => {
      btn.classList.remove("active-time");
      if (btn.textContent.includes(`${startTimestamp} - ${endTimestamp}`)) {
        btn.classList.add("active-time");
      }
    });

    if (type === "from") {
      filteredConnections = fromConnections;
      connectionType = "from_activity";
    } else if (type === "to") {
      filteredConnections = toConnections;
      connectionType = "to_activity";
    }

    const selectedConnections = filteredConnections.filter((conn) => {
      const startTime = conn.connection_start_timestamp
        .split(" ")[1]
        .substring(0, 5);
      const endTime = conn.connection_end_timestamp
        .split(" ")[1]
        .substring(0, 5);
      return startTime === startTimestamp && endTime === endTimestamp;
    });

    let html = "";

    selectedConnections.forEach((conn) => {
      if (conn.connection_elements && conn.connection_elements.length > 0) {
        html += `<div style="border-left: 2px solid #eee; padding-left: 15px; margin-left: 7px;">`;

        conn.connection_elements.forEach((element, index) => {

          const elementDuration = calculateElementDuration(
            element.departure_time,
            element.arrival_time
          );
          const departureTime = new Date(element.departure_time)
            .toTimeString()
            .substring(0, 5);
          const arrivalTime = new Date(element.arrival_time)
            .toTimeString()
            .substring(0, 5);

          const iconType = !element.type ? "DEFAULT" : element.type;
          const icon = getTransportIcon(iconType);

          html += `
          <div style="margin-bottom: 15px; position: relative;">
            <div style="position: absolute; left: -22px; top: 3px;">
              ${icon}
            </div>
            <div style="font-weight: 500; margin-bottom: 3px;">${departureTime} ${element.from_location}</div>
            <div style="color: #666; font-size: 13px; margin-bottom: 5px;">${elementDuration}</div>
          </div>
        `;
        });

        html += `</div>`;
      }

      html += `</div>`;
    });

    responseBox.innerHTML =
      html || "<div>No connection details available</div>";
    responseBoxbtm.innerHTML =
      html || "<div>No connection details available</div>";
  }

  function calculateElementDuration(startTime, endTime) {
    const start = new Date(startTime);
    const end = new Date(endTime);
    const diff = end - start;
    const minutes = Math.floor(diff / (1000 * 60));
    return `${minutes} min`;
  }

  function getTransportIcon(type) {
    const icons = {
      JNY: `<svg width="16" height="16" viewBox="0 0 12 15" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M9.5 0.5H2.5C1.96957 0.5 1.46086 0.710714 1.08579 1.08579C0.710714 1.46086 0.5 1.96957 0.5 2.5V10.5C0.5 11.0304 0.710714 11.5391 1.08579 11.9142C1.46086 12.2893 1.96957 12.5 2.5 12.5H3L2.1 13.7C2.0606 13.7525 2.03194 13.8123 2.01564 13.8759C1.99935 13.9395 1.99574 14.0057 2.00503 14.0707C2.01431 14.1357 2.03631 14.1982 2.06976 14.2547C2.10322 14.3112 2.14747 14.3606 2.2 14.4C2.25253 14.4394 2.3123 14.4681 2.37591 14.4844C2.43952 14.5007 2.50571 14.5043 2.57071 14.495C2.63571 14.4857 2.69825 14.4637 2.75475 14.4302C2.81125 14.3968 2.8606 14.3525 2.9 14.3L4.25 12.5H7.75L9.1 14.3C9.17957 14.4061 9.29801 14.4762 9.42929 14.495C9.56056 14.5137 9.69391 14.4796 9.8 14.4C9.90609 14.3204 9.97622 14.202 9.99498 14.0707C10.0137 13.9394 9.97956 13.8061 9.9 13.7L9 12.5H9.5C10.0304 12.5 10.5391 12.2893 10.9142 11.9142C11.2893 11.5391 11.5 11.0304 11.5 10.5V2.5C11.5 1.96957 11.2893 1.46086 10.9142 1.08579C10.5391 0.710714 10.0304 0.5 9.5 0.5ZM2.5 1.5H9.5C9.76522 1.5 10.0196 1.60536 10.2071 1.79289C10.3946 1.98043 10.5 2.23478 10.5 2.5V6.5H1.5V2.5C1.5 2.23478 1.60536 1.98043 1.79289 1.79289C1.98043 1.60536 2.23478 1.5 2.5 1.5ZM9.5 11.5H2.5C2.23478 11.5 1.98043 11.3946 1.79289 11.2071C1.60536 11.0196 1.5 10.7652 1.5 10.5V7.5H10.5V10.5C10.5 10.7652 10.3946 11.0196 10.2071 11.2071C10.0196 11.3946 9.76522 11.5 9.5 11.5ZM4 9.75C4 9.89834 3.95601 10.0433 3.8736 10.1667C3.79119 10.29 3.67406 10.3861 3.53701 10.4429C3.39997 10.4997 3.24917 10.5145 3.10368 10.4856C2.9582 10.4567 2.82456 10.3852 2.71967 10.2803C2.61478 10.1754 2.54335 10.0418 2.51441 9.89632C2.48547 9.75083 2.50032 9.60003 2.55709 9.46299C2.61386 9.32594 2.70999 9.20881 2.83332 9.1264C2.95666 9.04399 3.10166 9 3.25 9C3.44891 9 3.63968 9.07902 3.78033 9.21967C3.92098 9.36032 4 9.55109 4 9.75ZM9.5 9.75C9.5 9.89834 9.45601 10.0433 9.3736 10.1667C9.29119 10.29 9.17406 10.3861 9.03701 10.4429C8.89997 10.4997 8.74917 10.5145 8.60368 10.4856C8.4582 10.4567 8.32456 10.3852 8.21967 10.2803C8.11478 10.1754 8.04335 10.0418 8.01441 9.89632C7.98547 9.75083 8.00033 9.60003 8.05709 9.46299C8.11386 9.32594 8.20999 9.20881 8.33332 9.1264C8.45666 9.04399 8.60166 9 8.75 9C8.94891 9 9.13968 9.07902 9.28033 9.21967C9.42098 9.36032 9.5 9.55109 9.5 9.75Z" fill="#34C759"/>
            </svg>`,
      WALK: `<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M9.50003 5C9.8956 5 10.2823 4.8827 10.6112 4.66294C10.9401 4.44318 11.1964 4.13082 11.3478 3.76537C11.4992 3.39992 11.5388 2.99778 11.4616 2.60982C11.3844 2.22186 11.194 1.86549 10.9142 1.58579C10.6345 1.30608 10.2782 1.1156 9.89021 1.03843C9.50225 0.96126 9.10012 1.00087 8.73467 1.15224C8.36921 1.30362 8.05686 1.55996 7.83709 1.88886C7.61733 2.21776 7.50003 2.60444 7.50003 3C7.50003 3.53043 7.71075 4.03914 8.08582 4.41422C8.46089 4.78929 8.9696 5 9.50003 5ZM9.50003 2C9.69781 2 9.89115 2.05865 10.0556 2.16853C10.2201 2.27841 10.3482 2.43459 10.4239 2.61732C10.4996 2.80004 10.5194 3.00111 10.4808 3.19509C10.4422 3.38907 10.347 3.56726 10.2071 3.70711C10.0673 3.84696 9.8891 3.9422 9.69512 3.98079C9.50114 4.01937 9.30007 3.99957 9.11735 3.92388C8.93462 3.84819 8.77844 3.72002 8.66856 3.55557C8.55868 3.39112 8.50003 3.19778 8.50003 3C8.50003 2.73478 8.60539 2.48043 8.79293 2.29289C8.98046 2.10536 9.23482 2 9.50003 2ZM13.5 9C13.5 9.13261 13.4474 9.25979 13.3536 9.35356C13.2598 9.44732 13.1326 9.5 13 9.5C10.7932 9.5 9.69066 8.38688 8.80503 7.4925C8.63378 7.31938 8.47003 7.155 8.30503 7.0025L7.46566 8.9325L9.79066 10.5931C9.85542 10.6394 9.9082 10.7004 9.94462 10.7712C9.98104 10.842 10 10.9204 10 11V14.5C10 14.6326 9.94735 14.7598 9.85359 14.8536C9.75982 14.9473 9.63264 15 9.50003 15C9.36742 15 9.24025 14.9473 9.14648 14.8536C9.05271 14.7598 9.00003 14.6326 9.00003 14.5V11.2575L7.05816 9.87L4.95878 14.6994C4.91993 14.7887 4.85581 14.8648 4.77431 14.9182C4.69281 14.9716 4.59747 15 4.50003 15C4.43137 15.0002 4.36345 14.9859 4.30066 14.9581C4.17911 14.9053 4.08351 14.8064 4.03488 14.6831C3.98624 14.5598 3.98855 14.4222 4.04128 14.3006L7.42128 6.5275C6.83941 6.42438 6.11378 6.6025 5.25253 7.06375C4.56566 7.44263 3.92458 7.89917 3.34191 8.42438C3.24465 8.51149 3.11717 8.55711 2.98673 8.55148C2.85628 8.54584 2.73321 8.48941 2.64383 8.39423C2.55444 8.29905 2.50584 8.17268 2.5084 8.04213C2.51096 7.91159 2.56448 7.78723 2.65753 7.69563C2.81378 7.54875 6.51316 4.11875 8.82753 6.12813C9.06691 6.33563 9.29503 6.56563 9.51503 6.78875C10.3869 7.66875 11.21 8.5 13 8.5C13.1326 8.5 13.2598 8.55268 13.3536 8.64645C13.4474 8.74022 13.5 8.86739 13.5 9Z" fill="#FF9500"/>
            </svg>`,
      TRSF: `<svg width="16" height="16" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M7.5 0.5C7.5 0.632608 7.44732 0.759785 7.35355 0.853553C7.25979 0.947321 7.13261 1 7 1H5C4.86739 1 4.74021 0.947321 4.64645 0.853553C4.55268 0.759785 4.5 0.632608 4.5 0.5C4.5 0.367392 4.55268 0.240215 4.64645 0.146447C4.74021 0.0526785 4.86739 0 5 0H7C7.13261 0 7.25979 0.0526785 7.35355 0.146447C7.44732 0.240215 7.5 0.367392 7.5 0.5ZM7 11H5C4.86739 11 4.74021 11.0527 4.64645 11.1464C4.55268 11.2402 4.5 11.3674 4.5 11.5C4.5 11.6326 4.55268 11.7598 4.64645 11.8536C4.74021 11.9473 4.86739 12 5 12H7C7.13261 12 7.25979 11.9473 7.35355 11.8536C7.44732 11.7598 7.5 11.6326 7.5 11.5C7.5 11.3674 7.44732 11.2402 7.35355 11.1464C7.25979 11.0527 7.13261 11 7 11ZM11 0H9.5C9.36739 0 9.24021 0.0526785 9.14645 0.146447C9.05268 0.240215 9 0.367392 9 0.5C9 0.632608 9.05268 0.759785 9.14645 0.853553C9.24021 0.947321 9.36739 1 9.5 1H11V2.5C11 2.63261 11.0527 2.75979 11.1464 2.85355C11.2402 2.94732 11.3674 3 11.5 3C11.6326 3 11.7598 2.94732 11.8536 2.85355C11.9473 2.75979 12 2.63261 12 2.5V1C12 0.734784 11.8946 0.48043 11.7071 0.292893C11.5196 0.105357 11.2652 0 11 0ZM11.5 4.5C11.3674 4.5 11.2402 4.55268 11.1464 4.64645C11.0527 4.74021 11 4.86739 11 5V7C11 7.13261 11.0527 7.25979 11.1464 7.35355C11.2402 7.44732 11.3674 7.5 11.5 7.5C11.6326 7.5 11.7598 7.44732 11.8536 7.35355C11.9473 7.25979 12 7.13261 12 7V5C12 4.86739 11.9473 4.74021 11.8536 4.64645C11.7598 4.55268 11.6326 4.5 11.5 4.5ZM11.5 9C11.3674 9 11.2402 9.05268 11.1464 9.14645C11.0527 9.24021 11 9.36739 11 9.5V11H9.5C9.36739 11 9.24021 11.0527 9.14645 11.1464C9.05268 11.2402 9 11.3674 9 11.5C9 11.6326 9.05268 11.7598 9.14645 11.8536C9.24021 11.9473 9.36739 12 9.5 12H11C11.2652 12 11.5196 11.8946 11.7071 11.7071C11.8946 11.5196 12 11.2652 12 11V9.5C12 9.36739 11.9473 9.24021 11.8536 9.14645C11.7598 9.05268 11.6326 9 11.5 9ZM0.5 7.5C0.632608 7.5 0.759785 7.44732 0.853553 7.35355C0.947321 7.25979 1 7.13261 1 7V5C1 4.86739 0.947321 4.74021 0.853553 4.64645C0.759785 4.55268 0.632608 4.5 0.5 4.5C0.367392 4.5 0.240215 4.55268 0.146447 4.64645C0.0526785 4.74021 0 4.86739 0 5V7C0 7.13261 0.0526785 7.25979 0.146447 7.35355C0.240215 7.44732 0.367392 7.5 0.5 7.5ZM2.5 11H1V9.5C1 9.36739 0.947321 9.24021 0.853553 9.14645C0.759785 9.05268 0.632608 9 0.5 9C0.367392 9 0.240215 9.05268 0.146447 9.14645C0.0526785 9.24021 0 9.36739 0 9.5V11C0 11.2652 0.105357 11.5196 0.292893 11.7071C0.48043 11.8946 0.734784 12 1 12H2.5C2.63261 12 2.75979 11.9473 2.85355 11.8536C2.94732 11.7598 3 11.6326 3 11.5C3 11.3674 2.94732 11.2402 2.85355 11.1464C2.75979 11.0527 2.63261 11 2.5 11ZM2.5 0H1C0.734784 0 0.48043 0.105357 0.292893 0.292893C0.105357 0.48043 0 0.734784 0 1V2.5C0 2.63261 0.0526785 2.75979 0.146447 2.85355C0.240215 2.94732 0.367392 3 0.5 3C0.632608 3 0.759785 2.94732 0.853553 2.85355C0.947321 2.75979 1 2.63261 1 2.5V1H2.5C2.63261 1 2.75979 0.947321 2.85355 0.853553C2.94732 0.759785 3 0.632608 3 0.5C3 0.367392 2.94732 0.240215 2.85355 0.146447C2.75979 0.0526785 2.63261 0 2.5 0Z" fill="#AEAEB2"/>
            </svg>`,
      DEFAULT: `<svg width="16" height="16" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M14.8537 8.85354L12.8537 10.8535C12.7598 10.9474 12.6326 11.0001 12.4999 11.0001C12.3672 11.0001 12.24 10.9474 12.1462 10.8535C12.0523 10.7597 11.9996 10.6325 11.9996 10.4998C11.9996 10.3671 12.0523 10.2399 12.1462 10.146L13.293 8.99979H2.70678L3.85366 10.146C3.94748 10.2399 4.00018 10.3671 4.00018 10.4998C4.00018 10.6325 3.94748 10.7597 3.85366 10.8535C3.75983 10.9474 3.63259 11.0001 3.49991 11.0001C3.36722 11.0001 3.23998 10.9474 3.14616 10.8535L1.14616 8.85354C1.09967 8.8071 1.06279 8.75196 1.03763 8.69126C1.01246 8.63056 0.999512 8.5655 0.999512 8.49979C0.999512 8.43408 1.01246 8.36902 1.03763 8.30832C1.06279 8.24762 1.09967 8.19248 1.14616 8.14604L3.14616 6.14604C3.23998 6.05222 3.36722 5.99951 3.49991 5.99951C3.63259 5.99951 3.75983 6.05222 3.85366 6.14604C3.94748 6.23986 4.00018 6.36711 4.00018 6.49979C4.00018 6.63247 3.94748 6.75972 3.85366 6.85354L2.70678 7.99979H13.293L12.1462 6.85354C12.0523 6.75972 11.9996 6.63247 11.9996 6.49979C11.9996 6.36711 12.0523 6.23986 12.1462 6.14604C12.24 6.05222 12.3672 5.99951 12.4999 5.99951C12.6326 5.99951 12.7598 6.05222 12.8537 6.14604L14.8537 8.14604C14.9001 8.19248 14.937 8.24762 14.9622 8.30832C14.9873 8.36902 15.0003 8.43408 15.0003 8.49979C15.0003 8.5655 14.9873 8.63056 14.9622 8.69126C14.937 8.75196 14.9001 8.8071 14.8537 8.85354Z" fill="black"/>
              </svg>`,
      Railjet: `<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <!-- Add Railjet SVG code here when available -->
                <rect width="16" height="16" fill="#FF3B30"/>
              </svg>`
    };

    return icons[type] || icons["DEFAULT"];
  }




  async function fetchActivityData(location, date) {
    if (typeof window.journeyConfig === 'undefined') {
      alert("The variable 'journeyConfig' is not defined. Please define it in the following format in a <script> tag before your main <script> in your HTML:\n\n" +
        "<script>\n" +
        "    var journeyConfig = {\n" +
        "      userStartLocationType: 'address',\n" +
        "      activityStartLocation: 'Schützen am Gebirge Bahnhof',\n" +
        "      activityStartLocationType: 'station',\n" +
        "      activityEndLocation: 'Eisenstadt Bahnhof',\n" +
        "      activityEndLocationType: 'station',\n" +
        "      activityEarliestStartTime: '09:00:00',\n" +
        "      activityLatestEndTime: '18:00:00',\n" +
        "      activityDurationMinutes: '180'\n" +
        "    };\n" +
        "</script>");
      return;
    }

    console.log("Fetching activity data...");
    const formattedDate = new Date(date).toISOString().split("T")[0];

    responseBox.textContent = "Loading...";
    page1.classList.remove("active");
    page2.classList.add("active");

    const apiUrl = `https://api.zuugle-services.net/connections?date=${formattedDate}&user_start_location=${encodeURIComponent(location.value)}&user_start_location_type=${window.journeyConfig.userStartLocationType}&activity_start_location=${window.journeyConfig.activityStartLocation}&activity_start_location_type=${window.journeyConfig.activityStartLocationType}&activity_end_location=${window.journeyConfig.activityEndLocation}&activity_end_location_type=${window.journeyConfig.activityEndLocationType}&activity_earliest_start_time=${window.journeyConfig.activityEarliestStartTime}&activity_latest_end_time=${window.journeyConfig.activityLatestEndTime}&activity_duration_minutes=${window.journeyConfig.activityDurationMinutes}`;

    const accessToken = "development-token";

    try {
      const response = await fetch(apiUrl, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${accessToken}`,
        },
      });

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      const result = await response.json();

      // Check if data is empty or invalid
      if (!result || !result.connections ||
        !result.connections.from_activity || result.connections.from_activity.length === 0 ||
        !result.connections.to_activity || result.connections.to_activity.length === 0) {

        // Show error message and reload after 3 seconds
        responseBox.textContent = "No data available. Reloading...";
        setTimeout(() => {
          window.location.reload();
        }, 3000);
        return;
      }

      // Process the data as before
      searchBtn.disabled = false;
      searchBtn.textContent = "Search";
      console.log(result);

      fromConnections = result.connections.from_activity;
      toConnections = result.connections.to_activity;

      const topSlider = document.getElementById("topSlider");
      topSlider.innerHTML = "";
      fromConnections.forEach((conn, index) => {
        const startTime = conn.connection_start_timestamp
          .split(" ")[1]
          .substring(0, 5);
        const endTime = conn.connection_end_timestamp
          .split(" ")[1]
          .substring(0, 5);
        const duration = calculateTimeDifference(
          conn.connection_start_timestamp,
          conn.connection_end_timestamp
        );

        const btn = document.createElement("button");
        btn.innerHTML = `
        <div style="display: flex; flex-direction: column; align-items: center;">
          <div style="font-size: 14px; margin-bottom: 4px; font-weight: bold;">${startTime} - ${endTime}</div>
          <div style="display: flex; align-items: center; font-size: 12px; color: #666;">
            <span>${duration}</span>
            <span style="margin: 0 0 0 15px;">${conn.connection_transfers}</span>
            <span style="margin: 0 5px;"><svg width="16" height="17" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M14.8537 8.85354L12.8537 10.8535C12.7598 10.9474 12.6326 11.0001 12.4999 11.0001C12.3672 11.0001 12.24 10.9474 12.1462 10.8535C12.0523 10.7597 11.9996 10.6325 11.9996 10.4998C11.9996 10.3671 12.0523 10.2399 12.1462 10.146L13.293 8.99979H2.70678L3.85366 10.146C3.94748 10.2399 4.00018 10.3671 4.00018 10.4998C4.00018 10.6325 3.94748 10.7597 3.85366 10.8535C3.75983 10.9474 3.63259 11.0001 3.49991 11.0001C3.36722 11.0001 3.23998 10.9474 3.14616 10.8535L1.14616 8.85354C1.09967 8.8071 1.06279 8.75196 1.03763 8.69126C1.01246 8.63056 0.999512 8.5655 0.999512 8.49979C0.999512 8.43408 1.01246 8.36902 1.03763 8.30832C1.06279 8.24762 1.09967 8.19248 1.14616 8.14604L3.14616 6.14604C3.23998 6.05222 3.36722 5.99951 3.49991 5.99951C3.63259 5.99951 3.75983 6.05222 3.85366 6.14604C3.94748 6.23986 4.00018 6.36711 4.00018 6.49979C4.00018 6.63247 3.94748 6.75972 3.85366 6.85354L2.70678 7.99979H13.293L12.1462 6.85354C12.0523 6.75972 11.9996 6.63247 11.9996 6.49979C11.9996 6.36711 12.0523 6.23986 12.1462 6.14604C12.24 6.05222 12.3672 5.99951 12.4999 5.99951C12.6326 5.99951 12.7598 6.05222 12.8537 6.14604L14.8537 8.14604C14.9001 8.19248 14.937 8.24762 14.9622 8.30832C14.9873 8.36902 15.0003 8.43408 15.0003 8.49979C15.0003 8.5655 14.9873 8.63056 14.9622 8.69126C14.937 8.75196 14.9001 8.8071 14.8537 8.85354Z" fill="black"/>
</svg></span>
          </div>
        </div>
      `;

        btn.onclick = () => filterDataByTimestamp("from", startTime, endTime);
        if (index === 0) {
          btn.classList.add("active-time");
          filterDataByTimestamp("from", startTime, endTime);
        }
        topSlider.appendChild(btn);
      });

      const bottomSlider = document.getElementById("bottomSlider");
      bottomSlider.innerHTML = "";
      toConnections.forEach((conn, index) => {  // Added index parameter here
        const startTime = conn.connection_start_timestamp
          .split(" ")[1]
          .substring(0, 5);
        const endTime = conn.connection_end_timestamp
          .split(" ")[1]
          .substring(0, 5);
        const duration = calculateTimeDifference(
          conn.connection_start_timestamp,
          conn.connection_end_timestamp
        );

        const btn = document.createElement("button");
        btn.innerHTML = `
          <div style="display: flex; flex-direction: column; align-items: center;">
            <div style="font-size: 14px; margin-bottom: 4px; font-weight: bold;">${startTime} - ${endTime}</div>
            <div style="display: flex; align-items: center; font-size: 12px; color: #666;">
              <span>${duration}</span>
              <span style="margin: 0 0 0 15px;">${conn.connection_transfers}</span>
              <span style="margin: 0 5px;"><svg width="16" height="17" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M14.8537 8.85354L12.8537 10.8535C12.7598 10.9474 12.6326 11.0001 12.4999 11.0001C12.3672 11.0001 12.24 10.9474 12.1462 10.8535C12.0523 10.7597 11.9996 10.6325 11.9996 10.4998C11.9996 10.3671 12.0523 10.2399 12.1462 10.146L13.293 8.99979H2.70678L3.85366 10.146C3.94748 10.2399 4.00018 10.3671 4.00018 10.4998C4.00018 10.6325 3.94748 10.7597 3.85366 10.8535C3.75983 10.9474 3.63259 11.0001 3.49991 11.0001C3.36722 11.0001 3.23998 10.9474 3.14616 10.8535L1.14616 8.85354C1.09967 8.8071 1.06279 8.75196 1.03763 8.69126C1.01246 8.63056 0.999512 8.5655 0.999512 8.49979C0.999512 8.43408 1.01246 8.36902 1.03763 8.30832C1.06279 8.24762 1.09967 8.19248 1.14616 8.14604L3.14616 6.14604C3.23998 6.05222 3.36722 5.99951 3.49991 5.99951C3.63259 5.99951 3.75983 6.05222 3.85366 6.14604C3.94748 6.23986 4.00018 6.36711 4.00018 6.49979C4.00018 6.63247 3.94748 6.75972 3.85366 6.85354L2.70678 7.99979H13.293L12.1462 6.85354C12.0523 6.75972 11.9996 6.63247 11.9996 6.49979C11.9996 6.36711 12.0523 6.23986 12.1462 6.14604C12.24 6.05222 12.3672 5.99951 12.4999 5.99951C12.6326 5.99951 12.7598 6.05222 12.8537 6.14604L14.8537 8.14604C14.9001 8.19248 14.937 8.24762 14.9622 8.30832C14.9873 8.36902 15.0003 8.43408 15.0003 8.49979C15.0003 8.5655 14.9873 8.63056 14.9622 8.69126C14.937 8.75196 14.9001 8.8071 14.8537 8.85354Z" fill="black"/>
              </svg></span>
            </div>
          </div>
        `;

        btn.onclick = () => filterDataByTimestamp("to", startTime, endTime);

        // Add this condition to make the first button active by default
        if (index === 0) {
          btn.classList.add("active-time");
          filterDataByTimestamp("to", startTime, endTime);
        }

        bottomSlider.appendChild(btn);
      });

      addSwipeBehavior("topSlider");
      addSwipeBehavior("bottomSlider");
    } catch (error) {
      console.error("Error fetching data:", error);
      responseBox.textContent = `Error: ${error.message}. Reloading...`;

      // Reload after 3 seconds on error
      setTimeout(() => {
        window.location.reload();
      }, 3000);
    }
  }


  function filterDataByTimestamp(type, startTimestamp, endTimestamp) {
    let filteredConnections = type === "from" ? fromConnections : toConnections;
    const sliderId = type === "from" ? "topSlider" : "bottomSlider";
    let targetBox = type === "from" ? responseBox : responseBoxbtm;
    let connectionType = type === "from" ? "from_activity" : "to_activity";

    // Update active button state
    const slider = document.getElementById(sliderId);
    const buttons = slider.querySelectorAll("button");
    buttons.forEach((btn) => {
      btn.classList.remove("active-time");
      if (btn.textContent.includes(`${startTimestamp} - ${endTimestamp}`)) {
        btn.classList.add("active-time");
      }
    });

    // Filter connections
    const selectedConnections = filteredConnections.filter((conn) => {
      const startTime = conn.connection_start_timestamp
        .split(" ")[1]
        .substring(0, 5);
      const endTime = conn.connection_end_timestamp
        .split(" ")[1]
        .substring(0, 5);
      return startTime === startTimestamp && endTime === endTimestamp;
    });

    let html = "";
    let activityHtml = "";

    selectedConnections.forEach((conn) => {
      // Update activity-time box
      activityHtml = `
           <div style="display: flex; justify-content: space-between; align-items: center;" >
  <div>
    <div style="font-weight: 600; font-size: 18px; color: #111827;">
      Activity Name
    </div>
    <div style="display: flex; flex-direction: column; gap: 12px;">
      <div style="font-size: 14px; color: #6B7280;font-weight: 600;">
        <div>Start time: ${conn.connection_start_timestamp
          .split(" ")[1]
          .substring(0, 5)}</div>
        <div>End time: ${conn.connection_end_timestamp
          .split(" ")[1]
          .substring(0, 5)}</div>
      </div>
      <div style="font-size: 14px; color: #6B7280; font-weight: 600;">
        <div>Duration: ${calculateTimeDifference(
            conn.connection_start_timestamp,
            conn.connection_end_timestamp
          )}</div>
        <div>Transfers: ${conn.connection_transfers}</div>
    </div>
  </div>
</div>
        `;

      if (conn.connection_elements && conn.connection_elements.length > 0) {
        html += `
                <div class="connection-header">
                    ${type === "from" ? "From Activity" : "To Activity"
          } Connection
                </div>
                <div class="connection-meta">
                    <span>${startTimestamp} - ${endTimestamp}</span>
                    <span>${calculateTimeDifference(
            conn.connection_start_timestamp,
            conn.connection_end_timestamp
          )}</span>
                    <span>${conn.connection_transfers} transfers</span>
                </div>
                <div class="connection-elements">
            `;

        conn.connection_elements.forEach((element, index) => {
          const elementDuration = calculateElementDuration(
            element.departure_time,
            element.arrival_time
          );
          const departureTime = new Date(element.departure_time)
            .toTimeString()
            .substring(0, 5);
          const arrivalTime = new Date(element.arrival_time)
            .toTimeString()
            .substring(0, 5);
          console.log(element.type)
          const iconType = !element.type ? "DEFAULT" : element.type;
          const icon = getTransportIcon(iconType);

          html += `
                    <div class="connection-element">
                       
                        <div class="element-time"><span>${departureTime}</span> ${element.from_location}</div>
                        <div id='eleCont'>
                        <div class="element-crcl"></div>
                        <span class="element-icon">${icon}</span>
                        <span class="element-duration">${elementDuration}</span>
                        </div>
                         
                        
                    </div>
                `;
        });

        html += `</div>`;
      }
    });

    document.getElementById("activity-time").innerHTML = activityHtml;
    targetBox.innerHTML = html || "<div>No connection details available</div>";
  }
});
