import refs from "../refs";

refs.queueList.addEventListener("click", onQueueListClick);

function onQueueListClick(evt) { 
    evt.preventDefault();
    refs.watchedList.classList.remove("current-btn")
    refs.queueList.classList.add("current-btn")
}