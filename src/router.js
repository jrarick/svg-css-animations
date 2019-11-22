import React from 'react';
import BananaAnimation from './components/BananaAnimation';
import CssMask from './components/CssMask';
import ClickMeButton from './components/ClickMeButton';

const routes = {
    "/svganimation": () => <BananaAnimation />,
    "/masking": () => <CssMask />,
    "/clickme": () => <ClickMeButton />
};

export default routes;