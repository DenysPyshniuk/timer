const schedule = process.argv.slice(2);

const timer = function(schedule) {
  if(!schedule.length) {
  } else if(schedule.length > 1) {
    let newSchedule = schedule.filter((num) => {
      return Number(num) > 0 ;
    });
    for(let time of newSchedule) {
      setTimeout(() => {
        console.log(`ALARMMMMMM!!!!!!! "${time}" seconds timer`);
      }, time * 1000);
    }
  }
};
timer(schedule);
