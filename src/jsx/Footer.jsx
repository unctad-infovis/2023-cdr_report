import React, { /* useState,  useEffect, useRef */ } from 'react';
import '../styles/styles.less';

function Footer() {
  return (
    <div className="app" id="app_footer">
      <div className="footer_container">
        <h2>What do you want to do next?</h2>
        <div className="footer_elements">
          <div className="footer_element footer_element_1">
            <div className="footer_content anchor_videos" id="anchor_videos">
              <h3>Watch the videos</h3>
              <div className="iframe_container youtube_iframe">
                <iframe width="560" height="315" src="https://www.youtube.com/embed/x1cQfSEXUN8?si=aMwyDCUdUSMhohR_" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowfullscreen />
              </div>
              <ul className="hidden">
                <li>
                  <a href="video" target="_blank" rel="noreferrer">Français</a>
                  {', '}
                  <a href="video" target="_blank" rel="noreferrer">Español</a>
                  {', '}
                  <a href="video" target="_blank" rel="noreferrer">العربية</a>
                  {', '}
                  <a href="video" target="_blank" rel="noreferrer">简体中文</a>
                  {', '}
                  <a href="video" target="_blank" rel="noreferrer">Русский</a>
                  {', '}
                  <a href="video" target="_blank" rel="noreferrer">Português</a>
                  {', '}
                  <a href="video" target="_blank" rel="noreferrer">Kiswahili</a>
                </li>
              </ul>
              <br />
              <h4>Download the report video</h4>
              <ul>
                <li>
                  <a href="https://vimeo.com/872519633" target="_blank" rel="noreferrer">English</a>
                  <div className="hidden">
                    {', '}
                    <a href="video" target="_blank" rel="noreferrer">Français</a>
                    {', '}
                    <a href="video" target="_blank" rel="noreferrer">Español</a>
                    {', '}
                    <a href="video" target="_blank" rel="noreferrer">العربية</a>
                    {', '}
                    <a href="video" target="_blank" rel="noreferrer">简体中文</a>
                    {', '}
                    <a href="video" target="_blank" rel="noreferrer">Русский</a>
                    {', '}
                    <a href="video" target="_blank" rel="noreferrer">Português</a>
                    {', '}
                    <a href="video" target="_blank" rel="noreferrer">Kiswahili</a>
                  </div>
                </li>
              </ul>
              {/*<h4 className="hidden">Watch the press conference</h4>
              <div className="iframe_container youtube_iframe hidden">
                <iframe src="https://www.youtube.com/embed/rUR6isHC8MI" title="Commodities And Development Report Press Conference" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen />
              </div>*/}
            </div>
            <div className="footer_content anchor_podcasts" id="anchor_podcasts">
              <h3>Podcasts</h3>
              <p>Listen to the Weekly Tradecast episodes that explore some of the main issues in the report</p>
              <div className="iframe_container">
                <iframe title="The Weekly Tradecast by UNCTAD" height="150" width="100%" style={{ border: 'none', minWidth: 'min(100%, 430px)' }} scrolling="no" data-name="pb-iframe-player" src="https://www.podbean.com/player-v2/?i=nbgha-14ada72-pb&btn-skin=009EDB&download=1&font-color=000000&fonts=Verdana&from=pb6admin&logo_link=none&rtl=0&share=1&size=240&skin=ffffff" allowFullScreen />
                <span className="text"><a href="/podcast/commodity-conundrum-why-developing-countries-need-add-value-their-exports-raw-materials">Why developing countries need to add value to their exports of raw materials</a></span>
              </div>
              {/* <ul className="podcasts_container">
                <li>
                  <span className="icon" />
                  <span className="text"><a href="/podcast/not-fantastic-when-its-plastic-stemming-tide-ocean-rubbish">Not fantastic when it’s plastic</a></span>
                </li>
                <li>
                  <span className="icon" />
                  <span className="text"><a href="/podcast/sea-trouble-turning-our-ships-green">Sea of trouble</a></span>
                </li>
              </ul> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
