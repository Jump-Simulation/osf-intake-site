import { useEffect, useState } from "react";
import "../../CSS/Page_Component_Styles/Object_Item_Image_Custom.css";
import { BaseCarouselChildProps } from "../../BaseProps";

interface Object_Item_Image_Custom_Props extends BaseCarouselChildProps {
    isMobile: string;

    givenImageName: string;
    givenImageOrientation: string;

    givenHasShadow: boolean;

    givenTagsTrueArray: string;
    givenTagsFalseArray: string;

    givenTagInclusion: string;
    givenTagExclusion: string;


    given_ImageHeight: string;
    given_ImageHeightMax: string;
    given_ImageHeightMin: string;

    given_ImageWidth: string;
    given_ImageWidthMin: string;
    given_ImageWidthMax: string;

    given_ImageOpacity: string;
    given_ImagePosition: 'static' | 'relative' | 'absolute' | 'sticky' | 'fixed';
    given_ImageTop: string;
    given_ImageBottom: string;
    given_ImageRight: string;
    given_ImageLeft: string;
    given_ImageZPosition: string;


    givenCheckTagsToDetermineRendering(
        givenTagInclusion: string,
        givenTagExclusion: string,
        givenObjectName: string,
        givenObjectType: string,
        givenObjectExcludeByDefault: boolean
    ): boolean;
}

export default function Object_Item_Image_Custom(props: Object_Item_Image_Custom_Props) {
    const [shouldRender, setShouldRender] = useState(true);

    useEffect(() => {
        setShouldRender(
            props.givenCheckTagsToDetermineRendering(
                props.givenTagInclusion,
                props.givenTagExclusion,
                props.givenImageName,
                "no type",
                props.givenGlobal_ShouldExcludeByDefault
            )
        );
    }, [props.givenTagsTrueArray, props.givenTagsFalseArray]);

    const [imageOrientationStyle, setImageOrientationStyle] = useState(
        "image-custom-sizing-landscape"
    );
    const [hasDropShadow, setHasDropShadow] = useState(props.givenHasShadow);
    const [dropShadowValue, setDropShadowValue] = useState("");

    useEffect(() => {
        if (props.givenImageOrientation === "landscape") {
            setImageOrientationStyle("image-custom-sizing-landscape");
        } else if (props.givenImageOrientation === "portrait") {
            setImageOrientationStyle("image-custom-sizing-portrait");
        }
    }, [props.givenImageOrientation]);

    useEffect(() => {
        /*    console.log("given hasDropShadow value for image: " + props.givenImageName + " is: " + hasDropShadow) */
        if (hasDropShadow === true) {
            /*  console.log("WE SHOULD BE SEEING A DROP SHADOW ON IMAGE: " + props.givenImageName + "!!") */
            setDropShadowValue(
                "2px 2px 4px 0px rgba(43, 0, 69, 0.20), 12px 12px 0px 0px var(--color-accent-secondary-lighter-200-default, #EEDCFF)"
            );
        } else if (hasDropShadow != false) {
            /*   console.log("no drop shadow for : " + props.givenImageName + "!!") */
            setDropShadowValue("");
        }
    }, [hasDropShadow]);

    if (shouldRender) {
        return (
            <div
                className={`image-custom-holder${props.givenGlobal_isMobile}`}
                style={{ position: "absolute", width: "100%", }}
            >
                <img
                    className={`image-custom-object${props.givenGlobal_isMobile} `}

                    style={{
                        boxShadow: dropShadowValue,
                        height: props.given_ImageHeight,
                        maxHeight: props.given_ImageHeightMax,
                        minHeight: props.given_ImageHeightMin,
                        width: props.given_ImageWidth,
                        maxWidth: props.given_ImageWidthMax,
                        minWidth: props.given_ImageWidthMin,

                    }}

                    src={`/assets/${props.givenImageName.toLocaleLowerCase()}`}
                    alt={
                        "missing image with name " +
                        props.givenImageName.toLocaleLowerCase()
                    }
                ></img>
            </div>
        );
    } else {
        /* 
              ${imageOrientationStyle} */
        return <></>;
    }
}
