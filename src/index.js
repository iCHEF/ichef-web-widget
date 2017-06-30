import MobileDetect from 'mobile-detect';
import phoneIcon from './phone.svg';
import './styles.css';

function appendWidget({ phone, tooltip = '' } = {}) {
    if (!phone) {
        console.warn('Cannot create widget without phone.');
        return;
    }

    const rootNode = document.createElement('div');
    rootNode.className = 'ichef-web-widget';
    rootNode.innerHTML = `
        <a href="tel:${phone}" class="ichef-widget-btn" title="${tooltip}">
            ${phoneIcon}
        </a>
    `;

    document.body.appendChild(rootNode);
}

window.iCHEFWidget = {
    init: (options = {}) => {
        const detector = new MobileDetect(navigator.userAgent);

        // Hide widget from iPad and desktop browsers
        if (detector.mobile() && !detector.is('iPad')) {
            appendWidget(options);
        }
    },
};
