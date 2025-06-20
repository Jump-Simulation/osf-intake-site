import { propTypes } from "react-bootstrap/esm/Image";
import "../../CSS/Page_Component_Styles/Object_Input_Text.css";

interface Object_Input_Text_Props {
  givenPlaceHolderText: string;
}

export default function Object_Input_Text(props: Object_Input_Text_Props) {
  return (
    <div className="text_entry_bubble">
      <textarea placeholder={props.givenPlaceHolderText} className="body" />
    </div>
  );
}
