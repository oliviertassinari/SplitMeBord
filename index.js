import React from "react";
import { render } from "react-dom";

import Presentation from "./presentation";

import injectTapEventPlugin from "react-tap-event-plugin";

injectTapEventPlugin();

render(<Presentation/>, document.getElementById("root"));
