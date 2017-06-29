import phoneIcon from './phone.svg';
import './styles.css';

const rootNode = document.createElement('div');
rootNode.className = 'ichef-web-widget';
rootNode.innerHTML = `
    <a href="tel:0227600120" title="致電 iCHEF">
        ${phoneIcon}
    </a>
`;

document.body.appendChild(rootNode);
