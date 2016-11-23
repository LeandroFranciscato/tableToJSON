function tableToJSON(tagMain) {
    var table = $(tagMain);

    // if tagMain === "table", we will skip the tbody, if tagMain==="ul", we go directly to the "li"s
    if(table.children()[0]==$("tbody")[0]){
        table = $("tbody");
    }

    var tr = table.children();

    var data = [];

    if (tr) {
        for (var i_tr = 0; i_tr < tr.length; i_tr++) {

            var td = $(tr[i_tr]).children();

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