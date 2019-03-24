let prevMonthButton = document.getElementById('prevMonth');
let nextMonthButton = document.getElementById('nextMonth');
let title = document.getElementById('mytitle');
let monthsArray =['January','February','March','April','May','June','July','August','September','October','November','December'];

let today = new Date();
let currentMonthNumber = today.getMonth();
let currentMonthLiteral = monthsArray[currentMonthNumber];
let year = new Date().getFullYear();

function setYear(newValue) {
    year = newValue;
}

prevMonthButton.addEventListener('click', () => {
    let thisday = new Date(2019,currentMonthNumber,24);
    let currentYear = year;
    let prevMonthNumber = thisday.getMonth()-1;
    let prevMonthLiteral = monthsArray[prevMonthNumber];
    currentMonthNumber=prevMonthNumber;
    currentMonthLiteral=prevMonthLiteral;
    if(currentMonthNumber===-1)
        {
            currentMonthNumber=11;
            currentMonthLiteral=monthsArray[currentMonthNumber];
            year--;
        }
    title.innerText=currentMonthLiteral + ' ' + year;
})

nextMonthButton.addEventListener('click', () => {
    let thisday = new Date(2019,currentMonthNumber,24);
    let currentYear = year;
    let nextMonthNumber = thisday.getMonth()+1;
    let nextMonthLiteral = monthsArray[nextMonthNumber];
    currentMonthNumber=nextMonthNumber;
    currentMonthLiteral=nextMonthLiteral;
    if(currentMonthNumber===12)
        {
            currentMonthNumber=0;
            currentMonthLiteral=monthsArray[currentMonthNumber];
            year++;
        }
    title.innerText=currentMonthLiteral + ' ' + year;
})