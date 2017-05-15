import React, { Component } from 'react';
import { Util } from '../../../utils/Util';
import { AniX, CssX } from '../../../../../dist/cjs';
import './Demo6.css';

export class Demo6 extends Component {

    code = `
 /** css style
.ani1 {
    background-color: #ff0000 !important;
    border-radius: 100%;
    transform: translate3d(300px, 0, 0) rotateY(720deg) scale(1.5);
    -webkit-transform: translate3d(300px, 0, 0) rotateY(720deg) scale(1.5);
    -ms-transform: translate3d(300px, 0, 0) rotateY(720deg) scale(1.5);
}
*/

animation(rect){
  AniX.to(rect, 1, { "className": "ani1" });
}
`;

    animation() {
        CssX.removeClass(this.refs.rect, "ani1");
        AniX.fromTo(this.refs.rect, 1,
            { "className": "ani0" },
            { "className": "ani1" }
        );
    }


    render() {
        return (
            <div>
                <h4 id="demo6">use className</h4>
                <button className="pointer btn btn-primary" onClick={this.animation.bind(this)}>click animate</button>

                <div className="rect" ref="rect"></div>
                <pre><code className="javascript">{this.code}</code></pre>
            </div>
        );
    }
}