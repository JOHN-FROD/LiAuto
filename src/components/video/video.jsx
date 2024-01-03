

const Video = () => {
    return (
        <div className={`w-full h-screen `} style={{ height: '100vh', overflow: 'hidden' }}>
            <video
                id="my-player"
                className="video-js w-full h-screen"
                autoPlay={true}
                preload="auto"
                loop={true}
                muted
                poster="//vjs.zencdn.net/v/oceans.png"
                style={{ height: '100vh' }}
                >
                <source className={'w-full h-screen'} src="//vjs.zencdn.net/v/oceans.mp4" type="video/mp4"></source>
                <p className="vjs-no-js">
                    To view this video please enable JavaScript, and consider upgrading to a
                    web browser that
                    <a href="https://videojs.com/html5-video-support/" target="_blank">
                        supports HTML5 video
                    </a>
                </p>
            </video>
        </div>
    );
};

export default Video;