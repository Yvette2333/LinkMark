import React, { FC } from 'react'
import ReactDom, { createPortal } from 'react-dom'
import PortalProps from './index'
import './index.css'

const ToastPortal:any = ({ el, msg, className }: any) => {
    return createPortal(<div className="toast">
        <div className={`toast-content ${className}`}>
            ToastPortal {msg}
        </div>
    </div>, el)
}

class Toast {
  
    static el: HTMLElement = document.createElement('div');

    static render = (el: HTMLElement): void => {
        document.body.appendChild(el);
        
    }

    static destory = (el: HTMLElement): void => {
        setTimeout(() => {
            // 销毁后，移除元素
            const unmountResult = ReactDom.unmountComponentAtNode(el);
            if (unmountResult && el.parentNode) {
                el.parentNode.removeChild(el);
            }
        },2000)
    }

    static withWarn = (msg: string): PortalProps  => {
        return {
            el: Toast.el, 
            msg,
            className:'toast-warn'
        }
    }

    static withSuccess = (msg: string): PortalProps => {
        return {
            el: Toast.el, 
            msg,
            className:'toast-success'
        }
    }

    static withInfo = (msg: string): PortalProps => {
        return {
            el: Toast.el, 
            msg,
        }
    }

    static info = (msg: string): void => {
        return Toast.toast(Toast.withInfo(msg))
    }

    static success = (msg: string): void => {
        return Toast.toast(Toast.withSuccess(msg))
    }

    static warn = (msg: string): void => {
        return Toast.toast(Toast.withWarn(msg))
    }

    static toast = (props: any): void => {
        Toast.render(Toast.el);
        ReactDom.render(<ToastPortal {...props} />, Toast.el);
        Toast.destory(Toast.el);
    }
    
}
    

export default Toast
