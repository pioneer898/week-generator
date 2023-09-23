class WeekGenerator{
  initialDate;
  currentDate;
  constructor(startDateString){
    let year = parseInt(startDateString.split('-')[0]);
    let month = parseInt(startDateString.split('-')[1]);
    let date = parseInt(startDateString.split('-')[2]);
    this.initialDate = new Date(year,month-1,date);
    this.currentDate = new Date(year,month-1,date);
  }
  addDay(){
    let year = parseInt(this.currentDate.getFullYear());
    let month = parseInt(this.currentDate.getMonth())+1;
    let date = parseInt(this.currentDate.getDate());

    let isLeapYear = ((year%4 === 0 && year%100 !== 0) || year%400 === 0);
    let thirtyOneMonths = [1,3,5,7,8,10,12];
    date++;

    if(date == 31 && !thirtyOneMonths.includes(month)){
      date = 1;
      month++;
    }
    if(date == 32){
      date = 1;
      month++;
    }
    if(month == 2 && date == 29 && !isLeapYear){
      date = 1;
      month++;
    }
    if(month == 13){
      month = 1;
      year++;
    }
    this.currentDate = new Date(year,month-1,date);
  }
  addDays(days){
    for(let i=0;i<days;i++){
      this.addDay();
    }
  }
  getDateString(date){
    return `${date.getFullYear()}-${(date.getMonth()+1).toString().padStart(2,'0')}-${(date.getDate()).toString().padStart(2,'0')}`;
  }
  next(){
    this.addDays(7);
    return this.getDateString(this.currentDate);
  }
  start(){
    return this.getDateString(this.initialDate);
  }
  end(){
    return this.getDateString(this.currentDate);
  }
}

module.exports = WeekGenerator;