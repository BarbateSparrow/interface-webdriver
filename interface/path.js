const urlPathes = {
  getSession:                   () =>                                `session`,
  executeAsync:                 (sessionId) =>                       `session/${sessionId}/execute/async`,
  executeSync:                  (sessionId) =>                       `session/${sessionId}/execute/sync`,
  windowHandle:                 (sessionId) =>                       `session/${sessionId}/window_handle`,
  windowHandles:                (sessionId) =>                       `session/${sessionId}/window_handles`,
  screenshot:                   (sessionId) =>                       `session/${sessionId}/screenshot`,
  forward:                      (sessionId) =>                       `session/${sessionId}/forward`,
  back:                         (sessionId) =>                       `session/${sessionId}/back`,
  refresh:                      (sessionId) =>                       `session/${sessionId}/refresh`,
  currentSize:                  (sessionId) =>                       `session/${sessionId}/window/current/size`,
  url:                          (sessionId) =>                       `session/${sessionId}/url`,
  click:                        (sessionId, elementId) =>            `session/${sessionId}/element/${elementId}/click`,
  submit:                       (sessionId, elementId) =>            `session/${sessionId}/element/${elementId}/submit`,
  clear:                        (sessionId, elementId) =>            `session/${sessionId}/element/${elementId}/clear`,
  text:                         (sessionId, elementId) =>            `session/${sessionId}/element/${elementId}/text`,
  title:                        (sessionId) =>                       `session/${sessionId}/title`,
  element:                      (sessionId) =>                       `session/${sessionId}/element`,
  elements:                     (sessionId) =>                       `session/${sessionId}/elements`,
  sendKeys:                     (sessionId, elementId) =>            `session/${sessionId}/element/${elementId}/value`,
  killSession:                  (sessionId) =>                       `session/${sessionId}`,
  attribute:                    (sessionId, elementId, attribute) => `session/${sessionId}/element/${elementId}/attribute/${attribute}`,
  moveto:                       (sessionId) =>                       `session/${sessionId}/moveto`,   
  buttonDown:                   (sessionId) =>                       `session/${sessionId}/buttondown`,
  buttonUp:                     (sessionId) =>                       `session/${sessionId}/buttonup`,
  pressKeys:                    (sessionId) =>                       `session/${sessionId}/keys`,
  elementFromElement:           (sessionId, elementId) =>            `session/${sessionId}/element/${elementId}/element`,
  elementsFromElement:          (sessionId, elementId) =>            `session/${sessionId}/element/${elementId}/elements`,
  present:                      (sessionId, elementId) =>            `session/${sessionId}/element/${elementId}/enabled`,
  displayed:                    (sessionId, elementId) =>            `session/${sessionId}/element/${elementId}/displayed`,
  window:                       (sessionId) =>                       `session/${sessionId}/window`,
  timeouts:                     (sessionId) =>                       `session/${sessionId}/timeouts`,
  frame:                        (sessionId) =>                       `session/${sessionId}/frame`
}

module.exports = {
  urlPathes
}