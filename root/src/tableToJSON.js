function tableToJSON(tagMain, tagItem, tagField) {
    var table = $(tagMain);
    var data = [];
    if(tagMain == "table" ){
	var headerTag = "th";
        
    }else{
	var headerTag = tagItem+":firstchild "+tagField;
    }

    th = $(table).find(headerTag);
	var fields = {};
	for(var i_th = 0; i_th < th.length;i_th++){
		var name_th = $(th[i_th]).attr("name");
		fields[name_th] = $(th[i_th]).html();
	}
        data.push(fields);
	


    var tr = $(table).find(tagItem);
    
    
    if (tr) {
        for (var i_tr = 1; i_tr < tr.length; i_tr++) {
            var td = $(tr[i_tr]).find(tagField);

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