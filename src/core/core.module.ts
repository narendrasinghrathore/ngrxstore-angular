import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { ModuleWithProviders } from '@angular/core';
import { GenericHttpService } from './services/generic-http.service';
@NgModule({
  declarations: [],
  imports: [
    HttpClientModule
  ],
  exports: [HttpClientModule]
})
export class CoreModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: CoreModule,
      providers: [
        GenericHttpService
      ]
    };
  }
}
