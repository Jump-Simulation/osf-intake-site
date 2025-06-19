import { useEffect, useState } from "react";
import Checkbox from "@mui/material/Checkbox";
import CircleOutlined from "@mui/icons-material/CircleOutlined";
import RadioButtonChecked from "@mui/icons-material/RadioButtonChecked";
import { Row } from "react-bootstrap";
import "../../CSS/Page_Component_Styles/Object_Button_Prep_Destination.css";
import "../../CSS/Page_Component_Styles/Brand-Text.css";
import { BaseCarouselChildProps } from "../../BaseProps";


interface Object_Button_Prep_Destination_Props extends BaseCarouselChildProps {

    isMobile: string;

    givenButtonText: string;
    givenIndex: number;
    givenCurrentIndex: number;
    setGivenCurrentIndex(givenNumber: number): void
    givenValueToWrite: string;

    givenLockNumber: number;
    givenSetLockNumber(givenNumber: number, givenFunctionName: string): void;

    /*     givenAddToSelectionMap(key: string, newValue: string): void;
        givenRemoveFromSelectionMap(key: string, valueToRemove: string): void; */
    givenSetPrepDestination(givenString: string): void;

    // New Props
    //STEP 1
    givenNewPrimaryColor?: string;
    givenNewHoverColor?: string;
    givenNewActiveColor?: string;


}

export default function Object_Button_Prep_Destination(props: Object_Button_Prep_Destination_Props) {

    const iconStyleUnclickedSX = { color: 'var(--color-on-primary-light)', fontSize: '24px' };
    const iconStyleClickedSX = { color: 'var(--color-on-primary-bold)', fontSize: '24px' };


    const [isChecked, setIsChecked] = useState(false);

    const [buttonStyleToUse, setButtonStyleToUse] = useState(`prep-destination-button${props.givenGlobal_isMobile}`);
    const [buttonTextStyleToUse, setButtonTextStyleToUse] = useState(`prep-destination-button-text${props.givenGlobal_isMobile}`);



    useEffect(() => {


        if (props.givenIndex !== props.givenCurrentIndex) {

            setIsChecked(false);
            /*       props.givenRemoveFromSelectionMap(props.givenAddressToWrite, props.givenValueToWrite); */


            setButtonStyleToUse(`prep-destination-button${props.givenGlobal_isMobile}`);
            setButtonTextStyleToUse(`prep-destination-button-text${props.givenGlobal_isMobile}`);


        }
        else if (props.givenIndex === props.givenCurrentIndex) {
            setIsChecked(true);
            /*     props.givenAddToSelectionMap(props.givenAddressToWrite, props.givenValueToWrite); */
            props.givenSetPrepDestination(props.givenValueToWrite);
            setButtonStyleToUse(`prep-destination-button-selected${props.givenGlobal_isMobile}`);
            setButtonTextStyleToUse(`prep-destination-button-text-selected${props.givenGlobal_isMobile}`);

        }





    }, [props.givenCurrentIndex])

    function HandleOnClick() {

        if (props.givenIndex === props.givenCurrentIndex) {
            props.setGivenCurrentIndex(-1);
            props.givenSetLockNumber(1, "SingleButtonSelect Unchecked");
            setIsChecked(false);


            props.givenSetPrepDestination("null");

            setButtonStyleToUse(`prep-destination-button${props.givenGlobal_isMobile}`);
            setButtonTextStyleToUse(`prep-destination-button-text${props.givenGlobal_isMobile}`);


        }
        else {
            props.setGivenCurrentIndex(props.givenIndex);
            props.givenSetLockNumber(-1, "SingleButtonSelect Checked");



            setIsChecked(true);

            props.givenSetPrepDestination(props.givenValueToWrite);
            setButtonStyleToUse(`prep-destination-button-selected${props.givenGlobal_isMobile}`);
            setButtonTextStyleToUse(`prep-destination-button-text-selected${props.givenGlobal_isMobile}`);

        }


    }

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
                className={`${buttonStyleToUse}`}
                onClick={() => { HandleOnClick(); }} // Attach the click handler to the button

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
                        icon={<CircleOutlined sx={iconStyleUnclickedSX} />}
                        checkedIcon={<RadioButtonChecked sx={iconStyleClickedSX} />}
                        color="primary"
                        checked={isChecked} // Pass the checked state to the checkbox

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
                            },
                            '&:hover': {
                                backgroundColor: 'transparent', // Remove any hover background effect
                                outline: 'none', // Remove focus outline if any
                                boxShadow: 'none', // Remove the shadow on hover
                            },
                        }}
                    />
                    <div className={buttonTextStyleToUse} > {props.givenButtonText}</div>


                </div>
            </div>

        );

    }

    return RenderCheckbox();
}
