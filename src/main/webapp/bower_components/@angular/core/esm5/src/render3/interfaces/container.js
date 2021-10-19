/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
import { HOST, NEXT, PARENT, QUERIES } from './view';
/**
 * Below are constants for LContainer indices to help us look up LContainer members
 * without having to remember the specific indices.
 * Uglify will inline these when minifying so there shouldn't be a cost.
 */
export var ACTIVE_INDEX = 0;
export var VIEWS = 1;
// PARENT, NEXT, QUERIES, and HOST are indices 2, 3, 4, and 5.
// As we already have these constants in LView, we don't need to re-create them.
export var NATIVE = 6;
export var RENDER_PARENT = 7;
// Because interfaces in TS/JS cannot be instanceof-checked this means that we
// need to rely on predictable characteristics of data-structures to check if they
// are what we expect for them to be. The `LContainer` interface code below has a
// fixed length and the constant value below references that. Using the length value
// below we can predictably gaurantee that we are dealing with an `LContainer` array.
// This value MUST be kept up to date with the length of the `LContainer` array
// interface below so that runtime type checking can work.
export var LCONTAINER_LENGTH = 8;
// Note: This hack is necessary so we don't erroneously get a circular dependency
// failure based on types.
export var unusedValueExportToPlacateAjd = 1;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29udGFpbmVyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vcGFja2FnZXMvY29yZS9zcmMvcmVuZGVyMy9pbnRlcmZhY2VzL2NvbnRhaW5lci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7O0dBTUc7QUFLSCxPQUFPLEVBQUMsSUFBSSxFQUFTLElBQUksRUFBRSxNQUFNLEVBQUUsT0FBTyxFQUFDLE1BQU0sUUFBUSxDQUFDO0FBRzFEOzs7O0dBSUc7QUFDSCxNQUFNLENBQUMsSUFBTSxZQUFZLEdBQUcsQ0FBQyxDQUFDO0FBQzlCLE1BQU0sQ0FBQyxJQUFNLEtBQUssR0FBRyxDQUFDLENBQUM7QUFDdkIsOERBQThEO0FBQzlELGdGQUFnRjtBQUNoRixNQUFNLENBQUMsSUFBTSxNQUFNLEdBQUcsQ0FBQyxDQUFDO0FBQ3hCLE1BQU0sQ0FBQyxJQUFNLGFBQWEsR0FBRyxDQUFDLENBQUM7QUFDL0IsOEVBQThFO0FBQzlFLGtGQUFrRjtBQUNsRixpRkFBaUY7QUFDakYsb0ZBQW9GO0FBQ3BGLHFGQUFxRjtBQUNyRiwrRUFBK0U7QUFDL0UsMERBQTBEO0FBQzFELE1BQU0sQ0FBQyxJQUFNLGlCQUFpQixHQUFHLENBQUMsQ0FBQztBQW9GbkMsaUZBQWlGO0FBQ2pGLDBCQUEwQjtBQUMxQixNQUFNLENBQUMsSUFBTSw2QkFBNkIsR0FBRyxDQUFDLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgR29vZ2xlIEluYy4gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cbiAqXG4gKiBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGUgbGljZW5zZSB0aGF0IGNhbiBiZVxuICogZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBhdCBodHRwczovL2FuZ3VsYXIuaW8vbGljZW5zZVxuICovXG5cbmltcG9ydCB7TFF1ZXJpZXN9IGZyb20gJy4vcXVlcnknO1xuaW1wb3J0IHtSQ29tbWVudCwgUkVsZW1lbnR9IGZyb20gJy4vcmVuZGVyZXInO1xuaW1wb3J0IHtTdHlsaW5nQ29udGV4dH0gZnJvbSAnLi9zdHlsaW5nJztcbmltcG9ydCB7SE9TVCwgTFZpZXcsIE5FWFQsIFBBUkVOVCwgUVVFUklFU30gZnJvbSAnLi92aWV3JztcblxuXG4vKipcbiAqIEJlbG93IGFyZSBjb25zdGFudHMgZm9yIExDb250YWluZXIgaW5kaWNlcyB0byBoZWxwIHVzIGxvb2sgdXAgTENvbnRhaW5lciBtZW1iZXJzXG4gKiB3aXRob3V0IGhhdmluZyB0byByZW1lbWJlciB0aGUgc3BlY2lmaWMgaW5kaWNlcy5cbiAqIFVnbGlmeSB3aWxsIGlubGluZSB0aGVzZSB3aGVuIG1pbmlmeWluZyBzbyB0aGVyZSBzaG91bGRuJ3QgYmUgYSBjb3N0LlxuICovXG5leHBvcnQgY29uc3QgQUNUSVZFX0lOREVYID0gMDtcbmV4cG9ydCBjb25zdCBWSUVXUyA9IDE7XG4vLyBQQVJFTlQsIE5FWFQsIFFVRVJJRVMsIGFuZCBIT1NUIGFyZSBpbmRpY2VzIDIsIDMsIDQsIGFuZCA1LlxuLy8gQXMgd2UgYWxyZWFkeSBoYXZlIHRoZXNlIGNvbnN0YW50cyBpbiBMVmlldywgd2UgZG9uJ3QgbmVlZCB0byByZS1jcmVhdGUgdGhlbS5cbmV4cG9ydCBjb25zdCBOQVRJVkUgPSA2O1xuZXhwb3J0IGNvbnN0IFJFTkRFUl9QQVJFTlQgPSA3O1xuLy8gQmVjYXVzZSBpbnRlcmZhY2VzIGluIFRTL0pTIGNhbm5vdCBiZSBpbnN0YW5jZW9mLWNoZWNrZWQgdGhpcyBtZWFucyB0aGF0IHdlXG4vLyBuZWVkIHRvIHJlbHkgb24gcHJlZGljdGFibGUgY2hhcmFjdGVyaXN0aWNzIG9mIGRhdGEtc3RydWN0dXJlcyB0byBjaGVjayBpZiB0aGV5XG4vLyBhcmUgd2hhdCB3ZSBleHBlY3QgZm9yIHRoZW0gdG8gYmUuIFRoZSBgTENvbnRhaW5lcmAgaW50ZXJmYWNlIGNvZGUgYmVsb3cgaGFzIGFcbi8vIGZpeGVkIGxlbmd0aCBhbmQgdGhlIGNvbnN0YW50IHZhbHVlIGJlbG93IHJlZmVyZW5jZXMgdGhhdC4gVXNpbmcgdGhlIGxlbmd0aCB2YWx1ZVxuLy8gYmVsb3cgd2UgY2FuIHByZWRpY3RhYmx5IGdhdXJhbnRlZSB0aGF0IHdlIGFyZSBkZWFsaW5nIHdpdGggYW4gYExDb250YWluZXJgIGFycmF5LlxuLy8gVGhpcyB2YWx1ZSBNVVNUIGJlIGtlcHQgdXAgdG8gZGF0ZSB3aXRoIHRoZSBsZW5ndGggb2YgdGhlIGBMQ29udGFpbmVyYCBhcnJheVxuLy8gaW50ZXJmYWNlIGJlbG93IHNvIHRoYXQgcnVudGltZSB0eXBlIGNoZWNraW5nIGNhbiB3b3JrLlxuZXhwb3J0IGNvbnN0IExDT05UQUlORVJfTEVOR1RIID0gODtcblxuLyoqXG4gKiBUaGUgc3RhdGUgYXNzb2NpYXRlZCB3aXRoIGEgY29udGFpbmVyLlxuICpcbiAqIFRoaXMgaXMgYW4gYXJyYXkgc28gdGhhdCBpdHMgc3RydWN0dXJlIGlzIGNsb3NlciB0byBMVmlldy4gVGhpcyBoZWxwc1xuICogd2hlbiB0cmF2ZXJzaW5nIHRoZSB2aWV3IHRyZWUgKHdoaWNoIGlzIGEgbWl4IG9mIGNvbnRhaW5lcnMgYW5kIGNvbXBvbmVudFxuICogdmlld3MpLCBzbyB3ZSBjYW4ganVtcCB0byB2aWV3T3JDb250YWluZXJbTkVYVF0gaW4gdGhlIHNhbWUgd2F5IHJlZ2FyZGxlc3NcbiAqIG9mIHR5cGUuXG4gKi9cbmV4cG9ydCBpbnRlcmZhY2UgTENvbnRhaW5lciBleHRlbmRzIEFycmF5PGFueT4ge1xuICAvKipcbiAgICogVGhlIG5leHQgYWN0aXZlIGluZGV4IGluIHRoZSB2aWV3cyBhcnJheSB0byByZWFkIG9yIHdyaXRlIHRvLiBUaGlzIGhlbHBzIHVzXG4gICAqIGtlZXAgdHJhY2sgb2Ygd2hlcmUgd2UgYXJlIGluIHRoZSB2aWV3cyBhcnJheS5cbiAgICogSW4gdGhlIGNhc2UgdGhlIExDb250YWluZXIgaXMgY3JlYXRlZCBmb3IgYSBWaWV3Q29udGFpbmVyUmVmLFxuICAgKiBpdCBpcyBzZXQgdG8gbnVsbCB0byBpZGVudGlmeSB0aGlzIHNjZW5hcmlvLCBhcyBpbmRpY2VzIGFyZSBcImFic29sdXRlXCIgaW4gdGhhdCBjYXNlLFxuICAgKiBpLmUuIHByb3ZpZGVkIGRpcmVjdGx5IGJ5IHRoZSB1c2VyIG9mIHRoZSBWaWV3Q29udGFpbmVyUmVmIEFQSS5cbiAgICovXG4gIFtBQ1RJVkVfSU5ERVhdOiBudW1iZXI7XG5cbiAgLyoqXG4gICAqIEEgbGlzdCBvZiB0aGUgY29udGFpbmVyJ3MgY3VycmVudGx5IGFjdGl2ZSBjaGlsZCB2aWV3cy4gVmlld3Mgd2lsbCBiZSBpbnNlcnRlZFxuICAgKiBoZXJlIGFzIHRoZXkgYXJlIGFkZGVkIGFuZCBzcGxpY2VkIGZyb20gaGVyZSB3aGVuIHRoZXkgYXJlIHJlbW92ZWQuIFdlIG5lZWRcbiAgICogdG8ga2VlcCBhIHJlY29yZCBvZiBjdXJyZW50IHZpZXdzIHNvIHdlIGtub3cgd2hpY2ggdmlld3MgYXJlIGFscmVhZHkgaW4gdGhlIERPTVxuICAgKiAoYW5kIGRvbid0IG5lZWQgdG8gYmUgcmUtYWRkZWQpIGFuZCBzbyB3ZSBjYW4gcmVtb3ZlIHZpZXdzIGZyb20gdGhlIERPTSB3aGVuIHRoZXlcbiAgICogYXJlIG5vIGxvbmdlciByZXF1aXJlZC5cbiAgICovXG4gIFtWSUVXU106IExWaWV3W107XG5cbiAgLyoqXG4gICAqIEFjY2VzcyB0byB0aGUgcGFyZW50IHZpZXcgaXMgbmVjZXNzYXJ5IHNvIHdlIGNhbiBwcm9wYWdhdGUgYmFja1xuICAgKiB1cCBmcm9tIGluc2lkZSBhIGNvbnRhaW5lciB0byBwYXJlbnRbTkVYVF0uXG4gICAqL1xuICBbUEFSRU5UXTogTFZpZXd8bnVsbDtcblxuICAvKipcbiAgICogVGhpcyBhbGxvd3MgdXMgdG8ganVtcCBmcm9tIGEgY29udGFpbmVyIHRvIGEgc2libGluZyBjb250YWluZXIgb3IgY29tcG9uZW50XG4gICAqIHZpZXcgd2l0aCB0aGUgc2FtZSBwYXJlbnQsIHNvIHdlIGNhbiByZW1vdmUgbGlzdGVuZXJzIGVmZmljaWVudGx5LlxuICAgKi9cbiAgW05FWFRdOiBMVmlld3xMQ29udGFpbmVyfG51bGw7XG5cbiAgLyoqXG4gICAqIFF1ZXJpZXMgYWN0aXZlIGZvciB0aGlzIGNvbnRhaW5lciAtIGFsbCB0aGUgdmlld3MgaW5zZXJ0ZWQgdG8gLyByZW1vdmVkIGZyb21cbiAgICogdGhpcyBjb250YWluZXIgYXJlIHJlcG9ydGVkIHRvIHF1ZXJpZXMgcmVmZXJlbmNlZCBoZXJlLlxuICAgKi9cbiAgW1FVRVJJRVNdOiBMUXVlcmllc3xudWxsO1xuXG4gIC8qKlxuICAgKiBUaGUgaG9zdCBlbGVtZW50IG9mIHRoaXMgTENvbnRhaW5lci5cbiAgICpcbiAgICogVGhlIGhvc3QgY291bGQgYmUgYW4gTFZpZXcgaWYgdGhpcyBjb250YWluZXIgaXMgb24gYSBjb21wb25lbnQgbm9kZS5cbiAgICogSW4gdGhhdCBjYXNlLCB0aGUgY29tcG9uZW50IExWaWV3IGlzIGl0cyBIT1NULlxuICAgKlxuICAgKiBJdCBjb3VsZCBhbHNvIGJlIGEgc3R5bGluZyBjb250ZXh0IGlmIHRoaXMgaXMgYSBub2RlIHdpdGggYSBzdHlsZS9jbGFzc1xuICAgKiBiaW5kaW5nLlxuICAgKi9cbiAgW0hPU1RdOiBSRWxlbWVudHxSQ29tbWVudHxTdHlsaW5nQ29udGV4dHxMVmlldztcblxuICAvKiogVGhlIGNvbW1lbnQgZWxlbWVudCB0aGF0IHNlcnZlcyBhcyBhbiBhbmNob3IgZm9yIHRoaXMgTENvbnRhaW5lci4gKi9cbiAgW05BVElWRV06IFJDb21tZW50O1xuXG4gIC8qKlxuICAgKiBQYXJlbnQgRWxlbWVudCB3aGljaCB3aWxsIGNvbnRhaW4gdGhlIGxvY2F0aW9uIHdoZXJlIGFsbCBvZiB0aGUgdmlld3Mgd2lsbCBiZVxuICAgKiBpbnNlcnRlZCBpbnRvIHRvLlxuICAgKlxuICAgKiBJZiBgcmVuZGVyUGFyZW50YCBpcyBgbnVsbGAgaXQgaXMgaGVhZGxlc3MuIFRoaXMgbWVhbnMgdGhhdCBpdCBpcyBjb250YWluZWRcbiAgICogaW4gYW5vdGhlciB2aWV3IHdoaWNoIGluIHR1cm4gaXMgY29udGFpbmVkIGluIGFub3RoZXIgY29udGFpbmVyIGFuZFxuICAgKiB0aGVyZWZvcmUgaXQgZG9lcyBub3QgeWV0IGhhdmUgaXRzIG93biBwYXJlbnQuXG4gICAqXG4gICAqIElmIGByZW5kZXJQYXJlbnRgIGlzIG5vdCBgbnVsbGAgdGhlbiBpdCBtYXkgYmU6XG4gICAqIC0gc2FtZSBhcyBgdENvbnRhaW5lck5vZGUucGFyZW50YCBpbiB3aGljaCBjYXNlIGl0IGlzIGp1c3QgYSBub3JtYWwgY29udGFpbmVyLlxuICAgKiAtIGRpZmZlcmVudCBmcm9tIGB0Q29udGFpbmVyTm9kZS5wYXJlbnRgIGluIHdoaWNoIGNhc2UgaXQgaGFzIGJlZW4gcmUtcHJvamVjdGVkLlxuICAgKiAgIEluIG90aGVyIHdvcmRzIGB0Q29udGFpbmVyTm9kZS5wYXJlbnRgIGlzIGxvZ2ljYWwgcGFyZW50IHdoZXJlIGFzXG4gICAqICAgYHRDb250YWluZXJOb2RlLnByb2plY3RlZFBhcmVudGAgaXMgcmVuZGVyIHBhcmVudC5cbiAgICpcbiAgICogV2hlbiB2aWV3cyBhcmUgaW5zZXJ0ZWQgaW50byBgTENvbnRhaW5lcmAgdGhlbiBgcmVuZGVyUGFyZW50YCBpczpcbiAgICogLSBgbnVsbGAsIHdlIGFyZSBpbiBhIHZpZXcsIGtlZXAgZ29pbmcgdXAgYSBoaWVyYXJjaHkgdW50aWwgYWN0dWFsXG4gICAqICAgYHJlbmRlclBhcmVudGAgaXMgZm91bmQuXG4gICAqIC0gbm90IGBudWxsYCwgdGhlbiB1c2UgdGhlIGBwcm9qZWN0ZWRQYXJlbnQubmF0aXZlYCBhcyB0aGUgYFJFbGVtZW50YCB0byBpbnNlcnRcbiAgICogdmlld3MgaW50by5cbiAgICovXG4gIFtSRU5ERVJfUEFSRU5UXTogUkVsZW1lbnR8bnVsbDtcbn1cblxuLy8gTm90ZTogVGhpcyBoYWNrIGlzIG5lY2Vzc2FyeSBzbyB3ZSBkb24ndCBlcnJvbmVvdXNseSBnZXQgYSBjaXJjdWxhciBkZXBlbmRlbmN5XG4vLyBmYWlsdXJlIGJhc2VkIG9uIHR5cGVzLlxuZXhwb3J0IGNvbnN0IHVudXNlZFZhbHVlRXhwb3J0VG9QbGFjYXRlQWpkID0gMTtcbiJdfQ==