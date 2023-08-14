import { NgModule } from "@angular/core";
import { LayoutComponent } from "./layout.component";
import { NavbarComponent } from "./components/navbar/navbar.component";
import { SidebarComponent } from "./components/sidebar/sidebar.component";
import { FooterComponent } from "./components/footer/footer.component";
import { LayoutRoutingModule } from "./layout-routing.module";
import { AngularSvgIconModule } from "angular-svg-icon";
import { HttpClientModule } from "@angular/common/http";
import { CommonModule } from '@angular/common';


@NgModule({
    declarations: [
        LayoutComponent,
        NavbarComponent,
        SidebarComponent,
        FooterComponent
    ],
    imports: [LayoutRoutingModule, AngularSvgIconModule.forRoot(), HttpClientModule, CommonModule],
})


export class LayoutModule { }