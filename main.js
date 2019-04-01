// Button Selectors

let prevMonthButton = document.getElementById('prevMonth');
let nextMonthButton = document.getElementById('nextMonth');
let todayButton = document.getElementById('today');
let title = document.getElementById('mytitle');
let months =['January','February','March','April','May','June','July','August','September','October','November','December'];

let today = new Date();
let currentMonthNumber = today.getMonth();
let currentMonthLiteral = months[currentMonthNumber];
let year = new Date().getFullYear();


function monthStartDate(month, year) {
  return new Date(year, month, 1);
}

function monthEndDate(month, year, dateOrNumberModifier) {
  if(dateOrNumberModifier==true)
    return new Date(year, month, (32 - new Date(year, month, 32).getDate()));
  else
    return (32 - new Date(year, month, 32).getDate());
}

function drawDay(day, inCurrentMonth) {
  let grid = document.getElementById('day-grid');
  let dayNumberElement = document.createElement('li');
  dayNumberElement.className = 'day';
  if(!inCurrentMonth)
    dayNumberElement.classList.add('not-current-month');
  dayNumberElement.textContent = day;
  grid.appendChild(dayNumberElement);
  return grid;
}

function clearGrid() {
  let grid = document.getElementById('day-grid');
  grid.innerHTML=' ';
}

function drawGrid(month, year) {
  const calendarBody = document.getElementById('calendarGrid');
  const oldCalendarDays = document.querySelectorAll('.day');
  const startDate = monthStartDate(month, year);
  const endDate = monthEndDate(month, year, true);
  let firstDayIndex = startDate.getDay();
  let lastDayIndex = endDate.getDay();
  firstDayIndex = firstDayIndex === 0 ? 6 : firstDayIndex - 1;
  lastDayIndex = lastDayIndex === 0 ? 6 : lastDayIndex - 1;
  clearGrid();
  for (let i = 0; i < oldCalendarDays.length; i++) {
    oldCalendarDays[i].remove();
  }
  for (let i = 0; i < firstDayIndex; i++) {
    calendarBody.appendChild(drawDay('', !'inCurrentMonth'));
  }

  for (let i = 1; i <= endDate.getDate(); i++) {
    let dateItem = drawDay(i, !!'inCurrentMonth');
    calendarBody.appendChild(dateItem);
  }

  for (let i = 0; i < 6 - lastDayIndex; i++) {
    calendarBody.appendChild(drawDay('', !'inCurrentMonth'));
  }
}

prevMonthButton.addEventListener('click', () => {
  let thisday = new Date(year,currentMonthNumber,24);
  let prevMonthNumber = thisday.getMonth()-1;
  let prevMonthLiteral = months[prevMonthNumber];
  currentMonthNumber=prevMonthNumber;
  currentMonthLiteral=prevMonthLiteral;
  if(currentMonthNumber===-1)
      {
          currentMonthNumber=11;
          currentMonthLiteral=months[currentMonthNumber];
          year--;
      }
  title.innerText=currentMonthLiteral + ' ' + year;
  drawGrid(currentMonthNumber, year);
})

nextMonthButton.addEventListener('click', () => {
  let thisday = new Date(year,currentMonthNumber,24);
  let nextMonthNumber = thisday.getMonth()+1;
  let nextMonthLiteral = months[nextMonthNumber];
  currentMonthNumber=nextMonthNumber;
  currentMonthLiteral=nextMonthLiteral;
  if(currentMonthNumber===12)
      {
          currentMonthNumber=0;
          currentMonthLiteral=months[currentMonthNumber];
          year++;
      }
  title.innerText=currentMonthLiteral + ' ' + year;
  drawGrid(currentMonthNumber, year);
})

todayButton.addEventListener('click', () => {
  currentMonthNumber = today.getMonth();
  currentMonthLiteral = months[currentMonthNumber];
  year = new Date().getFullYear();
  title.innerText= currentMonthLiteral + ' ' + year;
  drawGrid(currentMonthNumber, year);
})
drawGrid(currentMonthNumber, year);
