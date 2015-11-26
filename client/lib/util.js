/**
 * Created by bai on 2015/11/25.
 */
Util = {
    modal: function (title, content) {
        $('#modal-title').text(title)
        $('#modal-body').text(content)
        $('#modal').modal()
    }
}