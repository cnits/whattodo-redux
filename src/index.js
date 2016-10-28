import React from "react";
import ReactDOM from "react-dom";
import TrackList from "./components/TrackList";
import * as Utils from "./utils/helper";
import * as actions from "./actions";
import configureStore from "./store";


const tracks = [{
    id: Utils.helper().getUniqueKey(),
    title: 'Zí dầu tình bậu muốn thôi...'
}, {
    id: Utils.helper().getUniqueKey(),
    title: 'Bìm bịp kêu chiều...'
}, {
    id: Utils.helper().getUniqueKey(),
    title: 'Tiếng ễnh ương...'
}];

const store = configureStore();
store.dispatch(actions.setTracks(tracks));

ReactDOM.render(
    <TrackList tracks={tracks} />,
    document.getElementById('app')
);