const h1 = document.querySelector('h1');
const happyBtn = document.querySelector('#happy')
const sadBtn = document.querySelector('#sad')
const angryBtn = document.querySelector('#angry')
const resetBtn = document.querySelector('#reset')

sadBtn.addEventListener('click', function (e) {
    store.dispatch({type: 'SAD'});
    const mood = store.getState().mood;
    h1.innerText = mood;
})

angryBtn.addEventListener('click', function (e) {
    // can also use this method
    store.dispatch({type: 'ANGRY', payload: ">:("});
    const mood = store.getState().mood;
    h1.innerText = mood;
})

happyBtn.addEventListener('click', function (e) {
    store.dispatch({type: 'HAPPY'});
    const mood = store.getState().mood;
    h1.innerText = mood;
})

resetBtn.addEventListener('click', function (e) {
    store.dispatch({type: 'RESET'});
    const mood = store.getState().mood;
    h1.innerText = mood;
})