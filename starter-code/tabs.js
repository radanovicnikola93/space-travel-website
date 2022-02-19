const tabList = document.querySelector('[role="tablist"]');
const tabs = tabList.querySelectorAll('[role="tab"]');

// ACCESSIBILITY
tabList.addEventListener('keydown', changeTabFocus);

tabs.forEach((tab) => {
    tab.addEventListener('click', changeTabPanel)
})

// CHANGE TAB FOCUS
let tabFocus = 0;
function changeTabFocus(e) {
    // storing key codes in separate variables
    const keydownLeft = 37;
    const keydownRight = 39;

    // change the tabindex of the current tab to -1
    if (e.keyCode === keydownLeft || e.keyCode === keydownRight) {
        tabs[tabFocus].setAttribute("tabindex", -1);
    }

    // if the right key is pushed, move to the next tab
    if (e.keyCode === keydownRight) {
        tabFocus++;
        if (tabFocus >= tabs.length) {
            tabFocus = 0;
        }
    }

    // if the left key is pushed, move to the previous tab
    if (e.keyCode === keydownLeft) {
        tabFocus--;
        if (tabFocus < 0) {
            tabFocus = tabs.length - 1;
        }
    }

    tabs[tabFocus].setAttribute("tabindex", 0);
    tabs[tabFocus].focus();
}

// CHANGE TAB FOCUS
function changeTabPanel(e) {
    const targetTab = e.target;
    const targetPanel = targetTab.getAttribute("aria-controls")
    const targetImage = targetTab.getAttribute("data-image")
    
    // containers
    const tabContainer = targetTab.parentNode; // tab-list
    const mainContainer = tabContainer.parentNode; // main

    // aria-selected
    tabContainer.querySelector('[aria-selected="true"]').setAttribute("aria-selected", false);
    targetTab.setAttribute("aria-selected", true);
    
    // CONTENT
    hideContent(mainContainer, '[role="tabpanel"]');
    showContent(mainContainer, [`#${targetPanel}`]); // remove hidden attribute on selected targetPanel

    
    // PICTURE
    hideContent(mainContainer, 'picture')
    showContent(mainContainer, [`#${targetImage}`]); // remove hidden attribute on selected targetPanel
}

const hideContent = (parent, content) => {
        parent.querySelectorAll(content).forEach(item => 
        item.setAttribute("hidden", true)
    )
}

const showContent = (parent, target) => {
    parent.querySelector([target]).removeAttribute('hidden');
}