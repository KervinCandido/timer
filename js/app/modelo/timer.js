class Timer {
    
    constructor() {
        this._setIntervalId = 0;
        this._totalTimeInSeconds = 0;
        this._hour = 0;
        this._minute = 0;
        this._second = 0;
    }

    setTimerEvent(timerEvent) {
        this.timerEvent = timerEvent;
    }

    start() {
        this._setIntervalId = setInterval(() => {
            this._totalTimeInSeconds++;
            this._hour = Math.floor(this._totalTimeInSeconds / 60 / 60);
            this._minute =  Math.floor(this._totalTimeInSeconds / 60) % 60;
            this._second = this._totalTimeInSeconds % 60;

            this.timerEvent(this.time)
        }, 1000);
    }

    resume() {
        this.start()
    }

    stop() {
        clearInterval(this._setIntervalId)
        this._setIntervalId = 0;
    }

    reset() {
        this._totalTimeInSeconds = 0;
        this._hour = 0;
        this._minute = 0;
        this._second = 0;
        this.timerEvent(this.time);
    }

    isStopped() {
        return this._setIntervalId === 0;
    }

    isRunning() {
        return this._setIntervalId !== 0;
    }

    get time() {
        return {
            hour: this.hour, 
            minute: this.minute, 
            second: this.second, 
            totalTimeInSeconds: this._totalTimeInSeconds
        }
    }

    get hour() {
        return this._hour;
    }

    get minute() {
        return this._minute;
    }

    get second() {
        return this._second;
    }
}