import { Provider } from 'react-redux';
import React from "react";
import ReactDOM from "react-dom";
import TrackList from "./components/TrackList";
import * as Utils from "./utils/helper";
import * as actions from "./actions";
import configureStore from "./store";
import App from "./components/App/App";


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
store.dispatch(actions.ActContact.persist({
    Name: "Phong Lam",
    Love: "Nhung Ly"
}));

/*ReactDOM.render(
    <TrackList tracks={tracks} />,
    document.getElementById('app')
);*/

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('app')
);