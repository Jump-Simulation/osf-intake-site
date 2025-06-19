import Object_Button_Selection_Results from "./Object_Button_Selection_Results";
import "../../CSS/Page_Component_Styles/Holder_Buttons_Selection_Results.css"
import { useState, useEffect } from "react";
import { BaseCarouselChildProps } from "../../BaseProps";

interface Holder_Buttons_Selection_Results_Props extends BaseCarouselChildProps {
    isMobile: string;
    givenMapToRead: Map<string, string[]>;
    givenAddressesToRead: string[];

    givenTagsTrueArray: string;
    givenTagsFalseArray: string;

    givenTagInclusion: string;
    givenTagExclusion: string;


    givenCheckTagsToDetermineRendering(givenTagInclusion: string, givenTagExclusion: string,
        givenObjectName: string, givenObjectType: string, givenObjectExcludeByDefault: boolean): boolean;

}


export default function Holder_Buttons_Selection_Results(props: Holder_Buttons_Selection_Results_Props) {


    var tempChildrenToDisplay: React.ReactNode[] = [];

    const [childrenToDisplay, setChildrenToDisplay] = useState<React.ReactNode[]>([])



    const [shouldRender, setShouldRender] = useState(true);
    var duplicateLock: number = 0;
    useEffect(() => {

        setShouldRender(props.givenCheckTagsToDetermineRendering(
            props.givenTagInclusion,
            props.givenTagExclusion,
            "holder buttons selection results",
            "holder button selection results",
            props.givenGlobal_ShouldExcludeByDefault));

        if (duplicateLock < 1) {
            duplicateLock++

            //  console.log("THE MAP THAT HOLDER RESULTS CAN SEE: ");
            //  console.log(props.givenGlobal_MapToRead);



            props.givenAddressesToRead.forEach((givenAddress, addressIndex) => {
                /*   console.log("holder selection results found an address to read: " + givenAddress) */

                props.givenGlobal_MapToRead.forEach((mapKey, mapIndex) => {

                    // console.log("currently looking at mapKey: ")
                    // console.log("at mapIndex: " + mapIndex + " and givenAddress: " + givenAddress)
                    // console.log(mapKey)

                    if (givenAddress === mapIndex) { //THIS IS PROBABLY THE BUG
                        // console.log("Valid comparison with givenAddress: " + givenAddress + " with mapIndex: " + mapIndex)
                        mapKey.forEach(mapValue => {

                            // console.log("holder results should be printing button: " + mapValue + " from address: " + mapIndex)
                            let tempMapValue = (<Object_Button_Selection_Results
                                key={mapValue + "_" + mapIndex + addressIndex}
                                isMobile={props.givenGlobal_isMobile}
                                givenButtonText={mapValue}

                                givenGlobal_isMobile={props.givenGlobal_isMobile}
                                givenGlobal_CurrentCarouselIndex={0}
                                givenGlobal_PreviousCarouselIndex={0}
                                givenGlobal_CurrentPageID={props.givenGlobal_CurrentPageID}
                                givenGlobal_CurrentModalID={props.givenGlobal_CurrentModalID}
                                givenGlobal_CurrentBookID={props.givenGlobal_CurrentBookID}


                            />)

                            tempChildrenToDisplay.push(tempMapValue)


                        });
                        setChildrenToDisplay(tempChildrenToDisplay)
                    }

                });


            });

        }

    }, [props.givenGlobal_TagsTrueArray])






    if (shouldRender) {
        return (<div className={`holder-buttons-selection-results${props.givenGlobal_isMobile}`}>{childrenToDisplay}</div>)
    }
    else { return (<></>) }


}