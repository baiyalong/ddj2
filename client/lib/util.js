/**
 * Created by bai on 2015/11/25.
 */
Util = {
    modal: function (title, content) {
        $('#modalTitle').text(title)
        $('#modalContent').text(content)
        $('#modal').modal()
    }
}