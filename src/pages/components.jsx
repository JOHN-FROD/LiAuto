import React from 'react';
import {ConfigurationsSection,HeaderBannerAbout} from "@/components";

const Components = () => {
    return (
        <div>
            <ConfigurationsSection/>
            <HeaderBannerAbout bg={'/about.jpg'}/>
        </div>
    );
};

export default Components;