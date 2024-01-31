import {useEffect, useRef} from "react";
import videojs from "video.js";

const Video = ({media}) => {
    const videoRef = useRef(null);
    const playerRef = useRef(null);



   useEffect(() => {

       const options={
           autoplay: true,
           muted:true,
           controls: false,
           // responsive: true,
           fluid: true,
           loop:true,
           sources: [{
               src: media,
               type: 'video/mp4'
           }]
       };
        if (!playerRef.current) {
            const videoElement = document.createElement("video-js");
            videoElement.classList.add('vjs-big-play-centered')
            videoRef.current.appendChild(videoElement);
            const player = playerRef.current = videojs(videoElement, options, () => {
                videojs.log('player is ready');
            });
        } else {
            const player = playerRef.current;
            player.autoplay(options.autoplay);
            player.src(options.sources);
        }
    }, [media, videoRef]);


    useEffect(() => {
        const player = playerRef.current;

        return () => {
            if (player && !player.isDisposed()) {
                player.dispose();
                playerRef.current = null;
            }
        };
    }, [playerRef]);

    return (
        <div data-vjs-player
             className={''}
        >
            <div className={'w-full h-screen'} ref={videoRef}/>
        </div>
    );
};

export default Video;