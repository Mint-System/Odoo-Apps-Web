odoo.define("web_editor_show_code.editor", function (require) {
    "use strict"

    var Wysiwyg = require('web_editor.wysiwyg')
    Wysiwyg.include({
        _editorOptions: function () {
            var options = this._super()

            // odoo/addons/web_editor/static/src/js/backend/field_html.js
            var toolbar = options.toolbar || options.airPopover || {};
            options.codeview = true;
            var view = _.find(toolbar, function (item) {
                return item[0] === 'view';
            });
            if (view) {
                if (!view[1].includes('codeview')) {
                    view[1].splice(-1, 0, 'codeview');
                }
            } else {
                toolbar.splice(-1, 0, ['view', ['codeview']]);
            }

            return options
        },
    })

})
