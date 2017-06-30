import MobileDetect from 'mobile-detect';
import phoneIcon from './phone.svg';
import './styles.css';

function appendWidget() {
    const rootNode = document.createElement('div');
    rootNode.className = 'ichef-web-widget';
    rootNode.innerHTML = `
        <a href="tel:0227600120" class="ichef-widget-btn" title="致電 iCHEF">
            ${phoneIcon}
        </a>
    `;

    document.body.appendChild(rootNode);
}

const detector = new MobileDetect(navigator.userAgent);

// Hide widget from iPad and desktop browsers
if (detector.mobile() && !detector.is('iPad')) {
    appendWidget();
}
