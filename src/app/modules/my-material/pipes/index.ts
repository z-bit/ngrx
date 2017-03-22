import { NgModule } from '@angular/core';

import { CutAfterPipe } from './cut-after.pipe';
import { ListWithCommasPipe } from './list-with-commas.pipe';

//...

export const PIPES = [
	CutAfterPipe,
	ListWithCommasPipe
	//...
];

@NgModule({
	declarations: PIPES,
	exports: PIPES
})
export class PipesModule {}
