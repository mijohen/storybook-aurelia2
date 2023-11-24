import {bindable} from "aurelia";

export enum LabelSize {
    small = 'small',
    large = 'large',
}

export class Label {
    @bindable() public text = '';
    @bindable() public size: LabelSize = LabelSize.small;
}
