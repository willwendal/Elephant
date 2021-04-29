import './CountdownTimer.scss'
import { useEffect, useState, useRef } from 'react';

function CountdownTimer () {

  const [timerDays, setTimerDays] = useState('00');
  const [timerHours, setTimerHours] = useState('00');
  const [timerMinutes, setTimerMinutes] = useState('00');
  const [timerSeconds, setTimerSeconds] = useState('00');

  let interval = useRef();

  const startTimer = () => {
    const countdownDate = new Date('May 30, 2021 00:00:00').getTime();

    interval = setInterval(() => {
      const now = new Date().getTime();
      const distance = now - countdownDate;

      const daysNegative = Math.floor(distance / (1000 * 60 * 60 * 24));
      const days = Math.abs(daysNegative);
      const hoursNegative = Math.floor((distance % (1000 * 60 * 60 * 24) / (1000 * 60 * 60)));
      const hours = Math.abs(hoursNegative);
      const minutesNegative = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const minutes = Math.abs(minutesNegative);
      const secondsNegative = Math.floor((distance % (1000 * 60)) / 1000);
      const seconds = Math.abs(secondsNegative);

      if (distance > 0 ) {

        clearInterval(interval);
      } else {
        
        setTimerDays(days);
        setTimerHours(hours);
        setTimerMinutes(minutes);
        setTimerSeconds(seconds);
      }

    }, 1000);
  };

  useEffect(() => {
    startTimer();
    return () => {
      clearInterval(interval);
    };
  });

  return (
    <section className='timer-container'>
      <section className='timer'>
        <div className='timer-first-div'>
          <span className='calendar-clock-timer-icon' />
          <h2 className="timer-header">Countdown Timer</h2>
          <p className="timer-header">Tick Tock</p>
        </div>
        <div className='timer-last-div'>
          <section>
            <p>{timerDays}</p>
            <p><small>Days</small></p>
          </section>
          <span className="timer-colon">:</span>
          <section>
            <p>{timerHours}</p>
            <p><small>Hours</small></p>
          </section>
          <span className="timer-colon">:</span>
          <section>
            <p>{timerMinutes}</p>
            <p><small>Minutes</small></p>
          </section>
          <span className="timer-colon">:</span>
          <section>
            <p>{timerSeconds}</p>
            <p><small>Seconds</small></p>
          </section>
        </div>
      </section>
    </section>
  )
}

export default CountdownTimer
