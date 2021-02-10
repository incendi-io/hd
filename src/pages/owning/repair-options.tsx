import React from 'react'
import { Button } from 'react-bootstrap'
import Col from 'react-bootstrap/cjs/Col'
import Row from 'react-bootstrap/cjs/Row'

import Breadcrumbs from '~components/Breadcrumbs'
import Layout from '~components/Layout'

const RepairOptionsPage = (): React.ReactElement => {
  return (
    <Layout>
      {/*<div className="component row-splitter  is-bg-img"*/}
      {/*     style="background-image: url(&quot;https://sdi-sc-prod-cd-cdn.azureedge.net/-/media/project/hdweb/public/owning/repair-options/repair-options-bg-lrg.jpg?rev=5c69612163ff41508332b72f2abe788d&quot;);">*/}
      {/*  <div className="container">*/}
      {/*    <div className="row">*/}

      {/*      <div*/}
      {/*        className="component image file-type-icon-media-link col-12 col-md-7 col-lg-5 offset-md-0 offset-lg-1 pb-0 indent-top">*/}
      {/*        <div className="component-content">*/}
      {/*          <a title="Repair Options Header" href="#"><img*/}
      {/*            src="https://sdi-sc-prod-cd-cdn.azureedge.net/-/media/project/hdweb/public/owning/repair-options/repair-options-header-wshdw.png?h=250&amp;w=833&amp;rev=920746a1b9a441fc90417e81815db1a3&amp;hash=926B98DD744B351CA9A3884BC42F6B82"*/}
      {/*            vspace="40px" alt="Reapir Options - Longer Life - Max Value" width="833" height="250"*/}
      {/*            data-variantitemid="{D190CE0D-BFB3-40AC-8341-B2952899B758}" data-variantfieldname="Image"*/}
      {/*            style="margin: 40pxpx 0px"></a><span className="image-caption field-imagecaption"></span></div>*/}
      {/*      </div>*/}

      {/*      <div className="component video col-12 col-md-5 indent-bottom video-small initialized"*/}
      {/*           data-properties="{&quot;enableKeyboard&quot;:&quot;true&quot;,&quot;pluginPath&quot;:&quot;https://sdi-sc-prod-cd-cdn.azureedge.net/-/media/base-themes/core-libraries/other/&quot;,&quot;name&quot;:&quot;Movie&quot;,&quot;completedTime&quot;:&quot;null&quot;}">*/}

      {/*        <div className="component-content">*/}
      {/*          <div className="sxa-video-wrapper">*/}
      {/*            <span className="mejs-offscreen">Video Player</span>*/}
      {/*            <div id="mep_0" className="mejs-container mejs-container-keyboard-inactive mejs-video" tabIndex="0"*/}
      {/*                 role="application" aria-label="Video Player"*/}
      {/*                 style="width: 389.156px; height: 218.9px; min-width: 217px;">*/}
      {/*              <div className="mejs-inner">*/}
      {/*                <div className="mejs-mediaelement">*/}
      {/*                  <mediaelementwrapper id="mejs_5044870383546953">*/}
      {/*                    <div id="mejs_5044870383546953-iframe-overlay" className="mejs-iframe-overlay"></div>*/}
      {/*                    <iframe id="mejs_5044870383546953_youtube_iframe" frameBorder="0" allowFullScreen="1"*/}
      {/*                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"*/}
      {/*                            title="YouTube video player"*/}
      {/*                            src="https://www.youtube.com/embed/HSGW-xMJIAo?controls=0&amp;rel=0&amp;disablekb=1&amp;showinfo=0&amp;modestbranding=0&amp;html5=1&amp;iv_load_policy=3&amp;autoplay=0&amp;end=0&amp;loop=0&amp;playsinline=0&amp;start=0&amp;nocookie=false&amp;enablejsapi=1&amp;origin=https%3A%2F%2Fwww.hastingsdeering.com.au&amp;widgetid=1"*/}
      {/*                            width="389.156" height="218.90025"></iframe>*/}
      {/*                    <video style="width: 100%; height: 100%; display: none;" preload="none" poster=""*/}
      {/*                           id="mejs_5044870383546953_from_mejs" src="https://www.youtube.com/watch?v=HSGW-xMJIAo"*/}
      {/*                           className="xa-initialized">*/}
      {/*                      <source type="video/youtube" src="//www.youtube.com/watch?v=HSGW-xMJIAo">*/}
      {/*                        <object type="application/x-shockwave-flash"*/}
      {/*                                data="https://sdi-sc-prod-cd-cdn.azureedge.net/-/media/base-themes/core-libraries/other/flashmediaelement.swf?rev=3822f871ca784593bb9ec725d3737f33">*/}
      {/*                          <param name="movie"*/}
      {/*                                 value="https://sdi-sc-prod-cd-cdn.azureedge.net/-/media/base-themes/core-libraries/other/flashmediaelement.swf?rev=3822f871ca784593bb9ec725d3737f33">*/}
      {/*                            <param name="flashvars" value="controls=true&amp;poster=&amp;file=">*/}
      {/*                        </object>*/}
      {/*                    </video>*/}
      {/*                  </mediaelementwrapper>*/}
      {/*                </div>*/}
      {/*                <div className="mejs-layers">*/}
      {/*                  <div className="mejs-poster mejs-layer" style="display: none; width: 100%; height: 100%;"></div>*/}
      {/*                  <div className="mejs-overlay mejs-layer" style="width: 100%; height: 100%; display: none;">*/}
      {/*                    <div className="mejs-overlay-loading"><span className="mejs-overlay-loading-bg-img"></span>*/}
      {/*                    </div>*/}
      {/*                  </div>*/}
      {/*                  <div className="mejs-overlay mejs-layer" style="display: none; width: 100%; height: 100%;">*/}
      {/*                    <div className="mejs-overlay-error"></div>*/}
      {/*                  </div>*/}
      {/*                  <div className="mejs-overlay mejs-layer mejs-overlay-play"*/}
      {/*                       style="display: none; width: 100%; height: 100%;">*/}
      {/*                    <div className="mejs-overlay-button" role="button" tabIndex="0" aria-label="Play"*/}
      {/*                         aria-pressed="false"></div>*/}
      {/*                  </div>*/}
      {/*                </div>*/}
      {/*                <div className="mejs-controls">*/}
      {/*                  <div className="mejs-button mejs-playpause-button mejs-play">*/}
      {/*                    <button type="button" aria-controls="mep_0" title="Play" aria-label="Play"*/}
      {/*                            tabIndex="0"></button>*/}
      {/*                  </div>*/}
      {/*                  <div className="mejs-time mejs-currenttime-container" role="timer" aria-live="off"><span*/}
      {/*                    className="mejs-currenttime">00:00</span></div>*/}
      {/*                  <div className="mejs-time-rail"><span className="mejs-time-total mejs-time-slider"><span*/}
      {/*                    className="mejs-time-buffering" style="display: none;"></span><span*/}
      {/*                    className="mejs-time-loaded"></span><span className="mejs-time-current"*/}
      {/*                                                              style="transform: scaleX(0);"></span><span*/}
      {/*                    className="mejs-time-hovered no-hover" pos="123.875"*/}
      {/*                    style="left: 0px; transform: scaleX(0.716625);"></span><span className="mejs-time-handle"*/}
      {/*                                                                                 style="transform: translateX(0px);"><span*/}
      {/*                    className="mejs-time-handle-content"></span></span><span className="mejs-time-float"*/}
      {/*                                                                             style="display: none; left: 123.875px;"><span*/}
      {/*                    className="mejs-time-float-current">01:09</span><span*/}
      {/*                    className="mejs-time-float-corner"></span></span></span></div>*/}
      {/*                  <div className="mejs-time mejs-duration-container"><span className="mejs-duration">01:37</span>*/}
      {/*                  </div>*/}
      {/*                  <div className="mejs-button mejs-volume-button mejs-mute">*/}
      {/*                    <button type="button" aria-controls="mep_0" title="Mute" aria-label="Mute"*/}
      {/*                            tabIndex="0"></button>*/}
      {/*                    <a href="javascript:void(0);" className="mejs-volume-slider" aria-label="Volume Slider"*/}
      {/*                       aria-valuemin="0" aria-valuemax="100" role="slider" aria-orientation="vertical"*/}
      {/*                       aria-valuenow="80" aria-valuetext="80%"><span className="mejs-offscreen">Use Up/Down Arrow keys to increase or decrease volume.</span>*/}
      {/*                      <div className="mejs-volume-total">*/}
      {/*                        <div className="mejs-volume-current" style="bottom: 0px; height: 80%;"></div>*/}
      {/*                        <div className="mejs-volume-handle" style="bottom: 80%; margin-bottom: -3px;"></div>*/}
      {/*                      </div>*/}
      {/*                    </a></div>*/}
      {/*                  <div className="mejs-button mejs-fullscreen-button">*/}
      {/*                    <button type="button" aria-controls="mep_0" title="Fullscreen" aria-label="Fullscreen"*/}
      {/*                            tabIndex="0"></button>*/}
      {/*                  </div>*/}
      {/*                </div>*/}
      {/*              </div>*/}
      {/*            </div>*/}
      {/*            <div className="video-init" style="display: none;"></div>*/}
      {/*          </div>*/}
      {/*          <div className="video-caption">*/}

      {/*          </div>*/}
      {/*          <div className="video-description">*/}

      {/*          </div>*/}
      {/*        </div>*/}

      {/*      </div>*/}

      {/*    </div>*/}
      {/*  </div>*/}
      {/*</div>*/}
      <div className="component row-splitter ">
        <div className="container">
          <Row>
            <Col xs={12} sm={12} md={12} lg={12} className="component navigation-title initialized">
              <Breadcrumbs
                list={[
                  {
                    title: 'Owning',
                    url: '/owning',
                  },
                  {
                    title: 'Your Hastings Deering',
                    url: '/owning/your-hastings-deering',
                  },
                ]}
              />
            </Col>
          </Row>
          <Row>
            <Col md={8} lg={8} className="component rich-text">
              <div className="component-content">
                <h2>ACCESS YOUR PORTAL</h2>
                <p>
                  <em>your.hastingsdeering.com.au</em> is your online portal for fleet, operations
                  and financial management. Access the portal on any device, anywhere, anytime, to
                  manage your assets, financial and parts transaction data. You will also experience
                  direct access to Cat digital solutions such as Parts.Cat.Com and SIS Web with a
                  single sign-in.
                </p>
                <Button variant="primary" className="hd-btn">
                  <a
                    rel="noopener noreferrer"
                    href="https://your.hastingsdeering.com.au"
                    target="_blank">
                    ENTER PORTAL
                  </a>
                </Button>
              </div>
            </Col>
            <Col md={4} lg={4} className="component rich-text">
              <div className="component-content">
                <p className="text-center">
                  <img
                    alt="Your hastings Deering Customer Portal"
                    src="/images/customerportal.png"
                    height={200}
                  />
                </p>
              </div>
            </Col>
          </Row>
        </div>
      </div>
      <div className="component row-splitter container-dark-background">
        <div className="container container-dark-background">
          <Row>
            <Col
              xs={12}
              sm={12}
              md={12}
              lg={12}
              className="component navigation-title initialized justify-content-center d-flex"></Col>
          </Row>
        </div>
      </div>
      <div className="component row-splitter container-gray-background">
        <div className="container container-gray-background">
          <Row>
            <Col
              xs={12}
              sm={12}
              md={12}
              lg={12}
              className="component rich-text justify-content-center d-flex">
              <div className="component-content">
                <h2 className="text-center">YOUR PORTAL ROLES</h2>
                <p>
                  The portal has 4 different roles which unlock separate areas of information.
                  <br />
                  Multiple roles can be requested to give you the customised views you need.
                </p>
              </div>
            </Col>
          </Row>
        </div>
      </div>
      <div />
      <div className="component row-splitter ">
        <div className="container">
          <Row>
            <Col
              xs={12}
              md={{ span: 8, offset: 2 }}
              lg={{ span: 8, offset: 2 }}
              className="component rich-text position-center">
              <div className="component-content">
                <h3>CONNECTING YOUR ASSETS</h3>
                <p>
                  Put yourself in position to hear the story your machines are trying to tell you -
                  their health, utilisation, location and hours. We have the experience and
                  expertise to get you connected.
                </p>
                <Button
                  as="a"
                  variant="primary"
                  className="hd-btn d-inline-flex align-items-center"
                  href="/buying/visionlink-daily">
                  LEARN HOW
                </Button>
              </div>
            </Col>
          </Row>
        </div>
      </div>
      <div className="component row-splitter ">
        <div className="container">
          <Row>
            <Col xs={12} className="component rich-text">
              <div className="component-content">
                <div className="my-4 text-center">
                  <p className="h4 text-secondary pb-0 mb-0">
                    Have a question about Your Hastings Deering?
                  </p>
                  <p className="h4 text-secondary text-uppercase mt-3">
                    View Our{' '}
                    <a
                      rel="noopener noreferrer"
                      href="https://support.digital-dealers.com/hc/en-us"
                      target="_blank">
                      Support Page
                    </a>
                  </p>
                </div>
              </div>
            </Col>
          </Row>
        </div>
      </div>
    </Layout>
  )
}

export default RepairOptionsPage
