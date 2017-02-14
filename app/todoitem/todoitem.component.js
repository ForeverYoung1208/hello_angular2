"use strict";
var TodoItem = (function () {
    function TodoItem(id, _caption, isDone, duration) {
        this.id = id;
        this._caption = _caption;
        this.isDone = isDone;
        this.duration = duration;
    }
    Object.defineProperty(TodoItem.prototype, "caption", {
        get: function () {
            return this._caption;
        },
        set: function (newCaption) {
            if (newCaption) {
                this._caption = newCaption;
            }
            else {
                console.log("Error: caption can't be empty");
            }
        },
        enumerable: true,
        configurable: true
    });
    ;
    ;
    return TodoItem;
}());
exports.TodoItem = TodoItem;
//# sourceMappingURL=todoitem.component.js.map