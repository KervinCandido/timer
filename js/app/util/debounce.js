function debounce(fn, time = 300) {
    let timeout = 0;
    return function(...args) {
        clearTimeout(timeout)
        timeout = setTimeout(() => fn.apply(this, args), time);
    }
}