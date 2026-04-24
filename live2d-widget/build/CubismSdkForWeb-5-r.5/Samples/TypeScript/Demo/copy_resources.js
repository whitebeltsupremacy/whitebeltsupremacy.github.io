"use strict";
const fs = require('fs');
const publicResources = [
    { src: '../../../Core', dst: './public/Core' },
    { src: '../../Resources', dst: './public/Resources' },
    { src: '../../../Framework/Shaders', dst: './public/Framework/Shaders' },
];
publicResources.forEach((e) => { if (fs.existsSync(e.dst))
    fs.rmSync(e.dst, { recursive: true }); });
publicResources.forEach((e) => fs.cpSync(e.src, e.dst, { recursive: true }));
