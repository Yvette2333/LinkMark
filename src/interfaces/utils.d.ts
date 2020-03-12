//函数interface声明
export interface LoadableComponent {
  ():Promise<React.FC>
}

export interface ICodeMessage  {
  [code:number]:string
}