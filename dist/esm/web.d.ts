import { WebPlugin } from '@capacitor/core';
import type { InAppBrowserPlugin, OpenOptions, OpenWebViewOptionsWithUrl, OpenWebViewOptionsWithHtmlString } from './definitions';
export declare class InAppBrowserWeb extends WebPlugin implements InAppBrowserPlugin {
    open(options: OpenOptions): Promise<any>;
    clearCookies(): Promise<any>;
    openWebView(options: OpenWebViewOptionsWithUrl): Promise<any>;
    openWebViewWithHTML(options: OpenWebViewOptionsWithHtmlString): Promise<any>;
    close(): Promise<any>;
    setUrl(options: {
        url: string;
    }): Promise<any>;
    reload(): Promise<any>;
}
