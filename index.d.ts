interface NxStatic {
  /**
   * Wait element display in document.
   * @param selector The selector to query.
   * @param delay default 100ms.
   * @param callback callback function.
   * @param times Times.
   */
  waitToDisplay(selector: string, delay: number, callback: any, times?: number): any;
}
