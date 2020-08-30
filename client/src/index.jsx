import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import store from "./redux/reducers/store";
import 'bootstrap/dist/css/bootstrap.min.css';

import App from "./components/app/app.connect";


ReactDOM.render(
    <Provider store={store}><App/></Provider>,
    document.getElementById("root")
);
