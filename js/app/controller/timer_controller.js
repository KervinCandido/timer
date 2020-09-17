class TimerController {

    constructor() {
        const $ = document.querySelector.bind(document);
        this._startSpan = $(".timer .content #start");
        this._timerSpan = $(".timer .content #timer");
        this._stopSpan = $(".timer .content #stop");
        this._resumeSpan = $(".timer .content #resume");
        this._resetSpan = $(".timer .content #reset");
        this._borderBefore = $(".timer .before");
        this._borderAfter = $(".timer .after");
        this._timer = new Timer();
    }

    start() {
        this._borderBefore.classList.add("rotate-border");
        this._borderAfter.classList.add("rotate-border");

        this._startSpan.classList.add("display-none")
        this._timerSpan.classList.remove("display-none");
        this._stopSpan.classList.remove("display-none");
        this._resetSpan.classList.remove("display-none");

        this._timer.setTimerEvent((timer) => {
            const horas = timer.hour.toString().padStart(2, '0');
            const minutos = timer.minute.toString().padStart(2, '0');
            const segundos = timer.second.toString().padStart(2, '0');
    
            this._timerSpan.innerHTML =  `${horas}:${minutos}:${segundos}`;
        });

        this._timer.start();
    }
 
    stop() {
        this._timer.stop()
        this._stopSpan.classList.add("display-none");
        this._resumeSpan.classList.remove("display-none");
        this._borderBefore.classList.remove("rotate-border");
        this._borderAfter.classList.remove("rotate-border");
    }

    resume() {
        this._timer.resume();
        this._stopSpan.classList.remove("display-none");
        this._resumeSpan.classList.add("display-none");
        this._borderBefore.classList.add("rotate-border");
        this._borderAfter.classList.add("rotate-border");
    }

    reset() {
        this._timer.reset();

        if (this._timer.isStopped()) {
            this._stopSpan.classList.add("display-none");
            this._resumeSpan.classList.add("display-none");
            this._startSpan.classList.remove("display-none");
            this._startSpan.classList.remove("font-big-size");
            this._startSpan.classList.add("font-midium-size");
        }
    }
}