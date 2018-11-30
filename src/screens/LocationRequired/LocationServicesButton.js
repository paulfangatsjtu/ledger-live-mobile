// @flow

import React, { PureComponent } from "react";
import LocationServicesDialogBox from "react-native-android-location-services-dialog-box";
import { Trans } from "react-i18next";
import SettingsIcon from "./assets/SettingsIcon";
import Button from "../../components/Button";

export default class LocationServicesButton extends PureComponent<{
  onRetry: Function,
}> {
  openLocationServicesSetting = () => {
    LocationServicesDialogBox.checkLocationServicesIsEnabled({
      enableHighAccuracy: false,
      showDialog: false,
      openLocationServices: true,
    })
      .then(this.props.onRetry)
      .catch(() => {
        // Nothing to do: location is still disabled
      });
  };

  render() {
    return (
      <Button
        event="LocationServiceOpenSettings"
        type="primary"
        title={<Trans i18nKey="location.open" />}
        onPress={this.openLocationServicesSetting}
        iconLeft={SettingsIcon}
      />
    );
  }
}
