import { useEffect, useState } from "react";
import "../../CSS/Page_Component_Styles/Object_Item_Image.css";
import { BaseCarouselChildProps } from "../../BaseProps";

interface Object_Item_Image_Props extends BaseCarouselChildProps {

    isMobile: string;

    givenImageName: string;
    givenImageOrientation: string;
    givenImageSize: string;
    givenHasShadow: boolean;

    givenTagsTrueArray: string;
    givenTagsFalseArray: string;

    givenTagInclusion: string;
    givenTagExclusion: string;

    givenCheckTagsToDetermineRendering(givenTagInclusion: string, givenTagExclusion: string,
        givenObjectName: string, givenObjectType: string, givenObjectExcludeByDefault: boolean): boolean;

}


export default function Object_Item_Image(props: Object_Item_Image_Props) {


    const [shouldRender, setShouldRender] = useState(true);

    useEffect(() => {
        setShouldRender(props.givenCheckTagsToDetermineRendering(props.givenTagInclusion, props.givenTagExclusion, props.givenImageName, "no type", props.givenGlobal_ShouldExcludeByDefault));

    }, [props.givenTagsTrueArray, props.givenTagsFalseArray])


    const [imageOrientationStyle, setImageOrientationStyle] = useState("image-sizing-landscape");
    const [hasDropShadow, setHasDropShadow] = useState(props.givenHasShadow);
    const [dropShadowValue, setDropShadowValue] = useState("");




    useEffect(() => {
        if (props.givenImageOrientation === "landscape") {
            setImageOrientationStyle("image-sizing-landscape");
        }
        else if (props.givenImageOrientation === "portrait") {
            setImageOrientationStyle("image-sizing-portrait");
        }




    }, [props.givenImageOrientation])

    useEffect(() => {

        /*    console.log("given hasDropShadow value for image: " + props.givenImageName + " is: " + hasDropShadow) */
        if (hasDropShadow === true) {

            /*  console.log("WE SHOULD BE SEEING A DROP SHADOW ON IMAGE: " + props.givenImageName + "!!") */
            setDropShadowValue("2px 2px 4px 0px rgba(43, 0, 69, 0.20), 12px 12px 0px 0px var(--color-accent-secondary-lighter-200-default, #EEDCFF)");

        }
        else if (hasDropShadow != false) {

            /*   console.log("no drop shadow for : " + props.givenImageName + "!!") */
            setDropShadowValue("");
        }



    }, [hasDropShadow])


    if (shouldRender) {
        return (
            <div
                className={`image-holder${props.givenGlobal_isMobile}`} /* style={{ height: props.givenImageSize }} */>
                <img
                    className={`image-object${props.givenGlobal_isMobile} `}
                    style={{ boxShadow: dropShadowValue }}
                    src={`/assets/${props.givenImageName.toLocaleLowerCase()}`}
                    alt={"missing image with name " + props.givenImageName.toLocaleLowerCase()}>
                </img>
            </div>

        )
    }
    /* 
        ${imageOrientationStyle} */
    else { return (<></>) }



}