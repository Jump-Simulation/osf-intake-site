import { useEffect, useState } from "react";
import Checkbox from "@mui/material/Checkbox";
import CheckBoxOutlineBlank from "@mui/icons-material/CheckBoxOutlineBlank";
import CheckBox from "@mui/icons-material/CheckBox";
import { Row } from "react-bootstrap";
import "../../CSS/Page_Component_Styles/Object_Button_Selection_Multi.css";
import "../../CSS/Page_Component_Styles/Object_Item_Text.css";
import { BaseCarouselChildProps } from "../../BaseProps";



interface Object_Button_Selection_Multi_Props extends BaseCarouselChildProps {

  isMobile: string;

  givenButtonText: string;
  checked: boolean;
  isDisabled: boolean;
  HandleChecked(): void;


  givenLockNumber: number;
  givenAddressToWrite: string;
  givenSetLockNumber(givenNumber: number, givenFunctionName: string): void;
  givenAddToSelectionMap(key: string, newValue: string): void;
  givenRemoveFromSelectionMap(key: string, valueToRemove: string): void;

  //STEP 1
  givenNewPrimaryColor?: string;
  givenNewHoverColor?: string;
  givenNewActiveColor?: string;

}

export default function Object_Button_Selection_Multi(props: Object_Button_Selection_Multi_Props) {


  const [isChecked, setIsChecked] = useState(props.checked);

  const [buttonStyleToUse, setButtonStyleToUse] = useState("");

  const [iconStyleToUse, setIconStyleToUse] = useState("");
  const [iconHolderStyleToUse, setIconHolderStyleToUse] = useState("");

  useEffect(() => {
    if (!props.isDisabled) {
      if (isChecked) {
        setButtonStyleToUse(`multi-select-button-selected${props.givenGlobal_isMobile}`);
        setIconHolderStyleToUse(`multi-select-icon-holder-selected${props.givenGlobal_isMobile}`);
        setIconStyleToUse(`multi-select-icon-selected${props.givenGlobal_isMobile}`);
      }
      else {
        setButtonStyleToUse(`multi-select-button${props.givenGlobal_isMobile}`);
        setIconHolderStyleToUse(`multi-select-icon-holder${props.givenGlobal_isMobile}`);
        setIconStyleToUse(`multi-select-icon${props.givenGlobal_isMobile}`);
      }

    }
    else if (props.isDisabled) {
      setButtonStyleToUse(`multi-select-button-disabled${props.givenGlobal_isMobile}`);
      setIconHolderStyleToUse(`multi-select-icon-holder-disabled${props.givenGlobal_isMobile}`);
      setIconStyleToUse(`multi-select-icon-disabled${props.givenGlobal_isMobile}`);
    }
  }, [isChecked])

  const handleCheckboxToggle = () => {
    if (!props.isDisabled) {
      if (isChecked) {
        props.givenSetLockNumber(1, "MultiButtonSelect Unchecked")
        setIsChecked(false);
        props.givenRemoveFromSelectionMap(props.givenAddressToWrite, props.givenButtonText);
      } else {
        props.givenSetLockNumber(-1, "MultiButtonSelect Unchecked")
        setIsChecked(true);
        props.givenAddToSelectionMap(props.givenAddressToWrite, props.givenButtonText)
        /*         console.log("MultiSelectButton wrote the following tag: " + props.givenButtonText + " to address: " + props.givenAddressToWrite); */

      }
      props.HandleChecked(); // Call your existing handler if needed
    }
  };



  function RenderCheckbox() {

    //STEP 2
    const customStyles = {
      background: props.givenNewPrimaryColor,
      border: `1px solid ${props.givenNewPrimaryColor}`,
      transition: "background 0.3s ease-in-out",
    };

    const hoverStyles = {
      background: props.givenNewHoverColor,
      border: `1px solid ${props.givenNewHoverColor}`,
      transition: "background 0.3s ease-in-out",
    };

    const activeStyles = {
      background: props.givenNewActiveColor,
      border: `1px solid ${props.givenNewActiveColor}`,
      transition: "background 0.3s ease-in-out",
    };

    return (

      <div
        className={buttonStyleToUse}
        onClick={handleCheckboxToggle} // Attach the click handler to the button
        /* STEP 3 */
        onMouseEnter={(e) => Object.assign(e.currentTarget.style, hoverStyles)} // Desktop hover
        onMouseLeave={(e) => Object.assign(e.currentTarget.style, customStyles)} // Desktop hover end
        onMouseDown={(e) => Object.assign(e.currentTarget.style, activeStyles)} // Desktop active
        onMouseUp={(e) => Object.assign(e.currentTarget.style, hoverStyles)} // Desktop release

        // Mobile Touch Support
        onTouchStart={(e) => Object.assign(e.currentTarget.style, activeStyles)} // Mobile press
        onTouchEnd={(e) => Object.assign(e.currentTarget.style, customStyles)} // Mobile release



      >
        <div
          style={{
            display: "flex",
            justifyContent: "left",
            alignItems: "center",
          }}
        >
          <Checkbox
            icon={<CheckBoxOutlineBlank className={iconHolderStyleToUse} />}
            checkedIcon={<CheckBox className={iconStyleToUse} />}
            color="primary"
            checked={isChecked} // Pass the checked state to the checkbox
            disabled={props.isDisabled}
            disableRipple
            sx={{
              '& .MuiSvgIcon-root': {
                '&:hover': {
                  backgroundColor: 'transparent', // Remove any hover background effect
                  outline: 'none', // Remove focus outline if any
                  boxShadow: 'none', // Remove the shadow on hover
                },
                '&:focus': {
                  backgroundColor: 'transparent', // Remove any hover background effect
                  outline: 'none', // Remove focus outline if any
                  boxShadow: 'none', // Remove the shadow on hover
                },
                '&:active': {
                  backgroundColor: 'transparent', // Remove any hover background effect
                  outline: 'none', // Remove focus outline if any
                  boxShadow: 'none', // Remove the shadow on hover
                },
              },
              '&:hover': {
                backgroundColor: 'transparent', // Remove any hover background effect
                outline: 'none', // Remove focus outline if any
                boxShadow: 'none', // Remove the shadow on hover
              },
              '&:active': {
                backgroundColor: 'transparent', // Remove any hover background effect
                outline: 'none', // Remove focus outline if any
                boxShadow: 'none', // Remove the shadow on hover
              },
            }}
          />
          <div className={`textObject-body-desktop${props.givenGlobal_isMobile}`}>{props.givenButtonText}</div>

        </div>
      </div>

    );

  }

  return RenderCheckbox();
}
