interface NxStatic {
  /**
   * Wait element display in document.
   * @param selector
   * @param delay
   * @param callback
   */
  waitToDisplay(selector: string, delay: number, callback: any, timeoutCallback?: any): any;
}
