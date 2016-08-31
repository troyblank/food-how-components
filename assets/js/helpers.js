import ReactDOM from 'react-dom';
// For demo purposes only.

export function print(value) {
    /* eslint-disable no-console */
    console.log(value);
    /* eslint-enable no-console */
}

export function renderHtml(jsx, domID) {
    const target = document.querySelector(domID);
    if (target) {
        ReactDOM.render(jsx, target);
    }
}
