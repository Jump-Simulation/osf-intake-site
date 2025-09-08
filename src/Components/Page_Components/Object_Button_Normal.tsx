import { useEffect, useState } from "react";
import "../../CSS/Page_Component_Styles/Object_Button_Normal.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { BaseCarouselChildProps } from "../../BaseProps";

interface Object_Button_Normal_Props extends BaseCarouselChildProps {
  isMobile: string;

  givenIconBool: boolean;
  givenIconHorizontalPlacement: string;
  givenIconFileName: string;

  givenButtonText: string;

  givenButtonStyle: string;
  givenIsDisabled: boolean;
  givenDestination: string;
  givenGoToDestination(givenString: string): void;
  givenPageIndex: number;

  givenWriteTags(givenTag: string): void;
  givenWriteData(givenData: string): void;

  givenTagsTrueArray: string;
  givenTagsFalseArray: string;

  givenTagInclusion: string;
  givenTagExclusion: string;

  givenTagToWrite: string;

  givenDataToWrite: string;

  givenCheckTagsToDetermineRendering(
    givenTagInclusion: string,
    givenTagExclusion: string,
    givenObjectName: string,
    givenObjectType: string,
    givenObjectExcludeByDefault: boolean
  ): boolean;

  // New Props
  //STEP 1
  givenNewPrimaryColor?: string;
  givenNewHoverColor?: string;
  givenNewActiveColor?: string;

  givenNewPrimaryBorderColor?: string;
  givenNewHoverBorderColor?: string;
  givenNewActiveBorderColor?: string;


  givenNewPrimaryTextColor?: string;
  givenNewHoverTextColor?: string;
  givenNewActiveTextColor?: string;
}

