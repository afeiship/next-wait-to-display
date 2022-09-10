interface NxStatic {
  /**
   * Wait element display in document.
   * @param selector The selector to query.
   * @param delay default 100ms
   * @param callback callback function
   * @param timeout 0 means no timeout
   */
  waitToDisplay(selector: string, delay: number, callback: any, times?: number): any;
}
