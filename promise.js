class Clock {
  constructor(hour, minute, second) {
      this.hour = hour
      this.minute = minute
      this.second = second
  }
  start() {
      setInterval(() => {
          this.second += 1
          if (this.second > 59) {
              this.minute += 1
              this.second -= 60
             if (this.minute > 59) {
                  this.hour += 1
                  this.minute -= 60}
               if (this.hour > 23) {
                      this.hour -= 24
                  }};
                  console.clear();
                  console.log(`${this.hour} : ${this.minute} : ${this.second}`);
      }, 1000)
  };
  setAlarm(_hour,_minute,_second) {
      let timer1 = (this.hour * 60 * 60 * 1000) + (this.minute * 60 * 1000) + (this.second * 1000);
      let timer2 = (_hour * 60 * 60 * 1000) + (_minute * 60 * 1000) + (_second * 1000);
      let timer3;
      if (timer2 > timer1) {
          timer3 = timer2 - timer1;
      } else {
          timer3 = (24 * 60 * 60 * 1000) - (timer1 - timer2);
      }
      return new Promise((resolve) => {
          setTimeout(() => {
              resolve("Alarm");
          }, timer3)
      })
  };
};

let clock = new Clock(21,59,55);
clock.start();
clock.setAlarm(22, 00, 10).then((result) => {
  console.log(`${result} - Football Time`);
});
clock.setAlarm(22, 00, 00).then((result) => {
  console.log(`${result} - Gnal Dasi`);
});
clock.setAlarm(22, 00, 05).then((result) => {
  console.log(`${result} - Durs gal`);
});
clock.setAlarm2(22,00,00)