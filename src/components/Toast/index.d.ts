/*
 * @File: 
 * @Author: yvette <yvette@douyu.tv>
 * @Date: 2020-09-07 16:41:21
 * @LastEditBy: yvette <yvette@douyu.tv>
 * @LastEditTime: 2020-09-07 19:59:42
 */
export type ToastPortalProps = {
    msg?: string;
    el?: HTMLElement;
}

export interface PortalProps {
    el: HTMLElement;
    msg: string;
    className?: string;
}