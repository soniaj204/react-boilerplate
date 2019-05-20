/*
 * ComponentsTestPage
 *
 * List all the features
 */
import React from "react";
import { Helmet } from "react-helmet";
import { FormattedMessage } from "react-intl";

import H1 from "components/H1";
import { toast, cssTransition } from "react-toastify";
import Toasts from "components/Toasts";
import Datepicker from "components/Datepicker";
import Button from "components/Button";
import ModalPopup from "components/ModalPopup";
import LoadingButton from "components/LoadingButton";

import messages from "./messages";
import { FormGroup, Label } from "reactstrap";

import "bootstrap/dist/css/bootstrap.min.css";

import ComponentsTestStyle from "./style";
import ShortcodeStyle from "./shortcodeStyle.module";

import "./toastTransition.css";

const ToastTransition = cssTransition({
  enter: "slideInDown",
  exit: "slideOutUp"
});

export default class ComponentsTestPage extends React.Component {
  // eslint-disable-line react/prefer-stateless-function
  // Since state and props are static,
  // there's no need to re-render this component
  shouldComponentUpdate() {
    return false;
  }

  notify = () =>
    toast.success(
      "This is a Toast Message This is a Toast Message This is a Toast Message This is a Toast Message",
      {
        transition: ToastTransition,
        autoClose: 4000,
        position: toast.POSITION.TOP_CENTER,
        className: ""
      }
    );

  render() {
    return (
      <ComponentsTestStyle>
        <Helmet>
          <title>Components Test Page</title>
          <meta
            name="description"
            content="ComponentsTest page of React.js Boilerplate application"
          />
        </Helmet>
        <H1>
          <FormattedMessage {...messages.header} />
        </H1>

        <Button onClick={this.notify}>Open Toast</Button>
        <Toasts />

        <FormGroup>
          <Label for="date">Date:</Label>
          <Datepicker />
        </FormGroup>

        <ModalPopup />

        <LoadingButton />

        <ShortcodeStyle>
          <div class="shotcode_test">
            <h1>Short Code Test</h1>
            <p className="text">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
          </div>
        </ShortcodeStyle>
      </ComponentsTestStyle>
    );
  }
}
