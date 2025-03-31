chrome.sidePanel
  .setPanelBehavior({
    openPanelOnActionClick: true,
  })
  .catch((e) => console.error(e));

chrome.tabs.onUpdated.addListener(async (tabId, changeInfo, tab) => {
  if (changeInfo && changeInfo.status == "complete") {
    await chrome.sidePanel.setOptions({
      tabId,
      enabled: true,
    });
  }
});
