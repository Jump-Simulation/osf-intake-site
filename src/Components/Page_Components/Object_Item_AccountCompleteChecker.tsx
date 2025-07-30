import { BaseCarouselChildProps } from "../../BaseProps";
import Object_Item_Text from "./Object_Item_Text";
import "../../CSS/Page_Component_Styles/Object_Item_AccountCompleteChecker.css";
import Object_Button_Normal from "./Object_Button_Normal";

interface AccountCompleteChecker_Props extends BaseCarouselChildProps {
  given_AccountComplete: boolean;

  given_AccountCompleteText: string;
  given_AccountCompleteDestination: string;

  given_AccountIncompleteText: string;
  given_AccountIncompleteDestination: string;

  given_GoToDestination(givenDestination: string): void;
}

export default function AccountCompleteChecker(
  props: AccountCompleteChecker_Props
) {
  function RenderAccountCompleteChecker() {
    if (props.given_AccountComplete) {
      return <>{Render_OptionalSection_AccountComplete()}</>;
    } else if (!props.given_AccountComplete) {
      return <>{Render_OptionalSection_AccountIncomplete()}</>;
    } else {
      console.log(
        "Logic error in Object_Item_RegisteredChecker.tsx, we shouldn't be seeing this else in RenderRegisterChecker function"
      );
    }
  }

  function Render_OptionalSection_AccountComplete() {
    return (
      <>
        <Object_Item_Text
          givenTextValue={props.given_AccountCompleteText}
          givenTextType={""} //Jake fill this out
          givenTextAlignment={"left"} //Jake fill this out
          givenGlobal_isMobile={props.givenGlobal_isMobile}
          givenGlobal_CurrentCarouselIndex={0}
          givenGlobal_PreviousCarouselIndex={0}
        />

        <Object_Button_Normal
          isMobile={props.givenGlobal_isMobile}
          givenIconBool={false}
          givenIconHorizontalPlacement={""} //Jake fill this out
          givenIconFileName={""}
          givenButtonText={""} //Jake fill this out
          givenButtonStyle={""} //Jake fill this out
          givenIsDisabled={false}
          givenDestination={props.given_AccountCompleteDestination}
          givenGoToDestination={props.given_GoToDestination}
          givenPageIndex={0}
          givenWriteTags={function (): void {
            console.log("this should never happen: givenWriteTags");
          }}
          givenWriteData={function (): void {
            console.log("this should never happen: givenWriteData");
          }}
          givenTagsTrueArray={""}
          givenTagsFalseArray={""}
          givenTagInclusion={""}
          givenTagExclusion={""}
          givenTagToWrite={""}
          givenDataToWrite={""}
          givenCheckTagsToDetermineRendering={function (
            givenTagInclusion: string,
            givenTagExclusion: string,
            givenObjectName: string,
            givenObjectType: string,
            givenObjectExcludeByDefault: boolean
          ): boolean {
            return true;
          }}
          givenGlobal_isMobile={props.givenGlobal_isMobile}
          givenGlobal_CurrentCarouselIndex={0}
          givenGlobal_PreviousCarouselIndex={0}
        />
      </>
    );
  }

  function Render_OptionalSection_AccountIncomplete() {
    return (
      <>
        {" "}
        <Object_Item_Text
          givenTextValue={props.given_AccountIncompleteText}
          givenTextType={""} //Jake fill this out
          givenTextAlignment={"left"} //Jake fill this out
          givenGlobal_isMobile={props.givenGlobal_isMobile}
          givenGlobal_CurrentCarouselIndex={0}
          givenGlobal_PreviousCarouselIndex={0}
        />
        <Object_Button_Normal
          isMobile={props.givenGlobal_isMobile}
          givenIconBool={false}
          givenIconHorizontalPlacement={""} //Jake fill this out
          givenIconFileName={""}
          givenButtonText={""} //Jake fill this out
          givenButtonStyle={""} //Jake fill this out
          givenIsDisabled={false}
          givenDestination={props.given_AccountIncompleteDestination}
          givenGoToDestination={props.given_GoToDestination}
          givenPageIndex={0}
          givenWriteTags={function (): void {
            console.log("this should never happen: givenWriteTags");
          }}
          givenWriteData={function (): void {
            console.log("this should never happen: givenWriteData");
          }}
          givenTagsTrueArray={""}
          givenTagsFalseArray={""}
          givenTagInclusion={""}
          givenTagExclusion={""}
          givenTagToWrite={""}
          givenDataToWrite={""}
          givenCheckTagsToDetermineRendering={function (
            givenTagInclusion: string,
            givenTagExclusion: string,
            givenObjectName: string,
            givenObjectType: string,
            givenObjectExcludeByDefault: boolean
          ): boolean {
            return true;
          }}
          givenGlobal_isMobile={props.givenGlobal_isMobile}
          givenGlobal_CurrentCarouselIndex={0}
          givenGlobal_PreviousCarouselIndex={0}
        />
      </>
    );
  }

  return <>{RenderAccountCompleteChecker()}</>;
}
