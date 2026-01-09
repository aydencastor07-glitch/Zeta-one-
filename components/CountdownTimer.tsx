
import React, { useState, useEffect } from 'react';

const CountdownTimer: React.FC = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 1,
    hours: 2,
    minutes: 45,
    seconds: 0
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        let { days, hours, minutes, seconds } = prev;
        
        if (seconds > 0) {
          seconds--;
        } else {
          seconds = 59;
          if (minutes > 0) {
            minutes--;
          } else {
            minutes = 59;
            if (hours > 0) {
              hours--;
            } else {
              hours = 23;
              if (days > 0) {
                days--;
              } else {
                // Evergreen reset to maintain urgency
                return { days: 1, hours: 2, minutes: 45, seconds: 0 };
              }
            }
          }
        }
        return { days, hours, minutes, seconds };
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const format = (num: number) => num.toString().padStart(2, '0');

  return (
    <div className="flex flex-col items-center space-y-3 py-4 bg-yellow-400/5 rounded-2xl border border-yellow-400/20 px-8 max-w-[280px] mx-auto backdrop-blur-sm">
      <div className="text-[9px] font-black text-yellow-500 uppercase tracking-[0.4em]">
        Offer Expires In
      </div>
      <div className="flex items-center space-x-4">
        {[
          { label: 'Day', val: timeLeft.days },
          { label: 'Hrs', val: timeLeft.hours },
          { label: 'Min', val: timeLeft.minutes },
          { label: 'Sec', val: timeLeft.seconds },
        ].map((unit, i) => (
          <React.Fragment key={i}>
            <div className="flex flex-col items-center">
              <div className="text-yellow-500 font-black text-xl tabular-nums leading-none mb-1">
                {unit.label === 'Day' ? unit.val : format(unit.val)}
              </div>
              <span className="text-[8px] font-bold text-slate-500 uppercase tracking-widest">{unit.label}</span>
            </div>
            {i < 3 && <span className="text-yellow-500/20 font-black mb-3">:</span>}
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};

export default CountdownTimer;
