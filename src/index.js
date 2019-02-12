import _ from "lodash";
import "./style.css"
import Icon from "./agent.png";
import data from "./data.xml";

const component = () => {
    const [a, b, ...c] = [1, 2,3,4,5,6];
    var element = document.createElement('div');

    // Lodash（目前通过一个 script 脚本引入）对于执行这一行是必需的
    element.innerHTML = _.join(['Hello', 'webpack'], ' ');
    element.classList.add('hello');

    var myIcon = new Image();
    myIcon.src = Icon;

    element.appendChild(myIcon);
    console.log(data);

    return element;
};

document.body.appendChild(component());