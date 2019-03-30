let prevMonthButton = document.getElementById('prevMonth');
let nextMonthButton = document.getElementById('nextMonth');
let todayButton = document.getElementById('today');
let title = document.getElementById('mytitle');
let monthsArray =['January','February','March','April','May','June','July','August','September','October','November','December'];

let today = new Date();
let currentMonthNumber = today.getMonth();
let currentMonthLiteral = monthsArray[currentMonthNumber];
let year = new Date().getFullYear();
let calGrid = document.createElement('div');

function appendCorrectGrid(month) {
  switch (month) {
    case 0:
    calGrid.innerHTML = '<ul class="weekdays"><li class="weekdays-title">  Monday</li><li class="weekdays-title">  Tuesday</li><li class="weekdays-title">  Wednesday</li><li class="weekdays-title">  Thursday</li><li class="weekdays-title">  Friday</li><li class="weekdays-title">  Saturday</li><li class="weekdays-title">  Sunday</li>          </ul>      <ul class="day-grid"><li class="prev-month">31</li><li>1</li><li>2</li><li>3</li><li>4</li><li>5</li><li>6</li><li>7</li><li>8</li><li>9</li><li>10</li><li>11</li><li>12</li><li>13</li><li>14</li><li>15</li><li>16</li><li>17</li><li>18</li><li>19</li><li>20</li><li>21</li><li>22</li><li>23</li><li>24</li><li>25</li><li>26</li><li>27</li><li>28</li><li>29</li><li>30</li><li>31</li><li class="prev-month">1</li><li class="prev-month">2</li><li class="prev-month">3</li></ul>';
    document.getElementById('calendarGrid').appendChild(calGrid);
      break;
    case 1:
    calGrid.innerHTML = '<ul class="weekdays"><li class="weekdays-title">  Monday</li><li class="weekdays-title">  Tuesday</li><li class="weekdays-title">  Wednesday</li><li class="weekdays-title">  Thursday</li><li class="weekdays-title">  Friday</li><li class="weekdays-title">  Saturday</li><li class="weekdays-title">  Sunday</li>          </ul>      <ul class="day-grid"><li>4</li><li>5</li><li>6</li><li>7</li><li>8</li><li>9</li><li>10</li><li>11</li><li>12</li><li>13</li><li>14</li><li>15</li><li>16</li><li>17</li><li>18</li><li>19</li><li>20</li><li>21</li><li>22</li><li>23</li><li>24</li><li>25</li><li>26</li><li>27</li><li>28</li><li class="prev-month">1</li><li class="prev-month">2</li><li class="prev-month">3</li></ul>';
    document.getElementById('calendarGrid').appendChild(calGrid);
      break;
    case 2:
    calGrid.innerHTML = '<ul class="weekdays"><li class="weekdays-title">  Monday</li><li class="weekdays-title">  Tuesday</li><li class="weekdays-title">  Wednesday</li><li class="weekdays-title">  Thursday</li><li class="weekdays-title">  Friday</li><li class="weekdays-title">  Saturday</li><li class="weekdays-title">  Sunday</li>          </ul>      <ul class="day-grid"><li>4</li><li>5</li><li>6</li><li>7</li><li>8</li><li>9</li><li>10</li><li>11</li><li>12</li><li>13</li><li>14</li><li>15</li><li>16</li><li>17</li><li>18</li><li>19</li><li>20</li><li>21</li><li>22</li><li>23</li><li>24</li><li>25</li><li>26</li><li>27</li><li>28</li><li>29</li><li>30</li><li>31</li class="prev-month"><li class="prev-month">1</li><li class="prev-month">2</li><li class="prev-month">3</li></ul>';
    document.getElementById('calendarGrid').appendChild(calGrid);
      break;
    case 3:
    calGrid.innerHTML = '<ul class="weekdays"><li class="weekdays-title">  Monday</li><li class="weekdays-title">  Tuesday</li><li class="weekdays-title">  Wednesday</li><li class="weekdays-title">  Thursday</li><li class="weekdays-title">  Friday</li><li class="weekdays-title">  Saturday</li><li class="weekdays-title">  Sunday</li>          </ul>      <ul class="day-grid"><li>4</li><li>5</li><li>6</li><li>7</li><li>8</li><li>9</li><li>10</li><li>11</li><li>12</li><li>13</li><li>14</li><li>15</li><li>16</li><li>17</li><li>18</li><li>19</li><li>20</li><li>21</li><li>22</li><li>23</li><li>24</li><li>25</li><li>26</li><li>27</li><li>28</li><li>29</li><li>30</li><li class="prev-month">1</li><li class="prev-month">2</li><li class="prev-month">3</li></ul>';
    document.getElementById('calendarGrid').appendChild(calGrid);
      break;
    case 4:
    calGrid.innerHTML = '<ul class="weekdays"><li class="weekdays-title">  Monday</li><li class="weekdays-title">  Tuesday</li><li class="weekdays-title">  Wednesday</li><li class="weekdays-title">  Thursday</li><li class="weekdays-title">  Friday</li><li class="weekdays-title">  Saturday</li><li class="weekdays-title">  Sunday</li>          </ul>      <ul class="day-grid"><li>4</li><li>5</li><li>6</li><li>7</li><li>8</li><li>9</li><li>10</li><li>11</li><li>12</li><li>13</li><li>14</li><li>15</li><li>16</li><li>17</li><li>18</li><li>19</li><li>20</li><li>21</li><li>22</li><li>23</li><li>24</li><li>25</li><li>26</li><li>27</li><li>28</li><li>29</li><li>30</li><li>31</li><li class="prev-month">1</li><li class="prev-month">2</li><li class="prev-month">3</li></ul>';
    document.getElementById('calendarGrid').appendChild(calGrid);
      break;
    case 5:
    calGrid.innerHTML = '<ul class="weekdays"><li class="weekdays-title">  Monday</li><li class="weekdays-title">  Tuesday</li><li class="weekdays-title">  Wednesday</li><li class="weekdays-title">  Thursday</li><li class="weekdays-title">  Friday</li><li class="weekdays-title">  Saturday</li><li class="weekdays-title">  Sunday</li>          </ul>      <ul class="day-grid"><li>1</li><li>2</li><li>3</li><li>4</li><li>5</li><li>6</li><li>7</li><li>8</li><li>9</li><li>10</li><li>11</li><li>12</li><li>13</li><li>14</li><li>15</li><li>16</li><li>17</li><li>18</li><li>19</li><li>20</li><li>21</li><li>22</li><li>23</li><li>24</li><li>25</li><li>26</li><li>27</li><li>28</li><li>29</li><li>30</li></ul>';
    document.getElementById('calendarGrid').appendChild(calGrid);
      break;
    case 6:
    calGrid.innerHTML = '<ul class="weekdays"><li class="weekdays-title">  Monday</li><li class="weekdays-title">  Tuesday</li><li class="weekdays-title">  Wednesday</li><li class="weekdays-title">  Thursday</li><li class="weekdays-title">  Friday</li><li class="weekdays-title">  Saturday</li><li class="weekdays-title">  Sunday</li>          </ul>      <ul class="day-grid"><li>1</li><li>2</li><li>3</li><li>4</li><li>5</li><li>6</li><li>7</li><li>8</li><li>9</li><li>10</li><li>11</li><li>12</li><li>13</li><li>14</li><li>15</li><li>16</li><li>17</li><li>18</li><li>19</li><li>20</li><li>21</li><li>22</li><li>23</li><li>24</li><li>25</li><li>26</li><li>27</li><li>28</li><li>29</li><li>30</li><li>31</li></ul>';
    document.getElementById('calendarGrid').appendChild(calGrid);
      break;
    case 7:
    calGrid.innerHTML = '<ul class="weekdays"><li class="weekdays-title">  Monday</li><li class="weekdays-title">  Tuesday</li><li class="weekdays-title">  Wednesday</li><li class="weekdays-title">  Thursday</li><li class="weekdays-title">  Friday</li><li class="weekdays-title">  Saturday</li><li class="weekdays-title">  Sunday</li>          </ul>      <ul class="day-grid"><li>1</li><li>2</li><li>3</li><li>4</li><li>5</li><li>6</li><li>7</li><li>8</li><li>9</li><li>10</li><li>11</li><li>12</li><li>13</li><li>14</li><li>15</li><li>16</li><li>17</li><li>18</li><li>19</li><li>20</li><li>21</li><li>22</li><li>23</li><li>24</li><li>25</li><li>26</li><li>27</li><li>28</li><li>29</li><li>30</li><li>31</li></ul>';
    document.getElementById('calendarGrid').appendChild(calGrid);
      break;
    case 8:
    calGrid.innerHTML = '<ul class="weekdays"><li class="weekdays-title">  Monday</li><li class="weekdays-title">  Tuesday</li><li class="weekdays-title">  Wednesday</li><li class="weekdays-title">  Thursday</li><li class="weekdays-title">  Friday</li><li class="weekdays-title">  Saturday</li><li class="weekdays-title">  Sunday</li>          </ul>      <ul class="day-grid"><li>1</li><li>2</li><li>3</li><li>4</li><li>5</li><li>6</li><li>7</li><li>8</li><li>9</li><li>10</li><li>11</li><li>12</li><li>13</li><li>14</li><li>15</li><li>16</li><li>17</li><li>18</li><li>19</li><li>20</li><li>21</li><li>22</li><li>23</li><li>24</li><li>25</li><li>26</li><li>27</li><li>28</li><li>29</li><li>30</li></ul>';
    document.getElementById('calendarGrid').appendChild(calGrid);
      break;
    case 9:
    calGrid.innerHTML = '<ul class="weekdays"><li class="weekdays-title">  Monday</li><li class="weekdays-title">  Tuesday</li><li class="weekdays-title">  Wednesday</li><li class="weekdays-title">  Thursday</li><li class="weekdays-title">  Friday</li><li class="weekdays-title">  Saturday</li><li class="weekdays-title">  Sunday</li>          </ul>      <ul class="day-grid"><li>1</li><li>2</li><li>3</li><li>4</li><li>5</li><li>6</li><li>7</li><li>8</li><li>9</li><li>10</li><li>11</li><li>12</li><li>13</li><li>14</li><li>15</li><li>16</li><li>17</li><li>18</li><li>19</li><li>20</li><li>21</li><li>22</li><li>23</li><li>24</li><li>25</li><li>26</li><li>27</li><li>28</li><li>29</li><li>30</li><li>31</li></ul>';
    document.getElementById('calendarGrid').appendChild(calGrid);
      break;
    case 10:
    calGrid.innerHTML = '<ul class="weekdays"><li class="weekdays-title">  Monday</li><li class="weekdays-title">  Tuesday</li><li class="weekdays-title">  Wednesday</li><li class="weekdays-title">  Thursday</li><li class="weekdays-title">  Friday</li><li class="weekdays-title">  Saturday</li><li class="weekdays-title">  Sunday</li>          </ul>      <ul class="day-grid"><li>1</li><li>2</li><li>3</li><li>4</li><li>5</li><li>6</li><li>7</li><li>8</li><li>9</li><li>10</li><li>11</li><li>12</li><li>13</li><li>14</li><li>15</li><li>16</li><li>17</li><li>18</li><li>19</li><li>20</li><li>21</li><li>22</li><li>23</li><li>24</li><li>25</li><li>26</li><li>27</li><li>28</li><li>29</li><li>30</li></ul>';
    document.getElementById('calendarGrid').appendChild(calGrid);
      break;
    case 11:
    calGrid.innerHTML = '<ul class="weekdays"><li class="weekdays-title">  Monday</li><li class="weekdays-title">  Tuesday</li><li class="weekdays-title">  Wednesday</li><li class="weekdays-title">  Thursday</li><li class="weekdays-title">  Friday</li><li class="weekdays-title">  Saturday</li><li class="weekdays-title">  Sunday</li>          </ul>      <ul class="day-grid"><li>1</li><li>2</li><li>3</li><li>4</li><li>5</li><li>6</li><li>7</li><li>8</li><li>9</li><li>10</li><li>11</li><li>12</li><li>13</li><li>14</li><li>15</li><li>16</li><li>17</li><li>18</li><li>19</li><li>20</li><li>21</li><li>22</li><li>23</li><li>24</li><li>25</li><li>26</li><li>27</li><li>28</li><li>29</li><li>30</li><li>31</li></ul>';
    document.getElementById('calendarGrid').appendChild(calGrid);
      break;
  }
}



prevMonthButton.addEventListener('click', () => {
  let thisday = new Date(year,currentMonthNumber,24);
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
  appendCorrectGrid(currentMonthNumber);
})

nextMonthButton.addEventListener('click', () => {
  let thisday = new Date(year,currentMonthNumber,24);
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
  appendCorrectGrid(currentMonthNumber);
})

todayButton.addEventListener('click', () => {
  currentMonthNumber = today.getMonth();
  currentMonthLiteral = monthsArray[currentMonthNumber];
  year = new Date().getFullYear();
  title.innerText= currentMonthLiteral + ' ' + year;
})

appendCorrectGrid(currentMonthNumber);


