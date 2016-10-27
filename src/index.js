import React from "react";
import ReactDOM from "react-dom";
import TrackList from "./components/TrackList";


function getUniqueKey() {
    return new Date().getTime().toString() + Math.random().toString();
}


const tracks = [{
    id: getUniqueKey(),
    title: 'Zí dầu tình bậu muốn thôi...'
}, {
    id: getUniqueKey(),
    title: 'Bìm bịp kêu chiều...'
}, {
    id: getUniqueKey(),
    title: 'Tiếng ễnh ương...'
}];

ReactDOM.render(
    <TrackList tracks={tracks} />,
    document.getElementById('app')
);