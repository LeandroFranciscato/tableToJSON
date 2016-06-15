function tableToJSON(tableId) {
    var table = $(tableId);
    var tr = $(table).find("tr");

    data = [];

    if (tr) {
        for (var i_tr = 1; i_tr < tr.length; i_tr++) {

            var td = $(tr[i_tr]).find("td");

            var fields = {};
            for (var i_td = 0; i_td < td.length; i_td++) {
                if (td[i_td]) {
                    var name_td = $(td[i_td]).attr("name");
                    if (name_td) {
                        fields[name_td] = $(td[i_td]).html();
                    }
                }
            }
            data.push(fields);
        }
        return data;
    }
}