import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-property-binding',
  //the below {{result}} can be binded from the below @Input or from the [result] in the databinding.component.html
  template: `
    {{result}}
  `,
  styles: [],
  /**Using Input in the method below I can remove importing from Input in the above import. 
   * By setting inputs: [''] I can use the result from the export class without implying it's type. 
   * This is not best practice thou.
   */
   //inputs: ['result']
})
export class PropertyBindingComponent {
  @Input() result: number = 0;
  //result: number = 0;
}
