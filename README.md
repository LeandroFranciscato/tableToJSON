## tableToJSON

This one is a simple JS script that will help you to transform ````table```` tag's on JSON objects.

### Dependencies

<a href="https://github.com/jquery/jquery">jquery</a> is necessary to work with the DOM.

### Install

install with bower (or download it), ````bower install tableToJSON```` and so just include the **tableToJSON.min.js** in your HTML page.
````html
<script src="bin/tableToJSON.min.js" type="text/javascript"></script>
````

### Use

Consider this ````table````:

````html
<table>
    <tr>
        <th>Header 01</th>
        <th>Header 02</th>
        <th>Header 03</th>
        <th>Header 04</th>
    </tr>
    <tr>
        <td name="coluna01">valor 01</td> 
        <td name="coluna02">valor 02</td>
        <td name="coluna03">valor 03</td>
        <td name="coluna04">valor 04</td>
    </tr>
    <tr>
        <td name="coluna01">valor 05</td> 
        <td name="coluna02">valor 06</td>
        <td name="coluna03">valor 07</td>
        <td name="coluna04">valor 08</td>
    </tr>
    <tr>
        <td name="coluna01">valor 09</td> 
        <td name="coluna02">valor 10</td>
        <td name="coluna03">valor 11</td>
        <td name="coluna04">valor 12</td>
    </tr>
    <tr>
        <td name="coluna01">valor 13</td> 
        <td name="coluna02">valor 14</td>
        <td name="coluna03">valor 15</td>
        <td name="coluna04">valor 16</td>
    </tr>
</table>
````

Or this ````Collection````;

````html
<ul>
    <li>
        <div>Header 01</div>
        <div>Header 02</div>
        <div>Header 03</div>
        <div>Header 04</div>
    </li>
    <li>
        <div name="coluna01">valor 01</div> 
        <div name="coluna02">valor 02</div>
        <div name="coluna03">valor 03</div>
        <div name="coluna04">valor 04</div>
    </li>
    <li>
        <div name="coluna01">valor 05</div> 
        <div name="coluna02">valor 06</div>
        <div name="coluna03">valor 07</div>
        <div name="coluna04">valor 08</div>
    </li>
    <li>
        <div name="coluna01">valor 09</div> 
        <div name="coluna02">valor 10</div>
        <div name="coluna03">valor 11</div>
        <div name="coluna04">valor 12</div>
    </li>
    <li>
        <div name="coluna01">valor 13</div> 
        <div name="coluna02">valor 14</div>
        <div name="coluna03">valor 15</div>
        <div name="coluna04">valor 16</td>
    </li>
</ul>
````

And get yours ````<td>```` with this simple js:
````js
var data = tableToJSON("table","tr","td");
var anotherData = tableToJSON("ul","li","div");
````
The output should look like that:
````js
"data":[
   {"coluna01":"valor 01","coluna02":"valor 02","coluna03":"valor 03","coluna04":"valor 04"},
   {"coluna01":"valor 05","coluna02":"valor 06","coluna03":"valor 07","coluna04":"valor 08"},
   {"coluna01":"valor 09","coluna02":"valor 10","coluna03":"valor 11","coluna04":"valor 12"},
   {"coluna01":"valor 13","coluna02":"valor 14","coluna03":"valor 15","coluna04":"valor 16"}
] 
````
### known issues

- Always use the tag ````name```` in yours ````<td>````.

### Authors

* **Leandro Franciscato** - [Acess my GitHub Page](https://github.com/LeandroFranciscato)
