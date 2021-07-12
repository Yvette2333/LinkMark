/*
 * @File: 
 * @Author: yvette <yvette@douyu.tv>
 * @Date: 2020-09-07 20:01:47
 * @LastEditBy: yvette <yvette@douyu.tv>
 * @LastEditTime: 2020-10-20 10:48:05
 */
// declare module 'IToast' {
    export interface ToastPortalProps {
        msg?: string;
        el?: HTMLElement;
        className?: string; 
    }
    
    export interface PortalProps {
        el: HTMLElement;
        msg: string;
        className?: string;
    }
// }
