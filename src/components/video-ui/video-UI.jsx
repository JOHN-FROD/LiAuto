import { useEffect, useRef } from "react";
import videojs from "video.js";

const Video = ({ media }) => {
    const videoRef = useRef(null);
    const playerRef = useRef(null);

    useEffect(() => {
        const options = {
            autoplay: true,
            muted: true,
            controls: false,
            fluid: true, // Set fluid to true for responsiveness
            loop: true,
            sources: [{
                src: media,
                type: 'video/mp4'
            }]
        };

        if (!playerRef.current) {
            const videoElement = document.createElement("video");
            videoElement.classList.add('video-js', 'vjs-big-play-centered');
            videoRef.current.appendChild(videoElement);

            const player = playerRef.current = videojs(videoElement, options, () => {
                videojs.log('player is ready');
            });

            // Add listener for fullscreenchange event
            player.on('fullscreenchange', () => {
                if (player.isFullscreen()) {
                    // Video is in fullscreen mode, you can add any custom logic here
                } else {
                    // Video is not in fullscreen mode, you can add any custom logic here
                }
            });
        } else {
            const player = playerRef.current;
            player.autoplay(options.autoplay);
            player.src(options.sources);

            // To make the video responsive dynamically
            player.fluid(options.fluid);
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
        <div data-vjs-player className={''}>
            <div className={'w-full h-screen'} ref={videoRef} />
        </div>
    );
};

export default Video;