import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.css";
import "../../assets/css/style.css";
import riveToggle from "../../assets/rive/fieldToggle.riv";
import { useRive, useStateMachineInput } from "@rive-app/react-canvas";
import { useEffect } from "react";

const FieldChangeToggle = () => {
  const STATEMACHINE_NAME = "Switch";
  const INPUT_NAME = "Trigger 1";

  const { rive, RiveComponent } = useRive({
    src: riveToggle,
    stateMachines: STATEMACHINE_NAME,
    autoplay: true,
  });

  const onClickInput = useStateMachineInput(
    rive,
    STATEMACHINE_NAME,
    INPUT_NAME
  );

  const toggleComponent = () => {
    onClickInput.fire();
    console.log("done");
    switchToField();
  };

  const switchToField = () => {
    if (localStorage.getItem("currentField") === "Marketing") {
      localStorage.setItem("currentField", "Technology");
    } else {
      localStorage.setItem("currentField", "Marketing");
    }
  };

  useEffect(() => {
    if (
      localStorage.getItem("currentField") === "" ||
      localStorage.getItem("currentField") === null ||
      localStorage.getItem("currentField") === undefined
    ) {
      localStorage.setItem("currentField", "Marketing");
    }
  }, []);

  return (
    <RiveComponent className="toggle-icon" onClick={() => toggleComponent()} />
  );
};

export default FieldChangeToggle;
