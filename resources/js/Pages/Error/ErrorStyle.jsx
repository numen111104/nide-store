import React from "react";
export default function  StyleError() {
    return (
        <>
            <style
                dangerouslySetInnerHTML={{
                    __html: "@import url('https://fonts.googleapis.com/css?family=Audiowide&display=swap');\n\nhtml,\nbody{\n  margin: 0px;\n  overflow: hidden;\n}\n\ndiv{\n  position: absolute;\n  top: 0%;\n  left: 0%;\n  height: 100%;\n  width: 100%;\n  margin: 0px;\n  background: radial-gradient(circle, #240015 0%, #12000b 100%);\n  overflow: hidden;\n}\n\n.wrap{\n  position: absolute;\n  left: 50%;\n  top: 50%;\n  transform: translate(-50%, -50%);\n}\n\nh2{\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  margin-top: 150px;\n  font-size: 32px;\n  text-transform: uppercase;\n  transform: translate(-50%, -50%);\n  display: block;\n  color: #12000a;\n  font-weight: 300;\n  font-family: Audiowide;\n  text-shadow: 0px 0px 4px #12000a;\n  animation: fadeInText 3s ease-in 3.5s forwards, flicker4 5s linear 7.5s infinite, hueRotate 6s ease-in-out 3s infinite;\n}\n\n#svgWrap_1,\n#svgWrap_2{\n  position: absolute;\n  height: auto;\n  width: 600px;\n  max-width: 100%;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n}\n\n#svgWrap_1,\n#svgWrap_2,\ndiv{\n  animation: hueRotate 6s ease-in-out 3s infinite;\n}\n\n#id1_1,\n#id2_1,\n#id3_1{\n  stroke: #ff005d;\n  stroke-width: 3px;\n  fill: transparent;\n  filter: url(#glow);\n}\n\n#id1_2,\n#id2_2,\n#id3_2{\n  stroke: #12000a;\n  stroke-width: 3px;\n  fill: transparent;\n  filter: url(#glow);\n}\n\n#id3_1{\n  stroke-dasharray: 940px;\n  stroke-dashoffset: -940px;\n  animation: drawLine3 2.5s ease-in-out 0s forwards, flicker3 4s linear 4s infinite;\n}\n\n#id2_1{\n  stroke-dasharray: 735px;\n  stroke-dashoffset: -735px;\n  animation: drawLine2 2.5s ease-in-out 0.5s forwards, flicker2 4s linear 4.5s infinite;\n}\n\n#id1_1{\n  stroke-dasharray: 940px;\n  stroke-dashoffset: -940px;\n  animation: drawLine1 2.5s ease-in-out 1s forwards, flicker1 4s linear 5s infinite;\n}\n\n@keyframes drawLine1 {\n  0%  {stroke-dashoffset: -940px;}\n  100%{stroke-dashoffset: 0px;}\n}\n\n@keyframes drawLine2 {\n  0%  {stroke-dashoffset: -735px;}\n  100%{stroke-dashoffset: 0px;}\n}\n\n@keyframes drawLine3 {\n  0%  {stroke-dashoffset: -940px;}\n  100%{stroke-dashoffset: 0px;}\n}\n\n@keyframes flicker1{\n  0%  {stroke: #ff005d;}\n  1%  {stroke: transparent;}\n  3%  {stroke: transparent;}\n  4%  {stroke: #ff005d;}\n  6%  {stroke: #ff005d;}\n  7%  {stroke: transparent;}\n  13% {stroke: transparent;}\n  14% {stroke: #ff005d;}\n  100%{stroke: #ff005d;}\n}\n\n@keyframes flicker2{\n  0%  {stroke: #ff005d;}\n  50% {stroke: #ff005d;}\n  51% {stroke: transparent;}\n  61% {stroke: transparent;}\n  62% {stroke: #ff005d;}\n  100%{stroke: #ff005d;}\n}\n\n@keyframes flicker3{\n  0%  {stroke: #ff005d;}\n  1%  {stroke: transparent;}\n  10% {stroke: transparent;}\n  11% {stroke: #ff005d;}\n  40% {stroke: #ff005d;}\n  41% {stroke: transparent;}\n  45% {stroke: transparent;}\n  46% {stroke: #ff005d;}\n  100%{stroke: #ff005d;}\n}\n\n@keyframes flicker4{\n  0%  {color: #ff005d;text-shadow:0px 0px 4px #ff005d;}\n  30% {color: #ff005d;text-shadow:0px 0px 4px #ff005d;}\n  31% {color: #12000a;text-shadow:0px 0px 4px #12000a;}\n  32% {color: #ff005d;text-shadow:0px 0px 4px #ff005d;}\n  36% {color: #ff005d;text-shadow:0px 0px 4px #ff005d;}\n  37% {color: #12000a;text-shadow:0px 0px 4px #12000a;}\n  41% {color: #12000a;text-shadow:0px 0px 4px #12000a;}\n  42% {color: #ff005d;text-shadow:0px 0px 4px #ff005d;}\n  85% {color: #ff005d;text-shadow:0px 0px 4px #ff005d;}\n  86% {color: #12000a;text-shadow:0px 0px 4px #12000a;}\n  95% {color: #12000a;text-shadow:0px 0px 4px #12000a;}\n  96% {color: #ff005d;text-shadow:0px 0px 4px #ff005d;}\n  100%{color: #ff005d;text-shadow:0px 0px 4px #ff005d;}\n}\n\n@keyframes fadeInText{\n  1%  {color: #12000a;text-shadow:0px 0px 4px #12000a;}\n  70% {color: #ff005d;text-shadow:0px 0px 14px #ff005d;}\n  100%{color: #ff005d;text-shadow:0px 0px 4px #ff005d;}\n}\n\n@keyframes hueRotate{\n  0%  {\n    filter: hue-rotate(0deg);\n  }\n  50%  {\n    filter: hue-rotate(-120deg);\n  }\n  100%  {\n    filter: hue-rotate(0deg);\n  }\n}",
                }}
            />
        </>
    )
}