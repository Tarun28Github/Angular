import { Routes } from '@angular/router';
import { AddEmployeeComponent } from './components/add-employee/add-employee.component';
import { GetApiComponent } from './components/apiIntegration/get-api/get-api.component';
import { PutApiComponent } from './components/apiIntegration/post-api/put-api.component';
import { PutDeleteApiComponent } from './components/apiIntegration/put-delete-api/put-delete-api.component';
import { ForSwitchComponent } from './components/controlFlow/for-switch/for-switch.component';
import { IfElseComponent } from './components/controlFlow/if-else/if-else.component';
import { DataBindingComponent } from './components/data-binding/data-binding.component';
import { AttributeDirectiveComponent } from './components/directive/attribute-directive/attribute-directive.component';
import { StructuralDirectiveComponent } from './components/directive/structural-directive/structural-directive.component';
import { ReactiveFromValidationComponent } from './components/form/reactive-from-validation/reactive-from-validation.component';
import { TemplateFormValidationComponent } from './components/form/template-form-validation/template-form-validation.component';
import { NewComponentComponent } from './components/new-component/new-component.component';
import { PipeComponent } from './components/pipe/pipe.component';

export const routes: Routes = [
    {
        path : 'add_employee',
        component : AddEmployeeComponent
    },
    {
        path : 'new_component',
        component : NewComponentComponent
    },
    {
        path : 'if_else',
        component : IfElseComponent
    },
    {
        path : 'for_switch',
        component : ForSwitchComponent
    },
    {
        path : 'data_binding',
        component : DataBindingComponent
    },
    {
        path : 'attribute_directive',
        component : AttributeDirectiveComponent
    },
    {
        path : 'structural_directive',
        component : StructuralDirectiveComponent
    },
    {
        path : 'reactive_form',
        component : ReactiveFromValidationComponent
    },
    {
        path : 'template_form',
        component : TemplateFormValidationComponent
    },
    {
        path : 'pipe',
        component : PipeComponent
    },
    {
        path : 'get_api',
        component : GetApiComponent
    },
    {
        path : 'post_api',
        component: PutApiComponent
    },
    {
        path : 'put_delete_api',
        component : PutDeleteApiComponent
    }
];