export default function Object_Button_Normal(
  props: Object_Button_Normal_Props
) {
  const [shouldRender, setShouldRender] = useState(true);

  useEffect(() => {
    setShouldRender(
      props.givenCheckTagsToDetermineRendering(
        props.givenTagInclusion,
        props.givenTagExclusion,
        props.givenIconFileName,
        "image type",
        props.givenGlobal_ShouldExcludeByDefault
      )
    );
    /* console.log("NORMAL BUTTON SAW A CHANGE IN TAG ARRAYS") */
  }, [props.givenTagsTrueArray, props.givenTagsFalseArray]);

  const [buttonClassString, setButtonClassString] = useState("");
  const [buttonTextClassString, setButtonTextClassString] = useState(
    `textObject-buttonText${props.givenGlobal_isMobile}`
  );
  const [buttonIconClassString, setButtonIconClassString] = useState("");
  const [isDisabled, setIsDisabled] = useState(props.givenIsDisabled);

  useEffect(() => {
    /*    console.log("useEffect called for set style!!") */
    SetStyle();
  }, []);

  function SetStyle() {
    //console.log("SET STYLE CALLED")
    if (isDisabled) {
      if (props.givenButtonStyle === "primary") {
        //console.log("DISABLED PRIMARY STYLE GIVEN")
        setButtonClassString(
          `normal-button-primary-disabled${props.givenGlobal_isMobile}`
        );
        setButtonTextClassString(
          `normal-button-primary-text-disabled${props.givenGlobal_isMobile} textObject-buttonText${props.givenGlobal_isMobile}`
        );
        setButtonIconClassString(
          `normal-button-primary-icon-disabled${props.givenGlobal_isMobile}`
        );
      } else if (props.givenButtonStyle === "secondary") {
        //console.log("DISABLED SECONDARY STYLE GIVEN")
        setButtonClassString(
          `normal-button-secondary-disabled${props.givenGlobal_isMobile}`
        );
        setButtonTextClassString(
          `normal-button-secondary-text-disabled${props.givenGlobal_isMobile} textObject-buttonText${props.givenGlobal_isMobile}`
        );
        setButtonIconClassString(
          `normal-button-secondary-icon-disabled${props.givenGlobal_isMobile}`
        );
      } else if (props.givenButtonStyle === "tertiary") {
        //console.log("DISABLED TERTIARY STYLE GIVEN")
        setButtonClassString(
          `normal-button-tertiary-disabled${props.givenGlobal_isMobile}`
        );
        setButtonTextClassString(
          `normal-button-tertiary-text-disabled${props.givenGlobal_isMobile} textObject-buttonText${props.givenGlobal_isMobile}`
        );
        setButtonIconClassString(
          `normal-button-tertiary-icon-disabled${props.givenGlobal_isMobile}`
        );
      }
    } else if (!isDisabled) {
      if (props.givenButtonStyle === "primary") {
        //console.log("NORMAL PRIMARY STYLE GIVEN")
        setButtonClassString(
          `normal-button-primary${props.givenGlobal_isMobile}`
        );
        setButtonTextClassString(
          `normal-button-primary-text${props.givenGlobal_isMobile} textObject-buttonText${props.givenGlobal_isMobile}`
        );
        setButtonIconClassString(
          `normal-button-primary-icon${props.givenGlobal_isMobile}`
        );
      } else if (props.givenButtonStyle === "secondary") {
        //console.log("NORMAL PRIMARY STYLE GIVEN")
        setButtonClassString(
          `normal-button-secondary${props.givenGlobal_isMobile}`
        );
        setButtonTextClassString(
          `normal-button-secondary-text${props.givenGlobal_isMobile} textObject-buttonText${props.givenGlobal_isMobile}`
        );
        setButtonIconClassString(
          `normal-button-secondary-icon${props.givenGlobal_isMobile}`
        );
      } else if (props.givenButtonStyle === "tertiary") {
        //console.log("NORMAL PRIMARY STYLE GIVEN")
        setButtonClassString(
          `normal-button-tertiary${props.givenGlobal_isMobile}`
        );
        setButtonTextClassString(
          `normal-button-tertiary-text${props.givenGlobal_isMobile} textObject-buttonText${props.givenGlobal_isMobile}`
        );
        setButtonIconClassString(
          `normal-button-tertiary-icon${props.givenGlobal_isMobile}`
        );
      }
    }
  }

  function OnClickNormal() {
    if (!isDisabled) {
      if (props.givenTagToWrite != "") {
        props.givenWriteTags(props.givenTagToWrite);
      }

      if (props.givenDataToWrite != "") {
        props.givenWriteData(props.givenDataToWrite);
      }

      props.givenGoToDestination(props.givenDestination);
    } else {
      //button is disabled!!
    }
  }

  function RenderNormalButton() {
    //STEP 2
    const customStyles = {
      background: props.givenNewPrimaryColor,
      border: `1px solid ${props.givenNewPrimaryBorderColor}`,
      transition: "background 0.3s ease-in-out",
      color: props.givenNewPrimaryTextColor,
    };

    const hoverStyles = {
      background: props.givenNewHoverColor,
      border: `1px solid ${props.givenNewHoverBorderColor}`,
      transition: "background 0.3s ease-in-out",
      color: props.givenNewHoverTextColor,
    };

    const activeStyles = {
      background: props.givenNewActiveColor,
      border: `1px solid ${props.givenNewActiveBorderColor}`,
      transition: "background 0.3s ease-in-out",
      color: props.givenNewActiveTextColor,
    };


    const customTextStyles = {
      color: props.givenNewPrimaryTextColor,
    };

    const hoverTextStyles = {
      color: props.givenNewHoverTextColor,
    };

    const activeTextStyles = {
      color: props.givenNewActiveTextColor,
    };


    return (
      <div
        className={buttonClassString}
        onClick={() => {
          OnClickNormal();
        }}
        style={{
          background: props.givenNewPrimaryColor,
          border: `1px solid ${props.givenNewPrimaryColor}`,
        }}
        /* STEP 3 */
        onMouseEnter={(e) => {
          Object.assign(e.currentTarget.style, hoverStyles);
          const child = e.currentTarget.querySelector<HTMLDivElement>(`textObject-buttonText${props.isMobile}`);
          if (child) Object.assign(child.style, hoverTextStyles);
        }}
        onMouseLeave={(e) => {
          Object.assign(e.currentTarget.style, customStyles);
          const child = e.currentTarget.querySelector<HTMLDivElement>(`textObject-buttonText${props.isMobile}`);
          if (child) Object.assign(child.style, customTextStyles);
        }}
        onMouseDown={(e) => {
          Object.assign(e.currentTarget.style, activeStyles);
          const child = e.currentTarget.querySelector<HTMLDivElement>(`textObject-buttonText${props.isMobile}`);
          if (child) Object.assign(child.style, activeTextStyles);
        }}
        onMouseUp={(e) => {
          Object.assign(e.currentTarget.style, hoverStyles);
          const child = e.currentTarget.querySelector<HTMLDivElement>(`textObject-buttonText${props.isMobile}`);
          if (child) Object.assign(child.style, hoverTextStyles);
        }}
        // Mobile Touch Support
        onTouchStart={(e) => {
          Object.assign(e.currentTarget.style, activeStyles);
          const child = e.currentTarget.querySelector<HTMLDivElement>(`textObject-buttonText${props.isMobile}`);
          if (child) Object.assign(child.style, activeTextStyles);
        }}
        onTouchEnd={(e) => {
          Object.assign(e.currentTarget.style, customStyles);
          const child = e.currentTarget.querySelector<HTMLDivElement>(`textObject-buttonText${props.isMobile}`);
          if (child) Object.assign(child.style, customTextStyles);
        }}
      >
        <div className={buttonTextClassString}

        >
          {props.givenButtonText}

          {props.givenIconBool && (
            <FontAwesomeIcon
              icon={faCheck as IconProp}
              className={buttonIconClassString}
            />
          )}
        </div>
      </div>
    );
  }

  if (shouldRender) {
    return RenderNormalButton();
  } else {
    return <></>;
  }
}
