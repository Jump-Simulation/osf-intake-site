import { useEffect, useRef, useState } from "react";




import "../../CSS/Page_Component_Styles/Object_Item_VideoPlayer.css"
import { useAppContext } from "../../App";


interface Object_Item_VideoPlayer {

    given_VideoSource: string;

    given_VideoEventTriggerTime?: number;

    given_VideoEventFunction?(): void;

    given_SetPlaceholderBarOpacity(givenOpacity: number): void;


}



export default function Object_Item_VideoPlayer(props: Object_Item_VideoPlayer) {

    const context = useAppContext();

    const videoRef = useRef<HTMLVideoElement | null>(null);
    const [triggered, setTriggered] = useState(false);

    const handleTimeUpdate = () => {
        if (!videoRef.current) return;
        const currentTime = videoRef.current.currentTime;

        // Check if we've crossed the trigger time and haven't fired yet
        if (props.given_VideoEventTriggerTime) {
            if (currentTime >= props.given_VideoEventTriggerTime && !triggered) {
                props.given_VideoEventFunction();
                setTriggered(true);
            }
        }

    };


    useEffect(() => {
        const handlePlay = () => {
            const childRow = document.querySelector<HTMLDivElement>(".childRow");
            if (childRow) {
                childRow.style.overflow = "visible";
            }

            const navBar = document.querySelector<HTMLDivElement>(".nav-bar");
            if (navBar) {
                navBar.style.zIndex = "2";
                props.given_SetPlaceholderBarOpacity(0)
            }
        };

        const video = videoRef.current;
        if (video) {
            video.addEventListener("play", handlePlay);
        }

        // 🧹 Cleanup: revert styles + remove listener
        return () => {
            const childRow = document.querySelector<HTMLDivElement>(".childRow");
            if (childRow) {
                childRow.style.overflow = "auto"; // reset to stylesheet/default
            }

            const navBar = document.querySelector<HTMLDivElement>(".nav-bar");
            if (navBar) {
                navBar.style.zIndex = "101";
                props.given_SetPlaceholderBarOpacity(0.8)
            }

            if (video) {
                video.removeEventListener("play", handlePlay);
            }
        };
    }, []);



    return (<div className="video-player-holder">

        <video

            ref={videoRef}
            src={`/assets/${props.given_VideoSource}`}
            controls={false}
            autoPlay
            muted
            playsInline

            loop

            onTimeUpdate={handleTimeUpdate}

            className="video-player"

            onPlay={() => {
                context.GoToDestination("modal-000")


            }}


        />



    </div>)
}