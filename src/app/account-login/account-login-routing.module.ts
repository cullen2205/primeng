import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router'
import {AccountLogin} from './account-login';

@NgModule({
	imports: [
		RouterModule.forChild([
			{path:'login',component: AccountLogin},
		])
	],
	exports: [
		RouterModule
	]
})
export class AccountLoginRoutingModule {}
