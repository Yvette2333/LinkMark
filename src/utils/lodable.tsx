import React, { FunctionComponent} from 'react';
import loadable from '@loadable/component';
import { LoadableComponent } from '@/interfaces/utils';
import PageLoading from '@/components/PageLoading';


export default (component:LoadableComponent):FunctionComponent =>  loadable(component, {
  fallback:<PageLoading/>
})