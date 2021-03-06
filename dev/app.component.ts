import {Component} from 'angular2/core';
import {Component1Component} from "./component1.component";
import {Component2Component} from "./component2.component";

@Component({
    selector: 'my-app',
    template: `
        <h1>First component</h1>
        <component-1></component-1>
        <br />
        <br />
        <h1>Second component</h1>
        <component-2></component-2>
    `,
    directives: [Component1Component, Component2Component]
})
export class AppComponent {

}
