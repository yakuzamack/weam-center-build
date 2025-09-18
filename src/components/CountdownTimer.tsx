'use client';
import { useEffect, useMemo, useState } from 'react';

interface CountdownTimerProps {
  targetDate?: Date;
}

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

export function CountdownTimer({ targetDate }: CountdownTimerProps) {
  // Default to 30 days from now if no target date provided
  const defaultTarget = useMemo(() => {
    const date = new Date();
    date.setDate(date.getDate() + 30);
    return date;
  }, []);

  const target = targetDate || defaultTarget;

  const [timeLeft, setTimeLeft] = useState<TimeLeft>({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  useEffect(() => {
    if (!isClient) {
      return;
    }

    const calculateTimeLeft = (): TimeLeft => {
      const difference = target.getTime() - new Date().getTime();

      if (difference > 0) {
        return {
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60),
        };
      }

      return { days: 0, hours: 0, minutes: 0, seconds: 0 };
    };

    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    // Set initial time
    setTimeLeft(calculateTimeLeft());

    return () => clearInterval(timer);
  }, [target, isClient]);

  if (!isClient) {
    return (
      <div className='countdown-grid'>
        <div className='countdown-item'>
          <div className='countdown-number'>--</div>
          <div className='countdown-label'>يوم</div>
        </div>
        <div className='countdown-separator'>:</div>
        <div className='countdown-item'>
          <div className='countdown-number'>--</div>
          <div className='countdown-label'>ساعة</div>
        </div>
        <div className='countdown-separator'>:</div>
        <div className='countdown-item'>
          <div className='countdown-number'>--</div>
          <div className='countdown-label'>دقيقة</div>
        </div>
        <div className='countdown-separator'>:</div>
        <div className='countdown-item'>
          <div className='countdown-number'>--</div>
          <div className='countdown-label'>ثانية</div>
        </div>
      </div>
    );
  }

  return (
    <div className='countdown-grid'>
      <div className='countdown-item'>
        <div className='countdown-number'>
          {timeLeft.days.toString().padStart(2, '0')}
        </div>
        <div className='countdown-label'>يوم</div>
      </div>
      <div className='countdown-separator'>:</div>
      <div className='countdown-item'>
        <div className='countdown-number'>
          {timeLeft.hours.toString().padStart(2, '0')}
        </div>
        <div className='countdown-label'>ساعة</div>
      </div>
      <div className='countdown-separator'>:</div>
      <div className='countdown-item'>
        <div className='countdown-number'>
          {timeLeft.minutes.toString().padStart(2, '0')}
        </div>
        <div className='countdown-label'>دقيقة</div>
      </div>
      <div className='countdown-separator'>:</div>
      <div className='countdown-item'>
        <div className='countdown-number'>
          {timeLeft.seconds.toString().padStart(2, '0')}
        </div>
        <div className='countdown-label'>ثانية</div>
      </div>
    </div>
  );
}
